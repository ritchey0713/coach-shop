
const App = () => {
  const allGames = [
    {
      id: 1,
      name: 'Fortnite'
    },
    {
      id: 2,
      name: 'Apex Legends'
    },
    {
      id: 3,
      name: 'Valorant'
    },
    {
      id: 4,
      name: 'Rainbow 6: Siege'
    },
    {
      id: 5,
      name: 'Marvel Rivals'
    },
  ]
  return (
    <div className="games-container">
      {
        allGames.map(({name}) => (
          <div className="game">
            <div className="game-img"/>
            <div className="game-container">
              <h2>{name}</h2>
              <p>View Coaches</p>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default App;
