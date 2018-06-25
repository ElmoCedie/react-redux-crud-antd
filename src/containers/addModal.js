import React from 'react';
import { Button, Modal, Form, Input } from 'antd';
import PropsTypes from 'prop-types';
import { connect } from 'react-redux';
import { createData, fetchData } from '../actions/postAction';

class AddModal extends React.Component{
  constructor(){
    super();
    this.state = {
      visible: false ,
      firstName: '',
      middleName: '',
      lastName: '',
      age: '',
      email: ''
    }
    this.handleOk = this.handleOk.bind(this);
  }

  componentWillMount(){
    this.props.fetchData();
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = () => {
    const lastObj = this.props.table[this.props.table.length-1];
    const newId = Number(lastObj.id) + 1;
    const { firstName, middleName, lastName, age, email } = this.state;
    const formData = {
      id: newId.toString(),
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
      age: age,
      email: email
    }

    this.props.createData(formData);

    this.setState({
      visible: false,
      firstName: '',
      middleName: '',
      lastName: '',
      age: '',
      email: ''
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
          <Button type="primary" onClick={this.showModal}>ADD</Button>
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

AddModal.PropsTypes = {
  createData: PropsTypes.func.isRequired,
  fetchData : PropsTypes.func.isRequired,
  table: PropsTypes.array.isRequire
}

const mapStateToProps = (state) => ({
  table: state.TableReducer
})

export default connect(mapStateToProps, { createData, fetchData }) (AddModal);
