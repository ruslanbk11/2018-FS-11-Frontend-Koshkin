const say = function say() {
  const d = document.createElement('div');
  const content = document.createTextNode('Hello World');
  d.appendChild(content);
  d.style.width = '200px';
  d.style.height = '100px';
  d.style.background = 'red';
  document.body.appendChild(d);
};

export default say;
