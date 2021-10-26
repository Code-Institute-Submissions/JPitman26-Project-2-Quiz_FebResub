const highScoresList = document.querySelector('#highScoresList')
//local storage of highscore
const highScores = JSON.parse(localStorage.getItem("highScores")) || []

highScoresList.innerHTML =
    highScores.map(score => {
        return `<li class="high-score">${score.name} - ${score.score}</li>`
    }).join("")

    goHomeBtn = 
    window.location.assign('./index.html')
    window.location.href = window.location.host.includes('github') ? '/Project-2-Quiz/' : '/index.html';
