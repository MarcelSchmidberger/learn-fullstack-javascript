import React from 'react';
import Header from './Header';


class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            pageHeader: 'Naming Contest'
        };
    }
    componentDidMount(){
        console.log('did Mount');
        debugger;
    }
    componentDidUnMount(){
        console.log('did Mount');
        debugger;
    }
    render(){
        return(
            <div className= "App">
                <Header message = {this.state.pageHeader}/>
                <div></div>
            </div>
        );
    }
}



App.defaultProps = {
    headerMessage: 'Hello!'
};

export default App;