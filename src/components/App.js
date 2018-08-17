import React from 'react';
import Header from './Header';
import ContestList from './ContestList';
import PropTypes from 'prop-types';
import Contest from './Contest';

const pushState = (obj, url) =>
    window.history.pushState(obj, '', url); // see here https://developer.mozilla.org/de/docs/Web/Guide/DOM/Manipulating_the_browser_history
    //this adds links to history, so you can use back button eventhough no page reload has happend

class App extends React.Component{
    state = {
        pageHeader: 'Naming Contest',
        contests: this.props.initialContests
    };
    componentDidMount(){
        
    }

    fetchContest = (contestId) => {
        pushState(
            { currentContestId: contestId },
            `/contest/${contestId}`
        );
        // lookup the contest
        this.setState({
            pageHeader: this.state.contests[contestId].contestName,
            currentContestId: contestId
        });
    }
    currentContent(){
        if(this.state.currentContestId){
            return <Contest {...this.state.contests[this.state.currentContestId]}/>;
        }
        return <ContestList 
            onContestClick= {this.fetchContest}
            contests = {this.state.contests}/>;
    }
    render(){
        return(
            <div className= "App">
                <Header message = {this.state.pageHeader}/>
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
    onContestClick: PropTypes.func.isRequired,
};
export default App;