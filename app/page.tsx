'use client'

import Image from "next/image";
import Icon from "./components/icon";
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
          <Icon imageURL={"/white-file.svg"} i={"files"} setWidth="48">
            Files
          </Icon>
          <Icon imageURL={"/white-write.svg"} i={"notes"} setWidth="48">
            Notes
          </Icon>
          <Icon imageURL={"/white-doc.svg"} i={"about"} setWidth="48">
            About
          </Icon>
          <Icon imageURL={"/white-doc.svg"} i={"skills"} setWidth="48">
            Skills
          </Icon>
          <Icon imageURL={"/white-doc.svg"} i={"exp"} setWidth="48">
            <p>Experience</p>
          </Icon>
          <Icon imageURL={"/white-res.svg"} i={"res"} setWidth="48">
            Resume
          </Icon>
          <Icon imageURL={"/white-photo.svg"} i={"bakes"} setWidth="48">
            Bakes
          </Icon>
          <Icon imageURL={"/white-photos.svg"} i={"photos"} setWidth="48">
            Photos
          </Icon>
        </div>
      </main>
      <Tab>
        hi
      </Tab>

      <div className="footer flex flex-row p-2.5">
        <div className="flex flex-row gap-8 left-0 w-full app-box items-center text-sm">
          <Icon imageURL={"/globe.svg"} i={"hello"} setWidth="36">
            Hello
          </Icon>
          <Icon imageURL={"/globe.svg"} i={"hello"} setWidth="36">
            Hello
          </Icon>
          <Icon imageURL={"/globe.svg"} i={"hello"} setWidth="36">
            Hello
          </Icon>
          <Icon imageURL={"/globe.svg"} i={"hello"} setWidth="36">
            Hello
          </Icon>

        </div>
        
        <div className="flex flex-row items-end">
          <Clock/>
        </div>
        
      </div>
    </div>
  );
}
