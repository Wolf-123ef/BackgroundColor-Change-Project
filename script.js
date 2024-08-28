const colors=["Red","Green","Yellow","Deeppink","Orange","Yellow","Turquoise","Gray","Skyblue","Purple","Greenyellow","Salmon"];
    let index=0;
    document.getElementById("btn").addEventListener("click",function(){
        document.getElementById("btn").classList.add("design");
        document.getElementById("main").style.backgroundColor=colors[index];
        document.getElementById("tag").innerHTML="BackgroundColor: "+colors[index];
        index=(index+1)%colors.length;
    });
     document.getElementById("btn0").addEventListener("click",function(){
        document.getElementById("btn0").classList.add("design");
        document.getElementById("main").style.backgroundColor=colors[index-1];
        document.getElementById("tag").innerHTML="BackgroundColor: "+colors[index-1];
        index=(index-1)%colors.length;
     });
     document.getElementById("btn").addEventListener("mouseleave",function(){
        document.getElementById("btn").classList.remove("design");
     });
     document.getElementById("btn0").addEventListener("mouseleave",function(){
        document.getElementById("btn0").classList.remove("design");
     });