function constructors(){
    // this.player = player;
    const container = document.querySelector("video");
    const box = document.querySelector(".box");
    container.addEventListener('contextmenu', (e)=>{
        const a = document.querySelector("p");
        const container = document.querySelector("video");
        const event = e || window.event;
        event.preventDefault();
        document.querySelector('.menu-items').style.display="block";
        box.classList.add('dplayer-menu')

        /* 点击鼠标左键隐藏框框 */
        container.addEventListener('click',()=>{
           hide();
        })
        show();
        
    })
/* 鼠标右键触发事件 */
function show(event){
    const clientRect = document.querySelector('.dplayer-menu');
    event = event || window.event;
    let x = event.offsetX || event.originalEvent.layerX;
    let y = event.offsetY || event.originalEvent.layerY;
     const menuWidth = parseInt(window.getComputedStyle(clientRect).width)
     const menuHeight = parseInt(window.getComputedStyle(clientRect).height)
    const videolocal = container.getBoundingClientRect();
     if(x + menuWidth >= videolocal.width ){
         clientRect.style.right = videolocal.width - x +'px'
         clientRect.style.left = 'initial';
    }else{
        clientRect.style.left = x +'px';
        clientRect.style.right = 'initial';
    }

    if(y + menuHeight >= videolocal.height ){
        clientRect.style.bottom = videolocal.height - y +'px'
        clientRect.style.top = 'initial';
   }else{
       clientRect.style.top = y +'px'
       clientRect.style.bottom = 'initial';
   }  
}
/* 隐藏框框 */
function hide(){
  box.classList.remove('dplayer-menu');
  document.querySelector('.menu-items').style.display="none";
}
}

/* stats for nerds */
function statsForNerds(){
    const nerds = document.querySelector("#nerds");
    const dataBox = document.querySelector(".data-box");
    const closeBtn = document.querySelector("#close-btn");
    nerds.addEventListener('click', ()=>{
        dataBox.style.display="block";
    })
    closeBtn.addEventListener('click', ()=>{
        dataBox.style.display="none";
    })
}
constructors();
statsForNerds();