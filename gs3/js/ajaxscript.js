document.getElementById("btnajax").addEventListener("click", makerequest);

    // Onload Event_Target use 
// function makerequest(){
// console.log("Button Clicked");
// const xhr = new XMLHttpRequest();
// xhr.open("GET", "data.txt", true);
// xhr.onload = function () {
//         if(xhr.status === 200){
//             console.log(xhr);
//             console.log(xhr.responseText);
//         }else{
//             console.log("Problem Occured");
//         }
// };
// xhr.send();
// }

// function makerequest(){
//     console.log("Button Clicked");
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", "data.txt", true);
//     xhr.onload = () => {
//             if(xhr.status === 200){
//                 console.log(xhr);
//               console.log(xhr.responseText);
//           }else{
//               console.log("Problem Occured");
//           }
//   };
//   xhr.send();
//   }

    // Onprogress Event_Target use 
// function makerequest(){
//     console.log("Button Clicked");
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", "data.txt", true);
//     xhr.onprogress = function (e) {
//             if(xhr.status === 200){
//                 console.log(e.loaded);
//                 console.log(e.total);
//             }else{
//                 console.log("Problem Occured");
//             }
//     };
//     xhr.send();
//     }

// function makerequest(){
//     console.log("Button Clicked");
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", "data.txt", true);
//     xhr.onload = () => {
//             if(xhr.status === 200){
//                 console.log(xhr);
//                 console.log(xhr.responseText);
//             }else{
//                 console.log("Problem Occured");
//             }
//     };

//     xhr.onprogress = (e) =>{
//         console.log(e.loaded);
//         console.log(e.total);
//     }
//     xhr.send();
//     }

    // Onprogress, Onloadstart, Onloadend, Onerror, Onabort Event_Target use 
// function makerequest(){
//     console.log("Button Clicked");
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", "data2.txt", true);
//     xhr.onload = function () {
//             if(xhr.status === 200){
//                 console.log(xhr);
//                 console.log(xhr.responseText);
//             }else{
//                 console.log("Problem Occured");
//             }
//     };
//     xhr.onprogress = (e) =>{
//          console.log(e.loaded);
//          console.log(e.total);
//         };
//     xhr.onerror = () =>{
//         console.log("Network Not Available");
//        };
//     xhr.onloadstart = () =>{
//         console.log("Transaction has Started...");
//        };
//     xhr.onloadend = () =>{
//         console.log("Transaction has End");
//        };
//     xhr.onabort = () =>{
//         console.log("Abort");
//        };

//     xhr.send();
//     }

    // Ontimeout Event_Target use 
function makerequest(){
    console.log("Button Clicked");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "data.txt", true);
    xhr.timeout = 200;
    xhr.onload = function () {
            if(xhr.status === 200){
                console.log(xhr);
                console.log(xhr.responseText);
            }else{
                console.log("Problem Occured");
            }
    };
    xhr.onloadstart = () =>{
         console.log("Transaction has Started...");
        };
    xhr.onloadend = () =>{
         console.log("Transaction has End");
        };
    xhr.ontimeout = () =>{
         console.log("Timeout");
        };
            
        xhr.send();
    }