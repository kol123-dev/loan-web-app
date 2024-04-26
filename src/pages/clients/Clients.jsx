import Datatable from "../../Components/datatable/Datatable";
import Navbar from "../../Components/navbar/Navbar";
import Sidebar from "../../Components/sidebar/Sidebar";
import "./clients.scss";


const Clients = () =>{
    return(
        <div className="client">
            <Sidebar/>

            <div className="clientContainer">
              <Navbar/>
              <Datatable/>
            </div>
        </div>
        
    )
}

export default Clients