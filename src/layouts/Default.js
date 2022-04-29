
import Sidebar from "../components/Sidebar";


function Default(Component) {
    return (
        <>
            
            <Sidebar />
            <Component/>
            
        </>
    );
  }
  
  export default Default;