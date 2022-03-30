
var marks = [30,35,45,38,40];
console.log(marks[2]);

function setup() 
{
  createCanvas(400,400);
  sum();
}

function draw() 
{
  background(51);

}

function sum(){
  var sums = marks[0] + marks[1] + marks[2] + marks[3] + marks[4];
  var media = sums / marks.length;
  console.log(media)
    
}