import './app.scss'
import Game from './components/game/Game'
import GameMenu from './components/game/GameMenu';
const App = () => {
  const allGames = [
    {
      id: 1,
      name: 'Fortnite',
      size: 'large',
      image: 'https://fakeimg.pl/600x400/22e674/909090?text=Replace+me'
    },
    {
      id: 2,
      name: 'Apex Legends',
      size: 'large',
      image: 'https://fakeimg.pl/600x400/e6225d/909090?text=Replace+me'
    },
    {
      id: 5,
      name: 'Marvel Rivals',
      size: 'large',
      image: 'https://fakeimg.pl/600x400/2336e8/909090?text=Replace+me'
    },
    {
      id: 4,
      name: 'Rainbow 6: Siege',
      size: 'large',
      image: 'https://fakeimg.pl/600x400/9ce823/909090?text=Replace+me'
    },
    {
      id: 3,
      name: 'Valorant',
      size: 'large',
      image: 'https://fakeimg.pl/600x400/22e674/e89623?text=Replace+me'
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
        <GameMenu allGames={allGames} sizeMapping={sizeMapping} />
      </div>
    </div>
  );
};

export default App;
