import {useState} from 'react'

const AddToDo =(props)=>{
    const [userInput, setUserInput] = useState('')
    return(
        <div>
            <input value={userInput} onChange={e=>setUserInput(e.target.value)}  placeholder='Add a todo!' />
            <button onClick={()=>props.addTodo(userInput)}>Submit</button>
        </div>
    )
}
export default AddToDo