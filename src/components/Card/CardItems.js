import React from 'react';
import { Link } from 'react-router-dom';

function CardItems(props) {
  return (
    <>
    
      <li className='cards__item'>
        <Link className='cards__item__link' to={`details/${props.path}`}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='TravelImage'
              src={props.src === '' ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfVjYexct1kNpizqh6yoZk8Z5caio6z0MoJw&usqp=CAU' : props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <p className='cards__item__text'>{props.text}</p>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItems;
