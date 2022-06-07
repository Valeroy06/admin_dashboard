import Images from "../img/Images";
import Table from "../components/Table";
import Dummy from './Dummy'


const Payouts = () => <div className="pay">

    <div className="head">
    <Dummy title="Payouts" notImg={Images.notification} searchImg={Images.search} profileImg={Images.person} text="eshibobo"/>
    </div>
    <div className="container">
        <div className="payout">
            <h3>Payouts</h3>
            <span><img src={Images.sort} className="sort" alt="sort" />sort</span><br />
            <span><img src={Images.filter} className="filter" alt="filter" />filter</span>
        </div>
        <Table />
    </div>
</div>

export default Payouts;