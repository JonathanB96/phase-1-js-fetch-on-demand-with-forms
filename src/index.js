const init = () => {
    
    
    const inputForm = document.querySelector('form')
    inputForm.addEventListener('submit', (event) => {
    event.preventDefault()
    let input = document.querySelector("input#searchByID").value
    fetch(`http://localhost:3000/movies/${input}`)
    .then(res => res.json())
    .then(json =>{
        const title = document.querySelector('section#movieDetails h4')
        const summary = document.querySelector('section#movieDetails p')
        title.innerText = json.title;
        summary.innerText = json.summary})
       
        inputForm.reset()   
    
        });
    
    
  
}



document.addEventListener('DOMContentLoaded', init); 