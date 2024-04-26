import "./single-client.scss";
import Navbar from "../../Components/navbar/Navbar";
import Sidebar from "../../Components/sidebar/Sidebar";
import Chart   from "../../Components/chart/Chart"
import List from "../../Components/table/Table";


const SingleClient = () =>{
    return(
        <div className="single">
            <Sidebar/>
            <div className="singleContainer">
                <Navbar/>
                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                            alt="itemIMG" className="itemImg" />
                            <div className="details">
                                <h1 className="itemTitle">John Doe</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Email:</span>
                                    <span className="itemValue">janedoe@gmail.com</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Phone:</span>
                                    <span className="itemValue">0790276890</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Address:</span>
                                    <span className="itemValue">P.O Box 291- Kings Town, Kenya ,East Africa</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">County:</span>
                                    <span className="itemValue">TNC</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Chart aspect={4 /1} title ="User Payments Last 6 months"/>
                    </div>
                </div>
                <div className="bottom">
                <h1 className="title">Last Activities</h1>
                    <List/>
                </div>
            </div>

        </div>
    )
}

export default SingleClient