document.getElementById("btnajax").addEventListener("click", makerequest);

//     // JSON data with url display on console or webpage
// let t = document.getElementById("title");
// let d = document.getElementById("description");
// function makerequest(){
//     console.log("Button Clicked");
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", "https://dummyjson.com/products/1", true);
//     xhr.responseType = "json";
//     xhr.onload = () => {
//         if(xhr.status === 200){
//             console.log(xhr.response);
//             console.log(xhr.response.id);
//             console.log(xhr.response.title);
//             console.log(xhr.response.description);
//             t.innerText = xhr.response.title;
//             d.innerText = xhr.response.description
//         } else {
//                 console.log("Problem Occured");
//             }
//     };
//     xhr.send();
// }

    // Morre than one JSON data with url display on console
    function makerequest() {
        console.log("Button Clicked");
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://dummyjson.com/products", true);
        xhr.responseType = "json";
        xhr.onload = () => {
            if (xhr.status === 200) {
                console.log(xhr.response);
                const x = xhr.response;
                for (let i = 0; i < x.length; i++) {
                    console.log(x[i].id);
                    console.log(x[i].title);
                }
            } else {
                console.log("Problem Occurred");
            }
        };
        xhr.send();
    }
    
    // function makerequest() {
    //     console.log("Button Clicked");
    //     const xhr = new XMLHttpRequest();
    //     xhr.open("GET", "https://dummyjson.com/products/1", true);
    //     xhr.responseType = "json";
    //     xhr.onload = () => {
    //         if (xhr.status === 200) {
    //             const x = xhr.response;
    //             if (x.hasOwnProperty("id") && x.hasOwnProperty("title")) {
    //                 console.log("id: " + x.id);
    //                 console.log("title: " + x.title);
    //             } else {
    //                 console.log("Response does not contain the expected properties.");
    //             }
    //         } else {
    //             console.log("Problem Occurred");
    //         }
    //     };
    //     xhr.send();
    // }
    
    