import Images from "../img/Images";
import styles from "../styles/modules/sidebar.module.scss"





const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.top}>
                <img src={Images.logo} alt="logo" />
                <span className="language"><b>Language  Acad</b></span>
            </div>
            <div className={styles.center}>
                <div>
                    <div>
                        <div className={styles.charts}>
                            <img src={Images.charts_icon} alt="charts_icon" />
                            <span>Charts</span>
                        </div>
                    </div>
                    <div className={styles.referrals}>
                        <img src={Images.referrals_icon} alt="referrals_icon" />
                        <span>Referrals</span>
                    </div>
                    <div className={styles.transactions}>
                        <img src={Images.transactions_icon} alt="transactions_icon" />
                        <span>Transactions</span>
                    </div>
                    <div className={styles.payouts}>
                        <img src={Images.payouts_icon} alt="payouts_icon" />
                        <span>Payouts</span>
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.settings}>
                    <img src={Images.settings_icon} alt="settings_icon" />
                    <span>Settings</span>
                </div>
                <div className={styles.home}>
                    <img src={Images.home_icon} alt="home_icon" />
                    <span>Home</span>
                </div>
            </div>
        </div>

    );
}

export default Sidebar;