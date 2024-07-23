
let boxes= document.querySelectorAll('.box');
let resetBtn=document.querySelector('.resetBtn');
let winmsg= document.querySelector('.winmsg');
let newGame= document.querySelector('.newGame');
let turnO= true; //trunX

const winningPattern=[[0,1,2],
[3,4,5],
[6,7,8],
[0,4,8],
[2,4,6],
[0,3,6],
[1,4,7],
[2,5,8]];
boxes.forEach((box) => {
    box.addEventListener('click',()=>{

        if(turnO){
            box.innerText='O';
            turnO=false;
        }
        else{
            box.innerText='X';
            turnO=true;
        }
        box.disabled= true;

        checkWinner();
    })
});
resetBtn.addEventListener('click',()=>{
    for(box of boxes){
        box.innerText='';
        box.disabled=false;
        turnO=true;
        winmsg.classList.add('hide');
    }
 })

 newGame.addEventListener('click',()=>{
    for(box of boxes){
        box.innerText='';
        box.disabled=false;
        turnO=true;
        winmsg.classList.add('hide');
        winmsg.innerText=""
    }
 })
 resetBtn.addEventListener('click',()=>{
    for(box of boxes){
        box.innerText='';
        box.disabled=false;
        turnO=true;
        winmsg.classList.add('hide');
        winmsg.innerText="";
    }
 })
const disabledBox=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}

const checkWinner=()=>{
    for(let pattern of winningPattern){
        
        let pos1Val= boxes[pattern[0]].innerText;
        let pos2Val= boxes[pattern[1]].innerText;
        let pos3Val= boxes[pattern[2]].innerText;
        
        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){

            if(pos1Val===pos2Val && pos2Val===pos3Val){
            console.log('winner',pos1Val);
            winmsg.classList.remove('hide');
            winmsg.innerText=`Winner Is ${pos1Val}`;

            disabledBox();
            
        }
        }
    }
}
console.log(pos1Val)



  

