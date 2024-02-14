
const input = document.getElementById('inputBox')
const posts = document.getElementById('posts')

function addPost() {
    if (input.value.length === 0){
        alert('Введите несколько символов')
    }else{
        let li = document.createElement('li')
        input.value = input.value[0].toUpperCase() + input.value.slice(1)
        console.log(input.value)
        li.textContent = input.value;
        posts.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML  = "\u00d7";
        li.appendChild(span)
    }
    input.value = '';
    localSave()
}
input.addEventListener('keyup', function (event) {
    if(event.key === 'Enter'){
      addPost()
    }
  })
posts.addEventListener("click",function(e)
{
    if(e.target.tagName==='LI')
    {
        e.target.classList.toggle("checked");
        localSave()
    }else if(e.target.tagName==='SPAN')
    {
        e.target.parentElement.remove();
        localSave()
    }
},false)

function localSave(){
    localStorage.setItem('save', posts.innerHTML);
}
function showLocalSave(){
    posts.innerHTML = localStorage.getItem('save')
}
showLocalSave()