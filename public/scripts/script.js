let selectRow = document.querySelectorAll('.selectRow');
let rowArray = [];
let index;

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

let searchForGenre;
let genreList;
let matchGenre;
let regexGenre;
let genreSearch = document.querySelector('#search-genre');

let searchForYear;
let yearList;
let matchYear;
let regexYear;
let yearSearch = document.querySelector('#search-year');

let spaceForButtons = document.querySelector(".spaceForButtons");
let paginationButtons = [];
let displayedRow = [];

searchMashup()

function searchMashup() {

  searchForTitle = titleSearch.value.toLowerCase();
  searchForAuthor = authorSearch.value.toLowerCase();
  searchForGenre = genreSearch.value.toLowerCase();
  searchForYear = yearSearch.value.toLowerCase();

  for(let i = 0; i < document.querySelectorAll('.select-title').length; i++) {

    titleList = document.querySelectorAll('.select-title')[i].textContent.toLowerCase();

    regexTitle = new RegExp("^" + searchForTitle + ".*");
    matchTitle = titleList.match(regexTitle);

    if(matchTitle){
      rowArray.push(selectRow[i]);
      // selectRow[i].style.display = '';
     
    } else {

      var index = rowArray.indexOf(selectRow[i]);
      if (index > -1) {
        rowArray.splice(index, 1);
      }
      console.log(rowArray);

      // selectRow[i].style.display = 'none';
    }

    if(!rowArray[i]){
      if(rowArray[i] !== undefined){
        rowArray[i].style.display = 'none';
      }
    }

    authorList = document.querySelectorAll('.select-author')[i].textContent.toLowerCase();

    regexAuthor = new RegExp("^" + searchForAuthor + ".*");
    matchAuthor = authorList.match(regexAuthor);

    if(!matchAuthor){
      selectRow[i].style.display = 'none';
    }

    genreList = document.querySelectorAll('.select-genre')[i].textContent.toLowerCase();

    regexGenre = new RegExp("^" + searchForGenre + ".*");
    matchGenre = genreList.match(regexGenre);

    if(!matchGenre){
      selectRow[i].style.display = 'none';
    }

    yearList = document.querySelectorAll('.select-year')[i].textContent.toLowerCase();

    regexYear = new RegExp("^" + searchForYear + ".*");
    matchYear = yearList.match(regexYear);

    if(!matchYear){
      selectRow[i].style.display = 'none';
    }
  }


  pagination();
  paginationResults();

  let afterMathSelectRow = selectRow;
  let evenArray = [];
  let resultRow;

  for(let i = 0; i < afterMathSelectRow.length; i++){
    if(afterMathSelectRow[i].style.display !== 'none'){
      resultRow = afterMathSelectRow[i];
      evenArray.push(resultRow);
    }
  }
  for(let i = 0; i < evenArray.length; i += 2){
    evenArray[i].style.backgroundColor = "#E7E7E7";
  }
  for(let i = 1; i < evenArray.length; i += 2){
    evenArray[i].style.backgroundColor = "white";
  }
  evenArray = [];
}

function pagination(){
  var myNode = document.querySelector(".spaceForButtons");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }

  for(let i = 0; i < selectRow.length; i++){
    if(selectRow[i].style.display !== 'none'){
      displayedRow.push(selectRow[i]);
    }
  }

  for(let i = 0; i < (Math.ceil(rowArray.length / 10) * 10); i += 10){
    paginationButtons.push(document.createElement("BUTTON"));
  }

  for(let i = 0; i < paginationButtons.length; i++){
    spaceForButtons.appendChild(paginationButtons[i]);
    paginationButtons[i].className = "pageButtons";
    paginationButtons[i].style.display = "block";
    paginationButtons[i].style.height = "40px";
    paginationButtons[i].style.width = "40px";
    paginationButtons[i].style.position = "relative";
    paginationButtons[i].style.float = "left";
    paginationButtons[i].style.marginRight = "4px";
    paginationButtons[i].style.top = "-15px";
    paginationButtons[i].innerHTML = i + 1;
  }

  if(paginationButtons.length !== 0){
    document.querySelector('#pagesText').innerHTML = '<h2>Pages</h2>';
  } else {
    document.querySelector('#pagesText').innerHTML = '';
  }

  paginationButtons = [];
  displayedRow = [];
}

function paginationResults(){

  showResults(0);

  let pageButtons = document.querySelectorAll('.pageButtons');

  for(let i = 0; i < pageButtons.length; i++){
    pageButtons[i].addEventListener("click", function(){showResults(i)});
  }

  function showResults(num){

    for(let i = 0; i < selectRow.length; i++){
      selectRow[i].style.display = 'none'; 
    }

    for(let i = num * 10; i < num * 10 + 10; i++){
      if(rowArray[i] !== undefined){
        rowArray[i].style.display = '';
      }
    }
  }
  rowArray = [];
}