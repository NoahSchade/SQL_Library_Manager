let counterArrayGlobal = [{ 
    // title: '',
    // author: ''
  }]

let counter = 0;

let searchForTitle;
let titleList;
let matchTitle;
let regexTitle;
let counterArrayTitle = [];

let searchForAuthor;
let authorList;
let matchAuthor;
let regexAuthor;
let counterArrayAuthor = [];

function searchMashup(event) {

  console.log(counter);
  // counterArrayGlobal[0].title = "test";
  // console.log(counterArrayGlobal[0]);

  if(event.target.id === 'search-title') {
    searchForTitle = event.target.value.toLowerCase();

    for(let i = 0; i < document.querySelectorAll('.select-title').length; i++) {

      titleList = document.querySelectorAll('.select-title')[i].textContent.toLowerCase();

      regexTitle = new RegExp("^" + searchForTitle + ".*");
      matchTitle = titleList.match(regexTitle);

      if(matchTitle){
        selectRow = document.querySelectorAll('.selectRow');
        counterArrayGlobal[counter].title = selectRow[i];
      } else {
        document.querySelectorAll('.selectRow')[i].style.display = 'none';
      }
    } 
  }


/////////////////////////////////////////////////////////////////////////////////



  if(event.target.id === 'search-author') {
    searchForAuthor = event.target.value.toLowerCase();

    for(let i = 0; i < document.querySelectorAll('.select-author').length; i++) {

      authorList = document.querySelectorAll('.select-author')[i].textContent.toLowerCase();

      regexAuthor = new RegExp("^" + searchForAuthor + ".*");
      matchAuthor = authorList.match(regexAuthor);

      if(matchAuthor){
        selectRow = document.querySelectorAll('.selectRow');
        // selectRow[i].style.display = '';
        // counterArrayAuthor.push(selectRow[i]);
        counterArrayGlobal[counter].author = selectRow[i];
      } else {
        document.querySelectorAll('.selectRow')[i].style.display = 'none';
      }
    }
  }

  if (counterArrayGlobal[counter].title === counterArrayGlobal[counter].author) {
    console.log("testing");
  }
  
  
  counter++;
}