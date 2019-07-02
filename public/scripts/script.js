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

pagination();



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
  let afterMathSelectRow = document.querySelectorAll('.selectRow');
  let evenArray = [];
  let resultRow;

  for(let w = 0; w < afterMathSelectRow.length; w++){
    if(afterMathSelectRow[w].style.display !== 'none'){
      resultRow = afterMathSelectRow[w];
      evenArray.push(resultRow);
    }
  }
  for(let r = 0; r < evenArray.length; r += 2){
    evenArray[r].style.backgroundColor = "#E7E7E7";
  }
  for(let p = 1; p < evenArray.length; p += 2){
    evenArray[p].style.backgroundColor = "white";
  }
  evenArray = [];

  pagination();
  paginationResults();

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

  for(let i = 0; i < (Math.ceil(displayedRow.length / 10) * 10); i += 10){
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
      selectRow[i].style.display = ''; 
    }
  }
}

paginationResults();