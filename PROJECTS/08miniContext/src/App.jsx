import { Login, Profile } from './components';
import UserContextProvider from './context/UserContextProvider';

function App() {
  return (
    <UserContextProvider>
      <h1>Hello my name is Jenish</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
