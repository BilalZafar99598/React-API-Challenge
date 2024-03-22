import { useEffect } from "react";
import { useState } from "react";
import Form from "./Form";

const App = () => {
  const API_URL = 'https://jsonplaceholder.typicode.com';
  const [reqType, setReqType] = useState('users');
  const [items, setItems] = useState([]);
  
  const fetchItems = async () => {
    const response = await fetch(`${API_URL}/${reqType}`);
    const data = await response.json();
    setItems(data);
  }

  useEffect(() => {
      fetchItems();
  },[reqType]);

  return (
    <div className="App">
        <Form
        reqType={reqType}
        setReqType={setReqType}
        />
    </div>
  )
}

export default App
