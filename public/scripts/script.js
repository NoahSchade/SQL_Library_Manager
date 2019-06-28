let searchForTitle;
let titleList;


function searchTitle(event) { 
  searchForTitle = event.target.value.toLowerCase();
  console.log(document.querySelectorAll('.select-title').length);
  for(let i = 0; i < document.querySelectorAll('.select-title').length; i++) {

    titleList = document.querySelectorAll('.select-title')[i].textContent.toLowerCase();

    if(searchForTitle === titleList){
      document.querySelectorAll('.selectRow')[i].style.display = '';
    } else {
      document.querySelectorAll('.selectRow')[i].style.display = 'none';
    }
  }
}