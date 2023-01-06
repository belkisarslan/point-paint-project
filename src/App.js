import { useSelector } from 'react-redux'
import { Theme } from "./features/theme/Theme";


function App() {
  const { dark } = useSelector(state => state.theme)
  return (
    <div className={dark ? 'dark' : 'light'}>
     <Theme/>
    </div>
  );
}

export default App;
