import React from 'react'
import {TodoItem} from './TodoItem';


export const Todos = (props) => {
    return (
        <div className="container"><br/>
            <br/><hr/>
            <h2 className='text-center'><b>TODOS list</b></h2><hr/><br/>
            {props.todos.length===0? "No Todos to display":
            /*loop concept*/
            props.todos.map((todo)=>{
                return <TodoItem todo={todo} onDelete={props.onDelete}/>
            })
                }
        
        </div>
    )
}

