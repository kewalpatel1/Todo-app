import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const Createtask = ({ modal, toggle,save}) => {
  
    const [title, settitle] = useState('');
    const [desc, setdesc] = useState('');

    const setchange = (e) =>{
      const {name,value} = e.target
      if(name === 'title'){
        settitle(value)
      }else{
        setdesc(value)
      }
    }

    const handlesave = (e) =>{
      e.preventDefault()
      let taskObj = {}
      taskObj["Name"] = title
      taskObj["Description"] = desc
     
      save(taskObj)    
    }

  return (  
    <>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Task</ModalHeader>
        <ModalBody>    
           
            <div className="form-group">             
              <label>Task</label>
              <input                
                name="title"                
                className="form-control"
                value={title}
                onChange={setchange}
              />            
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea                
                rows="3"
                name="desc"                
                className="form-control"
                value={desc}
                onChange={setchange}
              />
            </div>              
        </ModalBody>
        <ModalFooter>
          <Button color="btn btn-primary" onClick={handlesave}>
            Create
          </Button>{' '}
          <Button color="btn btn-secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      
    </>
  );
};

export default Createtask;
