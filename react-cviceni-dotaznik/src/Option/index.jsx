import React from 'react';
import Icon from '../Icon/index';
import './style.css';


const Option = ({ type, text, onSelected }) => {

  const handleClick = () => {
    console.log("Tak teda asi ano.");
    onSelected(type);
  }

  return (
    <div className="option" onClick={handleClick}>
      <Icon type={ type } />
      <div>{ text }</div>
    </div>
  );
};

export default Option;
