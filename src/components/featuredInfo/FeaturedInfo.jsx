import "./featuredInfo.css"
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import CampaignIcon from '@mui/icons-material/Campaign';

export default function FeaturedInfo() {
  return (
    <div className="featured">
        <div className="featuredItem">
            <div className="featuredLeft">
              <span className="featuredTitle">Cardiology, A, Hospital-Policlinc</span>
              <span className="featuredDetail">Marketing / Visit Mix / Cardiology, A, Hospital-Policlinc</span>
            </div>

            <div className="featuredRight">
                  <button className="backButton">
                    <ArrowLeftIcon/>
                    <span className="back">back to page</span>
                  </button>
                  <button className="sound">
                    <CampaignIcon/>
                  </button>
            </div>
        </div>
    </div>
  )
}
