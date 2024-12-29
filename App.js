import { AppContextProvider } from './appContext';
import Auth from './src/auth/navigation';

export default function App() {
  return (
    <AppContextProvider>
      <Auth />
    </AppContextProvider>
  );
}
