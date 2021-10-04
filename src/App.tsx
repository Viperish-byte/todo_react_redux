//import { Counter } from './features/counter/Counter';
import '../src/styling/appStyles/appStyles.css';
import '../src/styling/leftContainerStyles/leftContainerStyles.css'
import '../src/styling/rightContainerStyles/rightContainerStyles.css'
import LeftContainer from './features/leftContainer/LeftContainer';
import RightContainer from './features/rightContainer/RightContainer';

function App(): JSX.Element {
  return (
    <div className="App">
      <div className="title">Todo via React/Redux</div>

      <LeftContainer/>
      <RightContainer/>

      {/*<Counter />*/}

    </div>
  );
}

export default App;
