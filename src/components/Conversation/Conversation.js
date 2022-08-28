import React, {Component} from "react";
import './conversation.scss';
import Logo from "../Interface/Logo/Logo";
import Textarea from "../Interface/Textarea/Textarea";
import Message from "../Message/Message";
import {messages} from "../../constants/messages";

class Conversation extends Component{
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
        }
    }

    componentDidMount() {
        this.findCurrentConversation();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.chat.id !== prevProps.chat.id) {
            this.findCurrentConversation();
        }
    }

    findCurrentConversation() {
        const {chat} = this.props;
        let message = messages.find(message => message.id === chat?.id);
        this.setState({
            messages: message ? message.message : []
        })
    }

    createNewMessage(text, isOwner) {
        const {messages} = this.state;
        let newMessagesList = messages;
        const message = {
            id: messages.length + 1,
            owner: isOwner,
            message: text,
            date: new Date(),
        };
        newMessagesList.push(message);
        this.setState({
            messages: newMessagesList,
        });
    }

    async getAnswer() {
        await fetch('https://api.chucknorris.io/jokes/random')
            .then(response => response.json())
            .then(json => {
                setTimeout((text, isOwner) => this.createNewMessage(text, isOwner), 10000, json.value, false);
            });
    }

    sendMessage(messageText) {
        this.createNewMessage(messageText, true);
        this.getAnswer();
    }

    render() {
        const {chat} = this.props;
        const {messages} = this.state;
        return (
            <div className='conversation'>
                <header className='conversation-header'>
                    <Logo imageUrl={chat.avatar}/>
                    <h4>{`${chat.firstName} ${chat.lastName}`}</h4>
                </header>
                <main className='conversation-main'>
                    {messages.map(message => <Message key={message.id} avatar={chat.avatar} message={message}/>)}
                </main>
                <footer className='conversation-footer'>
                    <Textarea
                        name='message'
                        labelText='Type your message'
                        sendMessage={(value) => this.sendMessage(value)}
                    />
                </footer>
            </div>
        )
    }
}

export default Conversation;