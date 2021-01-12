
function changeColor() {
    var buttonColor = document.getElementById("colorChange");
    buttonColor.style.backgroundColor = "darkRed";
}

function changeDog() {
    var dogs = document.getElementById('dogs');

    fetch('https://random.dog/woof.json')
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            if(data.url.includes(`.mp4`)) {
                changeDog();
            }else{
            dogs.innerHTML = `<img src ="` + data.url + `"/>`;
            }
        }) 

        .catch((err) => {
             console.error(err);
         });
        
}
