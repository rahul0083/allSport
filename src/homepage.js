import React, { useEffect, useState } from "react";
import Header from "./components/header";
import { Row, Col, Table, Card } from "react-bootstrap";
import CustomCard from "./components/card";
import { cardData, medalData, schedulePayload } from "./components/constant";

const Homepage = () => {
  const [newsData, setNewsData] = useState([]);
  const [medalTallyData, setMedalTallyData] = useState([]);
  const [scheduleData, setScheduleData] = useState([]);

  useEffect(() => {
    setNewsData(cardData);
    setMedalTallyData(medalData);
    setScheduleData(schedulePayload);
  }, []);
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
      <div className="medal-tally d-flex justify-content-center align-items-center">
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
              <p className="fw-bold mt-5">8+1</p>Union Territories & Control Boards

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
    </>
  );
};

export default Homepage;
