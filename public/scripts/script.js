let searchTitleVar;
let selectTitleVar;

function searchTitle(event) { 
  searchTitleVar = event.target.value.toLowerCase();

  for(let i = 0; i < document.querySelectorAll('#select-title').length; i++) {

    selectTitleVar = document.querySelectorAll('#select-title')[i].textContent.toLowerCase();

    if(searchTitleVar === selectTitleVar){
      console.log(searchTitleVar);
    }
  }
}