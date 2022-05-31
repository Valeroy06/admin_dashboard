
import Sidebar from "../components/Sidebar";


function Default(Component) {
    return (
        < >
            <div className="def">
            <Sidebar />
            {/* <Header /> */}
            <Component/>
            </div>
        </>
    );
  }
  
  export default Default;