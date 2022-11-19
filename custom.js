
var AddButton = document.getElementById('addButton');
var listing = document.getElementById('todolisting');
var todoInput = document.getElementById('todoInput');


AddButton.onclick = function(e){
    e.preventDefault();
    var inputVal = todoInput.value;
    if(inputVal == ''){
        document.querySelector('.form-error').style.display = 'block';
    }else{
        document.querySelector('.form-error').style.display = 'none';

        let liTag = document.createElement("li");
        let aTag = document.createElement("a");

        aTag.className = "removeBtn";
        aTag.innerHTML= 'Delete';

        liTag.append(inputVal);
        liTag.append(aTag);
        listing.appendChild(liTag);

        todoInput.value = ''
        
    }
}


document.addEventListener('click',function(e){

    if(e.target && e.target.className == 'removeBtn'){
        
        var getParent = e.target.parentNode;
        console.log(getParent);
        listing.removeChild(getParent);
    }

});
