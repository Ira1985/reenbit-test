import React, {Component} from "react";
import './chatList.scss';
import Chat from "../Chat/Chat";
import {contacts} from "../../constants/chatList";

class ChatList extends Component{
    constructor() {
        super();
        this.state = {
            contacts: [],
        }
    }
    componentDidMount() {
        this.setState({
            contacts
        })
    }
    render() {
        const { contacts } = this.state;
        return (
            <div className='chat-list'>
                {contacts.map(contact => <Chat chat={contact} key={contact.id}/>)}
            </div>
        )
    }

}

export default ChatList;