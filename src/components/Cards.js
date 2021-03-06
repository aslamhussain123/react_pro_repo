import React from 'react'
import CardItem from './CardItem';

function Cards() {
    return (
        <div className="cards">
            <h1>Check out this Epic Destination</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                   <ul className="cards__items">
                     <CardItem 
                     src="images/img-9.jpg" 
                     text="this is the island valley" 
                     label="Adventure" 
                     path="/products"/>
                       <CardItem 
                     src="images/img-9.jpg" 
                     text="this is the island valley" 
                     label="Adventure" 
                     path="/services"/>
                       <CardItem 
                     src="images/img-9.jpg" 
                     text="this is the island valley" 
                     label="Adventure" 
                     path="/services"/>
                   </ul>
                   <ul className="cards__items">
                     <CardItem 
                     src="images/img-9.jpg" 
                     text="this is the island valley" 
                     label="Adventure" 
                     path="/products"/>
                       <CardItem 
                     src="images/img-9.jpg" 
                     text="this is the island valley" 
                     label="Adventure" 
                     path="/services"/>
                   </ul>
                </div>
            </div>
        </div>
    )
}
export default  Cards;