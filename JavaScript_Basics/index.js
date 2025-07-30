function b(){
    for(let i =0; i<3; i++){
        setTimeout(function log(){
            console.log( "i", i)
        }, i * 1000)
    }
}
b();