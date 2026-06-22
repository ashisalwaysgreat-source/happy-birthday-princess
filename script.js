const pages = document.querySelectorAll(".page");

let currentPage = 0;
let musicStarted = false;

function showPage(index){

    for(let i = 0; i < pages.length; i++){
        pages[i].style.display = "none";
    }

    pages[index].style.display = "flex";

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}

function nextPage(){

    if(!musicStarted){

        const music = document.getElementById("bgMusic");

        if(music){
            music.play().catch(()=>{});
        }

        musicStarted = true;
    }

    if(currentPage < pages.length - 1){

        currentPage++;

        showPage(currentPage);
    }
}

function prevPage(){

    if(currentPage > 0){

        currentPage--;

        showPage(currentPage);
    }
}

window.onload = function(){

    showPage(0);

};

for(let i=0;i<100;i++){

    const star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.animationDelay=Math.random()*5+"s";

    document.body.appendChild(star);
}

setInterval(()=>{

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },12000);

},1500);