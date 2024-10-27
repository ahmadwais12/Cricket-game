
let scoreStr=localStorage.getItem('Score');
let score;

resetScore(scoreStr);
function resetScore(scoreStr){
  score= scoreStr ? JSON.parse(scoreStr): {
    win:0,
    lost:0,
    tie:0,
  };
  score.dispayScore=function(){
    return`Score: Win:${score.win}  ,   lost:${score.lost}   ,Tie:${score.tie}`;
 };
  
 showResult();
}


function genrateRandomnumber(){
  let  randNumber=Math.random()*3;
    if(randNumber>0 && randNumber<=1){
      return 'Bat';
    }
     else if(randNumber>1 && randNumber<=2){
     return 'Ball';
    }
    else{
     return 'Stump';
    }  

 }

function getResult(userMove,comuterMove){

if(userMove==='Bat'){
  if(comuterMove=='Ball'){
     score.win++;
     return 'You won !!!';
    }
     else if(comuterMove==='Bat'){
      score.tie++;
    return 'It is tie.';
    }
    else if(comuterMove==='Stump'){
      score.lost++;
     return 'Comupter has won!!!';
    }

} else if(userMove==='Ball'){

  if(comuterMove==='Ball'){
    score.tie++;
   return'It is tie.';
  }
   else if(comuterMove==='Bat'){
    score.lost++;
  return 'Comupter has won!!!';
  }
  else if(comuterMove==='Stump'){
    score.win++;
    return'User won!!!';
  }
}
else{
  if(comuterMove==='Ball'){
    score.lost++;
    return 'Comupter has won!!!';
   }
    else if(comuterMove==='Bat'){
      score.win++;
  return 'User won!!!';
   }
   else if(comuterMove==='Stump'){
    score.tie++;
   return 'It is tie.';
   }

}

}   

function showResult(userMove,computerMove,result){
  localStorage.setItem('Score',JSON.stringify(score));
  document.querySelector('#user-move').innerText=userMove!==undefined ? `You have chosen ${userMove}`:'';
  document.querySelector('#computer-move').innerText=computerMove!==undefined ? ` Cmputer choice is ${computerMove}`: '';
  document.querySelector('#show-result').innerText=result !== undefined ?`${result}`:'';
  document.querySelector('#show-score').innerText= `${score.dispayScore()}`;

}