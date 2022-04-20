import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./component/MyNav";
import Welcome from "./component/Welcome";
import LatestRelease from "./component/LatestRelease";

function App() {
  return (
    <div>
      <MyNav />
      <Welcome />
      <LatestRelease />
    </div>
  );
}

export default App;
