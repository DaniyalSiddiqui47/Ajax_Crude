document.getElementById("btnajax").addEventListener("click", makerequest);

    // XMLHTTPREQUEST Properties and  Methods
// function makerequest(){
// console.log("Button Clicked");
// const xhr = new XMLHttpRequest();
// xhr.open("GET", "data.txt", true);
// xhr.onload = () => {
//         if(xhr.status === 200){
//             console.log("XHR Object",xhr);
//             console.log("Response text",xhr.responseText);
//             console.log("Status text",xhr.statusText);
//             console.log("Response",xhr.response);
//             console.log("Response URL",xhr.responseURL);
//             console.log("withCredentials",xhr.withCredentials); //bydefault withcredential false
//             console.log(xhr.getResponseHeader("LAST-Modified"));
//             console.log(xhr.getAllResponseHeaders());
//         }else{
//             console.log("Problem Occured");
//         }
// };
// xhr.send();
// }

function makerequest(){
    console.log("Button Clicked");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "data.txt", true);
    xhr.responseType = 'text';  //this is set to response type
    xhr.setRequestHeader = ("Content-Type", "applicatio/json");  //this is set to response type
    xhr.withCredentials = true;
    xhr.onload = () => {
            if(xhr.status === 200){
                console.log("XHR Object",xhr);
                console.log("Response text",xhr.responseText);
                console.log("Status text",xhr.statusText);
                console.log("Response",xhr.response);
                console.log("Response URL",xhr.responseURL);
                console.log("withCredentials",xhr.withCredentials);
                console.log(xhr.getResponseHeader("LAST-Modified"));
                console.log(xhr.getAllResponseHeaders());
            }else{
                console.log("Problem Occured");
            }
    };
    xhr.send();
    }