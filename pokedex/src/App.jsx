import GlobalStyles from './GlobalStyles';
import { Router } from './services/Routes';
import 'tailwindcss/tailwind.css';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router />
    </>
  );
};

export default App;
