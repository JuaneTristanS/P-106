function identify() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/0Z-LLgKg0/model.json", modelLoaded);
}
function modelLoaded() {
    classifier.classify(results);
}
function results(error, getResult) {
    console.log(results);
}

var image = document.getElementById("img");

function results(error, getResult) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(getResult);

        document.getElementById("sound").innerHTML = getResult[0].label;

        if (getResult[0] == "Cat") {
            image.src = "cat.jpg";
        }

        else if (getResult[0] == "Dog") {
            image.src = "dog.jpg";
        }

        else if (getResult[0] == "Lion") {
            image.src = "lion.jpg";
        }

    }

}
