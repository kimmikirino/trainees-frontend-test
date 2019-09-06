import React from 'react';
import CorpoHomeMentores from '../CorpoHomeMentores/index.js';
import { mentores } from '../MockTrainees/mock.js';

const ChamaMentores = () => {
  return (
    <div id="box-m">
      <h2>Instrutores</h2>
      <div id="mentores-box">
      {
        mentores.map((mentor, count )=> <CorpoHomeMentores key={count} mentor={mentor}/>)
      }
      </div>
    </div>
  )
}
export default ChamaMentores;