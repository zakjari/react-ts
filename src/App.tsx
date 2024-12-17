import Greeting from './components/Greeting';
import Counter from './components/Counter';

import './App.css';

const App: React.FC = () => {
  return (
    <>
      <Greeting name="Trump" />
      <Counter />
    </>
  );
};

export default App;