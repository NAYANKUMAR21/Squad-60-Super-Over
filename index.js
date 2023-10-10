//stike button to append score or update score
var strike = document.getElementById('strike');
// reset button replay again
var reset = document.getElementById('reset');

var scoreTeam1 = document.getElementById('score-team1');
var scoreTeam2 = document.getElementById('score-team2');

var wicketTeam1 = document.getElementById('wickets-team1');
var wicketTeam2 = document.getElementById('wickets-team2');

reset.addEventListener('click', () => {
  resetFn();
});
var runs = [0, 1, 2, 3, 4, 6, 'W'];

var sum1 = 0;
var sum2 = 0;
var wicketSum1 = 0;
var wicketSum2 = 0;
var noOfBalls1 = 0;
var noOfBalls2 = 0;

var turns = 1;

strike.addEventListener('click', createAndAppendScore);

function createAndAppendScore() {
  let runs = RandomNes();
  if (turns == 2) {
    noOfBalls2 = noOfBalls2 + 1;
    scoreUpdate2(runs, noOfBalls2);
    if (runs !== 'W') {
      sum2 = sum2 + runs;
      scoreTeam2.innerHTML = '';
      scoreTeam2.innerText = sum2;
    } else {
      wicketSum2 = wicketSum2 + 1;
      wicketTeam2.innerText = wicketSum2;
    }

    if (sum2 > sum1 || noOfBalls2 == 6 || wicketSum2 == 2) {
      turns = 3;
      setTimeout(() => {
        gameOver();
      }, 20);
    }
  }
  if (turns == 1) {
    noOfBalls1 = noOfBalls1 + 1;
    ScoreUpdate1(runs, noOfBalls1);
    if (runs !== 'W') {
      sum1 = sum1 + runs;
      scoreTeam1.innerHTML = '';
      scoreTeam1.innerText = sum1;
    } else {
      wicketSum1 = wicketSum1 + 1;
      wicketTeam1.innerHTML = '';
      wicketTeam1.innerText = wicketSum1;
    }

    if (noOfBalls1 == 6 || wicketSum1 == 2) {
      turns = 2;
    }
  }
}

function RandomNes() {
  //0 -> <1
  var randomNess = Math.random();
  //0.7*7->4.9
  var valueInArray = randomNess * runs.length;
  //4.9->4
  var roundingOffValue = Math.floor(valueInArray);
  //returning
  return runs[roundingOffValue];
}

function gameOver() {
  if (sum1 > sum2) {
    alert('INDIA WINS');
  } else if (sum1 < sum2) {
    alert('PAKISTAN WINS');
  } else {
    alert('Match is Draw');
  }
}

function ScoreUpdate1(runs, noOfBalls1) {
  var p = document.createElement('p');
  p.innerHTML = runs;
  var ball = document.querySelector(
    `#team1-superover>.ball:nth-child(${noOfBalls1})`
  );
  ball.appendChild(p);
}
function scoreUpdate2(runs, noOfBalls2) {
  var p = document.createElement('p');
  p.innerHTML = runs;
  var ball = document.querySelector(
    `#team2-superover>.ball:nth-child(${noOfBalls2})`
  );
  ball.appendChild(p);
}

function resetFn() {
  return window.location.reload();
}
