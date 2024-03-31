let piedra = "🗿"
let tijeras = "✂️"
let papel = "📄"

let choice = document.querySelectorAll('a')

choice.forEach(element => {
    
    element.addEventListener('click', function(e){
        
        choice.forEach( b => b.classList.remove('selected'))
        element.classList.toggle('selected')
    })
});
