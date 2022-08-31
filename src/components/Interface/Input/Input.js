import React, {Component} from "react";
import PropTypes from "prop-types";
import './input.scss';

class Input extends Component{
    static propTypes = {
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        labelText: PropTypes.string,
        onChange: PropTypes.func.isRequired,
    }
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }
    handleText(e) {
        const {onChange} = this.props;
        this.setState({
            value: e.target.value,
        })
        onChange(e.target.value)
    }
    render() {
        const {name, labelText, type} = this.props;
        const {value} = this.state;
        return (
            <div className='input'>
                <input
                    id={name}
                    className='input__body'
                    name={name}
                    placeholder={labelText}
                    type={type}
                    value={value}
                    onChange={(e) => this.handleText(e)}
                />
            </div>
        )
    }
}

export default Input;
