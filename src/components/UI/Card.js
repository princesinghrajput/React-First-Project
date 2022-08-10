import "./Card.css";
import React from "react";
// import Card from '../UI/Card';

const Card=(props)=> {
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
}

export default Card;
