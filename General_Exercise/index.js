Assess your knowledge level on the following languages (1 = none; 5 = expert):

Vanilla JS - 1
jQuery - 2
HTML/HTML5 - 5
CSS/CSS3 - 5
Ajax- 3
AngularJS - 1
Bootstrap - 4

What is the width of a container with 100px of width and 5px of padding?

Answer- its 110 px (5px left-padding+5px right padding+100px width)

How to apply a click event to all paragraphs except for the last?

Answer- $('#elementName p').not(':last').on('click', someFunction);

Why does the alert show "Jack" first and then undefined?

function identity() {
    var name = 'Jack';
    alert(name);
    return
    name
};

var who = identity();
alert(who)

Answer - This is because beside "return" nothing is mentioned , its an empty space . the name is written in next line so it is not able to read it.