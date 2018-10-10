const say = function () {
		var d = document.createElement('div');
		var content = document.createTextNode('Hello World');
		d.appendChild(content);
		d.style.width='200px';
		d.style.height='100px';
		d.style.background='red';
		document.body.appendChild(d);
};

export default say;
