import React, { useState } from 'react';
import SingleCat from './SingleCat';

const catsData = [
  { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', family: 'Felidae' },
  { id: 2, name: 'Cougar', latinName: 'Puma concolor', family: 'Felidae' },
  { id: 3, name: 'Jaguar', latinName: 'Panthera onca', family: 'Felidae' },
  { id: 4, name: 'Leopard', latinName: 'Panthera pardus', family: 'Felidae' },
  { id: 5, name: 'Lion', latinName: 'Panthera leo', family: 'Felidae' },
  { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia', family: 'Felidae' },
  { id: 7, name: 'Tiger', latinName: 'Panthera tigris', family: 'Felidae' },
];

const BigCats = () => {
  const [cats, setCats] = useState(catsData);

  const sortAlphabetically = () => {
    const sortedCats = [...cats].sort((a, b) => a.name.localeCompare(b.name));
    setCats(sortedCats);
  };

  const reverseList = () => {
    const reversedCats = [...cats].reverse();
    setCats(reversedCats);
  };

  const filterPanthera = () => {
    const filteredCats = catsData.filter(cat => cat.family === 'Panthera');
    setCats(filteredCats);
  };

  const resetList = () => {
    setCats(catsData);
  };

  return (
    <div>
      <h1>Big Cats</h1>
      <button onClick={sortAlphabetically}>Sort Alphabetically</button>
      <button onClick={reverseList}>Reverse List</button>
      <button onClick={filterPanthera}>Filter Panthera</button>
      <button onClick={resetList}>Reset List</button>
      <ul>
        {cats.map(cat => (
          <SingleCat key={cat.id} cat={cat} />
        ))}
      </ul>
    </div>
  );
};

export default BigCats;