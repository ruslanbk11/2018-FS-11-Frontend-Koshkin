import shadowStyles from './shadow.css';
import AttachFileForm from './attach-form/attach-file-button';
import GeoForm from  './geo-form/geo-form';
import DragAndDropZone from '../drag-n-drop/drag-n-drop';

const attachForm = new AttachFileForm;
const geoForm = new GeoForm;
const dropZone = new DragAndDropZone;

const template = `
	<style>${shadowStyles.toString()}</style>
	<form>
		<ul class="result"></ul>
		<span>
		    <geo-form></geo-form>
		    <form-input name="message_text" placeholder="Cообщение" slot="message-input">
				</form-input>
				<div slot='before'>
				</div>
				<div slot='after'>
		    	<div id="send">
		        	<i id="send" class="material-icons">send</i>
		    	</div>
				</div>
        </span>
				<drop-zone></drop-zone>
	</form>
`;

const stateClasses = {
	withMessage: 'with-message'
};

class MessageForm extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = template;
    let fi = shadowRoot.querySelector('span');
    fi.appendChild(attachForm);
    this._initElements();
    this._addHandlers();
    //this._addStyles();
  }

    _initElements() {
        const form = this.shadowRoot.querySelector('form');
        const messages = this.shadowRoot.querySelector('.result');
				var sendButton = this.shadowRoot.querySelector('div#send');
        const attachments = attachForm.elements.attachments;
        const userCoords = geoForm.elements.userPosition;


        this.elements = {
            form,
            messages,
						sendButton,
            attachments,
            userCoords,

        };
    }

    /*_addStyles() {
        this.style.display = 'block';
        this.style.width = '100%';
        this.style.position = 'absolute';
        this.style.bottom = '0px';
        this.style.height = 'calc(100% - 60px)';
    }*/

    _addHandlers() {
        this.elements.form.addEventListener('submit', this._onSubmit.bind(this));
        this.elements.form.addEventListener('keypress', this._onKeyPress.bind(this));
        this.elements.form.addEventListener('new-attachment', this._onNewAttachment.bind(this));
        this.elements.form.addEventListener('coordinate-message', this._onCoordinateMessage.bind(this));
        this.elements.form.addEventListener('drop-file', this._onDropFile.bind(this));
				this.elements.form.addEventListener('input', this._onInput.bind(this));
				this.elements.sendButton.addEventListener('click', this._onClick.bind(this));
  }

    _onDropFile(event) {
        this._addNewMessage(event.detail);
    }

    _onCoordinateMessage(event) {
        this._addNewMessage(event.detail);
    }

    _onNewAttachment(event) {
        this._addNewMessage(event.detail);
    }

    _onSubmit(event) {
        this._addNewMessage(this.elements.form.elements[0].value);
        event.preventDefault();
				//this.elements.form.classList.remove(stateClasses.withMessage);
        return false;
    }

    _addNewMessage(message) {
      let prevListElem = this.shadowRoot.querySelector('li');
      let listElem = document.createElement('li');
      console.log(message);
      listElem.innerHTML = message;
      this.elements.messages.insertBefore(listElem, prevListElem);
			this.elements.form.classList.remove(stateClasses.withMessage);
			this.elements.messages.scrollTop = this._elements.messages.scrollHeight - this._elements.messages.offsetHeight;
    }

		_onClick () {
			this.elements.form.dispatchEvent(new Event('submit'));
		}

		_onInput () {
			if (this.elements.form.elements[0].value.length > 0) {
				this.elements.form.classList.add(stateClasses.withMessage);
			} else {
				this.elements.form.classList.remove(stateClasses.withMessage);
			}
		}

    _onKeyPress(event) {
        if (event.keyCode === 13) {
            this.elements.form.dispatchEvent(new Event('submit'));
        }
    }
}

customElements.define('message-form', MessageForm);
