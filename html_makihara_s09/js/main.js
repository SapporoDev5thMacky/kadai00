// jsを記述する際はここに記載していく
var delayTime = 0.1;
var elm = document.getElementById("text");
var text = elm.innerHTML;
elm.innerHTML = "";
for(let i = 0; i < text.length; i++){
  const span = document.createElement('span');
  const node = document.createTextNode(text[i]);
  span.appendChild(node);
  span.style.animationDelay = delayTime * i + 's';
  elm.appendChild(span);
}