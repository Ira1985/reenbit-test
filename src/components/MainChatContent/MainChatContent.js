import React, {Component} from "react";
import './mainChatContent.scss';
import HeadChatList from "../HeadChatList/HeadChatList";
import ChatList from "../ChatList/ChatList";
import Conversation from "../Conversation/Conversation";
import {contacts} from "../../constants/chatList";
import {messages} from "../../constants/messages";

class MainChatContent extends Component{
    constructor() {
        super();
        this.state = {
            contacts: [],
            allUsersMessages: [],
            chat: null,
        }
    }
    componentDidMount() {
        this.setState(() => {
            let newState = {};
            if (localStorage.getItem('contacts')) {
                newState.contacts = this.sortChatsByDate(JSON.parse(localStorage.getItem('contacts')))
            } else {
                newState.contacts = this.sortChatsByDate(contacts)
            }
            if (localStorage.getItem('messages')) {
                newState.allUsersMessages = JSON.parse(localStorage.getItem('messages'))
            } else {
                newState.allUsersMessages = messages
            }
            return newState;
        })
    }
    checkChat(id) {
        const chat = contacts.find(contact => contact.id === id);
        this.setState({
            chat
        })
    }
    sortChatsByDate(contacts) {
        return contacts.sort((contacts_1, contacts_2) => {
            return new Date(contacts_2.lastMessageDate) - new Date(contacts_1.lastMessageDate);
        })
    }
    changeChatsList(message, prevChatId) {
        const { chat, contacts } = this.state;
        let newContacts = contacts.slice();
        let newChat = null;
        let index_contact = newContacts.findIndex(contact => {
            newChat = {...contact};
            if (prevChatId) {
                return contact.id === prevChatId
            }
            return contact.id === chat.id
        });
        newChat.lastMessageText = message.message;
        newChat.lastMessageDate = message.date;
        newContacts.splice(index_contact, 1, newChat);
        newContacts = this.sortChatsByDate(newContacts);
        this.setState({
            contacts: newContacts
        })
        localStorage.setItem('contacts', JSON.stringify(newContacts));
    }
    changeMessagesList(message, prevChatId) {
        const { chat, allUsersMessages } = this.state;
        let newMessages = allUsersMessages.slice();
        let newMessage = null;
        let index_message = newMessages.findIndex(message => {
            newMessage = {...message};
            if (prevChatId) {
                return message.id === prevChatId
            }
            return message.id === chat.id
        });
        newMessage.message.push(message);
        newMessages.splice(index_message, 1, newMessage);
        localStorage.setItem('messages', JSON.stringify(allUsersMessages));
    }
    changeChat(message, prevChatId) {
        this.changeChatsList(message, prevChatId);
        this.changeMessagesList(message, prevChatId);
    }
    render() {
        const { chat, contacts, allUsersMessages } = this.state;
        return (
            <div className='main-chat-content'>
                <div className='main-chat-content__chat-list'>
                    <HeadChatList/>
                    <h2 className='main-chat-content__chat-list__h2'>Chats</h2>
                    <ChatList contacts={contacts} checkChat={(id) => this.checkChat(id)}/>
                </div>
                <div className='main-chat-content__conversation'>
                    {chat ? <Conversation changeChat={(message, prevChatId) => this.changeChat(message, prevChatId)} chat={chat} messages={allUsersMessages}/> : <></>}
                </div>
            </div>
        )
    }
}

export default MainChatContent;