import React, {Component} from "react";
import './input.scss';

class Input extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        const {value, name, labelText, type, onChange} = this.props
        return (
            <div className='input'>
                <input
                    id={name}
                    className='input__body'
                    name={name}
                    placeholder={labelText}
                    type={type}
                    value={value}
                    onChange={(e) => onChange(e)}
                />
            </div>
        )
    }
}

export default Input;