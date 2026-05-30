const detailedInfo = async (id)=>{
    const data = await fetch (`https://openapi.programming-hero.com/api/word/${id}`);
    const out = await data.json();


    
    const modal=document.createElement("dialog");
    // modal.id="my_modal_5";
    modal.classList.add("modal","modal-bottom","sm:modal-middle");

    modal.innerHTML="";
    modal.innerHTML=`
    <!-- <button class="btn" onclick="my_modal_5.showModal()">open modal</button> -->
    <div class="modal-box">
    <article class="my-6 p-6 rounded-4xl border-[#D7E4EF] border-2">
    <h3 class="text-lg font-bold mb-8">${out.data.word} (<i class="fa-solid fa-microphone-lines"></i>) : ${out.data.pronunciation}</h3>
    <p class="mb-2">Meaning</p>
    <p class="mb-8 mt-2">${out.data.meaning}</p>
    <p>Example</p>
    <p class="mb-8 mt-2">${out.data.sentence}</p>
    <p class="mb-4">সমার্থক শব্দ গুলো</p>
    <div id="synonyms-container" class="    flex flex-wrap gap-4">
    </div>
    </article>
    <div class="mr-auto">
    <form method="dialog">
    <!-- if there is a button in form, it will close the modal -->
    <div class="card-actions">
    <button class="btn btn-primary">Continue Learning</button>
    </div>
    </form>
    </div>
    </div>
    `;
    
    
    document.getElementById("body").appendChild(modal);


// for all the synonyms card content.
    out.data.synonyms.forEach(element => {
        const synonym=document.createElement("span");
        synonym.innerText=element;
        synonym.classList.add("bg-primary-content","py-1.5","px-5","rounded-md");
        // document.getElementById("synonyms-container").appendChild(synonym); ---> bad practice
        // modal.getElementById("synonyms-container").appendChild(synonym); ---> good practice
        modal.querySelector("#synonyms-container").appendChild(synonym);

        console.log(1 , synonym ,2,document.getElementById("synonyms-container"))
        
    });

// document.getElementById("body").appendChild(modal);
console.log(modal);

    // modal.addEventListener("click",showModal());
    modal.showModal();

}