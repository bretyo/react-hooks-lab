import {useState} from 'react'
import AddToDo from './components/AddTodo';
import './App.css';
import List from './components/List';

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo=(todo)=>{
    setTodos([...todos, todo])
  }

  return (
    <div className="App">
      <AddToDo addTodo={addTodo}/>
      <List todos={todos}/>
    </div>
  );
}

export default App;
