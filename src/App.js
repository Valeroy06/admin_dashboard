import Default from "./layouts/Default";
import routes from "./util/routes";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import './styles/global.scss'
import Home from './pages/Home'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={routes.home} element={Default(Home)}/>     
          <Route path={routes.settings} element={<Default/>}/>     
        </Routes>
     </Router>
    </div>
  );
}

export default App;
