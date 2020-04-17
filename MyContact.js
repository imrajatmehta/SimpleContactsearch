const search = document.querySelector("#filter");
search.addEventListener('keyup', onup);
function onup(e) {
    e.preventDefault();
    var text = e.target.value.toLowerCase();
    var ul=document.querySelector("#form");
    var li=ul.querySelectorAll('li.list-group-item');
    console.log(li)
    for(var i=0;i<li.length;i++){
        var contact=li[i].getElementsByTagName("a")[0]
        
        if(contact.textContent.toLowerCase().indexOf(text)>-1){
            li[i].style.display='';
        }
        else{
            li[i].style.display='none';
        }
        
    }




}