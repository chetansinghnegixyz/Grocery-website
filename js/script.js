let filter = document.getElementById('search-box').value.toUpperCase();

let item = document.querySelectorAll('.box');

let l = document.getElementsByTagName('h3');

for(let i=0;i<l.length;i++){
    let a=item[i].getElementsByTagName('h3')[0];

    let value=a.innerHTML || a.innerText || a.textContent;

    if(value.toUpperCase().indexOf(filter)> -1){
        item[i].style.display="";
    }
    else{
        item[i].style.display="none";
    }
}