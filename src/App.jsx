import React from 'react';
import Navbar from "./components/Navbar";
import rasm1 from "./assets/images/image1.png";
import rasm2 from "./assets/images/image2.png";
import Section_first from "./components/Section_first";
import Section_second from "./components/Section_second";
import Section_third from "./components/Section_third";
import Footer from "./components/Footer";
import Card from "./components/Card";
import rasm3 from "./assets/images/image3.png";
import rasm4 from "./assets/images/star.png";
const App = () => {

let phone=[
    {
      "id":1,
       "image": "./assets/images/image3.png",
       "price": "$929",
       "name": "Apple iPhone 6 ram4 yemkost 100%",
       "text": "1.9",
       "image_second": "./assets/images/star.png"
    },
    {
      "id":2,
       "image": "./assets/images/image3.png",
       "price": "$929",
       "name": "Apple iPhone 6 ram4 yemkost 100%",
       "text": "1.9",
       "image_second": "./assets/images/star.png"
    },
    {
      "id":3,
       "image": "./assets/images/image3.png",
       "price": "$929",
       "name": "Apple iPhone 6 ram4 yemkost 100%",
       "text": "1.9",
       "image_second": "./assets/images/star.png"
    },
    {
      "id":4,
       "image": "./assets/images/image3.png",
       "price": "$929",
       "name": "Apple iPhone 6 ram4 yemkost 100%",
       "text": "1.9",
       "image_second": "./assets/images/star.png"
    },
    {
      "id":5,
       "image": "./assets/images/image3.png",
       "price": "$929",
       "name": "Apple iPhone 6 ram4 yemkost 100%",
       "text": "1.9",
       "image_second": "./assets/images/star.png"
    },
    {
      "id":6,
       "image": "./assets/images/image3.png",
       "price": "$929",
       "name": "Apple iPhone 6 ram4 yemkost 100%",
       "text": "1.9",
       "image_second": "./assets/images/star.png"
    },
    {
      "id":7,
       "image": "./assets/images/image3.png",
       "price": "$929",
       "name": "Apple iPhone 6 ram4 yemkost 100%",
       "text": "1.9",
       "image_second": "./assets/images/star.png"
    },
    {
      "id":8,
       "image": "./assets/images/image3.png",
       "price": "$929",
       "name": "Apple iPhone 6 ram4 yemkost 100%",
       "text": "1.9",
       "image_second": "./assets/images/star.png"
     },
    ];
       let phone2=[
      {
        "id":1,
         "image": "./assets/images/image3.png",
         "price": "$929",
         "name": "Apple iPhone 6 ram4 yemkost 100%",
         "text": "1.9",
         "image_second": "./assets/images/star.png"
      },
      {
        "id":2,
         "image": "./assets/images/image3.png",
         "price": "$929",
         "name": "Apple iPhone 6 ram4 yemkost 100%",
         "text": "1.9",
         "image_second": "./assets/images/star.png"
      },
      {
        "id":3,
         "image": "./assets/images/image3.png",
         "price": "$929",
         "name": "Apple iPhone 6 ram4 yemkost 100%",
         "text": "1.9",
         "image_second": "./assets/images/star.png"
      },
      {
        "id":4,
         "image": "./assets/images/image3.png",
         "price": "$929",
         "name": "Apple iPhone 6 ram4 yemkost 100%",
         "text": "1.9",
         "image_second": "./assets/images/star.png"
      },
];
 return (
    <>
    <header>
      <div className='header_container'>
      <Navbar/>
      </div>
    </header>
    <main>
      <div className='main_container'>
      <Section_first/>
      <img src={rasm1} alt="image" className='section__first__wrap__image'/>
      <Section_second/>
      
      <div className='card__wrap'>
      {phone.map((phone1,i)=>{
       return <Card image={rasm3}  price={phone1.price} name={phone1.name}
       text={phone1.text} image_second={rasm4} key={phone1.id}
       />
      })}
      </div>
      <Section_third/>
      <Section_second/>
      <img src={rasm2} alt="image" className='section__third__wrap__first__image'/>
 <div className='section_fourth'>
        {phone2.map((phone_,i)=>{
           return <Card  image={rasm3}  price={phone_.price} name={phone_.name}
           text={phone_.text} image_second={rasm4} key={phone_.id}/>
        })}
         </div>
       </div>
    </main> 
    <footer>
      <div className='footer_container'>
        <Footer/>
      </div>
    </footer>
       </>
  );
};

export default App;