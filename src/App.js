import Header from './components/Header.jsx';
import Selector from './components/Selector.jsx';
import AppContextProvider from './context/AppContext.js';

function App() {
  return (
    <AppContextProvider>
      <Header />
      <Selector />
    </AppContextProvider>
  );
}

export default App;
