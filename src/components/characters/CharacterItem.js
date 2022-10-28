import React from 'react';

const CharacterItem = ({item}) => (
 <div className="card">
  <div className="card-inner">
   <div className="card-front">
    <img src={item.img !== "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg" ? item.img : "https://upload.wikimedia.org/wikipedia/en/0/03/Walter_White_S5B.png"} alt="" />
   </div>
   <div className="card-back">
    <h1>{item.name}</h1>
    <ul>
     <li><strong>Actor Name:</strong> {item.portrayed}</li>
     <li><strong>Nickname:</strong> {item.nickname}</li>
     <li><strong>Birthday:</strong> {item.birthday}</li>
     <li><strong>Status:</strong> {item.status}</li>
    </ul>
   </div>
  </div>
 </div>
);

export default CharacterItem;