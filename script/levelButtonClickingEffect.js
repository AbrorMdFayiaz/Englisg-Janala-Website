// console.log(6788)
// document.getElementById("level").addEventListener("click",action);
// function action (event) {
//     const level = event.target.innerText[9];
//     fetch(`https://openapi.programming-hero.com/api/level/${level}`).then(res=>res.json()).then(out=>console.log(out.data[2].word));
// };

console.log(6755588);

function action (serial,event) {

    
    
spinnerNeeded(true);
// ...........
    // making the buttons colorful , while they are active



    // at first removing our custom made class .active  , from all buttons first
    const buttons = document.querySelectorAll(".level-btn");
    console.log(buttons);
    buttons.forEach((element,index)=>{
        element.classList.remove("active");
    })
    

    // then adding .active class , to the clicked button only
    const clickedButton = document.getElementById(`level-btn-${serial}`);
    clickedButton.classList.add("active");
    
    
    
    
    
    
    
    // here the length indicates the api sends blank array or nor.
    // if length = 0 , then the array is blank , else it's not blank.
    
    const containerPlace=document.getElementById("frequently-invisible");
        containerPlace.innerHTML="";
    
        const cardContainer=document.createElement("div");
    
        cardContainer.classList.add("word-card-container" ,"rounded-3xl" , "bg-[#F8F8F8]","p-8","grid-cols-3","grid","gap-7");
    
        containerPlace.appendChild(cardContainer);

        fetch(`https://openapi.programming-hero.com/api/level/${serial}`)
           .then(res=>res.json())
           .then(out=>{
            const len = out.data.length ;
             console.log(len);



                if (len==0) {

                    console.log(len);
                    const containerPlace=document.getElementById("frequently-invisible");
                    containerPlace.innerHTML="";
                
                    const cardContainer=document.createElement("div");
            
                    cardContainer.innerHTML=`
                            <img src="./assets/alert-error.png" class="m-auto" alt="">
                            <p class="font-normal text-base leading-6 text-[#79716B] ">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
                            <h3 class="leading-10 font-medium text-4xl">নেক্সট Lesson এ যান</h3>
                        `;
                
                    cardContainer.classList.add("message-for-no-vocabulary","rounded-3xl", "bg-[#F8F8F8]","m-auto","text-center","py-20");
                
                    containerPlace.appendChild(cardContainer);




                    spinnerNeeded(false);
        
                }





                    else {

        console.log(len);


        const containerPlace=document.getElementById("frequently-invisible");
        containerPlace.innerHTML="";
    
        const cardContainer=document.createElement("div");
    
        cardContainer.classList.add("word-card-container" ,"rounded-3xl" , "bg-[#F8F8F8]","p-8","grid-cols-3","grid","gap-7");
    
        containerPlace.appendChild(cardContainer);

        fetch(`https://openapi.programming-hero.com/api/level/${serial}`)
           .then(res=>res.json())
           .then(out=>{
            
            
            out.data.forEach(element => {
    
                  // console.log(element.word);
                  // console.log(element.meaning,"/",element.pronunciation);
              
                  const card=document.createElement("article");
                  card.classList.add("bg-[#FFFFFF]" ,"rounded-xl" ,"p-14");
                  card.innerHTML=`
                    <section class="space-y-6 mb-14 ">
                        <h3>${element.word ? element.word : "শব্দ পাওয়া যায়নি"}</h3>
                        <p>Meaning / Pronounciation</p>
                        <h3>${element.meaning ? element.meaning : "অর্থ পাওয়া যায়নি"} / ${element.pronunciation ? element.pronunciation :"উচ্চারণ পাওয়া যায়নি"}</h3>
                    </section>
                    <section class="flex justify-between">
                        <button class="btn btn-soft btn-info  bg-[#1a91ff1a] p-4 rounded-lg"  onclick="detailedInfo(${element.id})" ><i class="fa-solid fa-circle-info " style="color: #374957;"></i></button>
                        <button  class="btn btn-soft btn-info  bg-[#1a91ff1a] p-4 rounded-lg" onclick="voiceAction('${element.word}')" ><i class="fa-solid fa-volume-high" style="color:#374957;"></i></button>
                    </section>
                  `;

        cardContainer.appendChild(card);

        spinnerNeeded(false);

        })})
    }
           })

}