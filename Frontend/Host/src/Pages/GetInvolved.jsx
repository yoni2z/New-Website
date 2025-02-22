import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import TitleBanner from "../components/TitleBanner";
import VolunteerBg from "../assets/volunteer-title-bg.jpg";
import DummyImage from "../assets/GI_DummyImage.jpg";
import VolunteerBg2 from "../assets/blog2.png";
import BecomeaVolunteer from "../assets/GetInvolved/becomeavolunteer.svg";
import LeaveaLegacy from "../assets/GetInvolved/Leavea.svg";
import MakeaDonation from "../assets/GetInvolved/makeadonation.svg";
import Fundraiser from "../assets/GetInvolved/Fundraiser.svg";
import Watermark from "../assets/GetInvolved/WatermarkLogo.png";
const GetInvolved = () => {
  return (
    <div className="font-Montserrat">
      <TitleBanner title="GET INVOLVED" backgroundImage={VolunteerBg2} />

      <div className="">
        <div className="mb-[77px] text-center">
          <h1 className="text-5xl text-[#26358a] font-PlayfairDisplay mb-5 pb-5 py-[95px]">
            WAYS TO GET <span className="text-primary">INVOLVED</span>
          </h1>
          <div className="bg-[#D9D9D966] py-20 px-20">
            <div className="sm:grid sm:grid-cols-4 w-fit h-auto mx-auto place-items-center gap-x-16">
              <div className="flex flex-col justify-center items-center mb-auto">
                <div className="flex justify-center items-center w-28 h-28 bg-[#D8D9D9] rounded-full shadow-lg">
                  <img
                    src={BecomeaVolunteer}
                    alt="Become a Volunteer Icon"
                    className="filter brightness-0"
                  />
                </div>
                <div>
                  <h3 className="text-customBlue my-3 text-lg font-PlayfairDisplay font-semibold">
                    Leave a Legacy
                  </h3>
                  <p className="text-sm">
                    Create lasting impact, transform lives, inspire change.
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-center items-center mb-auto">
                <div className="flex justify-center items-center w-28 h-28 bg-[#D8D9D9] rounded-full shadow-sm">
                  <img src={MakeaDonation} alt="Make a Donation Icon" />
                </div>
                <div>
                  <h3 className="text-customBlue my-3 text-lg font-PlayfairDisplay font-semibold">
                    Make a Donation
                  </h3>
                  <p className="text-sm">
                    Support projects, create brighter futures, drive change.
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-center items-center mb-auto">
                <div className="flex justify-center items-center w-28 h-28 bg-[#D8D9D9] rounded-full shadow-sm">
                  <img
                    src={LeaveaLegacy}
                    alt="Leave a Legacy Icon"
                    className="text-black"
                  />
                </div>
                <div>
                  <h3 className="text-customBlue my-3 text-lg font-PlayfairDisplay font-semibold">
                    Become a Fundraiser
                  </h3>
                  <p className="text-sm">
                    Raise funds, empower communities, inspire collective
                    support.
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-center items-center mb-auto">
                <div className="flex justify-center items-center w-28 h-28 bg-[#D8D9D9] rounded-full shadow-sm">
                  <img src={Fundraiser} alt="Make a Fundraiser" />
                </div>
                <div>
                  <h3 className="text-customBlue my-3 text-lg font-PlayfairDisplay font-semibold">
                    Become a Volunteer
                  </h3>
                  <p className="text-sm">
                    Lend skills, make difference, be positive force.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-secondary max-w-[80%] mx-auto px-10 my-28">
            At Axon Stroke Foundation, we believe that everyone has a role to
            play in improving stroke care and raising awareness. Whether you're
            an individual looking to contribute your time or resources, a
            business seeking partnership opportunities, or an organization
            interested in collaboration, there are several ways to get involved
            and make a difference.
          </p>
        </div>
      </div>

      <div className="bg-customBlue sm:h-[250px] h-[141px] w-full relative">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${Watermark})`,
            backgroundSize: "885px auto",
            backgroundRepeat: "repeat-x",
            backgroundPosition: "center",
          }}
        />
        <img
          src={DummyImage}
          alt="Get Involved Image"
          className="absolute w-[150px] sm:w-[200px] md:w-[250px] h-auto top-[-60px] md:top-[-90px] right-[5%] sm:right-[10%] rounded-md"
        />

        <img
          src={DummyImage}
          alt="Get Involved Image"
          className="absolute w-[150px] sm:w-[200px] md:w-[250px] h-auto top-[80px] md:top-[100px] left-[50%] sm:left-[55%] md:left-[70%] transform -translate-x-1/2 rounded-md"
        />
      </div>

      <div>
        <div className="py-[95px] bg-background">
          <div className="flex flex-col mx-10 justify-center sm:items-start items-center">
            <div className="text-start">
              <h1 className="text-2xl text-[#26358a] font-PlayfairDisplay mb-5">
                VOLUNTEER WITH <span className="text-primary">US</span>
              </h1>
              <p className="text-secondary max-w-[80%] mx-auto mb-6 font-Montserrat">
                Your time and skills can make a significant impact on our
                efforts. Volunteers help us run community workshops, assist in
                events, provide administrative support, and contribute to our
                outreach programs. Whether you have healthcare expertise or just
                a passion for helping others, your contribution will be valued.
              </p>
            </div>
            <NavLink
              to="/volunteer"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <button className="flex flex-col text-white text-center sm:text-left  mt-auto mb-3 px-8 py-4 sm:px-4 sm:py-2 rounded-md mr-2 bg-button hover:bg-black font-Montserrat mx-auto w-fit">
                Become a Volunteer
              </button>
            </NavLink>
          </div>
        </div>

        <div className="bg-customBlue sm:h-[250px] h-[141px] w-full relative">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${Watermark})`,
              backgroundSize: "885px auto",
              backgroundRepeat: "repeat-x",
              backgroundPosition: "center",
            }}
          />
          <img
            src={DummyImage}
            alt="Get Involved Image"
            className="absolute w-[150px] sm:w-[200px] md:w-[250px] h-auto top-[-60px] md:top-[-90px] right-[5%] sm:right-[70%] rounded-md"
          />
          <img
            src={DummyImage}
            alt="Get Involved Image"
            className="absolute w-[150px] sm:w-[200px] md:w-[250px] h-auto top-[80px] md:top-[100px] left-[50%] sm:left-[55%] md:left-[30%] transform -translate-x-1/2 rounded-md"
          />
        </div>

        <div className="flex flex-col mx-10 justify-center items-center py-[95px] bg-white">
          <div className="text-start">
            <h1 className="text-2xl text-[#26358a] font-PlayfairDisplay mb-5">
              FUNDRAISE FOR{" "}
              <span className="text-primary">STROKE AWARENESS AND CARE</span>
            </h1>
            <p className="text-secondary max-w-[80%] mx-auto mb-6">
              Organize a fundraising event in your community or online to
              support our programs. You can host charity walks, auctions, and
              more. Every penny raised will go toward supporting stroke
              survivors, increasing awareness, and providing free or discounted
              therapy and care.
            </p>

            <Link
              to="/donate"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex flex-col text-white text-center sm:text-left mt-auto mb-3 px-8 py-4 sm:px-4 sm:py-2 rounded-md mr-2 bg-button hover:bg-black font-Montserrat w-fit"
            >
              Start Your Fundraising Campaign{" "}
            </Link>
          </div>
        </div>

        <div className="bg-customBlue sm:h-[250px] h-[141px] w-full relative">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${Watermark})`,
              backgroundSize: "885px auto",
              backgroundRepeat: "repeat-x",
              backgroundPosition: "center",
            }}
          />
          <img
            src={DummyImage}
            alt="Get Involved Image"
            className="absolute w-[150px] sm:w-[200px] md:w-[250px] h-auto top-[-60px] md:top-[-90px] right-[5%] sm:right-[10%] rounded-md"
          />
          <img
            src={DummyImage}
            alt="Get Involved Image"
            className="absolute w-[150px] sm:w-[200px] md:w-[250px] h-auto top-[80px] md:top-[100px] left-[50%] sm:left-[55%] md:left-[70%] transform -translate-x-1/2 rounded-md"
          />
        </div>

        <div className="py-[95px] bg-background">
          <div className="flex flex-col mx-10 justify-center sm:items-start items-center">
            <div className="sm:text-start text-center">
              <h1 className="text-2xl text-start text-[#26358a] font-PlayfairDisplay mb-5">
                DONATE TO{" "}
                <span className="text-primary">SUPPORT STROKE PROGRAMS</span>
              </h1>
              <p className="text-secondary max-w-[80%] mx-auto mb-6 font-Montserrat">
                Donations are vital to sustaining our programs. Your generous
                contribution can help provide free stroke therapy, fund stroke
                education, and support our research initiatives. You can donate
                a one-time gift or set up a recurring donation to make a lasting
                impact.
              </p>
              <div className="flex justify-center sm:justify-start">
                <Link
                  to="/donate"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="flex flex-col text-white text-center sm:text-left mt-auto mb-3 px-8 py-4 sm:px-4 sm:py-2 rounded-md mr-2 bg-button hover:bg-black font-Montserrat w-fit"
                >
                  Donate Now{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-customBlue sm:h-[250px] h-[141px] w-full relative">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${Watermark})`,
              backgroundSize: "885px auto",
              backgroundRepeat: "repeat-x",
              backgroundPosition: "center",
            }}
          />
          <img
            src={DummyImage}
            alt="Get Involved Image"
            className="absolute w-[150px] sm:w-[200px] md:w-[250px] h-auto top-[-60px] md:top-[-90px] right-[5%] sm:right-[70%] rounded-md"
          />
          <img
            src={DummyImage}
            alt="Get Involved Image"
            className="absolute w-[150px] sm:w-[200px] md:w-[250px] h-auto top-[80px] sm:top-[100px] left-[50%] sm:left-[30%] transform -translate-x-1/2 rounded-md"
          />
        </div>

        <div className="flex flex-col mx-10 justify-center items-center py-[95px] bg-white">
          <div className="text-start">
            <h1 className="text-2xl text-[#26358a] font-PlayfairDisplay mb-5">
              BECOME A <span className="text-primary">CORPORATE PARTNER</span>
            </h1>
            <p className="text-secondary max-w-[80%] mx-auto mb-6 font-Montserrat">
              Corporations play a crucial role in making a difference. By
              partnering with Axon Stroke Foundation, businesses can sponsor
              events, provide in-kind donations, and collaborate on awareness
              campaigns. Together, we can amplify our message and reach more
              people in need.
            </p>
            <Link
              to="/volunteer"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex flex-col text-white text-center sm:text-left mt-auto mb-3 px-8 py-4 sm:px-4 sm:py-2 rounded-md mr-2 bg-button hover:bg-black font-Montserrat w-fit"
            >
              Learn More About Corporate Partnerships
            </Link>
          </div>
        </div>

        <div className="bg-customBlue sm:h-[250px] h-[141px] w-full relative">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${Watermark})`,
              backgroundSize: "885px auto",
              backgroundRepeat: "repeat-x",
              backgroundPosition: "center",
            }}
          />
          <img
            src={DummyImage}
            alt="Get Involved Image"
            className="absolute w-[150px] sm:w-[200px] md:w-[250px] h-auto top-[-60px] md:top-[-90px] right-[5%] sm:right-[10%] rounded-md"
          />
          <img
            src={DummyImage}
            alt="Get Involved Image"
            className="absolute w-[150px] sm:w-[200px] md:w-[250px] h-auto top-[80px] sm:top-[100px] left-[50%] sm:left-[70%] transform -translate-x-1/2 rounded-md"
          />
        </div>

        <div className="py-[95px] bg-background">
          <div className="flex flex-col mx-10 justify-center items-center">
            <div className="text-start">
              <h1 className="text-2xl text-[#26358a] font-PlayfairDisplay mb-5">
                ADVOCATE FOR{" "}
                <span className="text-primary">STROKE AWARENESS</span>
              </h1>
              <p className="text-secondary max-w-[80%] mx-auto mb-6 font-Montserrat">
                Help spread the word about stroke prevention and care in your
                community. Whether through social media, word of mouth, or local
                community groups, advocacy plays a huge role in increasing
                awareness and reducing the impact of stroke. Join our advocacy
                network and help us create change at the local, national, and
                international levels.
              </p>
              <div className="flex justify-center sm:justify-start">
                <Link
                  to="/volunteer"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="flex flex-col text-white text-center sm:text-left mt-auto mb-3 px-8 py-4 sm:px-4 sm:py-2 rounded-md mr-2 bg-button hover:bg-black font-Montserrat w-fit"
                >
                  Join the Advocacy Network
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-customBlue sm:h-[250px] h-[141px] w-full relative">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${Watermark})`,
              backgroundSize: "885px auto",
              backgroundRepeat: "repeat-x",
              backgroundPosition: "center",
            }}
          />
          <img
            src={DummyImage}
            alt="Get Involved Image"
            className="absolute w-[150px] sm:w-[200px] md:w-[250px] h-auto top-[-60px] md:top-[-90px] right-[5%] sm:right-[70%] rounded-md"
          />
          <img
            src={DummyImage}
            alt="Get Involved Image"
            className="absolute w-[150px] sm:w-[200px] md:w-[250px] h-auto top-[80px] sm:top-[100px] left-[50%] sm:left-[30%] transform -translate-x-1/2 rounded-md"
          />
        </div>

        <div className="flex flex-col mx-10 justify-center items-center py-[95px] bg-white">
          <div className="text-start">
            <h1 className="text-2xl text-[#26358a] font-PlayfairDisplay mb-5">
              PARTNER WITH US FOR{" "}
              <span className="text-primary">RESEARCH AND EDUCATION</span>
            </h1>
            <p className="text-secondary max-w-[80%] mx-auto mb-6 font-Montserrat">
              Research and education are key to improving stroke outcomes. If
              you represent an academic institution, research organization, or
              medical facility, we welcome collaborations that aim to advance
              stroke research, improve treatment methods, and educate healthcare
              providers. Together, we can push the boundaries of what’s possible
              in stroke care.
            </p>
            <Link
              to="/volunteer"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex flex-col text-white text-center sm:text-left mt-auto mb-3 px-8 py-4 sm:px-4 sm:py-2 rounded-md mr-2 bg-button hover:bg-black font-Montserrat w-fit"
            >
              Partner with Us for Research and Education
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
