import React from 'react';
import NameCard from '../NameCard/NameCard';
import './ResultContainer.css';
const ResultContainer = (props) =>{
const {suggestedname} = props

const suggestNameJSX = suggestedname.map(suggestedName => {
    return <NameCard key = {suggestedName} suggestedName = {suggestedName}/>
});
    return (
    <div className ='results-container'>
        {suggestNameJSX}
    </div>
    );
}

export default ResultContainer;