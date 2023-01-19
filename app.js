
//CountDown Exercise
function countDown(time){
    let timer = setInterval(function(){
        time-- 
    if(time <= 0){
        clearInterval(timer)
        console.log('Done')
    } else {
        console.log(time)
    }
  }, 1)
}
//randomGame
function randomGame(){
    let randomNum;
    let numOfTimes = 0;
    let repeater = setInterval(function(){
        randomNum = Math.random()
        numOfTimes++
    if(randomNum > .75){
        clearInterval(repeater)
        console.log(`It took ${numOfTimes} tries`)
    }
  }, 1000);
}