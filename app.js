
alert('Welcome in Jordan')

var Name = prompt('what is your name?', 'Ali');
console.log(Name);
alert('Hello ' + Name);
var interest = prompt('Are you interested in camping ?', 'Yes');


if (interest == 'Yes') {
    alert('Visit Wadi Rum');

}
else {
    alert('Try to see Petra & Aqaba');

};

var cityName = prompt('Please enter if you want to visit aqaba, petra');




while (cityName != 'aqaba' && cityName != 'petra') {
    cityName = prompt('Please enter if you want to visit Aqaba, Petra or wadi rum');
}

if (cityName == 'aqaba') {
    cityName = '<img src="images/jordan-flag.jpg">';
}
else {
    cityName = '<img src="images/welcome.jpg">'
}


var result = '';

var photos = prompt("how many photos you want to see,please select 1,2, or 3");


for (var i = 0; i < photos; i++) {
    result = result + cityName
}
document.write(result);


