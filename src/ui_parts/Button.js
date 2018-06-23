import React from 'react';

const Button = (props) => {
  const {
    onClick = null,
    text = 'Click there',
  } = props;
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
