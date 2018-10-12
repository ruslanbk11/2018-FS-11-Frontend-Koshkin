const say = function say() {
  const d = document.createElement('div');
  const content = document.createTextNode('Hello World');
  d.className = 'block';
  d.appendChild(content);
  document.body.appendChild(d);
};

export default say;
