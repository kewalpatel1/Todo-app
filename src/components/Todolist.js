import React,{useEffect,useState} from "react";
import  Card from "./Card";
import CreateTask from './Createtask';


const Todolist = () => {
    const [modal, setModal] = useState(false);   
    const toggle = () => {
        setModal(!modal);
    }
   const [List, setList] = useState([]);

   useEffect(() => {  
    let arr = localStorage.getItem("taskList")
   
    if(arr){
        let obj = JSON.parse(arr)
        setList(obj)
    }
}, [])

   const savelist = (taskObj) =>{
    let tempList = List
    tempList.push(taskObj)
    localStorage.setItem("taskList", JSON.stringify(tempList))
    setList(List)
    setModal(false)
   }

   const deleteTask = (index) => {
    let tempList = List
    tempList.splice(index, 1)
    localStorage.setItem("taskList", JSON.stringify(tempList))
    setList(tempList)
    window.location.reload()
}

    const updateListArray = (obj, index) => {
      let tempList = List
      tempList[index] = obj
      localStorage.setItem("taskList", JSON.stringify(tempList))
      setList(tempList)
      window.location.reload()
    }


  return (
    <>
      <div className="header text-center">
        <h2 className="pt-4"> Todo List</h2>   
        <button className="btn btn-primary mt-2"  onClick = {() => setModal(true)} >
          Create Task
        </button>       
      </div>
      <div className="task-container">
          {List.map((obj,index) => <Card taskObj = {obj} index = {index} deleteTask={deleteTask}  updateListArray = {updateListArray}/>)}
        </div>
      <div className="container">
        <CreateTask toggle={toggle} modal={modal} save = {savelist}/>
      </div>
    </>
  );
};

export default Todolist;
