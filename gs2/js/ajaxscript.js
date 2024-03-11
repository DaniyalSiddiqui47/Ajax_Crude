document.getElementById("btnajax").addEventListener("click", makerequest);

// function makerequest(){
// console.log("Button Clicked");
// const xhr = new XMLHttpRequest();
// console.log("before open", xhr.readyState);
// xhr.open("GET", "data.txt", true);
// console.log("After open", xhr.readyState);
// xhr.onreadystatechange = () => {
//     console.log("ready state", xhr.readyState);
//     if(xhr.readyState === XMLHttpRequest.DONE){
//         if(xhr.status === 200){
//             console.log(xhr);
//             console.log(xhr.responseText);
//         }else{
//             console.log("Problem Occured");
//         }
//     }
// };
// xhr.send();
// }

function makerequest(){
    console.log("Button Clicked");
    const xhr = new XMLHttpRequest();
if(xhr.readyState === 0 ){
    console.log("Open Method not yet Called", xhr.readyState);
}
    xhr.open("GET", "data.txt", true);
if(xhr.readyState === 1 ){
    console.log("Open Method Called", xhr.readyState);
}
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 2 ){
            console.log("response Header_Recieved", xhr.readyState);
        }
        if(xhr.readyState === 3 ){
            console.log("Loading...", xhr.readyState);
        }
        if(xhr.readyState === 4 ){
            console.log("Done", xhr.readyState);
        }
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200){
                console.log(xhr);
                console.log(xhr.responseText);
            }else{
                console.log("Problem Occured");
            }
        }
    };
    xhr.send();
    }