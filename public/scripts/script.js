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

/////////////////////////////////////////////////////////////////////////////////

let searchForAuthor;
let authorList;
let matchAuthor;
let regexAuthor;
let counterArrayAuthor = [];

function searchAuthor(event) {
  searchForAuthor = event.target.value.toLowerCase();

  for(let i = 0; i < document.querySelectorAll('.select-author').length; i++) {

    authorList = document.querySelectorAll('.select-author')[i].textContent.toLowerCase();

    regexAuthor = new RegExp("^" + searchForAuthor + ".*");
    matchAuthor = authorList.match(regexAuthor);

    if(matchAuthor){
      selectRow = document.querySelectorAll('.selectRow');
      selectRow[i].style.display = '';
      counterArrayAuthor.push(selectRow[i]);
    } else {
      document.querySelectorAll('.selectRow')[i].style.display = 'none';
    }
  } 
  for(let x = 0; x < counterArrayAuthor.length; x += 2){
    counterArrayAuthor[x].style.backgroundColor = '#E7E7E7';
  }

  for(let y = 1; y < counterArrayAuthor.length; y += 2){
    counterArrayAuthor[y].style.backgroundColor = 'white';
  }

  counterArrayAuthor = [];

}