import React, {Component} from 'react';
import UserListItem from './UserListItem.jsx';
import { connect } from 'react-redux';
import Immutable from 'immutable'


class UserListBox extends Component {
  render(){
    return <div id="rightcol" className="col w-md lter b-l hidden-sm hidden-xs">
      <div id="userlistparent" className="vbox">
        <div className="row-row">
          <div className="cell scrollable hover">
            <div className="cell-inner">
              <div role="tabpanel" className="tab-pane active" id="tab-1">
                <div id='modparent' className="wrapper-md m-b-n-md">
                  <div className="m-b-sm text-md">Mods</div>
                  <ul id='modlist' className="list-group no-bg no-borders pull-in m-b-sm">
                  </ul>
                </div>
                <div id='onlineparent' className="wrapper-md m-b-n-md">
                  <div className="m-b-sm text-md">Here Now</div>
                  <ul id='onlinelist' className="list-group no-bg no-borders pull-in m-b-sm">
                    {
                      this.props.members.filter((member) => member.get('online', false))
                        .map((member) => <UserListItem user={member} />)
                    }
                  </ul>
                </div>
                <div className="wrapper-md">
                  <div className="m-b-sm text-md">All Users</div>
                  <ul id='userlist' className="list-group no-bg no-borders pull-in m-b-sm">
                    {
                      this.props.members.filter((member) => !member.get('online', false))
                        .map((member) => <UserListItem user={member} />)
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}

UserListBox.defaultProps = {
  members: []
};

function mapStateToProps(state) {
  let roomName = state.getIn(['initial', 'roomName']);
  let roomMemberList = state.getIn(['members', roomName], Immutable.List());

  return {
    members: roomMemberList.map((username) => state.getIn(['users', username]))
  }
}

export default connect(mapStateToProps)(UserListBox)