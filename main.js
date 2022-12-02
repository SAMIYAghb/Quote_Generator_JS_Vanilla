let arrayQuotes = [
    '“A room without books is like a body without a soul.” -- Marcus Tullius Cicero',
    '“Be yourself; everyone else is already taken.” -- Oscar Wilde',
    '“So many books, so little time.” -- Frank Zappa',
    '“You only live once, but if you do it right, once is enough.” -- Mae West',
    '“Be the change that you wish to see in the world.” -- Mahatma Gandhi',
    '“A friend is someone who knows all about you and still loves you.” -- Oscar Wilde',
    '“A room without books is like a body without a soul.” -- Oscar Wilde',
    '“Always forgive your enemies; nothing annoys them so much.” -- Marcus Tullius Cicero',
    '“A room without books is like a body without a soul.” -- Oscar Wilde'
]
function getQuote(){
    let btn = document.getElementById('btn');
    let quoteOutput = document.getElementById('quoteOutput');   
    let random = arrayQuotes[Math.floor(Math.random() * arrayQuotes.length)]
    quoteOutput.textContent = random;
}

