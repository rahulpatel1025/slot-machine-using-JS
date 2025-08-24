const prompt = require("prompt-sync")();
const rows = 3;
const cols = 3;

const SYMBOLS_COUNT ={
    A : 2,
    B : 4,
    C : 6,
    D : 8,
};
const SYMBOL_VALUES ={
    A : 5,
    B : 4,
    C : 3,
    D : 2,
};


const deposit = () => {
  while(true){  
    const depositamount = parseFloat(prompt("enter deposit amount: "));
    if (isNaN(depositamount)||depositamount<= 0 )
        {console.log("invalid deposit amount, try again: ");
    } else
         {
        return depositamount;   
    }
   } 
};

const getnumberoflines =() =>{
    while(true){  
    const lines = prompt("enter number of lines to bet on(1-3): ")
    const numberoflines = parseFloat(lines);

    if (isNaN(numberoflines)||numberoflines<= 0 || numberoflines >3)
        {console.log("invalid number of lines try): ");
    } else {
        return numberoflines;   
    }
   } 
};

const getbet =(balance, lines)=> {
    while(true){  
    const bet = prompt("Enter the bet per line: ")
    const numberbet = parseFloat(bet);

    if (isNaN(numberbet)||numberbet<= 0 || numberbet >balance/lines)
        {console.log("invalid bet, try again. ");
    } else {
        return numberbet;   
    }
   }    
};

const spin =() =>{
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)){
     for (let i = 0;  i < count; i++){
       symbols.push (symbol);
     }
    }

    const reels = [];
    for (let i = 0; i < cols; i++){
        reels.push([]);
        const reelSymbols = [...symbols]; 
        for(let j= 0; j < rows; j++){
            const randomindex = Math.floor (Math.random() *reelSymbols.length);
            const selectedSymbol = reelSymbols[randomindex];
            reels[i].push (selectedSymbol);
            reelSymbols.splice(randomindex, 1)
        }
    }
    return reels;
};  
const transpose = (reels) => {
    const rows = [];

    for(let i =0; i < reels[0].length; i++){
        rows.push([]);
        for(let j =0; j < reels.length; j++){
            rows[i].push(reels[j][i]);
        }
    }
    
    return rows;    
};

const printRows = (rows)=> {
    for (const row of rows){
        let rowString = " ";
        for (const[i,symbol] of row.entries()){
            rowString += symbol;
            if(i != row.length-1){
                rowString += " | ";
            }
        }
        console.log(rowString);
    }
};

const getwinnings = (rows, bet, lines) => {
    let winnings = 0;
    for(let row = 0; row<lines; row++){
      const firstsymbol = rows[row][0];
      let allSame = true;
      for(let col = 1; col < rows[row].length; col++){
        if (rows[row][col] !==firstsymbol){
            allSame = false;
            break;
        }
      }
      if(allSame){
        winnings += bet*SYMBOL_VALUES[firstsymbol];
      }
    }
    return winnings;
};
const game =()=> {
    let balance = deposit();
    const ROWS = 3;
    const COLS = 3;
    const SYMBOLS = ["A", "B", "C", "D"];
    while(true){
        console.log("you have a balance of $"+balance)
        const numberoflines = getnumberoflines();
        const bet = getbet(balance, numberoflines);
        balance -= bet*numberoflines;
        const reels = spin(SYMBOLS, ROWS, COLS);
        const rows = transpose(reels);
        printRows(rows);
        const winnings = getwinnings(rows,bet,numberoflines);
        balance+= winnings;
        console.log("you won, $"+winnings.toString());

        if(balance<=0){
            console.log("you have run out of money!");
            break;
        }
        const playAgain = prompt("do you want to play again(y/n)?");
        if(playAgain != "y") break;
    }
    console.log("thank you for playing!");
};
game();