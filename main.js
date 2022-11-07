function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg"  alt="Bandeira do ${player1}">
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
         </li>
  
  `
}


let delay = -0.3
function createCard(date, day, games) {
  delay = delay + 0.3;
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span> </h2>

        <ul>
          ${games}
        </ul>
      </div>
      `
}

document.querySelector("#cards").innerHTML = `
 
  
    ${createCard(
      "24/11",
      "Quinta",
      createGame("brazil", "15:00", "serbia") +
        createGame("portugal", "15:00", "gana") +
        createGame("uruguay", "09:00", "southkorea")
    )} 
    ${createCard(
      "28/11",
      "Segunda",
      createGame("brazil", "12:00", "switzerland") +
        createGame("portugal", "15:00", "uruguay") +
        createGame("southkorea", "09:00", "gana")
    )}  
    ${createCard(
      "02/12",
      "Sexta",
      createGame("brazil", "15:00", "cameroon") +
        createGame("gana", "15:00", "uruguay") +
        createGame("southkorea", "09:00", "portugal")
    )}

 
`

