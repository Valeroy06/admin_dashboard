
import Sidebar from "../components/Sidebar";


function Default(Component) {
    return (
        < >
            <div className="def">
            <Sidebar />
            <Component/>
            </div>
        </>
    );
  }
  
  export default Default;