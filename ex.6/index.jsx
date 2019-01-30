import React from 'react';
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <div>
        <Family lastName='Santin' >
            <Member name='Roberto' />
            <Member name='Teste' />
            <Member name='Teste 2' />
       </Family>
    </div>,
    document.getElementById('app')
)