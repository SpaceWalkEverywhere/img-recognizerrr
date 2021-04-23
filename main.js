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
  document.getElementById("ct").style.display="flex";
  document.getElementById("sn").style.display="none";
}
console.log(ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/5QbOxZhb7/model.json',modell);
function modell(){
console.log("model loaded!!!");
}
function checkthat(){
  document.getElementById("sn").style.display="flex";
  document.getElementById("ct").style.display="none";
  img=document.getElementById("res");
  classifier.classify(img,classified);
}
function classified(error,result){
  if (error) {
    console.log(error);
  }
  else {
    console.log(result);
    document.getElementById("objn").innerHTML=result[0].label;
    document.getElementById("obja").innerHTML=result[0].confidence.toFixed(3)*100+"%";
  }
}
