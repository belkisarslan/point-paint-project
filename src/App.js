import { useSelector } from 'react-redux'
import { Canvas } from './features/canvas/Canvas';
import { Theme } from "./features/theme/Theme";


function App() {
  const { dark } = useSelector(state => state.theme)
  return (
    <div className={dark ? 'dark' : 'light'}>
     <Theme/>
     <Canvas/>
    </div>
  );
}

export default App;
