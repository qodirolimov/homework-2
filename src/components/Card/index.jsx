import React from 'react';

import "./card.scss";
const index = (data) => {
const {image,price,name,text,image_second}=data;



    
   return (
      <>
         
     
     <div className='card__wrap__card'>
      <img src={image} alt="phone image" className='card__wrap__card__image__first'/>
      <p className='card__wrap__card__text__first'>{price}</p>
      <p className='card__wrap__card__text__second'>{name}</p>
      <p className='card__wrap__card__text__third'>{text}</p>
      <img src={image_second} alt="star image" className='card__wrap__card__image__second'/>
      
     
     </div>
      </>
   );
};

export default index;