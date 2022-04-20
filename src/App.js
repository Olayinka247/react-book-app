import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./component/MyNav";
import Welcome from "./component/Welcome";
import LatestRelease from "./component/LatestRelease";
import Footer from "./component/Footer";

function App() {
  return (
    <div>
      <MyNav />
      <Welcome />
      <LatestRelease />
      <Footer />
    </div>
  );
}

export default App;
