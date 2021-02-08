
alert('Welcome in Jordan')

var Name = prompt('what is your name?', 'Ali');
console.log(Name);
alert('Hello' + Name);
var interest = prompt('Are you interested in camping ?', 'Yes');


if (interest == 'Yes') {
    alert('Visit Wadi Rum')

}
else {
    alert('Try to see Petra & Aqaba')

}

var pro = prompt('Please enter your country');

// console.log(f);
while (pro=='jordan')
 {
    document.write('<p>You are already in your home, enjoy exploring the site.</p>');
    document.write('<img src="images/jordan-flag.jpg">');  
    
}
if (pro!=='jordan') {
    document.write('<img src="images/welcome.jpg>')
    
}



