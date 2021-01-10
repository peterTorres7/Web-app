
function changeColor() {
    var buttonColor = document.getElementById("colorChange");
    buttonColor.style.backgroundColor = "red";
}

function getIPAddress() {
    var ipAddress = document.getElementById('ipAddress');

    fetch('https://api.ipify.org?format=json')
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            ipAddress.innerText = data;
        }) 

        .catch((err) => {
             console.error(err);
         });
        
}
