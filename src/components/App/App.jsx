import React from 'react';
import Header from '../Header/Header';
import ResultContainer from '../ResultContainer/ResultContainer';
import SearchBar from '../SearchBar/SearchBar';
import './App.css';

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component{
    state = {
        headerText : "Name It",
        headerExpanded : true,
        suggestedName:[],
    }

    handleInputChange = (inputtext) =>{
        this.setState({
            headerExpanded: !inputtext,
            suggestedName: inputtext ? name(inputtext):[],
        }
            );

    };
    render()
    {

    return (
        <div>
            <Header 
            titletext = {this.state.headerText}
            headerExpanded = {this.state.headerExpanded}
            />
            <SearchBar
            handleChange={this.handleInputChange}/>
            <ResultContainer
            suggestedname={this.state.suggestedName}/>
        </div>
    );
    }
}


 export default App;