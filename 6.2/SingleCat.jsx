import React from 'react';

const SingleCat = ({ cat }) => {
  return (
    <li key={cat.id}>
      <img src={require(`./images/${cat.image}`).default} alt={cat.name} />
      <div>
        <h2>{cat.name}</h2>
        <p>{cat.latinName}</p>
      </div>
    </li>
  );
};

export default SingleCat;