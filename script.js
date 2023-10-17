let peces=["🐠","🐬","🐳","🐟","🦐","🐙","🦑","🦀","🧜‍♂️","🧜‍♀️","🦈","🐡","🦞","🐚"];

setInterval(function() {
    let idPez=posRandom(screen.width);
    let elementDiv = document.createElement("div");
    elementDiv.id = `${idPez}`;
    elementDiv.classList.add("pez");
    elementDiv.style.left=`${idPez}px`;
    elementDiv.style.top=`0px`;
    elementDiv.innerText=peces[posRandom(peces.length-1)];
    document.body.appendChild(elementDiv);
    setTimeout(function(){
        elementDiv.remove();
      }, 5000);
},1000);

function posRandom(max){
    return (Math.floor(Math.random() * (max - 0 + 1)));
}