'use client'

import Image from "next/image";
import DesktopIcon from "./components/desktopIcon";
import MenuIcon from "./components/menuIcon";
import Tab from "./components/tab"
import React  from 'react';
import Clock from '../app/components/Clock.js'
import Draggable from "react-draggable";
import Carousel from "./components/Carousel"

export default function Home() {
  const time = new Date().toLocaleTimeString()
  const date = new Date().toDateString()
  
        //<div className='z-0 top-0 fixed w-full h-full flex justify-center items-center'>


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

      <Tab i="intro" className="text-black bg-white block">
        <div className="m-8 mt-16">
          <h1>Hi there!</h1>
          <br/>
          <p className="text-sm">Thanks for checking out my website! It is still a work in progress, but feel free to click around and check it out...</p>
        </div>
      </Tab>

      <Tab i="files" className="text-blue-950 bg-blue-300 ">
        <div>
          <h1>Files</h1>
          <p className="text-sm">Hello</p>
        </div>
      </Tab>
      <Tab i="notes" className="text-amber-950 bg-amber-200">
        notes
      </Tab>
      <Tab i="about" className="text-black bg-white ">
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
                "Reading Carl Hiaasen" ]}></Carousel>
            </div>
            
          </div>
        </div>
      </Tab>
      <Tab i="skills" className="text-black bg-white ">
        skills
      </Tab>
      <Tab i="experience" className="text-black bg-white ">
        experience
      </Tab>
      <Tab i="resume" className="text-black bg-white ">
        resume
      </Tab>
      <Tab i="bakes" className="text-black bg-white ">
        bakes
      </Tab>
      <Tab i="photos" className="text-black bg-white ">
        photos
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
          <Clock/>
        </div>
        
      </div>
    </div>
  );
}
