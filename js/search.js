
const anchor = document.querySelectorAll('a'); // all the anchors
const len = anchor.length; // number of anchor tags in document
let field = document.querySelector('input'); // search bar input
field.addEventListener('keyup', search, false); // listens for search input + calls search()

function search(txt) {
    text = txt.target.value; // input of text from the event listener
    text.toUpperCase();
    // console.log(`text = ${text}`); // check value of captured tesxt in var stuff
        for (let i=0;i<len;i++ ) { // loops through all anchors first to last
            let cap = document.querySelectorAll('a')[i].getAttribute('data-caption'); //fetches the text in the attribute
            cap.toUpperCase();
            //console.log(`data-caption equals ${cap}`); // this works fine outputting data-caption string - 3.44pm
            if (cap.includes(text)){ // if the contents of the data-caption attr include the search text in field
                document.querySelectorAll('a')[i].style.display = 'grid';; // go to grid, also on delete of field var
            } else { // if the data caption does NOT contain the search text in field
                document.querySelectorAll('a')[i].style.display = 'none'; // set display to none
            }
       }
    }

