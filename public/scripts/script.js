function searchTitle(event) { 
  console.log(event.target.value);
}

for(let i = 0; i < document.querySelectorAll('#select-title').length; i++) {
  console.log(document.querySelectorAll('#select-title')[i].textContent.toLowerCase());
}