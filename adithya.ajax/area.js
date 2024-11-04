caliculatearea(2,4,calculateperimeter);
function caliculatearea(l,b,callback){
    var area =l*b;
    console.log(`the area is ${area}`);
    callback(area);
};
function calculateperimeter(a,b){
    var perimeter = 2*(a+b);
    console.log(`the perimeter is ${perimeter}`);

}

