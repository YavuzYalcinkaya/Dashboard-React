import "./categories.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import BrushIcon from '@mui/icons-material/Brush';

export default function Categories() {
  return (
    <div className="categories">
        <div className="categoriesWrapper">
            <div className="categoryCard">
                <div className="categoryTitle">
                    <span className="titleProduct">product</span>
                    <span className="titleIndication">indication</span>
                    <span className="titleProfile">profile</span>
                    <span className="titlePs">promo subject</span>
                    <span className="titlePm">promo material</span>
                </div>

                <div className="categoryInput">
                    <input type="text" className="input" placeholder="select" ></input>
                     <KeyboardArrowDownIcon className="keyboardArrow"/>
                    <input type="text" className="input" placeholder="select"></input>
                     <KeyboardArrowDownIcon className="keyboardArrow"/>
                    <input type="text" className="input" placeholder="select"></input>
                     <KeyboardArrowDownIcon className="keyboardArrow"/>
                    <input type="text" className="input" placeholder="select"></input>
                     <KeyboardArrowDownIcon className="keyboardArrow"/>
                    <input type="text" className="input" placeholder="select"></input>
                     <KeyboardArrowDownIcon className="keyboardArrow"/>
                </div>

                <div className="categoryButton">
                    <button className="applyButton">apply</button>
                    <button className="cancelButton">cancel</button>
                    <button className="brushButton"> <BrushIcon/> </button>
                </div>
            </div>
        </div>
    </div>
  )
}
