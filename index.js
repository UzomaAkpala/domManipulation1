// variables 

let btn = document.querySelector("#new-quote")

let quote = document.querySelector('.quote')

let person = document.querySelector('.person')

const quotes = [{
    quote: `“You can get everything in life you want if you will just help enough other people get what they want.”`,
    person: "Zig Ziglar"
},
{
    quote:`“Inspiration does exist, but it must find you working.”`,
    person: "Pablo Picasso"
},
{
    quote:`“Don't settle for average. Bring your best to the moment. Then, whether it fails or succeeds, at least you know you gave all you had.”`,
    person: `Angela Bassett`
},
{
    quote: `“Show up, show up, show up, and after a while the muse shows up, too.”`,
    person: `Isabel Allende`
},
{
    quote: `“Don't bunt. Aim out of the ballpark. Aim for the company of immortals.”`,
    person: `David Ogilvy`
},

{
    quote:`“I have stood on a mountain of no's for one yes.”`,
    person: `Barbara Elaine Smith`
},

{
    quote: `“If you believe something needs to exist, if it's something you want to use yourself, don't let anyone ever stop you from doing it.”`,
    person: `Tobias Lütke`
},

{
    quote: `“First forget inspiration. Habit is more dependable. Habit will sustain you whether you're inspired or not. Habit will help you finish and polish your stories. Inspiration won't. Habit is persistence in practice.”`,
    person: `Octavia Butler`
},

{
    quote: `The best way out is always through.”`,
    person: `Robert Frost`
},

{
    quote: `“The battles that count aren't the ones for gold medals. The struggles within yourself—the invisible, inevitable battles inside all of us—that's where it's at."`,
    person: `Jesse Owens`
},

{
    quote: `"No matter how long your night, the sun will rise"`,
    person: `Uzoma Akpala`
}

]

btn.addEventListener('click', function() {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person
})