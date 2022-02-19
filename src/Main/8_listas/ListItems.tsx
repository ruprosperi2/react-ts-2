import React from 'react';

const numbers: number[] = [1, 2, 3, 4, 5];

const listItems = numbers.map((number) =>
    <li key={number.toString()}>{number}</li>
);

export default listItems;