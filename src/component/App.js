import React from "react";
import AddModal from '../containers/addModal';
import TableList from '../containers/Table';

class App extends React.Component {

  render(){
    return(
      <div>
          <div id="header"><h1> React Redux Crud Ant Design </h1></div>
          <div>
            <AddModal />
          </div>
          <TableList />

      </div>
    );
  }
}


export default App;
