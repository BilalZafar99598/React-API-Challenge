import { useEffect } from "react";
import { useState } from "react";
import Form from "./Form";
import List from "./List";
import Table from "./Table";

const App = () => {
  const API_URL = 'https://jsonplaceholder.typicode.com';
  const [reqType, setReqType] = useState('users');
  const [items, setItems] = useState([]);
  
  const fetchItems = async () => {
    const response = await fetch(`${API_URL}/${reqType}`);
    const data = await response.json();
    console.log(data);
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
        <Table items={items}/>
        {/* <List
        items={items}
        /> */}
    </div>
  )
}

export default App
