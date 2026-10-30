// import React from 'react'

function Card({username ="Andres", post = "Not assigned yet"}) {
    // console.log(props);
  return (
    <div>
        <img src="	https://mamp.one/wp-content/uploads/2024/09/image-resources2.jpg" alt="" />
        <h1 className='text-2` bg-green-500 p-3 rounded'>A card for photos</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, eaque!</p>
        <p>{username}</p>
        <div>{post}</div>
    </div>
  )
}

export default Card