import React,{useState} from 'react';
import './App.css';
import './assets/test.css';
import ToDoList from './component/ToDoList';

function App() {
  const [List, setList] = useState("");
const [Items, setItems] = useState([]);

  const Change=(e)=>
  {
    setList(e.target.value);
  };

  const Add=()=>{
    setItems((oldItems)=>{
      return [...oldItems,List];
    })
setList("");
};

 const deleteItems=(id)=>{
   setItems((oldItems)=>{
     return oldItems.filter((arrElem,index)=>{
       return index!==id;
     });
   });
 };
  return (
   <div className="content ">
     <div class="main-content">
       
       <h1 className="card-title"> ToDo List </h1>

       <br/><br/>
       
       <input type="text" value={List} placeholder="Add Items" onChange={Change} />
       
       <button onClick={Add}>+</button>
       
<ol>
  <li>{List}</li>
  {Items.map((items,index)=>{
    return <ToDoList items={items} id={index} key={index} onSelect={deleteItems}/>

  })}
</ol>
     </div>
     
   </div>
  );
}

export default App;
