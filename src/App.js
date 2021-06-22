import Routes from './Routes';
import { ContextProvider } from './context';

const App = () => (
    <ContextProvider>
        <Routes />
    </ContextProvider>
);

export default App;
