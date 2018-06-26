import React from 'react';
import { Button, Modal, Form, Input } from 'antd';
import PropsTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateData } from '../actions/postAction';

class UpdateModal extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      visible: false ,
      firstName: this.props.dataProps.fname,
      middleName: this.props.dataProps.mname,
      lastName: this.props.dataProps.lname,
      age: this.props.dataProps.age,
      email: this.props.dataProps.email
    }
    this.handleOk = this.handleOk.bind(this);
  }


  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = () => {
    const { firstName, middleName, lastName, age, email } = this.state;
    const formData = {
      id: this.props.dataProps.id.toString(),
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
      age: age,
      email: email
    }

    this.props.updateData(formData);

    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  }

  render(){
    const { firstName, middleName, lastName, age, email } = this.state;
    return(
      <div>
        <div>
          <Button type="primary"  onClick={this.showModal} ghost >UPDATE</Button>
        </div>

        <Form >
        <Modal
          title="Add Users"
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onOk={this.handleOk}
        >

            <label>First Name:</label>
            <Input placeholder="First Name" value={firstName} onChange={(e)=>{ this.setState({ firstName: e.target.value })} } />

            <label>Middle Name:</label>
            <Input placeholder="Middle Name" value={middleName} onChange={(e)=>{ this.setState({ middleName: e.target.value })} } />

            <label>Last Name:</label>
            <Input placeholder="Last Name" value={lastName} onChange={(e)=>{ this.setState({ lastName: e.target.value })} } />

            <label>Age:</label>
            <Input placeholder="Age" value={age} onChange={(e)=>{ this.setState({ age: e.target.value })} }/>

            <label>Email:</label>
            <Input placeholder="Email" value={email} onChange={(e)=>{ this.setState({ email: e.target.value })} } />


        </Modal>
        </Form>
      </div>
    );
  }
}

UpdateModal.PropsTypes = {
  updateData: PropsTypes.func.isRequired,
}


export default connect(null, { updateData }) (UpdateModal);
