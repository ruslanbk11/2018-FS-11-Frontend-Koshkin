import styles from './index.css';
import shadowStyles from './shadow.css';

const template = `
	<style>${shadowStyles.toString()}</style>
	<slot name='before' />
	<input />
	<slot name='after'></slot>
`;


class FormInput extends HTMLElement {
	constructor () {
		super();
		const shadowRoot = this.attachShadow({mode: 'open'});
		shadowRoot.innerHTML = template;
		this._initElements();
		this._addHandlers();
	}

	static get observedAttributes() {
		return [
			"name",
			"placeholder",
			"value",
			"disabled"
		]
	}

	attributeChangedCallback(attrName, oldVal, newVal) {
		this.elements.input[attrName] = newVal;
	}

	_initElements () {
		var hiddenInput = document.createElement('input');
		var input = this.shadowRoot.querySelector('input');

		this.appendChild(hiddenInput);
		this.elements = {
			input: input,
			hiddenInput: hiddenInput
		};
	}

	_addHandlers () {
		this.elements.input.addEventListener('input', this._onInput.bind(this));
		this.elements.input.addEventListener('keypress', this._onKeyPress.bind(this));
	}

	_onInput () {
		this.elements.hiddenInput.value = this.elements.input.value;
		this.elements.hiddenInput.dispatchEvent(new InputEvent('input'));
		this.value = this.elements.input.value;
	}

	_onKeyPress (event) {
		if (event.keyCode == 13) {
			this.elements.input.value = '';
		}
	}
}

customElements.define('form-input', FormInput);
