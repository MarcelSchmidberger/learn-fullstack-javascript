import React from 'react';
import Header from './Header';
import ContestList from './ContestList';
import PropTypes from 'prop-types';
import Contest from './Contest';
import * as api from '../api';

const pushState = (obj, url) =>
    window.history.pushState(obj, '', url); // see here https://developer.mozilla.org/de/docs/Web/Guide/DOM/Manipulating_the_browser_history
    //this adds links to history, so you can use back button eventhough no page reload has happend

class App extends React.Component{
    static propTypes = {
        initialData: PropTypes.object.isRequired
    }
    state = this.props.initialData;
    componentDidMount(){
        
    }

    fetchContest = (contestId) => {
        pushState(
            { currentContestId: contestId },
            `/contest/${contestId}`
        );

        api.fetchContent(contestId).then(contest =>{
            this.setState({
                currentContestId: contest.id,
                contests:{
                    ...this.state.contests,
                    [contest.id]: contest,

                }
            });
        });
    };
    currentContest(){
        return this.state.contests[this.state.currentContestId];
    }
    pageHeader(){
        if(this.state.currentContestId){
            return this.currentContest().contestName;
        }
        return 'Naming Contest';
    }
    currentContent(){
        if(this.state.currentContestId){
            return <Contest {...this.currentContest()}/>;
        }
        return <ContestList 
            onContestClick= {this.fetchContest}
            contests = {this.state.contests}/>;
    }
    render(){
        return(
            <div className= "App">
                <Header message = {this.pageHeader()}/>
                {this.currentContent()}
            </div>
        );
    }
}

App.defaultProps = {
    headerMessage: 'Hello!'
};

App.propTypes = {
    initialContests: PropTypes.object,
    onContestClick: PropTypes.func,
};
export default App;