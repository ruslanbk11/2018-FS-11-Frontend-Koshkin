import shadowStyles from './shadow.css';

const slotName = 'message-input';

const template = `
	<style>${shadowStyles.toString()}</style>
	<form>
		<div class="result"></div>
		<span style="display: inline-flex">
			<form-input name="message_text" placeholder="Сообщение" slot="message-input">
			</form-input>
			<div slot='before'>
			</div>
			<div slot='after'>
				<div id="attach" style="align-content: center">
		        		<i id="attach" class="material-icons">attach_file</i>
            			</div>
				<div id="send" style="align-content: center">
		        		<i id="send" class="material-icons">send</i>
		    		</div>
		    	</div>
		</span>
	</form>
`;

const stateClasses = {
	withMessage: 'with-message'
};

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
		var messages = this.shadowRoot.querySelector('.result');
		this._elements = {
			form,
			messages
		};
	}

	_addHandlers () {
		this._elements.form.addEventListener('submit', this._onSubmit.bind(this));
		this._elements.form.addEventListener('keypress', this._onKeyPress.bind(this));
		this._elements.form.addEventListener('input', this._onInput.bind(this));
	}

	_onSubmit (event) {
		this._addNewMessage(this._elements.form.elements[0].value);
		//this._elements.message.innerText = this._elements.form.elements[0].value;
		event.preventDefault();
		this._elements.form.classList.remove(stateClasses.withMessage);
		return false;
	}
	
	_onInput () {
		if (this._elements.form.elements[0].value.length > 0) {
			this._elements.form.classList.add(stateClasses.withMessage);
		} else {
			this._elements.form.classList.remove(stateClasses.withMessage);
		}
	}

	_addNewMessage(message) {
		let prevListElem = this.shadowRoot.querySelector('li');
		let listElem = document.createElement('li');
		console.log(message)
		listElem.innerHTML = message;
		this._elements.messages.insertBefore(listElem, prevListElem);
		this._elements.messages.scrollTop = this._elements.messages.scrollHeight - this._elements.messages.offsetHeight;
	}

	_onKeyPress (event) {
		if (event.keyCode == 13) {
			this._elements.form.dispatchEvent(new Event('submit'));
		}
	}
}

customElements.define('message-form', MessageForm);
