import * as React from "react";
import {hydrate} from 'react-dom';
import Header from '../shared/Header';

window.addEventListener('load', () => {
    hydrate(<Header/>, document.getElementById('root'));
})
