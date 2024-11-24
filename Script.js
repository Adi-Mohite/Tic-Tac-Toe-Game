let boxes = document.querySelectorAll(".box");
let restbtn = document.querySelector(".reset");
let newgame = document.querySelector(".Ngame");
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector(".msg");

let turn0 = true;
let count=0;
const winpatterns = [
  [3, 4, 5],
  [0, 1, 2],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const restgame=()=>{
    for(let box of boxes)
        {
            turn0=true;
            enableboxes();
            count=0;
            msg.innerText="";
            msgcontainer.classList.remove("hide");
        } 
}
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Box was Clicked!!!");
    if (turn0) {
      box.innerText = "O";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;
    count ++;

    let iswinner=checkwinner()
    if(count===9&&!iswinner){
        gamedraw();
    }
  });
});
const gamedraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgcontainer.classList.remove("hide");
    disableboxes();
  };
const disableboxes=()=>{
    for (let box of boxes)
    {
        box.disabled=true;
    }
}
const enableboxes=()=>{
    for (let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}
const showwinner = (winner) => {
  msg.innerText = `congratulations , winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disableboxes();
};
const checkwinner = () => {
  for (let pattern of winpatterns) {
    // console.log(pattern[0],pattern[1],pattern[2]);
    let position1 = boxes[pattern[0]].innerText;
    let position2 = boxes[pattern[1]].innerText;
    let position3 = boxes[pattern[2]].innerText;

    if (position1 != "" && position2 != "" && position3 != "") {
      if (position1 === position2 && position2 === position3) {
        console.log(`Winner is ${position1}`);
        showwinner(position1);
      }
    }
  }
};
newgame.addEventListener("click",restgame);
restbtn.addEventListener("click",restgame);
