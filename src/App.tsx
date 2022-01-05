import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import ShowerCount from './components/ShowerCount/ShowerCount';
import CountPage from './pages/CountPage/CountPage';

function App() {

  const queryClient = new QueryClient()

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <ShowerCount />
        <CountPage />
      </QueryClientProvider>
    </div>
  );
}

export default App;
