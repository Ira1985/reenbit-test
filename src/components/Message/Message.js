import React, {Component} from "react";
import PropTypes from "prop-types";
import Logo from "../Interface/Logo/Logo";
import './message.scss';

class Message extends Component{
    static propTypes = {
        avatar: PropTypes.string.isRequired,
        message: PropTypes.object.isRequired,
    }
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
                            {`${new Date(message.date).getDate()}`}/
                            {`${new Date(message.date).getMonth() + 1}`}/
                            {`${new Date(message.date).getFullYear()}`.slice(2)},
                            {` ${new Date(message.date).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`}
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Message;
