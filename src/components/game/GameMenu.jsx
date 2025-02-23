import Game from "./Game"

const GameMenu = ({ allGames, sizeMapping }) => {
  return (
    <>
      {
        allGames.map((game, idx) => (
          <Game key={`game-container-${idx}`} game={game} sizeMapping={sizeMapping}/>
        ))
      }
  </>
  )
}

export default GameMenu;