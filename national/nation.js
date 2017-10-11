window.onload=function(){
                var content=document.getElementById('content');
                var list=document.getElementById('list');
                var buttons = document.getElementById('buttons');
                var prev = document.getElementById('prev');
                var next = document.getElementById('next'); 
                var animated=false;
                var timer;

                function animate(offset){
                    animated=true;
                    var newL=parseInt(list.style.left)+offset;
                    var time=600;
                    var interval=10;
                    var speed = offset/(time/interval);
                     
                    function go(){
                        if((speed<0 && parseInt(list.style.left)>newL) || (speed>0 && parseInt(list.style.left)< newL)){
                            list.style.left=parseInt(list.style.left)+speed+'px';
                            setTimeout(go,interval);
                        }else{
                            animated=false;
                            list.style.left = newL+'px';
                            if(newL<-2250){
                                list.style.left=-500+'px';
                            }else if(newL>-500){
                                list.style.left=-2250+'px';
                            }
                        }
                    }
                    go();  
                }
                 
                function play(){
                 timer = setInterval(function(){
                    next.onclick();
                 },2500);
               }
                 
                function stop(){
                    clearInterval(timer);
                }

                play();

                next.onclick=function (){
                    if(animated==false){
                        animate(-250);
                    }
                }
                 
                prev.onclick=function (){
                    if(animated==false){
                        animate(250);
                    }
                }
}


	          

