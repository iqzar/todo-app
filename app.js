function addtodo(){
    var item=document.getElementById("todoitem").value;
    var li=document.createElement("li");
    li.setAttribute("class","itm")
    var litext=document.createTextNode(item);
    li.appendChild(litext);
    var editbtn =document.createElement("button");
    var edittext =document.createTextNode("edit");
    editbtn.appendChild(edittext)
    editbtn.setAttribute("class","btn");
    editbtn.setAttribute("onclick","onEdit(this)");
    li.appendChild(editbtn);
   
    li.setAttribute("class","checked")
    todoitem.value="";
    console.log(li)
    var delbtn =document.createElement("button");
    var deltext =document.createTextNode("delete");
    delbtn.appendChild(deltext)
    delbtn.setAttribute("class","bttn");
    delbtn.setAttribute("onclick","onDelete(this)");
    li.appendChild(delbtn);
   
    todoitem.value="";
    console.log(li)
    if(item===""){
      alert("Please enter some your task!");
    }
    else {
      lst.appendChild(li);
    }
    



}

function onDelete(e){
    //e.parentNodes.remove()
    e.parentNode.remove();
    
}


function delall(e){
    e.parentNode.parentNode.remove();
}


function onEdit(e){
    var val=prompt("What to do next?",e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue=val;

    



}
var lst=document.getElementById("lst");

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'li') {
    ev.target.classList.toggle('checked');
  }
}, false);