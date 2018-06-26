import React from  'react';
import PropsTypes from 'prop-types';
import UpdateModal from './updateModal';
import { Table, Button } from 'antd';
import { connect } from 'react-redux';
import axios from 'axios';
import { fetchData, removeData } from '../actions/postAction';

class TableList extends React.Component {
  componentWillMount(){
    axios.get('http://localhost:3004/users')
      .then( res => { this.props.fetchData(res.data) })
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.newTable){
      this.props.table.unshift(nextProps.newTable);
    }
  }

  render(){
    const dataItems = this.props.table.map( res => { return {
         key: res.id,
         id: res.id,
         fname: res.firstName,
         mname: res.middleName,
         lname: res.lastName,
         age: res.age,
         email: res.email
      };
    });

    const columns = [{
      title: 'ID',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'First Name',
      dataIndex: 'fname',
      key: 'fname'
    }, {
      title: 'Middle Name',
      dataIndex: 'mname',
      key: 'mname'
    }, {
      title: 'Last Name',
      dataIndex: 'lname',
      key: 'lname'
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    , {
      title: 'Update',
      key: 'update',
      render: (data) => (
        <UpdateModal  dataProps={data}/>
      ),
    }, {
      title: 'Delete',
      key: 'delete',
      render: (data) => (

          <Button type="danger" onClick={() => { this.props.removeData(data.id);  }}  ghost>DELETE</Button>
      ),
    }
  ];

    return (
      <Table dataSource={dataItems} columns={columns} pagination={false}/>
    );
  }

}

TableList.PropsTypes = {
  fetchData : PropsTypes.func.isRequired,
  removeData: PropsTypes.func.isRequire,
  table: PropsTypes.array.isRequired,
  newTable: PropsTypes.object
}

const mapStateToProps = state => ({
  table: state.TableReducer,
  newTable: state.TableReducer
})

export default connect(mapStateToProps , { fetchData, removeData  })(TableList);
