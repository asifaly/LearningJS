var inctotal = 0;
var inccount = 1;


function whilecalc () {
var total = 0;
var count = 1;
while(count<=10){
total+=count;
count+=1;
}
console.log(count + " total is " + total);
};

function increment (){
if (inccount == 11){
inccount = 1;
inctotal = 0;
} else {
console.log("count is " + inccount + "and total is " + inctotal);
inctotal +=inccount;
inccount +=1;
}
};

function out2console(){
revval = document.getElementById("name").value
console.log("name is " + revval)
console.log(revval[0])
};

function reverse(){
vowel = 0
space = 0
palin = false
textval = document.getElementById("textanalysis").value
revval = textval.split("").reverse().join("")
if (textval == revval) palin = true
console.log(revval)
document.getElementById("reversed").innerHTML = revval
document.getElementById("length").innerHTML = revval.length
a = revval
for (i=0;i<=revval.length;i++){
if (a[i] == 'a' || a[i] == 'e' || a[i] == 'i' || a[i] == 'o' || a[i] == 'u') vowel +=1
if (a[i] == " ") space +=1
}
document.getElementById("vowels").innerHTML = vowel
document.getElementById("spaces").innerHTML = space
document.getElementById("palin").innerHTML = palin
//for (i=0;i<=revval.length;i++){
//a = a.concat(revval[revval.length-i])
//console.log(revval[revval.length-i])
//}
//console.log(a)
};