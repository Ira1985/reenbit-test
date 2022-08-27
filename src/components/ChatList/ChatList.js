import React, {Component} from "react";
import './chatList.scss';
import Chat from "../Chat/Chat";
import {contacts} from "../../constants/chatList";

class ChatList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
            checkedChatId: 0,
        }
    }
    componentDidMount() {
        this.setState({
            contacts
        })
    }
    checkChat(id) {
        this.setState({
            checkedChatId: id
        })
        const { checkChat } = this.props;
        checkChat(id);
    }
    render() {
        const { contacts, checkedChatId } = this.state;

        return (
            <div className='chat-list'>
                {contacts.map(contact => <Chat chat={contact} checkedChatId={checkedChatId} key={contact.id} click={(id) => this.checkChat(id)}/>)}
            </div>
        )
    }

}

export default ChatList;