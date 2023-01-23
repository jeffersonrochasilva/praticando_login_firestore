import "./App.css";
import UserProvider from "./contexts/use";
import RoutesApp from "./routes";

function App() {
  return (
    <UserProvider>
      <RoutesApp />
    </UserProvider>
  );
}

export default App;
