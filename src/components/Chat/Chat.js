import React, {Component} from "react";
import './chat.scss';
import Logo from "../Interface/Logo/Logo";

class Chat extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        const { chat } = this.props
        return (
            <div className='chat'>
                <Logo
                    imageUrl={chat.avatar}
                />

                <div className='chat__info'>
                    <div className='chat__info-text'>
                        <p className='chat__info-text-name'>{chat.firstName} {chat.lastName}</p>
                        <span className='chat__info-text-message'>{chat.lastMessageText}</span>
                    </div>
                    <div className='chat__info-data'>
                        <span>
                            {`${chat.lastMessageDate.toLocaleString('default', { month: 'long' }).slice(0, 3)}
                            ${chat.lastMessageDate.getDate()},
                            ${chat.lastMessageDate.getFullYear()}`}
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Chat