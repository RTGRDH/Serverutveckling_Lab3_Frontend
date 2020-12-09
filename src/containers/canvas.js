/**
 * Kod tagen för Whiteboarden ifrån denna källa
 * https://dev.to/jerrymcdonald/creating-a-shareable-whiteboard-with-canvas-socket-io-and-react-2en
 * Detta är endast för själva whiteboarden och inte sparandet av ritningen.
 */

import React from 'react';
import './styles/canvas.css';

const Board = () => {
    return (
        <div>
            <h1>Whiteboard</h1>
            <iframe title="Whiteboard" src="http://localhost:8080" height="500" width="1000"></iframe>
        </div>
    );
};

export default Board;