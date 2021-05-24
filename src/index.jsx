import * as React from "react";
import {render} from 'react-dom';
import Header from './Header/Header';

window.addEventListener('load', () => {
    render(<Header/>, document.getElementById('root'));
})
