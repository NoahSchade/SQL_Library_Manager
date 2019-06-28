let searchForTitle;
let titleList;
let titleListRegex;
let match1;
let match2;


function searchTitle(event) { 
  searchForTitle = event.target.value.toLowerCase();
  console.log(document.querySelectorAll('.select-title').length);
  for(let i = 0; i < document.querySelectorAll('.select-title').length; i++) {

    titleList = document.querySelectorAll('.select-title')[i].textContent.toLowerCase();

    let regex = new RegExp("^" + searchForTitle + ".*");
        match1 = searchForTitle.match(regex);
        match2 = titleList.match(regex);

    if(match1 && match2){
      document.querySelectorAll('.selectRow')[i].style.display = '';
    } else {
      document.querySelectorAll('.selectRow')[i].style.display = 'none';
    }
  }
}