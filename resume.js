/*var n=document.querySelectorAll('.nav-menu a');
for(var i=0;i<n.length;i++){
    n[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetid=this.innerText.trim().toLowerCase();
        var targetsec=document.getElementById(targetid);
        //console.log(targetsec);
        
        var interval = setInterval(function(){
            var targetcoordinates=targetsec.getBoundingClientRect();
            if (targetcoordinates.top<=0){
                clearInterval(interval);
                return;
            }else{
                window.scrollBy(0,50);
            }
        },50);
    });
} */



var n=document.querySelectorAll('.nav-menu a');
var interval;
for(var i=0;i<n.length;i++){
    n[i].addEventListener('click',function(e){
        e.preventDefault();
        var targetid=this.innerText.trim().toLowerCase();
        var targetsec=document.getElementById(targetid);
        console.log(targetsec);
        //interval=setInterval(scrollvertical,50,targetsec);
        //or
        interval = setInterval(function(){
            scrollvertical(targetsec);
        },50);
    });
}
function scrollvertical(targetsec){
    var targetcoordinates=targetsec.getBoundingClientRect();
    if (targetcoordinates.top<=0){
        clearInterval(interval);
        return;
    }else{
        window.scrollBy(0,40);
    }
}