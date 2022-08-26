import React, {Component} from "react";
import './mainChatContent.scss';
import HeadChatList from "../HeadChatList/HeadChatList";

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
                </div>
                <div className='main-chat-content__conversation'>
                    ABC
                </div>
            </div>
        )
    }
}

export default MainChatContent;