document.getElementById('year').textContent = new Date().getFullYear();

const promptText = "whoami --trader";
const promptEl = document.getElementById('promptText');
let i = 0;
function typeChar(){
  if (i <= promptText.length){
    promptEl.textContent = promptText.slice(0, i);
    i++;
    setTimeout(typeChar, 55);
  }
}
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  promptEl.textContent = promptText;
} else {
  typeChar();
}
