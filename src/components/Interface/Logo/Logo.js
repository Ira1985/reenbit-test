import React, {Component} from "react";
import './logo.scss';

class Logo extends Component {
    constructor() {
        super();
    }
    render() {
        return <img src='https://i.pinimg.com/236x/09/27/d2/0927d2faa1df965115a0df12b8333f5d.jpg' className='logo' alt="logo" />
    }
}

export default Logo;