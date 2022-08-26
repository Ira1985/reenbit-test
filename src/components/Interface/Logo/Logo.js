import React, {Component} from "react";
import './logo.scss';

class Logo extends Component {
    constructor() {
        super();
    }
    render() {
        return <img src='../../../assets/icon/search.svg' className='logo' alt="logo" />
    }
}

export default Logo;