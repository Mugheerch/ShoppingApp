import React, {useState} from 'react'
import './Home.css';
const Home = () => {
        const ListItem = ({ item }) => {
                return <li>{item}</li>;
              };
              const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem('');
    }}
    const handleDeleteItem = (index) => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
      }
      const getTotalItems = () =>{
        return items.length;
      }
  return (
        <>
        <div className='main'>
    <div >
      <h1>shoping App</h1>

    </div>
    <div>
      <div>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={handleAddItem}>Add Items</button>
        <button onClick={handleDeleteItem}>Delete Items</button>
        
      </div>
      <p>
        Total Items:{getTotalItems()}
      </p>
      <div>
        <ul>
          {items.map((item, index) => (
            <ListItem key={index} item={item}onDelete={() => handleDeleteItem(index)}/>
          ))}
        </ul>
      </div>
    </div>
  
    </div>
    </>
    
  )
  
}

export default Home

