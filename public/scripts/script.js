let counterArrayGlobal = [];
let selectRow = document.querySelectorAll('.selectRow');


let searchForTitle;
let titleList;
let matchTitle;
let regexTitle;
let counterArrayTitle = [];
let titleSearch = document.querySelector('#search-title');

let searchForAuthor;
let authorList;
let matchAuthor;
let regexAuthor;
let counterArrayAuthor = [];
let authorSearch = document.querySelector('#search-author');


function searchMashup(event) {

  searchForTitle = titleSearch.value.toLowerCase();
  searchForAuthor = authorSearch.value.toLowerCase();

  for(let i = 0; i < document.querySelectorAll('.select-title').length; i++) {

    titleList = document.querySelectorAll('.select-title')[i].textContent.toLowerCase();

    regexTitle = new RegExp("^" + searchForTitle + ".*");
    matchTitle = titleList.match(regexTitle);

    if(matchTitle){
      selectRow[i].style.display = '';
      counterArrayTitle.push(selectRow[i]);
      counterArrayGlobal.push(selectRow[i]);
    } else {
      selectRow[i].style.display = 'none';
    }
/////////////////////////////////////////////////////////////////////////////////

    authorList = document.querySelectorAll('.select-author')[i].textContent.toLowerCase();

    regexAuthor = new RegExp("^" + searchForAuthor + ".*");
    matchAuthor = authorList.match(regexAuthor);

    if(matchAuthor){
      // selectRow[i].style.display = '';
      counterArrayAuthor.push(selectRow[i]);
      counterArrayGlobal.push(selectRow[i]);
    } else {
      selectRow[i].style.display = 'none';
    }
  } 
}

  // for(let x = 0; x < counterArrayGlobal.length; x += 2){
  //   counterArrayGlobal[x].style.backgroundColor = '#E7E7E7';
  // }

  // for(let y = 1; y < counterArrayGlobal.length; y += 2){
  //   counterArrayGlobal[y].style.backgroundColor = 'white';
  // }

  // for(let x = 0; x < counterArrayGlobal.length; x++){
  //   for(let j = 0; j < counterArrayGlobal.length; j++){
  //     if(counterArrayGlobal[x] === counterArrayTitle[j]){
  //       counterArrayGlobal[x].style.display = '';

  //       for(let z = 0; z < counterArrayTitle.length; z += 2){
  //         counterArrayTitle[z].style.backgroundColor = '#E7E7E7';
  //       }
      
  //       for(let y = 1; y < counterArrayTitle.length; y += 2){
  //         counterArrayTitle[y].style.backgroundColor = 'white';
  //       }
  //     } else {
        
  //     }
  //   }
  
  
  // counterArrayGlobal = [];
// }