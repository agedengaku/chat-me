import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import './queries.css';

class Wrapper extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			chatInput1: "",
			chatOutput1: "Hi"
		};
		this.handleOnChange = this.handleOnChange.bind(this);
		this.handleSend = this.handleSend.bind(this);
	}
	handleOnChange(event) {
		this.setState({chatInput1: event.target.value});
	}
	handleSend() {
		this.setState({chatOutput1: this.state.chatInput1});
		this.setState({chatIinput1: ""});
	}
	render() {
		return (<div id='wrapper'><ChatWindow value={this.state.chatOutput1} /><ChatInput onChange={this.handleOnChange} value={this.state.chatInput1} /><SendButton onClick={this.handleSend} /></div>);
	}
}

const ChatWindow = (props) => {
	const createMarkup = () => { return {__html: props.value}; }	
	return (<div id={'chat-window'} dangerouslySetInnerHTML={createMarkup()}></div>);
}

const ChatInput = (props) => {
	return (<textarea id={'chat-input'} placeholder={'Enter chat here'} onChange={props.onChange} value={props.value}></textarea>);
}

const SendButton = (props) => {
	return (<button id={'send-btn'} onClick={props.onClick}>SEND</button>)
}

ReactDOM.render(<Wrapper />, document.getElementById('root'));