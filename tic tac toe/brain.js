let boxes=document.querySelectorAll(".box");
let msg=document.querySelector("#msg");
let newbtn=document.querySelector("#new-btn");
let resetbtn=document.querySelector("#reset-btn");
let msgContainer=document.querySelector(".msg-container");
const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]
newbtn.addEventListener("click",resetGame);

let turno=true;
let  count=0;
var resetGame=()=>
{
    count=0;
    turno=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

resetbtn.addEventListener("click",resetGame);
boxes.forEach((box)=>
    {
        box.addEventListener("click",()=>{
            if(turno)
            {
                box.innerText="O";
                turno=false;
            }
            else
            {
                box.innerText="X";
                turno=true;
            }
            box.disabled=true;
            count++;
            let isWinner=checkWinner();
            if(count===9 && !isWinner)
                gameDraw(); 
        })        
    })
            
const disableBoxes=()=>{
    for(let box of boxes)
        box.disabled=true;
} 
const gameDraw=()=>{
    msg.innerText=`Game Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const enableBoxes=()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>
{
    msg.innerText=`Congratulation ,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner=()=>{
    for(let pattern of winpattern)
    {
        let p1val=boxes[pattern[0]].innerText;
        let p2val=boxes[pattern[1]].innerText;
        let p3val=boxes[pattern[2]].innerText;
        if(p1val!="" && p2val!="" && p3val!="")
        {
            if(p1val===p2val && p2val===p3val)
            {
                // console.log(p1val);
                showWinner(p1val);
                return true;
            }
        }
    }
}