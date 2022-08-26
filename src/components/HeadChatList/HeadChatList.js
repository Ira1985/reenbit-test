import React, {Component} from "react";
import './headChatList.scss';
import Input from "../Interface/Input/Input";
import Logo from "../Interface/Logo/Logo";

class HeadChatList extends Component{
    constructor() {
        super();
    }
    render() {
        return (
            <div className='head-chat-list'>
                <Logo/>
                <Input
                    name='search'
                    type='text'
                    value={this.value}
                    labelText='Search or start new chat'
                    onChange={this.handleText}
                />
            </div>
        )
    }
}

export default HeadChatList;