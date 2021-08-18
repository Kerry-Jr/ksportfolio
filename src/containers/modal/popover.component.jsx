import React, {Component} from "react";
import {Modal, Button} from 'react-bootstrap';
import SinglePage from "../../components/react-pdf/singlePage";
import myResume from "./kpsResume.pdf"
import './popover.style.css'


class Popover extends Component {

  state = {
    isOpen: false
  };

  openModal = () => this.setState({isOpen: true});
  closeModal = () => this.setState({isOpen: false})


  render() {
    return (
       <>
         <div className="modal-btn">
           <Button variant="primary" onClick={this.openModal}>My Resume</Button>

         </div>
         <div>
           <Modal show={this.state.isOpen} onHide={this.closeModal} animation={true} keyboard={true} size="xl">
             <Modal.Header closeButton closeLabel="Close">
               <Modal.Title className="modal-title">Kerry's resume pdf</Modal.Title>
             </Modal.Header>
             <Modal.Body className="modal-body">
               <SinglePage pdf={myResume}/>
             </Modal.Body>
             <Modal.Footer>
               <Button variant="success"
                       onClick={() => window.location.href = 'https://github.com/Kerry-Jr/ksportfolio/raw/master/src/assets/KerrySmith2021resume.pdf'}>Download</Button>
               <Button variant="dark" onClick={this.closeModal}>Close</Button>
             </Modal.Footer>
           </Modal>
         </div>
       </>
    );
  }
}

export default Popover;
