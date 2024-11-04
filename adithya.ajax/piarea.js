function area(r,callback){
var carae=Math.PI*r*r;
console.log(`the area is ${carae}`);
callback(r)
}
function circumference(r){
    var circumference =(2*Math.PI)
    console.log(`the circumference is ${circumference}`);
}
area(4,circumference)