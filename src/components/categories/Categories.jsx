import "./categories.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import BrushIcon from "@mui/icons-material/Brush";


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
            <select className="input">
              <option value="1">item1</option>
              <option value="2">item 2</option>
              <option value="3">item 3</option>
              <option value="4">item 4</option>
              <option value="5">item 5</option>
              <input type="text" className="input" placeholder="select"></input>
              <KeyboardArrowDownIcon className="keyboardArrow" />
            </select>

            <select className="input">
              <option value="1">item1</option>
              <option value="2">item 2</option>
              <option value="3">item 3</option>
              <option value="4">item 4</option>
              <option value="5">item 5</option>
              <input type="text" className="input" placeholder="select"></input>
              <KeyboardArrowDownIcon className="keyboardArrow" />
            </select>

            <select className="input">
              <option value="1">Mary Johnson</option>
              
              <input type="text" className="input" placeholder="select"></input>
              <KeyboardArrowDownIcon className="keyboardArrow" />
            </select>

            <select className="input">
              <option value="1">item x</option>
              
              <input type="text" className="input" placeholder="select"></input>
              <KeyboardArrowDownIcon className="keyboardArrow" />
            </select>

            <select className="input">
              <option value="1">item y</option>
              
              <input type="text" className="input" placeholder="select"></input>
              <KeyboardArrowDownIcon className="keyboardArrow" />
            </select>
          </div>

          <div className="categoryButton">
            <button className="applyButton">apply</button>
            <button className="cancelButton">cancel</button>
            <button className="brushButton">
              {" "}
              <BrushIcon />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
