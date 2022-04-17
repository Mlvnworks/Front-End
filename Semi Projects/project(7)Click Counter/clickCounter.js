const btn=document.querySelector('#btn');
const display=document.querySelector('h2');
const body=document.querySelector('body');
let score=0

btn.addEventListener('click', ()=>{
    
    const total=score += 1;
    display.textContent=total;
    
    

    
    
    if(total == 1){
    let timer=500;
    
    setInterval(time,10)

    function time(){
    const show=document.querySelector('#countDown');
    
        timer --;
        

        
        show.value=timer;
    }
        // all
        const timeOut=setTimeout(greeting,5000)
        function greeting(){
            const scoreDiv=document.createElement('div');
            scoreDiv.id='score-div';
            const h3=document.createElement('h3');
            h3.appendChild(document.createTextNode(`Click Count:${display.textContent}`))
            scoreDiv.appendChild(h3);

            const restartButton=document.createElement('button');
            restartButton.id='restart-button';
            restartButton.appendChild(document.createTextNode('RESTART'))
            restartButton.id='restart-button';
            scoreDiv.insertBefore(restartButton,h3)

            const clickArea=document.querySelector('#click-area');

            container.insertBefore(scoreDiv,clickArea)
            
            restartButton.addEventListener('click', ()=>{
                location.reload()
            })
            if(display.textContent <= 20 && display.textContent >= 11){
                scoreDiv.style.backgroundImage='url(td.jpg)'

            }else if(display.textContent >=1 && display.textContent <= 10) {
                scoreDiv.style.backgroundImage='url(i1.jpg)'

            }else if(display.textContent >=21 && display.textContent <= 30) {
                scoreDiv.style.backgroundImage='url(i2.jpg)'
            }else if(display.textContent >=31 && display.textContent <= 35) {
                scoreDiv.style.backgroundImage='url(i3.jpg)'
            }else if(display.textContent >=36) {
                scoreDiv.style.backgroundImage='url(th.jpg)'
            }



        
        
        }
    }
    }
    
)



    





