document.getElementById("btnajax").addEventListener("click", makerequest);

    // Morre than one JSON data with url display on console
let table = document.getElementById("table");
function makerequest(){
    console.log("Button Clicked");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://dummyjson.com/products", true);
    xhr.responseType = "json";
    xhr.onload = () => {
        if(xhr.status === 200){
            console.log(xhr.response);
            const x = xhr.response;
            for (i = 0; i < x.length; i++){
                table.innerHTML += "<tr><td>" + x[i].id + "</td><td>" + x[i].title + "</td></tr>";

            }
        } else {
                console.log("Problem Occured");
            }
    };
    xhr.send();
}
    