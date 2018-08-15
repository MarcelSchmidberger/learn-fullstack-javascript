import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


const Header = ({ message }) =>{
    return(
        <h2 className="Header text-center">
            {message}
        </h2>

    );
};
Header.propTypes = {
    message: PropTypes.string.isRequired
};


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

ReactDOM.render(
    <App headerMessage="Hello Props"/>,
    document.getElementById('root')
);