import React, { Component, PropTypes } from 'react';
import {floatToSGD} from '../helper'
import {Modal, Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'

function FieldGroup({ id, label, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
    </FormGroup>
  );
}

class Sidebar extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      showModal: false,
      amount: '',
      desc: '',
      bank: 'OCBC'
    }
  }

  showModal() {
    this.setState({ showModal: true });
  }

  hideModal() {
    this.setState({ showModal: false });    
  }

  handleAmountChange(e) {
    this.setState({ amount: e.target.value });    
  }

  handleDescChange(e) {
    this.setState({ desc: e.target.value });    
  }

  handleBankChange(e) {
    this.setState({ bank: e.target.value });        
  }

  simulateTransfer() {
    let data = {
      transaction: {
        trans_type: this.state.bank + " Transfer",
        description: this.state.desc,
        is_positive: true,
        amount: parseFloat(this.state.amount)        
      }
    }
    this.props.addMoney(data)
    this.hideModal()
  }

  render() {
    const {app} = this.props;
    return (
      <aside className="main-sidebar">

          {/* sidebar: style can be found in sidebar.less */}
          <section className="sidebar">

            {/* Sidebar user panel (optional) */}
            <div className="user-panel">
              <div className="pull-left image">
                <img src="user-outline.png" className="img-circle" alt="User Image" />
              </div>
              <div className="pull-left info">
                <p>{app.name}</p>
                <p>Balance: {floatToSGD(app.balance)}</p>
              </div>
              <button onClick={this.showModal.bind(this)} className="add-money btn btn-success btn-block btn-flat">Add more $$</button>   
            </div>
            <Modal show={this.state.showModal} onHide={this.hideModal.bind(this)}>
              <Modal.Header closeButton>
                <Modal.Title>Free money</Modal.Title>
              </Modal.Header>
          
              <Modal.Body>              
                <form>  
                  <input type='hidden' name='authenticity_token' value={app.csrf_token} />     
                  <FormGroup controlId="formControlsSelectMultiple">
                    <ControlLabel>Select bank</ControlLabel>
                    <FormControl onClick={this.handleBankChange.bind(this)} componentClass="select">
                      <option value="OCBC">OCBC</option>
                      <option value="MBB">MBB</option>
                      <option value="DBS">DBS</option>
                    </FormControl>
                  </FormGroup>                       
                  <FieldGroup
                    type="number"
                    step="any"
                    label="Amount"
                    onChange={this.handleAmountChange.bind(this)}
                  />
                  <FieldGroup
                    type="text"
                    label="Description"
                    onChange={this.handleDescChange.bind(this)}                    
                  />                     
                </form>
              </Modal.Body>

              <Modal.Footer>
                <Button bsStyle="success" onClick={this.simulateTransfer.bind(this)}>Simulate transfer</Button>                
                <Button onClick={this.hideModal.bind(this)}>Close</Button>
              </Modal.Footer>
            </Modal>

            {/* Sidebar Menu */}
            <ul className="sidebar-menu">
              <li className="header">HEADER</li>
              {/* Optionally, you can add icons to the links */}
              <li className="active"><a href="#"><i className="fa fa-link"></i> <span>Link</span></a></li>
              <li><a href="#"><i className="fa fa-link"></i> <span>Another Link</span></a></li>
              <li className="treeview">
                <a href="#"><i className="fa fa-link"></i> <span>Multilevel</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right"></i>
                  </span>
                </a>
                <ul className="treeview-menu">
                  <li><a href="#">Link in level 2</a></li>
                  <li><a href="#">Link in level 2</a></li>
                </ul>
              </li>
            </ul>
            {/* /.sidebar-menu */}
          </section>
          {/* /.sidebar */}
        </aside>

      )
  }
}

export default Sidebar;