
import React, { useState, useEffect } from 'react';

const App = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    fetchList(); // Fetch the list when the component mounts
  }, []);

  const fetchList = async () => {
    try {
      const response = await fetch('http://localhost:3000/list'); // Use the correct URL for your backend
      if (response.ok) {
        const data = await response.json();
        setList(data);
      }
    } catch (error) {
      console.error('Error fetching list:', error);
    }
  };

  const add = async (item) => {
    try {
      const response = await fetch('http://localhost:3000/list', { // Use the correct URL for your backend
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ itemName: item, quantity: 1 }),
      });

      if (response.ok) {
        fetchList(); // Fetch the updated list after adding an item
        setInput('');
      } else {
        console.error('Error adding item');
      }
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  return (
    <div>
      <h1>Shopping List!</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => add(input)}>Add</button>
      <ul>
        {list.map((item) => (
          <li key={item._id}>
            {item.itemName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

