import React, {Component} from "react";
import './conversation.scss';
import Logo from "../Interface/Logo/Logo";
import Textarea from "../Interface/Textarea/Textarea";
import Message from "../Message/Message";

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
        const {chat, messages} = this.props;
        let message = messages.find(message => message.id === chat?.id);
        this.setState({
            messages: message ? message.message : []
        })
    }

    saveNewMessage(text, isOwner, prevChatId) {
        const {messages} = this.state;
        const {changeChat, chat} = this.props;
        let newMessagesList = messages.slice();
        const message = {
            id: messages.length + 1,
            owner: isOwner,
            message: text,
            date: new Date(),
        };
        if(!prevChatId || prevChatId === chat.id) {
            newMessagesList.push(message);
            this.setState({
                messages: newMessagesList,
            });
        }
        changeChat(message, prevChatId);
    }

    async getAnswer() {
        const {chat} = this.props;
        await fetch('https://api.chucknorris.io/jokes/random')
            .then(response => response.json())
            .then(json => {
                setTimeout((text, isOwner, prevChat) => {
                    this.saveNewMessage(text, isOwner, prevChat);
                }, 10000, json.value, false, chat.id);
            });
    }

    sendMessage(messageText) {
        this.saveNewMessage(messageText, true);
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