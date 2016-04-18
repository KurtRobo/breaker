import * as actions from '../constants/socket-constants.js';

const MESSAGE_TYPE_ROOM_LIST = "roomlist";
const MESSAGE_TYPE_MESSAGE = "message";
const MESSAGE_TYPE_SERVER = "servermessage";
const MESSAGE_TYPE_JOIN = "join";
const MESSAGE_TYPE_LEAVE = "leave";
const MESSAGE_TYPE_MEMBERS = "memberlist";

export function onSocketMessage(message) {
  switch(message.type){
    case MESSAGE_TYPE_ROOM_LIST:
      return { type: actions.SOCK_ROOM_LIST, message };
    case MESSAGE_TYPE_MESSAGE:
      return { type: actions.SOCK_MESSAGE, message};
    case MESSAGE_TYPE_SERVER:
      return { type: actions.SOCK_SERVER, message};
    case MESSAGE_TYPE_JOIN:
      return { type: actions.SOCK_JOIN, message};
    case MESSAGE_TYPE_LEAVE:
      return { type: actions.SOCK_LEAVE, message};
    case MESSAGE_TYPE_MEMBERS:
      return { type: actions.SOCK_MEMBERS, message};
    default:
      return { type: actions.SOCK_UNKNOWN, message };
  }
}

export function onSocketOpen(firstConnect) {
  return { type: actions.SOCK_OPEN, firstConnect };
}

export function onSocketClose(message) {
  return { type: actions.SOCK_CLOSE, message };
}