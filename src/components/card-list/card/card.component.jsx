import React from "react";
import './card.styles.css';

export const Card = props => {
  return (<div className='card-container'>
    <img alt="monster" src={`https://robohash.org/${props.option.id}?set=set4&size=180x180`} />
    <h1>{props.option.name}</h1>
    <p>{props.option.email}</p>
  </div>)
}