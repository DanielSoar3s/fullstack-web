import React from 'react';
import ReactDom from 'react-dom';

import Pai from './components/Pai';
import Filho from './components/Filho';

ReactDom.render(
    <div>
      <Pai nome="Eliomar" sobrenome="Araujo">
        <Filho nome="Thiago"/>
        <Filho nome="Daniel"/>
        <Filho nome="Lucas"/>
        <Filho nome="Esdras"/>
      </Pai>

    </div>
, document.getElementById('root'));
