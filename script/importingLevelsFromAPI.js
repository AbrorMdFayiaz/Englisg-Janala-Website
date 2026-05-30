fetch("https://openapi.programming-hero.com/api/levels/all")
.then(res=>res.json())
.then(o=>{       o.data.forEach((element,index) => {

                let serial=element.level_no;
                let id=element.id;
            
                let child = document.createElement("div");
            
                // console.log(serial,child);
            
                child.innerHTML=`<button onclick="action(${serial},event)" id="level-btn-${serial}"  class=" level-btn lesson-btn-${serial} btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i>Lesson -${serial}</button>`;
            
                // console.log(serial);
            
                document.getElementById("level").appendChild(child);
            
                // console.log(serial,child);
});})