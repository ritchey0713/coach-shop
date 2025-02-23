import './app.scss'
const App = () => {
  const allGames = [
    {
      id: 1,
      name: 'Fortnite',
      size: 'large'
    },
    {
      id: 2,
      name: 'Apex Legends',
      size: 'largelarge'
    },
    {
      id: 5,
      name: 'Marvel Rivals',
      size: 'large'
    },
    {
      id: 4,
      name: 'Rainbow 6: Siege',
      size: 'large'
    },
    {
      id: 3,
      name: 'Valorant',
      size: 'large'
    },
  ]

  const sizeMapping = {
    'small': 3,
    'medium': 6,
    'large': 12,
  }
  return (
    <div className="games-container container">
      <div className='row justify-content-center'>
        {
          allGames.map(({id, name, size}) => (
            <div className={`game col-${sizeMapping[size]} border mt-2 ms-2 d-flex justify-content-center`} key={`game-container-${id}`}>
              <div className="game-img"/>
              <div className="game-container">
                <h2>{name}</h2>
                <p>View Coaches</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default App;
