import Default from "./layouts/Default";
import routes from "./util/routes";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import './styles/global.scss'
import './styles/payouts.scss'
import './styles/home.scss'
import './styles/charts.scss'
import './styles/referrals.scss'
import './styles/transactions.scss'
import './styles/settings.scss'
import Home from './pages/Home'
import Payouts from './pages/Payouts'
import Charts from './pages/Charts'
import Referrals from './pages/Referrals'
import Transactions from './pages/Transactions'
import Settings from './pages/Settings'
import {ImageProvider} from './components/ImageContext'


function App() {
  return (
    <div className="App">
      <ImageProvider>
      <Router>
        <Routes>
        <Route path={routes.payouts} element={Default(Payouts)}/>
          <Route path={routes.home} element={Default(Home)}/>
          <Route path={routes.referrals} element={Default(Referrals)}/>
          <Route path={routes.transactions} element={Default(Transactions)}/>
          <Route path={routes.settings} element={Default(Settings)}/>
          <Route path={routes.charts} element={Default(Charts)}/>     
          <Route path={routes.settings} element={<Default/>}/>     
        </Routes>
     </Router>
     </ImageProvider>
    </div>
  );
}

export default App;
