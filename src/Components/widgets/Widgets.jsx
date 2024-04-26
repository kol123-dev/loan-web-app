import "./widgets.scss";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';


const Widgets = ({type}) =>{
    let data = {};

const amount = 100;
const diff = 20;


    switch(type){
        case "clients":
            data = {
                title: "Clients",
                isMoney:false,
                link:"See all clients",
                icon:<PersonIcon className= "icon" style={{
                    color:"crimson",
                    backgroundColor:"rgb(255, 0, 0, 0.2)",

                }}/>,
               
            };    
        break;

        case "loans":
            data = {
                title: "Loans",
                isMoney:true,
                link:"See all loans",
                icon:<AccountBalanceIcon className= "icon" style={{
                    color:"goldenrod",
                    backgroundColor:"rgb(218, 165, 32, 0.2)",

                }}/>,
               
            };    
        break;

        case "payments":
            data = {
                title: "Payments",
                isMoney:true,
                link:"See all payments",
                icon:<MonetizationOnIcon className= "icon" style={{
                    color:"green",
                    backgroundColor:"rgb(0, 128, 0, 0.2)",

                }}/>,
               
            };    
        break;
        case "capital":
            data = {
                title: "Capital",
                isMoney:false,
                link:"See all reports",
                icon:<AccountBalanceWalletIcon className= "icon"
                style={{
                    color:"purple",
                    backgroundColor:"rgb(128, 0, 128, 0.2)",

                }}/>,
               
            };    
        break;
        default:
           
    };      
    return(
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "$"}{amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <ArrowDropUpIcon/>
                    {diff}%
                </div>
               {data.icon}

            </div>
            
        </div>
    )





    
}

export default Widgets