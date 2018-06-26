import React from "react";
import AddModal from '../containers/addModal';
import TableList from '../containers/Table';

class App extends React.Component {

  render(){
    return(
      <div>
          <div id="header"><h1> React Redux Crud Ant Design </h1></div>

          <div id="top-container">
            <AddModal />
          </div>

          <div id="table-container">
            <TableList />
          </div>
      </div>
    );
  }
}


export default App;
