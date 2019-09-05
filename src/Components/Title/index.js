import React from 'react';

import './title.css';

const Title = ({ title }) => {
  return (
    <div>
      <h6 className="title-container">{title}</h6>
    </div>
  )
}

export default Title;