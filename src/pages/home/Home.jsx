import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import "./home.scss";
import Widgets from "../../Components/widgets/Widgets";
import Featured from "../../Components/Featured/Featured";
import Chart from "../../Components/chart/Chart";
import Table from "../../Components/table/Table";
const Home = () =>{
    return(
        <div className="home">
           <Sidebar/>
           <div className="homeContainer">
                <Navbar/>
                <div className="widgets">
                    <Widgets type = "clients"/>
                    <Widgets type = "loans"/>
                    <Widgets type = "payments"/>
                    <Widgets type = "capital"/>                    
                </div> 
                <div className="charts">
                    <Featured/>
                    <Chart aspect={3 / 1} title="Last 6 Months Perfomance"/>
                </div>
                <div className="listContainer">
                    <div className="listTitle">Latest Payments</div>
                    <Table/>
                </div>
           </div>
        </div>
    )
}

export default Home