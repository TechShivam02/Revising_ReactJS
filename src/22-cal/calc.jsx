import React from "react";

function add(a,b){
    return a+b;
}


function sub(a,b){
    return a-b;
}


function div(a,b){
    let ans = a/b;
    ans = ans.toFixed(3);

    return ans;

}




function mul(a,b){
    return a*b;
}



export {add,sub,div,mul};


