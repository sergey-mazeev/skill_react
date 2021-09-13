import * as React from "react";
import {render} from 'react-dom';
import App from './App';
import './styles/global.scss';

window.addEventListener('load', () => {
    render(<App/>, document.getElementById('root'));
})
