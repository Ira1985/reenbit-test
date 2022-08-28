import React, {Component} from "react";
import Logo from "../Interface/Logo/Logo";
import './message.scss';

class Message extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        const { message, avatar } = this.props;
        return (
            <div className={`message${message.owner ? ' my' : ''}`}>
                {!message.owner ? <Logo imageUrl={avatar}/> : <></>}
                <div>
                    <div className={`message-block${message.owner ? ' my' : ''}`}>
                        <span>{message.message}</span>
                    </div>
                    <div className='message-time'>
                        <span>
                            {`${message.date.getDate()}`}/
                            {`${message.date.getMonth() + 1}`}/
                            {`${message.date.getFullYear()}`.slice(2)},
                            {` ${message.date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`}
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Message;