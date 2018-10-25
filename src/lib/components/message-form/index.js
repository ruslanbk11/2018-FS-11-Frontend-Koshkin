import shadowStyles from './shadow.css';

const slotName = 'message-input';

const template = `
	<style>${shadowStyles.toString()}</style>
	<form>
		<div class="result"></div>
		<span style="display: inline-flex">
			<form-input name="message_text" placeholder="Сообщение" slot="message-input">
				<span slot="icon"></span>
			</form-input>
			<div id="firsticon" style="align-content: center">
		        	<i id="1" class="material-icons">send</i>
		    	</div>
		        <div id="secondicon" style="align-content: center">
		        	<i id="secondicon" class="material-icons">attach_file</i>
            		</div>
		</span>
	</form>
`;

class MessageForm extends HTMLElement {
	constructor () {
		super();
		const shadowRoot = this.attachShadow({mode: 'open'});
		shadowRoot.innerHTML = template;
		this._initElements();
		this._addHandlers();
	}

	static get observedAttributes() {
		return [
			"action",
			"method"
		]
	}

	attributeChangedCallback(attrName, oldVal, newVal) {
		this._elements.form[attrName] = newVal;
	}

	_initElements () {
		var form = this.shadowRoot.querySelector('form');
		var message = this.shadowRoot.querySelector('.result');
		this._elements = {
			form: form,
			message: message
		};
	}

	_addHandlers () {
		this._elements.form.addEventListener('submit', this._onSubmit.bind(this));
		this._elements.form.addEventListener('keypress', this._onKeyPress.bind(this));
	}

	_onSubmit (event) {
		this._elements.message.innerText = this._elements.form.elements[0].value;
		event.preventDefault();
		return false;
	}

	_onKeyPress (event) {
		if (event.keyCode == 13) {
			this._elements.form.dispatchEvent(new Event('submit'));
		}
	}
}

customElements.define('message-form', MessageForm);
