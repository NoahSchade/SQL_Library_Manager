let searchForTitle;
let titleList;
let match;
let regex;
let counterArray = [];

function searchTitle(event) {
  searchForTitle = event.target.value.toLowerCase();

  for(let i = 0; i < document.querySelectorAll('.select-title').length; i++) {

    titleList = document.querySelectorAll('.select-title')[i].textContent.toLowerCase();

    regex = new RegExp("^" + searchForTitle + ".*");
    match = titleList.match(regex);

    if(match){
      selectRow = document.querySelectorAll('.selectRow');
      selectRow[i].style.display = '';
      counterArray.push(selectRow[i]);
    } else {
      document.querySelectorAll('.selectRow')[i].style.display = 'none';
    }
  } 
  for(let x = 0; x < counterArray.length; x += 2){
    counterArray[x].style.backgroundColor = '#E7E7E7';
  }

  for(let y = 1; y < counterArray.length; y += 2){
    counterArray[y].style.backgroundColor = 'white';
  }

  counterArray = [];

}