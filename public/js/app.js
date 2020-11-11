

// fetch('https://puzzle.mead.io/puzzle').then((response)=>{
//    response.json().then((data)=>{console.log(data)})




   

// })
console.log('cliet side javascripts is loading')

// fetch('http://localhost:3000/weather?search=Boston').then((response)=>{
//     response.json().then((data)=>{
//         if(data.error)
//         {
//             console.log(data.error);
//         }
//         else
//             console.log(data)
//     })
      
        
// })

const weatherForm = document.querySelector('form');
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

messageOne.textContent = 'loading...'
weatherForm.addEventListener('submit',(e)=>{

    e.preventDefault();
    const location = search.value;
    
fetch('/weather?search='+location).then((response)=>{
    response.json().then((data)=>{
        if(data.error)
        {
            console.log(data.error);
        }
        else
        {
            data = data.temperature;
            messageOne.textContent = data.toString();

        }
            
    })
      
        
})

    
})


