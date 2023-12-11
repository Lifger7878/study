const prompt1 = prompt('Your name?');

const confirm1 = confirm(`Your name is ${prompt1}?`);

if(prompt1 && confirm1) {
    console.log('Welcome!');
} 

if(prompt1 || confirm1) {
    
}