Webcam.attach("#camera")
Webcam.set({
    width: 350,
    height: 350,
    image_format: 'png',
    png_quality: 90  
})
function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie_img" src="'+data_uri+'"/>'
    })
}
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/uBaQ3I3eO/model.json",modelloaded)
function modelloaded(){
    console.log("model is loaded")
}0
function check(){
    img=document.getElementById("selfie_img")
    classifier.classify(img,gotresult)
    
}
function gotresult(error,results){
    if (error) {
        console.log(error)
    } else {
        console.log(results)
        document.getElementById("nameoftheperson").innerHTML=results[0].label
        document.getElementById("personaccuracy").innerHTML=(results[0].confidence.toFixed(2))*100+"%"
    }
}