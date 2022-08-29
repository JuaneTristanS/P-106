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