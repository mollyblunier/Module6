import React from 'react';
import SingleCat from './6.2/SingleCat';

const cats = [
  { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', image: 'cheetah.jpg' },
  { id: 2, name: 'Cougar', latinName: 'Puma concolor', image: 'cougar.jpg' },
  { id: 3, name: 'Jaguar', latinName: 'Panthera onca', image: 'jaguar.jpg' },
  { id: 4, name: 'Leopard', latinName: 'Panthera pardus', image: 'leopard.jpg' },
  { id: 5, name: 'Lion', latinName: 'Panthera leo', image: 'lion.jpg' },
  { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia', image: 'snow-leopard.jpg' },
  { id: 7, name: 'Tiger', latinName: 'Panthera tigris', image: 'tiger.jpg' },
];

const BigCats = () => {
  return (
    <div>
      <h1>Big Cats</h1>
      <ul>
        {cats.map(cat => (
          <SingleCat key={cat.id} cat={cat} />
        ))}
      </ul>
    </div>
  );
};