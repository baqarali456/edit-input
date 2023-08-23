const input = document.querySelector('input');
const ul = document.querySelector('ul');
const button = document.querySelector('button')
// console.log(input,ul)

button.addEventListener('click',(e)=>{
  addTodo(input.value)
})




function addTodo(todo){
    
    let li = document.createElement('li');
    li.style.listStyle = "none"
    li.innerHTML = `${todo} <button class="edit">Edit</button>`;
    input.value = ""
    ul.appendChild(li)
    li.querySelector('.edit').addEventListener('click',()=>{
        input.value = li.innerText.split('Edit').join('')
         button.innerText = "Edit";
         if(button.innerText === "Edit"){
            button.addEventListener('click',()=>{
                li.innerHTML = input.value
            })
         }
        
    })
   

}
