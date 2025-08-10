


for(let i=0; i<document.querySelectorAll(".drum").length ;i++ ){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
         
        console.log(this.innerText)
        play_sound(this.innerText)
        anim(this.innerText)
    })
    
    
    
    

 














    function play_sound(key){
        
        switch (key){
            case "A":
                var tom1 = new Audio("sounds/tom-1.mp3")
                tom1.play();
                break;
            case "Z":
                var tom2 = new Audio("sounds/tom-2.mp3")
                tom2.play();
                break;
            case "E":
                var tom3 = new Audio("sounds/tom-3.mp3")
                tom3.play();
                break;
            case "Q":
                var tom4 = new Audio("sounds/tom-4.mp3")
                tom4.play();
                break;

            case "S":
                var snare = new Audio("sounds/snare.mp3")
                snare.play();
                break;
            case "D":
                var kick = new Audio("sounds/kick-bass.mp3")
                kick.play();
                break;
            case "F":
                var crash = new Audio("sounds/crash.mp3")
                crash.play();
                break;                                
            default:
                break;
        } 
    
    }


    function anim(keypressed){
        document.querySelector("."+keypressed).classList.add("pushed")
        setTimeout(() => {
            document.querySelector("."+keypressed).classList.remove("pushed")

        }, 100);

    }

} ;
document.addEventListener("keydown", function(e){
    key=e.key.toUpperCase()
    console.log(key)
    play_sound(key)
    anim(key)
})