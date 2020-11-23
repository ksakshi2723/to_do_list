import React from 'react';
import '../assets/test.css';

export default function ToDoList(props) {
    
    return (
        <>
       <div className="todo-style">
       
      <i className="fa fa-times" aria-hidden="true" onClick={()=>{
          props.onSelect(props.id);
        }
          }/><li>{props.items}</li>
       </div>
        </>
    );
}
