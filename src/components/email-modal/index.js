import { h, Component } from 'preact';

import style from './style';

import { isNull, isEmail } from '../../utils';

import Ripple from '../../components/ripple';

const obj = {
	loading: false,
	sender: '',
	name: '',
	message: '',
	success: 'Your email is on itʼs way'
};

/** Class representing the email form modal */
class EmailModal extends Component {

	/**
    * Handles input events, sets state of input name
  */ 
	onInput = event => {
		this.setState({ [event.target.name]: event.target.value });
	}

	/**
    * Handles submit event, preforms validation and sends fetch to AWS api gateway
  */ 
	onSubmit = event => {

		if (event.preventDefault) {
			event.preventDefault();
		}

		this.setState({ errors: {}, loading: true });

		const errors = {};
		const values = {
			sender: this.state.sender,
			name: this.state.name,
			message: this.state.message || ''
		};

		if (isNull(values.sender) === true) {
			errors.sender = 'I need your email to get back to you';
		}

		if(isEmail(values.sender) === false) {
			errors.sender = 'Hmm, thatʼs not a valid email';
		}

		if (isNull(values.name) === true) {
			errors.name = 'Just need your name';
		}

		if(values.message.length > 500) {
			errors.message = 'Sorry, your message can only be 500 characters';
		}

		if (errors.sender || errors.name || errors.message) {
			return this.setState({ errors, loading: false });
		}

		fetch('https://app.mutch.co/email/mutchco', {
			body: JSON.stringify(values),
	    headers: {
	      'content-type': 'application/json',
	      'x-api-key': 't7YJ7reWp76YtyOQMClz03YJa70raMC178LMg6Ze'
	    },
	    credentials: 'include',
	    method: 'POST'
		})
		.then(response => response.json())
		.then(data => {
			if (data.success === true) {
				this.setState(obj);
				gtag('event', 'generate_lead', { email_sent: (new Date()).toString() });
			} else {
				return Promise.reject(new Error(data.message));
			}
		})
		.catch(err => {
				this.setState({
					loading: false,
					errors: {
						api: err.message
					}
				});
		});
	};

	/**
    * Render method, manipulates dom based on modal open and loading value,
    * populates validation/api errors and success messages
  */ 
	render({ open, onClose }, { sender, name, message, loading, success, errors = {} }) {

		const overlayStyle = [style.mut_overlay];
		const modalStyle = [style.mut_email_modal];

		let button = (<button type='submit' disabled={loading}>
										<Ripple />
										Send
									</button>);

		if (loading === true) {
			button = (<svg class={style.mut_spinner} width='40px' height='40px' viewBox='0 0 66 66'>
									<circle class={style.mut_path} fill='none' stroke-width='6' stroke-linecap='round' cx='33' cy='33' r='30'></circle>
								</svg>);
		}

		if (open === true) {
			overlayStyle.push(style.mut_overlay_open);
		}

		if (open === true) {
			modalStyle.push(style.mut_email_modal_open);
		}

		return (
			<div class={overlayStyle.join(' ')} id='mut_overlay' onClick={onClose}>
				<div class={modalStyle.join(' ')}>
					<form onSubmit={this.onSubmit}>

						<div class={style.mut_overlay_close} id='mut_overlay_close' onClick={onClose}>
							<Ripple />
							<svg style="width:24px;height:24px" viewBox="0 0 24 24" id='mut_overlay_close_svg'>
								<path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" id='mut_overlay_close_path' />
							</svg>
						</div>

						<h3>Whatʼs up?</h3>

						<label>Email</label>
						<input type='text' name='sender' value={sender} onInput={this.onInput} />
						<p>{errors.sender}</p>

						<label>Name</label>
						<input type='text' name='name' value={name} onInput={this.onInput} />
						<p>{errors.name}</p>

						<label>Message</label>
						<textarea name='message' value={message} onInput={this.onInput} rows='3'>{message}</textarea>
						<p>{errors.message}</p>

						{button}
						<p>{errors.api}</p>
						<p>{success}</p>

					</form>
				</div>
			</div>
		);
	}
}

export default EmailModal;