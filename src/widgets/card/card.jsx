import React from 'react';
import "./card.css"
export const Card = (props) => (
    <div className="card-container">
          <div className="card-title">{props.title}</div>
          <div className="card-temperature">{props.deg}°C</div>
        <button type="submit">DELETE</button>
    </div>
);

