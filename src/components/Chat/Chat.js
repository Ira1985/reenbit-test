import React, {Component} from "react";
import PropTypes from "prop-types";
import './chat.scss';
import Logo from "../Interface/Logo/Logo";

class Chat extends Component{
    static propTypes = {
        chat: PropTypes.object.isRequired,
        checkedChatId: PropTypes.number.isRequired,
        click: PropTypes.func.isRequired,
    }
    constructor(props) {
        super(props);
    }
    render() {
        const { chat, click, checkedChatId } = this.props;
        return (
            <div className={`chat${checkedChatId === chat.id ? ' checked' : ''}`} onClick={() => click(chat.id)}>
                <Logo
                    imageUrl={chat.avatar}
                />

                <div className='chat__info'>
                    <div className='chat__info-text'>
                        <p className='chat__info-text-name'>{chat.firstName} {chat.lastName}</p>
                        {
                            chat.lastMessageText ? <span className='chat__info-text-message'>
                                {chat.lastMessageText.length < 99 ? chat.lastMessageText : `${chat.lastMessageText.slice(0, 99)}........`}
                            </span> : <></>
                        }
                    </div>
                    <div className='chat__info-data'>
                        {
                            chat.lastMessageDate ? <span>
                            {`${new Date(chat.lastMessageDate).toLocaleString('default', { month: 'long' }).slice(0, 3)}
                            ${new Date(chat.lastMessageDate).getDate()},
                            ${new Date(chat.lastMessageDate).getFullYear()}`}
                        </span> : <></>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Chat
