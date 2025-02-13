let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote:"The best way to find yourself is to lose yourself in the service of others.",person:'mahatma Gandhi'},
    {
        quote:"Be yourself everyone else is already taken.",person:'Oscar Wilde'},
    { quote:"If you tell the truth, you don't have to remember anything” ",person:'Mark Twain'},
    { quote:"A room without books is like a body without a soul",person:'Marcus Tullius Cicero'},
    { quote:"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",person:'Bernard M. Baruch'},
    { quote:"You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",person:'Dr. Seuss'},
    { quote:"You only live once, but if you do it right, once is enough.”",person:'Mae West'},
    { quote:"Be the change that you wish to see in the world.” ",person:'Mahatma Gandhi'},
    { quote:"In three words I can sum up everything I've learned about life: it goes on.”",person:'Robert Frost'},
     
];
 btn.addEventListener('click',function(){

    let random=Math.floor(Math.random()* quotes.length);
    quote.innerText=quotes[random].quote;
    person.innerText =quotes[random].person;
 })