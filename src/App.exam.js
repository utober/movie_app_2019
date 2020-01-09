/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

const foodILike = [
  {
    id: 1,
    name: "Bibimbap1",
    image: "https://placeimg.com/320/100/any",
    rating: 5
  },
  {
    id: 2,
    name: "Bibimbap2",
    image: "https://placeimg.com/320/150/any",
    rating: 4.9
  },
  {
    id: 3,
    name: "Bibimbap3",
    image: "https://placeimg.com/320/200/any",
    rating: 3
  },
  {
    id: 4,
    name: "Bibimbap4",
    image: "https://placeimg.com/320/250/any",
    rating: 3.5
  }
];

function renderFood(dish) {
  // console.log('dish', dish);
  return <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
}

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}.</h2>
      <h4>{rating}/5.0</h4>
      <p><img src={picture} alt={name} /></p>
    </div>
  );
}

Food.proptypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div>
      <h1>Hello</h1>
      {/* {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
      ))} */}

      {foodILike.map(renderFood)}
    </div>
  ); 
}
 
export default App;
