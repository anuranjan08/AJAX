
function fetchImage(){
    var xhrRequest=new XMLHttpRequest();
    xhrRequest.onload=function(){
        //console.log(xhrRequest.response)
        var resJSON=JSON.parse(xhrRequest.response);
        var imageurl=resJSON.message;
        var setimage=document.getElementById("image-id");
        setimage.setAttribute('src',imageurl);
    }
    xhrRequest.open('get','https://dog.ceo/api/breeds/image/random',true);
    xhrRequest.send();




}
var fetchbutton=document.getElementById("btn");
fetchbutton.addEventListener('click',function(){
    fetchImage();
})