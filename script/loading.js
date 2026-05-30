function spinnerNeeded(value){
    if (value==true) {
        document.getElementById("frequently-invisible").classList.add("hidden");
        document.getElementById("spinner").classList.remove("hidden");
        

            // at first removing our custom made class .active  , from all buttons first
            const buttons = document.querySelectorAll(".level-btn");
            console.log(buttons);
            buttons.forEach((element,index)=>{
            element.classList.remove("active");
    })

    } else {
        document.getElementById("frequently-invisible").classList.remove("hidden");
        document.getElementById("spinner").classList.add("hidden");
    }
}