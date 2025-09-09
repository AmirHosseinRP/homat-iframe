import "./App.css";
import HomatIframe from "./components/HomatIframe/HomatIframe";
import Navbar from "./components/Navbar/Navbar";
import OfflineError from "./components/OfflineError/OfflineError";
import { useOnlineStatus } from "./shared/hooks/useOnlineStatus";

function App() {
  const isOnline = useOnlineStatus();

  return (
    <>
      <Navbar />

      {isOnline ? <HomatIframe /> : <OfflineError />}
    </>
  );
}

export default App;
