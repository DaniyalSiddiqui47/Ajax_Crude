document.getElementById("btnajax").addEventListener("click", makerequest);
// let dt = document.getElementById('data'); //javascript tag to use text data 
// function makerequest(){
//     console.log("Button Clicked");
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", "data.txt", true);
//     xhr.onload = () => {
//             if(xhr.status === 200){
//                 dt.innerText = xhr.responseText;
//             }else{
//                 console.log("Problem Occured");
//             }
//     };
//     xhr.send();
//     }

    // Json Data show to console or webpage
// let n = document.getElementById('name-id'); //javascript tag to use text data
// let r = document.getElementById('roll-id'); //javascript tag to use text data 
// function makerequest(){
//     console.log("Button Clicked");
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", "data.json", true);
//     xhr.responseType = "json";
//     xhr.onload = () => {
//             if(xhr.status === 200){
//                 console.log(xhr.response);
//                 console.log(xhr.response.name);
//                 console.log(xhr.response.roll);
//                 n.innerText = xhr.response.name;
//                 r.innerText = xhr.response.roll;
//             }else{
//                 console.log("Problem Occured");
//             }
//     };
//     xhr.send();
//     }

// let n = document.getElementById('name-id'); //javascript tag to use text data
// let r = document.getElementById('roll-id'); //javascript tag to use text data 
// function makerequest(){
//     console.log("Button Clicked");
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", "data.json", true);
//     xhr.onload = () => {
//             if(xhr.status === 200){
//                 console.log(xhr.response);
//                 let obj = JSON.parse(xhr.response);
//                 console.log(obj);
//                 n.innerText = obj.name;
//                 r.innerText = obj.roll;
//             }else{
//                 console.log("Problem Occured");
//             }
//     };
//     xhr.send();
//     }

    // Xml Data show single data to console or webpage
// let n = document.getElementById('name-id'); //javascript tag to use text data
// let r = document.getElementById('roll-id'); //javascript tag to use text data 
// function makerequest(){
//     console.log("Button Clicked");
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", "data.xml", true);
//     xhr.responseType = "document";
//     xhr.onload = () => {
//             if(xhr.status === 200){
//                 console.log(xhr.response);
//                 console.log(xhr.response.getElementsByTagName("student"));
//                 //name
//                 console.log(xhr.response.getElementsByTagName("student")[0]);
//                 console.log(xhr.response.getElementsByTagName("student")[0].getElementsByTagName("name")[0]);
//                 console.log(xhr.response.getElementsByTagName("student")[0].getElementsByTagName("name")[0].childNodes[0]);
//                 console.log(xhr.response.getElementsByTagName("student")[0].getElementsByTagName("name")[0].childNodes[0].nodeValue);
//                 n.innerText = xhr.response.getElementsByTagName("student")[0].getElementsByTagName("name")[0].childNodes[0].nodeValue;
//                 //roll
//                 console.log(xhr.response.getElementsByTagName("student")[0]);
//                 console.log(xhr.response.getElementsByTagName("student")[0].getElementsByTagName("roll")[0]);
//                 console.log(xhr.response.getElementsByTagName("student")[0].getElementsByTagName("roll")[0].childNodes[0]);
//                 console.log(xhr.response.getElementsByTagName("student")[0].getElementsByTagName("roll")[0].childNodes[0].nodeValue);
//                 r.innerText = xhr.response.getElementsByTagName("student")[0].getElementsByTagName("roll")[0].childNodes[0].nodeValue;
//             }else{
//                 console.log("Problem Occured");
//             }
//     };
//     xhr.send();
//     }

    // Xml Data show single data to console or webpage
let data = document.getElementById('data'); //javascript tag to use text data
function makerequest(){
    console.log("Button Clicked");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "data.xml", true);
    xhr.responseType = "document";
    xhr.onload = () => {
        if(xhr.status === 200){
        x = xhr.response.getElementsByTagName("student");
        for(i=0; i < x.length; i++){
            data.innerHTML += "<p>" + x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue + "</p>" 
                              + "<p>" + x[i].getElementsByTagName("roll")[0].childNodes[0].nodeValue + "</p>" + "<br>";
        }
        } else {
                console.log("Problem Occured");
            }
    };
    xhr.send();
}
