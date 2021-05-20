import * as React from "react";
import {render} from 'react-dom';
import Header from '../shared/Header';

window.addEventListener('load', () => {
    render(<Header/>, document.getElementById('root'));
})
