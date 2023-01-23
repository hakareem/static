import React from "react";

const Card = (props) => {
  return (
    <div className='card'>
      <img
        className='card--img'
        src='https://source.unsplash.com/WLxQvbMyfas'
      />
      <h4 className='card--country'>{props.item.location}</h4>
      <h1 className='card--title'>{props.item.title}</h1>
      <a className='card--link' href={props.item.googleMapsUrl}>
        View on Google Maps
      </a>
      <small className='card--date'>
        {props.item.startDate} - {props.item.endDate}
      </small>
      <p className='card--paragraph'>{props.item.description}</p>
    </div>
  );
};

export default Card;
