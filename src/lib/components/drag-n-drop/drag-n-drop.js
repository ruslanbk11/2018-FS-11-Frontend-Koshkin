import styles from './shadow.css';
import getReadableSize from '../../../utils/file/index'

const template = `
<style>${styles.toString()}</style>
<div class="drop_zone"></div>
`;

class DragAndDropZone extends HTMLElement {
    constructor () {
        super();
        this.innerHTML = template;
        this._initElements();
        this._addHandlers();
        this._addStyles();
    }

    _addStyles() {
        this.style.position = 'absolute';
        this.style.width = '100%';
        this.style.height = '90%';
        this.style.bottom = '10%';
    }

    _initElements() {
        const dropZone = this.querySelector('div.drop_zone');

        this.elements = {
            dropZone
        }
    }

    _addHandlers() {
        this.elements.dropZone.addEventListener('drop', this._onDrop.bind(this));
        this.elements.dropZone.addEventListener('dragover', this._onDragover.bind(this));
        this.elements.dropZone.addEventListener('dragenter', this._onDragenter.bind(this));

    }

    _onDrop(event) {
        event.preventDefault();
        let f = event.dataTransfer.files[0];
        let data;
        if (f.type === ('image/png') || f.type === ('image/jpeg') || f.type === ('image/gif')) {
            let image = document.createElement('img');
            image.src = URL.createObjectURL(f);
            image.onload = () => URL.revokeObjectURL(image.src);
            data = image['outerHTML'];
        }
        else {
            data = '<li><strong>' + f.name + '</strong> (' + f.type  + ') - ' +
            f.size + ' bytes, last modified: ' +
            f.lastModified + '</li>';
        }
        const dropEvent = new CustomEvent('drop-file', {
            bubbles: true,
            detail: data
        })
        this.dispatchEvent(dropEvent);
    }

    _onDragover(event) {
        event.preventDefault();
        return false;
    }

    _onDragenter(event) {
        event.preventDefault();
    }
}

customElements.define('drop-zone', DragAndDropZone);
export default DragAndDropZone;
