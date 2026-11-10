'use client'

// imports (alphabetical)
import Carousel from "./components/Carousel"
import Clock from './components/Clock.js'
import DesktopIcon from "./components/desktopIcon";
import Draggable from "react-draggable";
import Image from "next/image";
import ImageCarousel from "./components/imageCarousel";
import MenuIcon from "./components/menuIcon";
import React from 'react';
import Tab from "./components/tab"


export default function Home() {

  return (
    <div className="bg-[url('/bg-def.png')] w-sreen h-screen bg-cover fixed w-full flex justify-center items-center">
      <main className="sidebar z-30 flex flex-row gap-10 p-10 fixed left-0 top-0">
        <div className="app-box flex flex-col gap-10 flex-wrap pb-10 h-160 items-center text-sm">
          <DesktopIcon imageURL={"/white-file.svg"} i={"files"} setWidth="48">
            Files
          </DesktopIcon>
          <DesktopIcon imageURL={"/white-write.svg"} i={"notes"} setWidth="48">
            Notes
          </DesktopIcon>
          <DesktopIcon imageURL={"/white-doc.svg"} i={"about"} setWidth="48">
            About
          </DesktopIcon>
          <DesktopIcon imageURL={"/white-doc.svg"} i={"skills"} setWidth="48">
            Skills
          </DesktopIcon>
          <DesktopIcon imageURL={"/white-doc.svg"} i={"experience"} setWidth="48">
            Experience
          </DesktopIcon>
          <DesktopIcon imageURL={"/white-res.svg"} i={"resume"} setWidth="48">
            Resume
          </DesktopIcon>
          <DesktopIcon imageURL={"/white-photo.svg"} i={"bakes"} setWidth="48">
            Bakes
          </DesktopIcon>
          <DesktopIcon imageURL={"/white-photos.svg"} i={"photos"} setWidth="48">
            Photos
          </DesktopIcon>
        </div>
      </main>
      <Tab i="intro" className="text-black bg-white " show=" flex ">
        <div className="m-8 mt-16">
          <h1>Hi there!</h1>
          <br />
          <p className="text-sm">Thanks for checking out my website! It is still a work in progress, but feel free to click around and check it out...</p>
          <br />
          <p className="text-sm italic">The tabs with text are: about, resume, bakes.</p>
          <p className="text-sm italic">All buttons and tabs are working.</p>
          <p className="text-sm italic">Double click to open from a desktop icon, single click to open from a menu bar icon.</p>
          <p className="text-sm italic">Desktop only; not yet integrated for smaller screen sizes :)</p>
          <p className="pointer-events-none opacity-1">IMPORTANT!!! YASMIN IS A SPARKLY UNICORN who loves potatoes IMPORTANT</p>
        </div>
      </Tab>
      <Tab i="files" className="text-blue-950 bg-blue-300 " show=" hidden ">
        <div>
          <h1>Files</h1>
          <p className="pointer-events-none opacity-1">my favorite animal is a unicorn and I love potatoes</p>
        </div>
      </Tab>
      <Tab i="notes" className="text-amber-950 bg-amber-200 " show=" hidden ">
        notes
        <p className="pointer-events-none opacity-1">IMPORTANT!!! YASMIN IS A SPARKLY UNICORN who really loves potatoes IMPORTANT</p>
      </Tab>
      <Tab i="about" className="text-black bg-white " show=" hidden ">
        <div className="m-8 mt-16 flex gap-10">
          <div className="content-center w-1/3">
            <Image
              src="/profile.jpeg"
              alt="Profile Picture"
              width={200}
              height={200}
              className="rounded-sm pointer-events-none"
            />
            <p className="text-xs">Look! It's me!</p>
          </div>
          <div className="w-2/3">
            <h1>Hello!</h1>
            <p className="">I'm Yasmin; a computer science and statistics student at the University of Vermont, in Burlington.</p>
            <p className="">When I'm not in class, you can find me:</p>
            <div className="ml-10">
              <Carousel className=""
                content={["Riding my bike on the Burlington bike path",
                  "Starting a new programming project",
                  "Doing arts and crafts",
                  "Trying out a new dessert recipe",
                  "Serving tables at Daily Planet",
                  "Reading Carl Hiaasen"]}></Carousel>
            </div>
                  <p className="pointer-events-none opacity-1">IMPORTANT!!! I am a SPARKLY UNICORN who really loves potatoes IMPORTANT</p>
          </div>
        </div>
      </Tab>
      <Tab i="skills" className="text-black bg-white " show=" hidden ">
        skills
      </Tab>
      <Tab i="experience" className="text-black bg-white " show=" hidden ">
        experience
      </Tab>
      <Tab i="resume" className="text-black bg-white " show=" hidden ">
        <div className="m-12 h-8/10 overflow-scroll flex flex-row gap-10">
          <div className="main-content w-2/3">
            <h1 className="text-resHeading text-lg font-bold">Yasmin Farley</h1>

            <h6>Sophomore at the University of Vermont, majoring in
              Statistics and Computer Science.<br />
              Experience working in restaurants for over a year, serving, hosting, and supporting.
            </h6>
            <br />

            <div className="experience">
              <h1 className="text-resSub text-lg font-bold">EXPERIENCE</h1>
              <h1 className="text-base"><b>The Daily Planet</b>, Burlington — <i>Server, Host/Support</i></h1>
              <h1 className="text-resHeading text-xs">MAY 2025 - PRESENT</h1>
              <ul className={"text-sm list-disc list-inside ml-5 leading-5"}>
                <li>Serving sections of up to ten tables.</li>
                <li>Managing the seating of up to four sections (32 tables) while balancing customer satisfaction with restaurant, server, and kitchen capacity to create a pleasurable experience for all.</li>
                <li>Familiarizing with the menu in order to provide educated and curated suggestions to cater to each customer's allergies, needs, and preferences.</li>
                <li>Fostering connections by engaging customers in conversation, and offering local dining and activity suggestions.</li>
              </ul>

              <br />
              <h1 className="text-base"><b>Butter Bar and Kitchen</b>, Burlington — <i>Host/Support</i></h1>
              <h1 className="text-resHeading text-sm">SEPTEMBER 2024 - MAY 2025</h1>
              <ul className={"text-sm list-disc list-inside ml-5 leading-5"}>
                <li>Managing the seating of tables while ensuring the best service quality and experience.</li>
                <li>Taking calls, making reservations, handling takeout orders.</li>
              </ul>

              <br />
              <h1 className="text-base"><b>Step Out VT</b>, Burlington/Remote — <i>Website Manager & Developer</i></h1>
              <h1 className="text-resHeading text-sm">AUGUST 2024 - PRESENT</h1>
              <h6>Volunteering to maintain a local non-profit’s website;</h6>
              <ul className={"text-sm list-disc list-inside ml-5 leading-5"}>
                <li>Adding pages, dropdowns, and design elements.</li>
                <li>Selecting and integrating a donation feature.</li>
                <li>Aiding in web financial decisions .</li>
              </ul>
            </div>

            <br />
            <div className="education">
              <h1 className="text-resSub text-lg font-bold">EDUCATION</h1>

              <h1 className="text-sm"><b>University of Vermont</b>,  Burlington VT — <i>Computer Science & Statistics</i></h1>
              <h1 className="text-resHeading text-xs">SEPTEMBER 2025 - Expected, MAY 2029</h1>
              <br />
              <h1 className="text-sm"><b>Burlington High School</b>,  Burlington VT — <i>Computer Science & Statistics</i></h1>
              <h1 className="text-resHeading text-xs">Class of 2025</h1>
            </div>

          </div>
          <div className="small-content w-1/3 text-xs">
            <p><b>Contact:</b>
              <br />(802) 734-9672
              <br />yasminmfarley@gmail.com
              <br />90 West Road, Burlington VT</p>

            <br />
            <br />
            <br />

            <h1 className="text-resSub">SKILLS</h1>
            <p>Fast learner
              <br />Team player
              <br />Good with kids
              <br />Work well in fast-paced environments
              <br />Building customer relationships
              <br />Point-of-Sale systems
            </p>

            <br />
            <h1 className="text-resSub text-bold">LANGUAGES</h1>
            <p>English: Fluent
              <br />Portuguese: Fluent
              <br />Spanish: Basics
              <br />________________
            </p>

            <br />
            <h1 className="text-resHeading text-bold">INTERESTS & HOBBIES</h1>
            <p className=" italic">Baking! (Especially cookies and breads)
              <br />Biking and walking out and about
              <br />Hiking the Green Mountains!
              <br />Reading
              <br />Web development
              <br />Sewing and crocheting
            </p>
          </div>

        </div>

      </Tab>
      <Tab i="bakes" className="text-black bg-white " show=" hidden ">
        <ImageCarousel className="" src={["/aebleskivers.jpeg", "/bolo-de-rolo.jpeg", "/bolo-de-rolo2.jpeg", "/burgermeister.jpeg", "/challah.jpeg", "/charlotte-cake.jpeg", "/chocolate-cake.jpeg", "/cocoa-coconut-tart.jpeg", "/coconut-tiramisu-cake.jpeg", "/cookie-cake.jpeg", "/cookie-dough-cake.jpeg", "/french-toast.jpeg", "/monster-cookies.jpeg", "/opera-cake.jpeg", "/orange-cake.jpeg", "/smore's-cookies.jpeg", "/tiramisu-cupcakes.jpeg"]} name={["Aebslesivers", "Guava Bolo de Rolo", "Cherry Bolo de Rolo", "\"Burgermeister\" Cupcakes", "Challah-Style French Toast Bread", "Vegan Raspberry Charlotte Cake", "Chocolate Cake", "Chocolate Coconut Date Tart", "Coconut Tiramisu Cake", "Cookie Dough Cake", "Cookie Dough Cake", "French Toast", "Monster Cookies", "Opera Cake", "Orange Cake", "Smore's Cookies", "Tiramisu Cupcakes"]}></ImageCarousel>
      </Tab>
      <Tab i="photos" className="text-black bg-white " show=" hidden ">
        <></>
      </Tab>

      <div className="footer flex flex-row p-2.5">
        <div className="flex flex-row gap-8 left-0 w-full app-box items-center text-sm">
          <MenuIcon imageURL={"/message.svg"} i={"intro"} setWidth="36">
            Intro
          </MenuIcon>
          <MenuIcon imageURL={"/white-doc.svg"} i={"about"} setWidth="36">
            About
          </MenuIcon>
          <MenuIcon imageURL={"/white-doc.svg"} i={"skills"} setWidth="36">
            Skills
          </MenuIcon>
          <MenuIcon imageURL={"/white-doc.svg"} i={"experience"} setWidth="36">
            Experience
          </MenuIcon>
          <MenuIcon imageURL={"/white-res.svg"} i={"resume"} setWidth="36">
            Resume
          </MenuIcon>
        </div>

        <div className="flex flex-row items-end">
          <Clock />
        </div>

      </div>
    </div>
  );
}
