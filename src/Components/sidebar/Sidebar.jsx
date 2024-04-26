import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';
import { Link } from "react-router-dom"; 
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Sidebar = () =>{
    const {dispatch} = useContext(DarkModeContext)
    return(
        <div className="sidebar">
            <div className="top">
                <Link to ="/" style={{textDecoration:"none"}}>
                <span className="logo">teven</span>
                </Link>
                
            </div>
            <hr />
            <div className="center">
                <ul>
                    
                    <Link to ="/clients" style={{textDecoration:"none"}}>
                        <p className="title">CLIENTS</p>
                        <li>                    
                            <DashboardIcon className="icon"/>
                            Clients
                        </li>
                        <li>
                            <PeopleAltOutlinedIcon className="icon"/>
                            Add Client
                        </li>
                        <li>
                            <PeopleAltOutlinedIcon className="icon"/>
                            Guarantors
                        </li>
                    </Link>
                <p className="title">LOANS</p>
                <li>                
                    <AccountBalanceIcon className="icon"/>
                    Overdue Loans
                </li>
                <li>
                    <PeopleAltOutlinedIcon className="icon"/>
                    Ongoing Loans
                </li>
                <li>
                    <PeopleAltOutlinedIcon className="icon"/>
                    Paid loans
                                      
                </li>
                <li>
                    <PeopleAltOutlinedIcon className="icon"/>
                    unpaid loans                                      
                </li>
                <li>
                    <PeopleAltOutlinedIcon className="icon"/>
                    Securites                                     
                </li>
                <p className="title">PAYMENTS</p>
                <li>                
                    <PaymentsOutlinedIcon className="icon"/>
                    Payments
                </li>
                <p className="title">REPORTS</p>
                <li>                
                    <AssessmentOutlinedIcon className="icon"/>
                    Capital Balance
                </li>
                <li>
                    <AssessmentOutlinedIcon className="icon"/>
                    Net Profit 
                </li>
                <li>
                    <AssessmentOutlinedIcon className="icon"/>
                    Net Revenue
                </li>
                <li>
                    <BookmarkRemoveIcon className="icon"/>
                    Bad Debts
                </li>
                <li>                
                    <BookmarkRemoveIcon className="icon"/>
                    Expenses
                </li>
                <p className="title">PROFILE</p>
                <li>
                    <SettingsIcon className="icon"/>
                    Settings
                </li>
                <li>
                    <LogoutIcon className="icon"/>
                    Log out
                </li>

               </ul>
            </div>
            <div className="bottom">
                <div className="colorOption" onClick={()=> dispatch({type:"LIGHT"})}></div>
                <div className="colorOption" onClick={()=> dispatch({type:"DARK"})}></div>
                
            </div>
        </div>
    )
}

export default Sidebar