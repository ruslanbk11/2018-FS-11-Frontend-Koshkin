const say = function say() {
  let d = document.createElement('div');
  let content = document.createTextNode('Hello World');
  d.className = "block";
  d.appendChild(content); 
  document.body.appendChild(d);
};

export default say;
