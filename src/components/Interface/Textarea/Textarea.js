import React, {Component} from "react";
import PropTypes from "prop-types";
import './textarea.scss';

class Textarea extends Component{
    static propTypes = {
        name: PropTypes.string.isRequired,
        labelText: PropTypes.string,
        sendMessage: PropTypes.func.isRequired,
    }
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }
    click() {
        const {sendMessage} = this.props;
        const {value} = this.state;
        sendMessage(value);
        this.setState({
            value: ''
        })
    }
    onChange(e) {
        this.setState({
            value: e.target.value
        })
    }
    render() {
        const {name, labelText} = this.props;
        const {value} = this.state;
        return (
            <div className='textarea'>
                <textarea
                    id={name}
                    className='textarea__body'
                    name={name}
                    placeholder={labelText}
                    value={value}
                    onChange={(e) => this.onChange(e)}
                />
                <button className='textarea__button' onClick={() => this.click()}/>
            </div>
        )
    }
}

export default Textarea;
