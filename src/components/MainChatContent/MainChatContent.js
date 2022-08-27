import React, {Component} from "react";
import './mainChatContent.scss';
import HeadChatList from "../HeadChatList/HeadChatList";
import ChatList from "../ChatList/ChatList";
import Conversation from "../Conversation/Conversation";
import {contacts} from "../../constants/chatList";

class MainChatContent extends Component{
    constructor() {
        super();
        this.state = {
            chat: null,
        }
    }
    handleText() {
        console.log('aaaaaaaaaaaaaaaaaaa');
    }
    checkChat(id) {
        const chat = contacts.find(contact => contact.id === id);
        this.setState({
            chat
        })
    }
    render() {
        const { chat } = this.state;
        return (
            <div className='main-chat-content'>
                <div className='main-chat-content__chat-list'>
                    <HeadChatList/>
                    <h2 className='main-chat-content__chat-list__h2'>Chats</h2>
                    <ChatList checkChat={(id) => this.checkChat(id)}/>
                </div>
                <div className='main-chat-content__conversation'>
                    {chat ? <Conversation chat={chat}/> : <></>}
                </div>
            </div>
        )
    }
}

export default MainChatContent;