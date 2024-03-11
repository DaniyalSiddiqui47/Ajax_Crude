document.getElementById("btnajax").addEventListener("click", makerequest);

    // JSON data with POST method
let table = document.getElementById("table");
function makerequest(){
    console.log("Button Clicked");
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://dummy.restapiexample.com/api/v1/create", true);
    xhr.responseType = "json";
    xhr.onload = () => {
        if(xhr.status === 200){
            console.log(xhr.response);
            document.getElementById("info").innerText = "Data Inserted";
        } else {
                console.log("Problem Occured");
            }
    };
    mydata = {"name":"Shahid","salary":"100","age":"33"};
    xhr.send(mydata);
}
    