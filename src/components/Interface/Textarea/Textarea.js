import React, {Component} from "react";
import './textarea.scss';

class Textarea extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        const {value, name, labelText, type, onChange} = this.props
        return (
            <div className='textarea'>
                <textarea
                    id={name}
                    className='textarea__body'
                    name={name}
                    placeholder={labelText}
                    value={value}
                    onChange={(e) => onChange(e)}
                />
            </div>
        )
    }
}

export default Textarea;