import Navbar from "../../Components/navbar/Navbar";
import Sidebar from "../../Components/sidebar/Sidebar";
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import "./loans.scss";

const Loans = ({inputs, title}) =>{
    return(
        <div className="new">
            <Sidebar/>
            <div className="newContainer">
                <Navbar/>
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src="https://artscimedia.case.edu/wp-content/uploads/sites/79/2016/12/14205134/no-user-image.gif" alt="" />
                    </div>
                    <div className="right">
                        <form >
                            <div className="formInput">
                                <label htmlFor="file">
                                  Image:<DriveFolderUploadIcon className="icon"/>
                                </label>
                                <input type="file"  id="file" style={{display:"none"}}/>
                            </div>

                            {inputs.map((input)=>(
                                <div className="formInput" key={input.id}>
                                <label>{input.label}</label>
                                <input type={input.type}  placeholder={input.placeholder}/>
                                </div>
                            ))}
                            
                            
                            <button>send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loans