import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function Edittask({modal,toggle,taskObj,updateTask}) {

    const [newtitle, setnewtitle] = useState(taskObj.Name);
    const [newdesc, setnewdesc] = useState(taskObj.Description);

    
    const setchange = (e) =>{
        const {name,value} = e.target
        if(name === 'title'){
            setnewtitle(value)
        }else{
            setnewdesc(value)
        }
      }

      const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {}
        tempObj['Name'] = newtitle
        tempObj['Description'] = newdesc
        updateTask(tempObj)
    }
  
    return (
        <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit Task</ModalHeader>
        <ModalBody>    
           
            <div className="form-group">             
              <label>Task</label>
              <input                
                name="title"                
                className="form-control"
                value={newtitle}
                onChange={setchange}
              
              />            
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea                
                rows="3"
                name="desc"                
                className="form-control"
                value={newdesc}
                onChange={setchange}

              />
            </div>              
        </ModalBody>
        <ModalFooter>
          <Button color="btn btn-primary" onClick={handleUpdate}>Update
          </Button>{' '}
          <Button color="btn btn-secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      
    )
}

export default Edittask
