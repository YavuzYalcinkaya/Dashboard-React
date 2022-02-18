import "./search.css";
import SearchIcon from '@mui/icons-material/Search';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LaunchIcon  from '@mui/icons-material/Launch';
import FeedIcon from '@mui/icons-material/Feed';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


export default function Search() {
    return (
        <div className="search">
            <div className="searchItem">
                <div className="searchLeft">
                    <form className="searchForm">
                      <input type="text" className="searchInput" placeholder="search">                  
                      </input>
                      <div className="searching">
                      <SearchIcon/>
                    </div>
                    
                    </form>
                </div>

                <div className="searchRight">
                    <div className="buttons">
                       <button className="approval">send to approval</button>
                       <button className="plan">pre-plan</button>
                     <div className="threeButton">
                          <button className="unit"><AcUnitIcon/></button>
                          <button className="launch"><LaunchIcon/></button>
                          <button className="feed"><FeedIcon/></button>
                     </div>
                     <div className="filtre">
                     <button className="filtreButton">filtre
                     <ArrowDropUpIcon className="up"/> <ArrowDropDownIcon className="down"/>
                     </button> 
                       
                     </div> 
                    </div>
                </div>
            </div>
            
        </div>
    );
}


