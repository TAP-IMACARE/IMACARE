import "./WhyChooseUs.css";
import arrowUpIcon from "../../assets/arrowUp-icon.svg";
import image1 from "../../assets/image1.png";
const WhyChooseUs = () => {
  return (
    <div className="whyChooseUs-container">
      <div className="whyChooseUs">
        <h2>Why Choose Us</h2>
        <p>
          Here are several compelling reasons why we believe{" "}
          <span style={{ color: "#005E5D" }}>IMACARE</span> should be your top
          choice for exceptional healthcare
        </p>
      </div>

      <div className="bottom-content">
        <div className="left-content-wrapper">
          <div className="active-content">
            <div className="content-header" id="content-header1">
              <h3>Commitment to Excellence</h3>
              <img src={arrowUpIcon} alt="icon" id="arrowUp" />
            </div>

            <div className="content-body">
              <p>
                Our dedicated team of skilled healthcare professionals,
                including renowned doctors, nurses, and support staff, are
                driven by a passion for excellence.
              </p>
            </div>
          </div>

          <div className="inactive-content">
            <div className="content-header" id="content-header1">
              <h3>Comprehensive Medical Services</h3>
              <img src={arrowUpIcon} alt="icon" id="arrowUp" />
            </div>
            <div className="content-header" id="content-header1">
              <h3>Skilled and Compassionate Healthcare Professionals</h3>
              <img src={arrowUpIcon} alt="icon" id="arrowUp" />
            </div>
            <div className="content-header" id="content-header1">
              <h3>Patient-Centered Approach</h3>
              <img src={arrowUpIcon} alt="icon" id="arrowUp" />
            </div>
          </div>
        </div>

        <div className="right-content">
          <img src={image1} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
