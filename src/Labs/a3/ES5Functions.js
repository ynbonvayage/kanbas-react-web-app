import React from 'react';

function add(a, b) {
    return a + b;
}

function ES5Functions() {
    const twoPlusFour = add(2, 4);

    return (
        <div>
            <h2>Functions</h2>
            <h3>Legacy ES5 functions</h3>
            <p>twoPlusFour = {twoPlusFour}</p>
            <p>add(2, 4) = {add(2, 4)}</p>
        </div>
    );
}

export default ES5Functions;
