let selectRow = document.querySelectorAll('.selectRow');

let searchForTitle;
let titleList;
let matchTitle;
let regexTitle;
let titleSearch = document.querySelector('#search-title');

let searchForAuthor;
let authorList;
let matchAuthor;
let regexAuthor;
let authorSearch = document.querySelector('#search-author');


function searchMashup() {

  searchForTitle = titleSearch.value.toLowerCase();
  searchForAuthor = authorSearch.value.toLowerCase();

  for(let i = 0; i < document.querySelectorAll('.select-title').length; i++) {

    titleList = document.querySelectorAll('.select-title')[i].textContent.toLowerCase();

    regexTitle = new RegExp("^" + searchForTitle + ".*");
    matchTitle = titleList.match(regexTitle);

    if(matchTitle){
      selectRow[i].style.display = '';
    } else {
      selectRow[i].style.display = 'none';
    }

    authorList = document.querySelectorAll('.select-author')[i].textContent.toLowerCase();

    regexAuthor = new RegExp("^" + searchForAuthor + ".*");
    matchAuthor = authorList.match(regexAuthor);

    if(!matchAuthor){
      selectRow[i].style.display = 'none';
    }
  } 
}