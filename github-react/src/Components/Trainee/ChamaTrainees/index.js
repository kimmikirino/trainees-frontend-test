import React from 'react';
import CorpoHomeTrainees from '../CorpoHomeTrainees/index.js';
import { trainees } from '../MockTrainees/mock.js';

const ChamaTrainees = () => {
  return (
    <div id="box-t">
      <h2>Trainees 2019</h2>
      <div id="trainees-box">
      {
        trainees.map((trainee, count )=> <CorpoHomeTrainees key={count} trainee={trainee}/>)
      }
      </div>
    </div>
  )
}
export default ChamaTrainees;