import Default from "./layouts/Default";
import routes from "./util/routes";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import './styles/global.scss'
import './styles/payouts.scss'
import './styles/home.scss'
import Home from './pages/Home'
import Payouts from './pages/Payouts'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path={routes.payouts} element={Default(Payouts)}/>
          <Route path={routes.home} element={Default(Home)}/>     
          <Route path={routes.settings} element={<Default/>}/>     
        </Routes>
     </Router>
    </div>
  );
}

export default App;
