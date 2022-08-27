import React, {Component} from "react";
import './conversation.scss';
import Logo from "../Interface/Logo/Logo";
import Textarea from "../Interface/Textarea/Textarea";
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
                    {messages.map(message => <p>{message.message}</p>)}
                </main>
                <footer className='conversation-footer'>
                    <Textarea
                        name='message'
                        value={this.value}
                        labelText='Type your message'
                        onChange={this.handleText}
                    />
                </footer>
            </div>
        )
    }
}

export default Conversation;