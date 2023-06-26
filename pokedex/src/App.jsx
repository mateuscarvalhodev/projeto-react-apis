import ContextProvider from './Context';
import GlobalStyles from './GlobalStyles';
import { Router } from './services/Routes';
import 'tailwindcss/tailwind.css';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <ContextProvider>
        <Router />
      </ContextProvider>
    </>
  );
};

export default App;
