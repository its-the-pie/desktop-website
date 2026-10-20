'use client'

import Image from "next/image";
import DesktopIcon from "./components/desktopIcon";
import MenuIcon from "./components/menuIcon";
import Tab from "./components/tab"
import React  from 'react';
import Clock from '../app/components/Clock.js'
import Draggable from "react-draggable";

export default function Home() {
  const time = new Date().toLocaleTimeString()
  const date = new Date().toDateString()
  
        //<div className='z-0 top-0 fixed w-full h-full flex justify-center items-center'>


  return (
    <div className="bg-[url('/bg-def.png')] w-sreen h-screen bg-cover fixed w-full flex justify-center items-center">
      <main className="sidebar z-100 flex flex-row gap-10 p-10 fixed left-0 top-0">
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

      <Tab i="intro">
        <div>
          <h1>Intro</h1>
          <p className="text-sm">Hello</p>
        </div>
      </Tab>

      <Tab i="files">
        <div>
          <h1>Files</h1>
          <p className="text-sm">Hello</p>
        </div>
      </Tab>
      <Tab i="notes">
        notes
      </Tab>
      <Tab i="about">
        about
      </Tab>
      <Tab i="skills">
        skills
      </Tab>
      <Tab i="experience">
        experience
      </Tab>
      <Tab i="resume">
        resume
      </Tab>
      <Tab i="bakes">
        bakes
      </Tab>
      <Tab i="photos">
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
