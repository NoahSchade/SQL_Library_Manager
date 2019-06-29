let searchForTitle;
let titleList;
let matchTitle;
let regexTitle;
let counterArrayTitle = [];

function searchTitle(event) {
  searchForTitle = event.target.value.toLowerCase();

  for(let i = 0; i < document.querySelectorAll('.select-title').length; i++) {

    titleList = document.querySelectorAll('.select-title')[i].textContent.toLowerCase();

    regexTitle = new RegExp("^" + searchForTitle + ".*");
    matchTitle = titleList.match(regexTitle);

    if(matchTitle){
      selectRow = document.querySelectorAll('.selectRow');
      selectRow[i].style.display = '';
      counterArrayTitle.push(selectRow[i]);
    } else {
      document.querySelectorAll('.selectRow')[i].style.display = 'none';
    }
  } 
  for(let x = 0; x < counterArrayTitle.length; x += 2){
    counterArrayTitle[x].style.backgroundColor = '#E7E7E7';
  }

  for(let y = 1; y < counterArrayTitle.length; y += 2){
    counterArrayTitle[y].style.backgroundColor = 'white';
  }

  counterArrayTitle = [];

}