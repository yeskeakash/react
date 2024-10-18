import React from 'react'

function Card({username="Akash", post="Not assigned yet", image = "image"}) {
  console.log(username, post, image);
  return (
    <div>
      <img src={image} />
      <h1 className="font-bold">CARD for images</h1>
    </div>
  );
}

export default Card