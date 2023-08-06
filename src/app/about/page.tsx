import Footer from "@/components/Footer";
import MenuBar from "@/components/MenuBar";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import coffee_photo from "../../../public/coffee_shop.jpeg";
import angie_ham_photo from "../../../public/angie_hamilton_italy.jpg";
import selfie from "../../../public/georgia_selfie.jpeg";
export default function About() {
  return (
    <>
      <div className="w-full flex min-h-screen flex-col items-center justify-between bg-plomo-100 p-4 md:px-24 pt-8">
        <MenuBar />
        <div className="flex justify-center items-center w-full max-w-4xl mt-28 lg:mt-32 mb-12 p-5 h-auto">
          {/* <Image
            className="sm:-rotate-[15deg] z-10 relative left-12 top-12 rounded-md inline-block drop-shadow-sm max-w-[112px] sm:max-w-[168px] h-auto w-full"
            src={coffee_photo}
            alt="Hamilton working remotely at a coffee shop"
          /> */}

          <Image
            className="rounded-md relative inline-block z-20 drop-shadow-sm max-w-[180px] sm:max-w-sm h-auto w-full bg-cover"
            src={selfie}
            alt="Selfie of Hamilton while hiking Georgia trails"
          />

          {/* <Image
            className="sm:rotate-[15deg] rounded-lg relative right-12 top-12 inline-block z-10 drop-shadow-sm sm:max-w-[168px] h-auto w-full"
            src={angie_ham_photo}
            alt="Photo of Angie and Hamilton in Italy"
          /> */}
        </div>
        <div className="flex flex-col gap-8 max-w-4xl mb-8">
          <h1 className="mb-4 font-bold font-inter text-transparent bg-clip-text bg-gradient-to-tr sm:bg-gradient-to-b from-plomo-500 to-plomo-900 text-center">
            Hi Again, I'm Hamilton
          </h1>
          <p>
            I'm a passionate software engineer residing in Davie, Florida, with
            a strong belief in the power of technology to enhance people's
            lives. Currently, I'm on the lookout for new and exciting employment
            opportunities, so if you're interested in collaborating, feel free
            to reach out!
          </p>
          <p>
            Over the past few years, I've had the pleasure of working on diverse
            projects, collaborating with startups and freelancing on the side.
            My expertise lies in full-stack web development, where I thrive
            using React and NodeJS technologies. Always eager to expand my
            knowledge, I'm currently delving into the world of .Net Core
            framework to take on even more complex challenges that fuel my
            enthusiasm for this career. The thrill of constant learning and
            solving new problems keeps me motivated every day. Additionally, I
            find great joy in mentoring fellow developers and giving back to the
            community.
          </p>
          <p>
            Beyond coding, I cherish my hobbies and the moments they bring. As a
            true foodie, I love exploring new restaurants and recreating
            delightful dishes for my loved ones at home. The outdoors beckon to
            me, and I often embark on mountain biking adventures with friends
            before work or over the weekend. My wife and I share a passion for
            travel, making it a point to explore a new state or country every
            quarter. Life is an incredible journey, and I'm excited to share my
            experiences and aspirations with you.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
