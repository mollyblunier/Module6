const AddCatForm = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [latinName, setLatinName] = useState('');
    const [image, setImage] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      onSubmit({ name, latinName, image });
      setName('');
      setLatinName('');
      setImage('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Latin Name:
          <input
            type="text"
            value={latinName}
            onChange={(e) => setLatinName(e.target.value)}
            required
          />
        </label>
        <label>
          Image URL:
          <input
            type="url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </label>
        <button type="submit">Add Cat</button>
      </form>
    );
  };
  
  // BigCats component
  const BigCats = () => {
    const [cats, setCats] = useState([
      { id: 1, name: 'Lion', latinName: 'Panthera leo', image: 'lion.jpg' },
      { id: 2, name: 'Tiger', latinName: 'Panthera tigris', image: 'tiger.jpg' },
      // Add more initial cats if needed
    ]);
  
    const handleAddCat = (newCat) => {
      const newCatWithId = { ...newCat, id: cats.length + 1 };
      setCats([...cats, newCatWithId]);
    };
  
    const handleDeleteCat = (id) => {
      setCats(cats.filter(cat => cat.id !== id));
    };
  
    return (
      <div>
        <h2>Big Cats List</h2>
        <AddCatForm onSubmit={handleAddCat} />
        <ul>
          {cats.map((cat) => (
            <li key={cat.id}>
              <span>{cat.name} - {cat.latinName}</span>
              <img src={cat.image} alt={cat.name} style={{ width: '100px', height: '100px' }} />
              <button onClick={() => handleDeleteCat(cat.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default BigCats;