import React from "react";
import "./Home.css";

import Card from "./Card";
import PlanTripCard from "./PlanTripCard";

import HoursCard from "./HoursCard";
import { Button } from "@material-ui/core";

function Home() {
  return (
    <div className="home">
      {/* for section one  */}

      {/* use different different images in the card for looking beautiful  */}
      <h1 style={{ marginLeft: "50px", marginTop: "20px" }}>New This Weak </h1>
      <div className="home__section">
        <Card
          src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=600"
          rating="Online Experiences"
          description="A Software Developer designs and builds computer programs that power mobile devices."
        />
        <Card
          src="https://images.pexels.com/photos/3861961/pexels-photo-3861961.jpeg?auto=compress&cs=tinysrgb&w=600"
          rating="Online Experiences"
          description="Software engineers design, develop, and test software and applications for computers."
        />
        <Card
          src="https://images.pexels.com/photos/4458412/pexels-photo-4458412.jpeg?auto=compress&cs=tinysrgb&w=600"
          rating="Online Experiences"
          description="Generally found in tech-heavy industries and large corporations."
        />
      </div>

      {/* for section two */}

      <div className="featureButton">
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">more filters</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">Music</Button>
        <Button variant="outlined">Social Impact </Button>
        <Button variant="outlined">Wellness</Button>
        <Button variant="outlined">Designed for accessibility</Button>
      </div>

      {/* for section three */}

      <h2 style={{ marginLeft: "30px", marginTop: "20px" }}>
        Plan a trip with help from local Hosts around the world
      </h2>
      <div className="home__section ">
        <PlanTripCard
          src={
            "https://images.pexels.com/photos/3375234/pexels-photo-3375234.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          rating="4.5 : USA"
          description={"Discover Sunny fort "}
          price="3999"
        ></PlanTripCard>
        <PlanTripCard
          src={
            "https://images.pexels.com/photos/3817672/pexels-photo-3817672.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          rating="3.5 : UK"
          description={"Plan a trip  amazing"}
          price="5999"
        ></PlanTripCard>
        <PlanTripCard
          src={
            "https://images.pexels.com/photos/2817081/pexels-photo-2817081.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          rating="5.3 : UAE"
          description={"do something great "}
          price="6999"
        ></PlanTripCard>
        <PlanTripCard
          src={
            "https://images.pexels.com/photos/3699259/pexels-photo-3699259.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          rating="7.8 : India"
          description={"India is my nation"}
          price="4999"
        ></PlanTripCard>
        <PlanTripCard
          src={
            "https://images.pexels.com/photos/4119491/pexels-photo-4119491.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          rating="4.8 : Pakistan"
          description={"Create your Remo "}
          price="6999"
        ></PlanTripCard>
        <PlanTripCard
          src={
            "https://images.pexels.com/photos/3049265/pexels-photo-3049265.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          rating="4.5 : UK"
          description={"Plan a venice nature"}
          price="5999"
        ></PlanTripCard>{" "}
        <PlanTripCard
          src={
            "https://images.pexels.com/photos/1925482/pexels-photo-1925482.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          rating="5.9 : USA"
          description={"Say Something "}
          price="8999"
        ></PlanTripCard>
        <PlanTripCard
          src={
            "https://images.pexels.com/photos/6650012/pexels-photo-6650012.jpeg?auto=compress&cs=tinysrgb&w=600 "
          }
          rating="2.7 : Canada"
          description={"Do something "}
          price="3999"
        ></PlanTripCard>
        <PlanTripCard
          src={
            "https://images.pexels.com/photos/2817081/pexels-photo-2817081.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          rating="6.8 : Dubai"
          description={" Plan the perfect trip "}
          price="9999"
        ></PlanTripCard>
        <PlanTripCard
          src={
            "https://images.pexels.com/photos/2383196/pexels-photo-2383196.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          rating="6.9 : Saudi "
          description={"The Circus Factory "}
          price="4999"
        ></PlanTripCard>
        <PlanTripCard
          src={
            "https://images.pexels.com/photos/4588031/pexels-photo-4588031.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          rating="9.8 : Banglore"
          description={"A Smart City "}
          price="7999"
        ></PlanTripCard>
      </div>
      {/* for section 4  */}
      <h2 style={{ marginLeft: "50px", marginTop: "20px" }}>Top Sellers</h2>
      <div className="home__section">
        <PlanTripCard
          src={
            "https://images.pexels.com/photos/5585852/pexels-photo-5585852.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          rating="4.5 : Chennai"
          description={"A nice city "}
          price="5999"
        ></PlanTripCard>
        <PlanTripCard
          src={
            "https://images.pexels.com/photos/1587036/pexels-photo-1587036.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          rating="5.3 : Mumbai "
          description={"Dream City "}
          price="6999"
        ></PlanTripCard>
        <PlanTripCard
          src={
            "https://images.pexels.com/photos/2058098/pexels-photo-2058098.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          rating="7.8 : Delhi "
          description={"Delhi capital of india "}
          price="5999"
        ></PlanTripCard>
        <PlanTripCard
          src={
            "https://images.pexels.com/photos/2817081/pexels-photo-2817081.jpeg?auto=compress&cs=tinysrgb&w=600 "
          }
          rating="8.9 : UP"
          description={"Dim Sum Class "}
          price="8999"
        ></PlanTripCard>
        <PlanTripCard
          src={
            "https://images.pexels.com/photos/2383196/pexels-photo-2383196.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          rating="6.8 : Rajasthan"
          description={"A Desert "}
          price="3999"
        ></PlanTripCard>
        <PlanTripCard
          src={
            "https://images.pexels.com/photos/6473740/pexels-photo-6473740.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          rating="4.5 : USA "
          description={"Technology Country"}
          price="9999"
        ></PlanTripCard>{" "}
        <PlanTripCard
          src={
            "https://images.pexels.com/photos/6650012/pexels-photo-6650012.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          rating="4.5 : PANJAB"
          description={"Sardaro the City"}
          price="4999"
        ></PlanTripCard>
        <PlanTripCard
          src={
            "https://images.pexels.com/photos/2966408/pexels-photo-2966408.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          rating="6.9 : Bijnor "
          description={"A Big City "}
          price="9999"
        ></PlanTripCard>
        <PlanTripCard
          src={
            "https://images.pexels.com/photos/2383196/pexels-photo-2383196.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          rating="6.8 : UK "
          description={"A Mountain City  "}
          price="7999"
        ></PlanTripCard>
        <PlanTripCard
          src={
            "https://images.pexels.com/photos/6650012/pexels-photo-6650012.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          rating="6.3 : USA"
          description={"Developers Here "}
          price="4999"
        ></PlanTripCard>
        <PlanTripCard
          src={
            "https://images.pexels.com/photos/6473740/pexels-photo-6473740.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          rating="4.5 : Pune "
          description={"A Dream City "}
          price="7999"
        ></PlanTripCard>
      </div>

      {/* for section five  */}

      <h2 style={{ marginLeft: "50px", marginTop: "20px" }}>
        Starting in the next 6 hours
      </h2>
      <div className="home__section">
        <HoursCard
          src={
            "https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          rating="4.5 : Office "
          price="4999"
          description="Have a Nice Office "
        ></HoursCard>
        <HoursCard
          src={
            "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          rating="4.5 : Car "
          price="4999"
          description="A Dream Car "
        ></HoursCard>

        <HoursCard
          src={
            "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          rating="4.5 : Building "
          price="9999"
          description="That's Nice Cloud "
        ></HoursCard>
      </div>
    </div>
  );
}

export default Home;
