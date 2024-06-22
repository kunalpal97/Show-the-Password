function LightOn(){

    let spanElement = document.getElementById("light");

    let PasswordBox = document.getElementById("PasswordBox");

    let flashlight = document.getElementById("flashlight");

    let sound = document.getElementById("sound");


    if(spanElement.style.background == "none"){

        spanElement.style.background = "linear-gradient(90deg, rgba(255,255,255,0) , rgba(255,255,255,0.5) , white";
        PasswordBox.type = "text";
        flashlight.src = "./light2.png";
        sound.play();
    }
    else{
        spanElement.style.background = "none";
        PasswordBox.type = "password";
        flashlight.src = "./light3.png";
        sound.play();
        sound.currenTime = 0;


    }
}