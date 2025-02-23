const Game = ({ game, sizeMapping }) => {
    const { id, name, image, size } = game;

    return (
        <div className={`game col-${sizeMapping[size]} border mt-2 ms-2 d-flex justify-content-center`} key={`game-container-${id}`} style={{ backgroundImage: `url(${image})` }}>
        <div className="game-container border p-1 m-2">
          <h2>{name}</h2>
          <p className='d-flex justify-content-center'>View Coaches</p>
        </div>
      </div>
    )

}

export default Game;