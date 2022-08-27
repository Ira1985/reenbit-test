import React, {Component} from "react";
import './conversation.scss';
import Logo from "../Interface/Logo/Logo";
import Textarea from "../Interface/Textarea/Textarea";

class Conversation extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const {chat} = this.props;
        return (
            <div className='conversation'>
                <header className='conversation-header'>
                    <Logo imageUrl={chat.avatar}/>
                    <h4>{`${chat.firstName} ${chat.lastName}`}</h4>
                </header>
                <main className='conversation-main'>B</main>
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