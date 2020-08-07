// // start simple: print the contents of data-caption as loop to console - done
// const anchor = document.querySelectorAll('a');
// const len = anchor.length;

// for (let i=0;i<len;i++ ){
//     let cap = document.querySelectorAll('a')[i].getAttribute('data-caption');
//     console.log(cap);
// }

// // now accept input string and output live to console - done!

// let input = document.querySelector('input');

// input.addEventListener('input', log); // will always listen, need to loop in function?

// function log(txt) {
//     console.log(txt.target.value);
// }
 
// now put them together to loop through all data-captions with any input
const anchor = document.querySelectorAll('a');
const len = anchor.length; //number of anchor tags in document
let field = document.getElementById('input'); // search bar
field.addEventListener('input', search); // listens for search input + calls search()
const goaway = '<style>display:none;</style>';

function search(txt) {
    for (let i=0;i<len;i++ ) { // loops through all anchors
        let cap = document.querySelectorAll('a')[i].getAttribute('data-caption'); //fetches the text in the attribute
        if (cap.includes(txt.target.value)){
            document.querySelector('a').innerHTML = '';
        } else {
            document.querySelector('a').innerHTML = goaway;
        }
    }
}

//if (p.target.value.includes

