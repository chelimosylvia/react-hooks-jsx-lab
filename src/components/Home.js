import React from 'react';

const name = "Your Name"; // Insert your name here
const city = "Your City"; // Insert your city here

const Home = () => {
  return (
    <div id="home">
      <h1 style={{ color: "firebrick" }}>{`${name} is a Web Developer from ${city}`}</h1>
    </div>
  );
};

export default Home;
