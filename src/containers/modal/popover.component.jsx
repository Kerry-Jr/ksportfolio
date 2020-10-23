import React, {Component} from "react";
import {Modal, Button} from 'react-bootstrap';
import './popover.style.css'


class Popover extends Component {

  state = {
    isOpen: false
  };

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false })


  render() {
    return (
       <>
         <div className="modal-btn">
           <Button variant="primary" onClick={this.openModal}>My Resume</Button>
         </div>
       <div>
         <Modal show={this.state.isOpen} onHide={this.closeModal} animation={true} keyboard={true} size="xl">
           <Modal.Header closeButton closeLabel="Close">
             <Modal.Title className="modal-title">Kerry Smith's 2020 resume</Modal.Title>
           </Modal.Header>
           <Modal.Body className="modal-body">
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consequatur dolores esse ex explicabo impedit ipsa molestiae nemo nulla odio pariatur, provident quisquam quo, repellat sapiente tenetur ullam vero voluptate. Architecto asperiores at, blanditiis doloremque, earum enim esse hic impedit, iste nisi perferendis quidem quo reiciendis. Eveniet molestias necessitatibus possimus.
           </Modal.Body>
           <Modal.Footer>
             <Button variant="secondary" onClick={this.closeModal}>Close</Button>
           </Modal.Footer>
         </Modal>
       </div>
         </>
    );
  }
}

export default Popover;
