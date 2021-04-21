Webcam.set({
width:350,
  height:300,
  image_format:'png',
  png_quality:90
});
cam=document.getElementById("camera");
Webcam.attach("#camera");
function snap(){
  Webcam.snap(function(data_uri){
  document.getElementById("result").innerHTML='<img src="'+data_uri+'" id="res" class="img-responsive">';
  });
}
console.log(ml5.version);
clasifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/5QbOxZhb7/model.json',modell);
function modell(){
console.log("model loaded!!!");
}
