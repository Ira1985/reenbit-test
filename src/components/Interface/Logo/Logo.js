import React, {Component} from "react";
import PropTypes from "prop-types";
import './logo.scss';

class Logo extends Component {
    static propTypes = {
        imageUrl: PropTypes.string.isRequired,
    }
    constructor(props) {
        super(props);
    }
    render() {
        const { imageUrl } = this.props;
        return <img src={imageUrl ? imageUrl : 'https://i0.wp.com/www.artstation.com/assets/default_avatar.jpg'} className='logo' alt="logo" />
    }
}

export default Logo;
