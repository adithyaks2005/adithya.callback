function makewaffle(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("waffle ready")
        },2500);
    })

}
function getIcecream(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let icecream=true;
            if(icecream){
                resolve("got icecream")
            }else{
                reject("did not get icecream")
            }
        },1500);
    })
}

async function snack(){
    try {
       await makewaffle();
       await getIcecream ();
       console.log("set up the table")
    } catch (error) {
        console.log(`${error} so make choclate syrup`)
        
    }
}
snack()