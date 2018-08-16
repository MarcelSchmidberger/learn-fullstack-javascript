import React from 'react';
import Header from './Header';


const App = () =>{
    return(
        <div className= "App">
            <Header message="naming Contest"/>
            <div></div>
        </div>
    );
};



App.defaultProps = {
    headerMessage: 'Hello!'
};

export default App;