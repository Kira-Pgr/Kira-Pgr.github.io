function changeFrameHeight(){
     var ifm= document.getElementById("iframepage"); 
     ifm.height=document.documentElement.clientHeight;

    }

window.οnresize=function(){  
     changeFrameHeight();  

    } 

