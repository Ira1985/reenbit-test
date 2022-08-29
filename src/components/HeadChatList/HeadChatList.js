import React, {Component} from "react";
import './headChatList.scss';
import Input from "../Interface/Input/Input";
import Logo from "../Interface/Logo/Logo";

class HeadChatList extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        const {searchContacts} = this.props
        return (
            <div className='head-chat-list'>
                <Logo/>
                <Input
                    name='search'
                    type='text'
                    value={this.value}
                    labelText='Search or start new chat'
                    onChange={(value) => searchContacts(value)}
                />
            </div>
        )
    }
}

export default HeadChatList;