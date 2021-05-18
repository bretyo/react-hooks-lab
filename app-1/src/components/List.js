import {useState} from 'react'
import AddToDo from './AddTodo';
import Todo from './Todo';

const List=()=>{
    const [todos, setTodos] = useState([]);

    const addTodo=(todo)=>{
        setTodos([...todos, todo])
    }
    return(
        <div>
            <AddToDo addTodo={addTodo}/>
            {todos.length>0 ? todos.map((todo,index)=>{
                return <Todo key={index} todo={todo}/>
            })
                : <h3>--Add To-dos Above--</h3>
            }
        </div>
    )
}
export default List