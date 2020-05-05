import React from 'react';
import ReactDom from 'react-dom';

import Multi from './components/Multiplos';

ReactDom.render(
    <div>
        <Multi.BoaTarde nome="Ana"></Multi.BoaTarde>
        <Multi.BoaNoite nome="Zezim"></Multi.BoaNoite>
    </div>
, document.getElementById('root'));
