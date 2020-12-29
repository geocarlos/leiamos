import React from 'react';
import Learning from './components/Learning';
import Training from './components/Training';

function App() {
  const [activity, setActivity] = React.useState('learning');
  return (
    <div className="container">
      <div style={{
        flexBasis: '100%', 
        height: '1.5rem', 
        width: '5rem', 
        display: 'flex',
        padding: '1rem', 
        justifyContent: 'flex-end'}}>
        <button 
          onClick={() => setActivity(prev => prev === 'learning' ? 'training' : 'learning')}>{activity === 'learning' ? 'Train' : 'Learn'}</button>
        </div>
      {activity === 'learning' ? <Learning /> : <Training/>}
    </div>
  );
}

export default App;
