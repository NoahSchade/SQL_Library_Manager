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


function searchMashup() {

  console.log(location.pathname);

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
}

let table = document.querySelector("table");
let appendButtons = document.querySelector(".appendButtons");
let button_1 = document.createElement("BUTTON");
let button_2 = document.createElement("BUTTON");
let button_3 = document.createElement("BUTTON");
appendButtons.appendChild(button_1);
appendButtons.appendChild(button_2);
appendButtons.appendChild(button_3);
appendButtons.style.display = "block";
appendButtons.style.margin = "auto";
button_1.style.height = "40px";
button_1.style.width = "40px";
button_2.style.height = "40px";
button_2.style.width = "40px";
button_3.style.height = "40px";
button_3.style.width = "40px";
button_1.style.display = "block";
button_2.style.display = "block";
button_3.style.display = "block";
button_1.style.position = "relative";
button_2.style.position = "relative";
button_3.style.position = "relative";
button_1.style.float = "left";
button_2.style.float = "left";
button_3.style.float = "left";
button_1.style.margin = "auto";
button_2.style.margin = "auto";
button_3.style.margin = "auto";