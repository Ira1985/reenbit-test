import React, {Component} from "react";
import './logo.scss';

class Logo extends Component {
    constructor() {
        super();
    }
    render() {
        return <img src='../../../stich.jpg' className='logo' alt="logo" />
    }
}

export default Logo;