
import Todo from './Todo';

const List=(props)=>{
    

    
    return(
        <div>
            
            {props.todos.length>0 ? props.todos.map((todo,index)=>{
                return <Todo key={index} todo={todo}/>
            })
                : <h3>--Add To-dos Above--</h3>
            }
        </div>
    )
}
export default List