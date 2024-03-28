# Tic-tac-toe
Super Mario themed tic-tac-toe
# Tic Tac Toe

- Super Mario theme on the classic TicTacToe game.
- game: https://WalidF123.github.io/Tic-tac-toe/

## Approach to problem (planning)

- I had broken down the mechanics of tic tac toe into simple steps to solve, not focussing on game design or theme.

- Once I had laid out the steps, I began by creating my main game screen on HTML with basic CSS and adding JavaScript functionality. Once I had a working tic tac toe game, I had physically drawn out a layout and began adding a Mortal Kombat theme (background, 'fatality' popup, 'fight/finish him' message on player turn, background audio) styling fonts, adding a win counter and finally adding a intro + winner screen as separate secions in the HTML. After that I added my characters from the super mario world "Bowser" and "Luigi".

## Cool tech used

- 'fight' function used which flashes "Fight" on the player whose turn it is. If player had two wins, this switched to a "Finish Him" message.
- using .style.display ='none' to hide the fatality popup image and allowing it to flash when condition (winning) was met.
- Adding the Mortal Kombat theme song and a downloaded mortal kombat font.
- Added Super Mario logo

## Lessons I've learnt

- Event listeners will listen for an event ALWAYS even if you don't want them to. I learnt to use remove event listener and the {once: true} parameter.
- If a condition is if (event.target.innerHTML=== '') and the result is event.target.innerHTML = 'newHTML', the condition will always run and place an HTML inside the HTML that was created.
- I had listed my grids from gridOne to gridNine in HTML, but listed gridSix before gridFive. This caused me a headache when winning conditions were declaring winners in different conditions.

## Future Features to add

- Add more characters and allow players to select a character.
- Add a single player option where player v computer.
- A character animation when winning best of 5.
- Option to change from best of 5 to best of 3/7/10.
- Option increase grid size from 3x3 to 4x4, 5x5.
- Adjustable screen size for mobile display.
