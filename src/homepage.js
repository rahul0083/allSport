import React, { useEffect, useState } from "react";
import Header from "./components/header";
import { Row, Col, Table, Card } from "react-bootstrap";
import CustomCard from "./components/card";
import {
  cardData,
  medalData,
  schedulePayload,
  sportPayload,
} from "./components/constant";
import Sportcards from "./components/sportcards";
import PhotoSlider from "./components/slider";

const Homepage = () => {
  const [newsData, setNewsData] = useState([]);
  const [medalTallyData, setMedalTallyData] = useState([]);
  const [scheduleData, setScheduleData] = useState([]);
  const [sportData, setSportData] = useState([]);

  useEffect(() => {
    setNewsData(cardData);
    setMedalTallyData(medalData);
    setScheduleData(schedulePayload);
    setSportData(sportPayload);
  }, []);

  const images = [
    "./Framephoto1.svg",
    "./running.svg",
    "Framephoto1.svg",
    "./running.svg",
    "./Framephoto1.svg",
    "./running.svg",
    "./Framephoto1.svg",
    "./running.svg",
  ];
  return (
    <>
      <div className="position-relative">
        <div className="position-absolute w-100">
          <Header />
          <div className="d-flex justify-content-center ">
            <Row className="bg-white p-3 rounded-pill custom-header">
              <Col className="px-5 py-2">
                <img src="./frame.svg" className="img-fluid" alt="frame" />
              </Col>
              <Col className="py-3 d-flex flex-column align-items-center">
                <p className="m-0">
                  <span className="mx-2">179</span>
                  <span className="mx-2">11</span>
                  <span className="mx-2">56</span>
                  <span className="mx-2">05</span>
                </p>
                <p className="m-0">
                  <span>Days</span>
                  <span>Hours</span>
                  <span>Mins</span>
                  <span>Sec</span>
                </p>
              </Col>
            </Row>
          </div>
          <Row className="mt-5 ms-5">
            <Col className="ms-5">
              <p className="font-paris2024 text-start text-white mt-5">
                The 38th National Games, Uttarakhand 2024
              </p>
              <span className="text-start text-white ">
                Where fervour converges with brilliance! Immerse yourself in the
                exhilarating spectacle as athletes hailing from every corner of
                Uttarakhand vie for victory in a dazzling display of skill and
                camaraderie. Come together to commemorate our abundant sporting
                legacy and kindle the flame of togetherness. Brace yourself for
                an indelible odyssey towards sporting eminence. Prepare to dive
                into the excitement and witness the enchantment of the National
                Games hosted in Uttarakhand!
              </span>
              <br /> <br />
              <button className="text-start p-3 rounded-2">
                UTTARAKHAND UNLEASHED
              </button>
            </Col>
            <Col>
              <p className="text-white">1111111</p>
            </Col>
          </Row>
        </div>
        <img
          src="./backgroundImage.svg"
          className="img-fluid"
          alt="Background"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div class="container">
        <h3 class="display-1 fw-normal text-primary mb-9 text-start">
          Latest News
        </h3>

        {newsData && newsData.length > 0 && (
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {" "}
            {/* Ensure 3 cards per row */}
            {newsData.map((item, index) => (
              <CustomCard
                imageUrl={item.image}
                title={item.title}
                text={item.description}
              />
            ))}
          </div>
        )}
      </div>
      <div className="medal-tally">
        <Row className="p-4 align-items-center">
          <Col className="py-1 px-5">
            <div className="d-flex align-items-center">
              <img
                src="./medal-gold-belt 2medal.svg"
                className="img-fluid text-start"
                alt="Medal Image"
              />
              <span className="medal-tally-text">Medal Tally</span>
            </div>

            <Table
              striped
              bordered
              hover
              size="sm"
              className="mt-4 table-responsive"
            >
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <th>
                    <img
                      src="./Imagegold.svg"
                      className="img-fluid text-start"
                      alt="Medal Image"
                    />
                  </th>
                  <th>
                    <img
                      src="./Imagesilver.svg"
                      className="img-fluid text-start"
                      alt="Medal Image"
                    />
                  </th>
                  <th>
                    <img
                      src="./Imagebronze.svg"
                      className="img-fluid text-start"
                      alt="Medal Image"
                    />
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {medalTallyData?.data?.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item?.state}</td>
                    <td>{item?.gold_medal}</td>
                    <td>{item?.silver_medal}</td>
                    <td>{item?.bronze_medal}</td>
                    <td>{item?.total}</td>
                  </tr>
                ))}
                <tr>
                  <td colspan="2" rowSpan="2" class="table-active">
                    GRAND TOTAL
                  </td>
                  <td>{medalTallyData?.total?.total_gold}</td>
                  <td>{medalTallyData?.total?.total_silver}</td>
                  <td>{medalTallyData?.total?.total_bronze}</td>
                  <td>{medalTallyData?.total?.total_medal}</td>
                </tr>
              </tbody>
            </Table>
            <div className="d-flex justify-content-start">
              <button className="btn btn-custom-color">REFRESH</button>
              <button className="btn btn-custom-viewmore ms-3">
                VIEW MORE
              </button>
            </div>
          </Col>
          <Col>
            <img
              src="./medaltally.svg"
              className="img-fluid"
              alt="Background"
              style={{ width: "840px", height: "951px" }}
            />
          </Col>
        </Row>
      </div>

      <div className="d-flex align-items-center px-5">
        <span className="schedule-text px-5">SCHEDULE</span>
        <select className="form-select" aria-label="Default select example">
          <option selected>Select a date</option>
        </select>
        <select className="form-select" aria-label="Default select example">
          <option selected>All Games</option>
        </select>
      </div>
      <div className="d-flex align-items-center mt-4 px-5">
        <Table striped bordered hover size="sm" className="table-responsive">
          <thead>
            <tr>
              <th></th>
              <th>Time</th>
              <th>Sports</th>
              <th>Events</th>
              <th>Round/Pool</th>
              <th>Venue</th>
            </tr>
          </thead>

          <tbody>
            {scheduleData?.map((item, index) => (
              <tr>
                <td>{item?.image}</td>
                <td>{item?.time}</td>
                <td>{item?.sports}</td>
                <td>{item?.event}</td>
                <td>{item?.roundpoll}</td>
                <td>{item?.venue}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <Card className="card-mascot">
          <Row>
            <Col className="d-flex flex-column justify-content-center align-items-center">
              <p className="display-1 fw-normal text-primary  text-start">
                HI!, I AM
              </p>
              <p className="text-start mascot-text">THE</p>
              <p className="mascot-text text-start">MASCOT</p>

              <p className="text-start description-text">
                Meet Himalayan Monal, The Mascot for the 38th National Games
                Uttarakhand 2024. Known as the Impeyan Monal. This bird is also
                the state bird of Uttarakhand.
              </p>
            </Col>
            <Col>
              <div className="position-relative d-flex justify-content-center align-items-center">
                <img
                  src="./rectangluardome.svg"
                  className="img-fluid position-absolute"
                  alt="rectangluardome"
                  style={{ zIndex: 1 }}
                />
                <img
                  src="./rectangle.svg"
                  className="img-fluid"
                  alt="rectangle"
                  style={{ zIndex: 0 }}
                />
              </div>
            </Col>
          </Row>
        </Card>
      </div>

      {/* Join Conversation Games */}
      <div className="medal-tally mt-5">
        <Row>
          <Col className="d-flex flex-column justify-content-start p-5">
            <p className="text-start">Join the</p>
            <p className="text-start mascot-text">CONVERSATION</p>
            <p className="text-start">#uttrakhandgames2024</p>
            <Row>
              <Col>
                All Together
                <p className="fw-bold mt-5">28</p> STATES
              </Col>

              <Col className="vertical-line">
                COLLECTIVELY
                <p className="fw-bold mt-5">8+1</p>Union Territories & Control
                Boards
              </Col>
              <Col className="vertical-line">
                WE ARE UNIFIED
                <p className="fw-bold mt-5">8000+</p>ATHLETES
              </Col>
            </Row>
            <hr />
            <Row>
              <Col>
                COMPETITION
                <p className="fw-bold mt-5">22</p>DAYS
              </Col>
              <Col className="vertical-line">
                SERVICE
                <p className="fw-bold mt-5">4000+</p>VOLUNTEERS
              </Col>
            </Row>
          </Col>
          <Col>
            <img
              src="./rectanglecricket.svg"
              className="img-fluid "
              alt="rectangluardome"
              style={{ zIndex: 1 }}
            />
          </Col>
        </Row>
      </div>
      {/* Sports */}
      <div className="sports">
        <div className="mt-5" style={{ background: "white" }}>
          <Row className="mt-5">
            <Col>
              <p className="mascot-text">SPORTS</p>
            </Col>
            <Col>
              <button className="btn btn-custom-color">View More</button>
            </Col>
          </Row>

          <div className="container mt-5">
            <div className="row">
              {sportData?.map((item, i) => (
                <div key={i} className="col-md-2 mb-4">
                  <Sportcards imageUrl={item?.image} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Follow Us */}
      <div className="medal-tally mt-5">
        <Row>
          <Col className="d-flex flex-column justify-content-center p-5">
            <p className="text-start mascot-text">FOLLOW US</p>
            <p className="d-flex justify-content-start">
              <img src="./Vectorx.svg" className="img-fluid ms-2" />
              <img src="./Vectorfacebook.svg" className="img-fluid ms-2" />
              <img src="./Vectorbird.svg" className="img-fluid ms-2" />
              <img src="./Groupinstagram.svg" className="img-fluid ms-2" />
              <img src="./Vectorlinkedin.svg" className="img-fluid ms-2" />
            </p>
            <p className="text-start">#uttrakhandgames2024</p>
          </Col>
          <Col>
            <img
              src="./followus.svg"
              className="img-fluid "
              alt="rectangluardome"
              style={{ zIndex: 1 }}
            />
          </Col>
        </Row>
      </div>
      {/* Competiion Zone */}
      <div className="medal-tally mt-5">
        <Row>
          <Col className="d-flex flex-column justify-content-center p-5">
            <p className="text-start mascot-text">COMPETITION ZONE</p>

            <div class="card" style={{ width: "18rem", background: "#FFDF8C" }}>
              <img src="./competitionzone.svg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">DELHI</h5>
                <p class="card-text">
                  The Indira Gandhi Arena, formerly known as the Indraprashtha
                  Stadium, is located at the Indraprastha Estate in the eastern
                  region of New Delhi. It is the largest indoor sports arena in
                  India and among the largest in Asia.
                </p>

                <button className="btn bg-white d-flex justify-content-start">
                  EXPLORE
                </button>
              </div>
            </div>
          </Col>
          <Col>
            <img
              src="./groupmap.svg"
              className="img-fluid "
              alt="rectangluardome"
              style={{ zIndex: 1 }}
            />
          </Col>
        </Row>
      </div>

      {/* Photo gallery */}
      <div className="medal-tally mt-5 p-5">
        <p className="text-start mascot-text">PHOTO GALLERY</p>

        <PhotoSlider images={images} />
      </div>

      <div className="bg-ultraLightGray py-11 mt-5">
  <h3 className="display-3 fw-normal mascot-text text-center mb-9 text-capitalize">GAMES PARTNERS</h3>
  <div className="container">
    <div className="d-flex flex-wrap align-items-baseline justify-content-between">
      <a href="#">
        <div className="bg-transparent border-0 text-center card">
        
          <div className="p-0 card-body">
          <img className="card-img-top" src="../Seal_of_Uttarakhand1.svg" />
          </div>
        </div>
      </a>
      <a href="#">
        <div className="bg-transparent border-0 text-center card">
          <div className="p-0 card-body">
          <img className="card-img-top" src="../Seal_of_Uttarakhand2.svg" />
           
          </div>
        </div>
      </a>
      <a href="#">
        <div className="bg-transparent border-0 text-center card">
          <div className="p-0 card-body">
          <img className="card-img-top" src="../Ministry_of_Youth_Affairs_and_Sports 2.svg" />

          </div>
        </div>
      </a>
      <a href="#">
        <div className="bg-transparent border-0 text-center card">
          <div className="p-0 card-body">
          
          <img className="card-img-top" src="../image 26.svg" />

          </div>
        </div>
      </a>
    </div>
   
  </div>
</div>

    </>
  );
};

export default Homepage;
