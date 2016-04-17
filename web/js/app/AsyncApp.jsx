import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Header from './Header.jsx'
import Sidebar from './Sidebar.jsx'
import Main from './Main.jsx'

class AsyncApp extends Component {
  render(){
    const { user, activeRooms, roomName , rooms} = this.props;
    return (
      <div className="app app-header-fixed app-aside-fixed">
        <Header user={user} roomName={roomName}/>
        <Sidebar activeRooms={activeRooms} roomList={rooms} roomName={roomName}/>
        <Main />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.initial.user,
    activeRooms: state.initial.activeRooms,
    roomName: state.initial.roomName,
    rooms: state.rooms
  }
}

export default connect(mapStateToProps)(AsyncApp)
