// function repeatstring(Number, nam) {
//     if (Number > -1) {
//         if (Number > 0) {
//             for (var i = 0; i <= Number; i++) {
//                 if (Number > 0) {
//                     console.log("'" + nam + "'");
//                 }
//             }

//         }
//         else {
//             console.log("''")
//         }
//     }
//     else {
//         console.log("error");
//     }

// }

// repeatstring(0, "pooja");

function repeatstring(nam,number){
    var sum = "";
    if(number >= 0){
        for (var i = 0; i< number; i++){
            sum = sum + nam
        }
        console.log(sum);
    }
    else{
        console.log("ERROR");
    }
}
repeatstring("hay", 0);
repeatstring("hay",1)
repeatstring("hay",-2)
repeatstring("hay",6)
