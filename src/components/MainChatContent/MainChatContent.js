import React, {Component} from "react";
import './mainChatContent.scss';
import HeadChatList from "../HeadChatList/HeadChatList";
import ChatList from "../ChatList/ChatList";

class MainChatContent extends Component{
    constructor() {
        super();
        this.state = {
            value: '',
        }
    }
    handleText() {
        console.log('aaaaaaaaaaaaaaaaaaa');
    }
    render() {
        return (
            <div className='main-chat-content'>
                <div className='main-chat-content__chat-list'>
                    <HeadChatList/>
                    <h2 className='main-chat-content__chat-list__h2'>Chats</h2>
                    <ChatList/>
                </div>
                <div className='main-chat-content__conversation'>
                    ABC-1234
                </div>
            </div>
        )
    }
}

export default MainChatContent;