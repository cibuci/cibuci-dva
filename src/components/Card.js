import React from 'react';
import { Message } from 're-bulma';

const Card = () => {
  return (
    <Message header="Hello World" color="isPrimary">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Pellentesque risus mi, tempus quis placerat ut, porta nec
      nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam
      gravida purus diam, et dictum felis venenatis efficitur.
      Aenean ac eleifend lacus, in mollis lectus. Donec sodales,
      arcu et sollicitudin porttitor, tortor urna tempor ligula,
      id porttitor mi magna a neque. Donec dui urna, vehicula et
      sem eget, facilisis sodales sem.
    </Message>
  );
};

Card.propTypes = {
};

export default Card;
