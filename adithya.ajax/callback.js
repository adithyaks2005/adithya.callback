// 
 
function add(a,b,callback){
    var sum = a+b;
     callback(sum)

}
function display(val){
    var square =val*val;
    console.log(`the sum is ${val}`);
    console.log(`square of sum id ${square}`);
}
add(1,2,display);
