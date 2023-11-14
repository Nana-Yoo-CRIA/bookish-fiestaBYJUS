Webcam.set({width: 350, height: 300, image_format: 'png', png_quality: 90});
Camera = document.getElementById("camera");
Webcam.attach('#camera');

function takeSnapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id = "captura" src = "'+data_uri+'"></img>';
    });
}

console.log(ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/UMOb5Jz5w/model.json');

