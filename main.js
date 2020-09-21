let button = document.querySelector('.container')
let input = ''
let output = ''

button.addEventListener('click', function(event) {
    let displayDiv = document.querySelector('.display')
    let displayPara = document.createElement('p')
    target = event.target.id

    if (target === '=') {
        let displayDiv = document.getElementById('display')
        let displayParaOld = displayDiv.getElementsByTagName('p')[0]
        displayDiv.removeChild(displayParaOld)
        output = eval(input)
        console.log('equal')
        console.log(output)
    }
    if (target === 'C') {
        let displayeDiv = document.getElementById('display')
        let displayParaOld = displayDiv.getElementsByTagName('p')[0]
        displayDiv.removeChild(displayParaOld)
        output = ''
        input = ''
        console.log(input)
        console.log('clear')
    }
    if ((target !== 'C') && (target !== '=')) {
        let displayDiv = document.getElementById('display')
        let displayParaOld = displayDiv.getElementsByTagName('p')[0]
        displayDiv.removeChild(displayParaOld)
        input += target
        output = input
        console.log('if3')
        console.log(input)
    }


    displayPara.innerText = output
    displayDiv.appendChild(displayPara)

})

