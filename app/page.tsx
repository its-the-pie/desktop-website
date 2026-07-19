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
  
  return (
    <div className="bg-[url('/bg-def.png')] w-sreen h-screen bg-cover">
      <main className="sidebar z-10 flex flex-row gap-10 p-10">
        <div className="app-box flex flex-col gap-10 flex-wrap pb-10 h-180">
          <Icon imageURL={"/file.svg"}>
            <p>Hello</p>
          </Icon>
          <Icon imageURL={"/file.svg"}>
            <p>Hello</p>
          </Icon>
          <Icon imageURL={"/file.svg"}>
            <p>Hello</p>
          </Icon>
          <Icon imageURL={"/file.svg"}>
            <p>Hello</p>
          </Icon>
          <Icon imageURL={"/file.svg"}>
            <p>Hello</p>
          </Icon>
          <Icon imageURL={"/file.svg"}>
            <p>Hello</p>
          </Icon>
          <Icon imageURL={"/file.svg"}>
            <p>Hello</p>
          </Icon>
          <Icon imageURL={"/file.svg"}>
            <p>Hello</p>
          </Icon>
        </div>
      </main>

      <Tab>
        Hi
      </Tab>

      <div className="footer flex flex-row p-2.5">
        <div className="flex flex-row gap-8 left-0 w-full">
          <Icon imageURL={"/globe.svg"}>
            <p>Hello</p>
          </Icon>
          <Icon imageURL={"/globe.svg"}>
            <p>Hello</p>
          </Icon>
          <Icon imageURL={"/globe.svg"}>
            <p>Hello</p>
          </Icon>
          <Icon imageURL={"/globe.svg"}>
            <p>Hello</p>
          </Icon>

        </div>
        
        <div className="flex flex-row items-end">
          <Clock/>
        </div>
        
      </div>
    </div>
  );
}
