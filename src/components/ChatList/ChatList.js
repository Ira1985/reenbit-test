import React, {Component} from "react";
import './chatList.scss';
import Chat from "../Chat/Chat";

class ChatList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            checkedChatId: 0,
        }
    }
    checkChat(id) {
        this.setState({
            checkedChatId: id
        })
        const { checkChat } = this.props;
        checkChat(id);
    }
    render() {
        const { checkedChatId } = this.state;
        const { contacts } = this.props;

        return (
            <div className='chat-list'>
                {contacts.map(contact => <Chat chat={contact} checkedChatId={checkedChatId} key={contact.id} click={(id) => this.checkChat(id)}/>)}
            </div>
        )
    }

}

export default ChatList;