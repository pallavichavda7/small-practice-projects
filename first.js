let timeout = setTimeout(prompTimeOut,5000);

function prompTimeOut(){
    alert("Time Out!!!");
    document.getElementById("submit").disabled = true;
}
function passDataDetails() {
    clearTimeout(timeout);
        var a = document.getElementById("name").value;
        var b = document.getElementById("password").value;
        if (a == "pallavi" && b == "pallavi@123") {
            alert("login Successfully...",);
            alert("Name is " + a + " " + "Password is " + b);
        }
        else {
            alert("login Failed...")
            alert("Name is " + a + " Password is " + b);
        }

    // window.open()

}