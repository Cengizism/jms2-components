import { useState } from "react";
import { Button } from "react-bootstrap";
import "../RouteMap/RouteMap.css";

function RouteMap() {
  const [robotPositionX, setRobotPositionX] = useState(0);
  const [robotPositionY, setRobotPositionY] = useState(0);
  const [isTranspondersShown, setIsTranspondersShown] = useState(true);
  const [isRoutesShown, setIsRoutesShown] = useState(true);

  function moveRobot() {
    setTimeout(setRobotPositionY(300), 0);

    setTimeout(() => {
      setRobotPositionX(-1425);
      setRobotPositionY(300);
    }, 5000);

    setTimeout(() => {
      setRobotPositionX(-1425);
      setRobotPositionY(230);
    }, 10000);

    setTimeout(() => {
      setRobotPositionX(0);
      setRobotPositionY(230);
    }, 15000);

    setTimeout(() => {
      setRobotPositionX(0);
      setRobotPositionY(0);
    }, 20000);
  }

  function toggleTransponders() {
    setIsTranspondersShown(!isTranspondersShown);
  }

  function toggleRoute() {
    setIsRoutesShown(!isRoutesShown);
  }

  return (
    <>
      <h2>Route map</h2>

      <section className="border border-secondary p-3">
        <Button onClick={moveRobot}>Simulate route</Button>
        <Button className="ms-2" onClick={toggleTransponders}>
          Toggle transponders
        </Button>
        <Button className="ms-2" onClick={toggleRoute}>
          Toggle routes
        </Button>

        <svg
          width="100%"
          height="569"
          viewBox="0 0 1477 569"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1_2)">
            <rect width="1477" height="569" fill="white" />
            <g className="blocks">
              <rect
                x="1"
                y="1"
                width="1475"
                height="567"
                fill="#F6F6F5"
                stroke="#0BB140"
                strokeWidth="2"
              />
              <rect
                x="70"
                y="445"
                width="1360"
                height="123"
                fill="#D6D6D6"
                stroke="#0BB140"
                strokeWidth="2"
              />
              <rect
                x="1"
                y="1"
                width="285"
                height="284"
                fill="#D6D6D6"
                stroke="#0BB140"
                strokeWidth="2"
              />
              <rect
                x="502"
                y="1"
                width="622"
                height="284"
                fill="#D6D6D6"
                stroke="#0BB140"
                strokeWidth="2"
              />
              <rect
                x="1371"
                y="1"
                width="105"
                height="52"
                fill="#D6D6D6"
                stroke="#0BB140"
                strokeWidth="2"
              />
              <rect
                x="1"
                y="-1"
                width="103"
                height="69"
                transform="matrix(1 0 0 -1 1370 123)"
                fill="#434529"
                fillOpacity="0.2"
                stroke="#434529"
                strokeWidth="2"
                strokeDasharray="20 2"
              />
            </g>
            {isRoutesShown && (
              <g className="routes">
                <rect
                  x="26"
                  y="322"
                  width="1425"
                  height="50"
                  fill="#0BB140"
                  fillOpacity="0.2"
                />
                <rect
                  x="26"
                  y="394"
                  width="1425"
                  height="50"
                  fill="#0BB140"
                  fillOpacity="0.2"
                />
                <rect
                  x="2"
                  y="347"
                  width="49"
                  height="74"
                  fill="#0BB140"
                  fillOpacity="0.2"
                />
                <rect
                  x="1426"
                  y="85"
                  width="49"
                  height="336"
                  fill="#0BB140"
                  fillOpacity="0.2"
                />
                <rect
                  x="1426"
                  y="85"
                  width="49"
                  height="262"
                  fill="#0BB140"
                  fillOpacity="0.2"
                />
              </g>
            )}
            {isTranspondersShown && (
              <g className="transponders">
                <circle cx="1247" cy="30" r="3" fill="black" />
                <circle cx="1247" cy="30" r="3" fill="black" />
                <circle cx="1247" cy="30" r="3" fill="black" />
                <circle cx="1247" cy="30" r="3" fill="black" />
                <circle cx="1152" cy="111" r="3" fill="black" />
                <circle cx="1152" cy="111" r="3" fill="black" />
                <circle cx="1152" cy="111" r="3" fill="black" />
                <circle cx="1152" cy="111" r="3" fill="black" />
                <circle cx="1198" cy="111" r="3" fill="black" />
                <circle cx="1198" cy="111" r="3" fill="black" />
                <circle cx="1198" cy="111" r="3" fill="black" />
                <circle cx="1198" cy="111" r="3" fill="black" />
                <circle cx="1247" cy="111" r="3" fill="black" />
                <circle cx="1247" cy="111" r="3" fill="black" />
                <circle cx="1247" cy="111" r="3" fill="black" />
                <circle cx="1247" cy="111" r="3" fill="black" />
                <circle cx="1297" cy="111" r="3" fill="black" />
                <circle cx="1297" cy="111" r="3" fill="black" />
                <circle cx="1297" cy="111" r="3" fill="black" />
                <circle cx="1297" cy="111" r="3" fill="black" />
                <circle cx="1152" cy="203" r="3" fill="black" />
                <circle cx="1152" cy="203" r="3" fill="black" />
                <circle cx="1152" cy="203" r="3" fill="black" />
                <circle cx="1152" cy="203" r="3" fill="black" />
                <circle cx="1198" cy="203" r="3" fill="black" />
                <circle cx="1198" cy="203" r="3" fill="black" />
                <circle cx="1198" cy="203" r="3" fill="black" />
                <circle cx="1198" cy="203" r="3" fill="black" />
                <circle cx="1247" cy="203" r="3" fill="black" />
                <circle cx="1247" cy="203" r="3" fill="black" />
                <circle cx="1247" cy="203" r="3" fill="black" />
                <circle cx="1247" cy="203" r="3" fill="black" />
                <circle cx="1297" cy="203" r="3" fill="black" />
                <circle cx="1297" cy="203" r="3" fill="black" />
                <circle cx="1297" cy="203" r="3" fill="black" />
                <circle cx="1297" cy="203" r="3" fill="black" />
                <circle cx="1346" cy="203" r="3" fill="black" />
                <circle cx="1346" cy="203" r="3" fill="black" />
                <circle cx="1346" cy="203" r="3" fill="black" />
                <circle cx="1346" cy="203" r="3" fill="black" />
                <circle cx="1198" cy="261" r="3" fill="black" />
                <circle cx="1198" cy="261" r="3" fill="black" />
                <circle cx="1198" cy="261" r="3" fill="black" />
                <circle cx="1198" cy="261" r="3" fill="black" />
                <circle cx="1247" cy="261" r="3" fill="black" />
                <circle cx="1247" cy="261" r="3" fill="black" />
                <circle cx="1247" cy="261" r="3" fill="black" />
                <circle cx="1247" cy="261" r="3" fill="black" />
                <circle cx="1297" cy="261" r="3" fill="black" />
                <circle cx="1297" cy="261" r="3" fill="black" />
                <circle cx="1297" cy="261" r="3" fill="black" />
                <circle cx="1297" cy="261" r="3" fill="black" />
                <circle cx="1346" cy="261" r="3" fill="black" />
                <circle cx="1346" cy="261" r="3" fill="black" />
                <circle cx="1346" cy="261" r="3" fill="black" />
                <circle cx="1346" cy="261" r="3" fill="black" />
                <circle cx="1381" cy="233" r="3" fill="black" />
                <circle cx="1381" cy="233" r="3" fill="black" />
                <circle cx="1381" cy="233" r="3" fill="black" />
                <circle cx="1381" cy="233" r="3" fill="black" />
                <circle cx="1417" cy="233" r="3" fill="black" />
                <circle cx="1417" cy="233" r="3" fill="black" />
                <circle cx="1417" cy="233" r="3" fill="black" />
                <circle cx="1417" cy="233" r="3" fill="black" />
                <circle cx="1447" cy="233" r="3" fill="black" />
                <circle cx="1447" cy="233" r="3" fill="black" />
                <circle cx="1447" cy="233" r="3" fill="black" />
                <circle cx="1447" cy="233" r="3" fill="black" />
                <circle cx="1451" cy="206" r="3" fill="black" />
                <circle cx="1451" cy="206" r="3" fill="black" />
                <circle cx="1451" cy="206" r="3" fill="black" />
                <circle cx="1451" cy="206" r="3" fill="black" />
                <circle cx="1451" cy="144" r="3" fill="black" />
                <circle cx="1451" cy="144" r="3" fill="black" />
                <circle cx="1451" cy="144" r="3" fill="black" />
                <circle cx="1451" cy="144" r="3" fill="black" />
                <circle cx="1451" cy="130" r="3" fill="black" />
                <circle cx="1451" cy="130" r="3" fill="black" />
                <circle cx="1451" cy="130" r="3" fill="black" />
                <circle cx="1451" cy="130" r="3" fill="black" />
                <circle cx="1451" cy="122" r="3" fill="black" />
                <circle cx="1451" cy="122" r="3" fill="black" />
                <circle cx="1451" cy="122" r="3" fill="black" />
                <circle cx="1451" cy="122" r="3" fill="black" />
                <circle cx="1451" cy="113" r="3" fill="black" />
                <circle cx="1451" cy="113" r="3" fill="black" />
                <circle cx="1451" cy="113" r="3" fill="black" />
                <circle cx="1451" cy="113" r="3" fill="black" />
                <circle cx="1381" cy="284" r="3" fill="black" />
                <circle cx="1381" cy="284" r="3" fill="black" />
                <circle cx="1381" cy="284" r="3" fill="black" />
                <circle cx="1381" cy="284" r="3" fill="black" />
                <circle cx="1417" cy="284" r="3" fill="black" />
                <circle cx="1417" cy="284" r="3" fill="black" />
                <circle cx="1417" cy="284" r="3" fill="black" />
                <circle cx="1417" cy="284" r="3" fill="black" />
                <circle cx="1148" cy="347" r="3" fill="black" />
                <circle cx="1148" cy="347" r="3" fill="black" />
                <circle cx="1148" cy="347" r="3" fill="black" />
                <circle cx="1148" cy="347" r="3" fill="black" />
                <circle cx="1041" cy="347" r="3" fill="black" />
                <circle cx="1041" cy="347" r="3" fill="black" />
                <circle cx="1041" cy="347" r="3" fill="black" />
                <circle cx="1041" cy="347" r="3" fill="black" />
                <circle cx="1041" cy="384" r="3" fill="black" />
                <circle cx="1041" cy="384" r="3" fill="black" />
                <circle cx="1041" cy="384" r="3" fill="black" />
                <circle cx="1041" cy="384" r="3" fill="black" />
                <circle cx="1041" cy="417" r="3" fill="black" />
                <circle cx="1041" cy="417" r="3" fill="black" />
                <circle cx="1041" cy="417" r="3" fill="black" />
                <circle cx="1041" cy="417" r="3" fill="black" />
                <circle cx="1041" cy="314" r="3" fill="black" />
                <circle cx="1041" cy="314" r="3" fill="black" />
                <circle cx="1041" cy="314" r="3" fill="black" />
                <circle cx="1041" cy="314" r="3" fill="black" />
                <circle cx="974" cy="347" r="3" fill="black" />
                <circle cx="974" cy="347" r="3" fill="black" />
                <circle cx="974" cy="347" r="3" fill="black" />
                <circle cx="974" cy="347" r="3" fill="black" />
                <circle cx="974" cy="384" r="3" fill="black" />
                <circle cx="974" cy="384" r="3" fill="black" />
                <circle cx="974" cy="384" r="3" fill="black" />
                <circle cx="974" cy="384" r="3" fill="black" />
                <circle cx="895" cy="347" r="3" fill="black" />
                <circle cx="895" cy="347" r="3" fill="black" />
                <circle cx="895" cy="347" r="3" fill="black" />
                <circle cx="895" cy="347" r="3" fill="black" />
                <circle cx="895" cy="384" r="3" fill="black" />
                <circle cx="895" cy="384" r="3" fill="black" />
                <circle cx="895" cy="384" r="3" fill="black" />
                <circle cx="895" cy="384" r="3" fill="black" />
                <circle cx="813" cy="347" r="3" fill="black" />
                <circle cx="813" cy="347" r="3" fill="black" />
                <circle cx="813" cy="347" r="3" fill="black" />
                <circle cx="813" cy="347" r="3" fill="black" />
                <circle cx="813" cy="384" r="3" fill="black" />
                <circle cx="813" cy="384" r="3" fill="black" />
                <circle cx="813" cy="384" r="3" fill="black" />
                <circle cx="813" cy="384" r="3" fill="black" />
                <circle cx="813" cy="417" r="3" fill="black" />
                <circle cx="813" cy="417" r="3" fill="black" />
                <circle cx="813" cy="417" r="3" fill="black" />
                <circle cx="813" cy="417" r="3" fill="black" />
                <circle cx="813" cy="314" r="3" fill="black" />
                <circle cx="813" cy="314" r="3" fill="black" />
                <circle cx="813" cy="314" r="3" fill="black" />
                <circle cx="813" cy="314" r="3" fill="black" />
                <circle cx="738" cy="347" r="3" fill="black" />
                <circle cx="738" cy="347" r="3" fill="black" />
                <circle cx="738" cy="347" r="3" fill="black" />
                <circle cx="738" cy="347" r="3" fill="black" />
                <circle cx="738" cy="384" r="3" fill="black" />
                <circle cx="738" cy="384" r="3" fill="black" />
                <circle cx="738" cy="384" r="3" fill="black" />
                <circle cx="738" cy="384" r="3" fill="black" />
                <circle cx="660" cy="347" r="3" fill="black" />
                <circle cx="660" cy="347" r="3" fill="black" />
                <circle cx="660" cy="347" r="3" fill="black" />
                <circle cx="660" cy="347" r="3" fill="black" />
                <circle cx="660" cy="384" r="3" fill="black" />
                <circle cx="660" cy="384" r="3" fill="black" />
                <circle cx="660" cy="384" r="3" fill="black" />
                <circle cx="660" cy="384" r="3" fill="black" />
                <circle cx="584" cy="347" r="3" fill="black" />
                <circle cx="584" cy="347" r="3" fill="black" />
                <circle cx="584" cy="347" r="3" fill="black" />
                <circle cx="584" cy="347" r="3" fill="black" />
                <circle cx="584" cy="384" r="3" fill="black" />
                <circle cx="584" cy="384" r="3" fill="black" />
                <circle cx="584" cy="384" r="3" fill="black" />
                <circle cx="584" cy="384" r="3" fill="black" />
                <circle cx="503" cy="347" r="3" fill="black" />
                <circle cx="503" cy="347" r="3" fill="black" />
                <circle cx="503" cy="347" r="3" fill="black" />
                <circle cx="503" cy="347" r="3" fill="black" />
                <circle cx="503" cy="384" r="3" fill="black" />
                <circle cx="503" cy="384" r="3" fill="black" />
                <circle cx="503" cy="384" r="3" fill="black" />
                <circle cx="503" cy="384" r="3" fill="black" />
                <circle cx="436" cy="347" r="3" fill="black" />
                <circle cx="436" cy="347" r="3" fill="black" />
                <circle cx="436" cy="347" r="3" fill="black" />
                <circle cx="436" cy="347" r="3" fill="black" />
                <circle cx="436" cy="384" r="3" fill="black" />
                <circle cx="436" cy="384" r="3" fill="black" />
                <circle cx="436" cy="384" r="3" fill="black" />
                <circle cx="436" cy="384" r="3" fill="black" />
                <circle cx="353" cy="347" r="3" fill="black" />
                <circle cx="353" cy="347" r="3" fill="black" />
                <circle cx="353" cy="347" r="3" fill="black" />
                <circle cx="353" cy="347" r="3" fill="black" />
                <circle cx="394" cy="347" r="3" fill="black" />
                <circle cx="394" cy="347" r="3" fill="black" />
                <circle cx="394" cy="347" r="3" fill="black" />
                <circle cx="394" cy="347" r="3" fill="black" />
                <circle cx="436" cy="261" r="3" fill="black" />
                <circle cx="436" cy="261" r="3" fill="black" />
                <circle cx="436" cy="261" r="3" fill="black" />
                <circle cx="436" cy="261" r="3" fill="black" />
                <circle cx="353" cy="261" r="3" fill="black" />
                <circle cx="353" cy="261" r="3" fill="black" />
                <circle cx="353" cy="261" r="3" fill="black" />
                <circle cx="353" cy="261" r="3" fill="black" />
                <circle cx="394" cy="261" r="3" fill="black" />
                <circle cx="394" cy="261" r="3" fill="black" />
                <circle cx="394" cy="261" r="3" fill="black" />
                <circle cx="394" cy="261" r="3" fill="black" />
                <circle cx="436" cy="204" r="3" fill="black" />
                <circle cx="436" cy="204" r="3" fill="black" />
                <circle cx="436" cy="204" r="3" fill="black" />
                <circle cx="436" cy="204" r="3" fill="black" />
                <circle cx="473" cy="204" r="3" fill="black" />
                <circle cx="473" cy="204" r="3" fill="black" />
                <circle cx="473" cy="204" r="3" fill="black" />
                <circle cx="473" cy="204" r="3" fill="black" />
                <circle cx="353" cy="204" r="3" fill="black" />
                <circle cx="353" cy="204" r="3" fill="black" />
                <circle cx="353" cy="204" r="3" fill="black" />
                <circle cx="353" cy="204" r="3" fill="black" />
                <circle cx="315" cy="204" r="3" fill="black" />
                <circle cx="315" cy="204" r="3" fill="black" />
                <circle cx="315" cy="204" r="3" fill="black" />
                <circle cx="315" cy="204" r="3" fill="black" />
                <circle cx="394" cy="204" r="3" fill="black" />
                <circle cx="394" cy="204" r="3" fill="black" />
                <circle cx="394" cy="204" r="3" fill="black" />
                <circle cx="394" cy="204" r="3" fill="black" />
                <circle cx="436" cy="111" r="3" fill="black" />
                <circle cx="436" cy="111" r="3" fill="black" />
                <circle cx="436" cy="111" r="3" fill="black" />
                <circle cx="436" cy="111" r="3" fill="black" />
                <circle cx="473" cy="111" r="3" fill="black" />
                <circle cx="473" cy="111" r="3" fill="black" />
                <circle cx="473" cy="111" r="3" fill="black" />
                <circle cx="473" cy="111" r="3" fill="black" />
                <circle cx="353" cy="111" r="3" fill="black" />
                <circle cx="353" cy="111" r="3" fill="black" />
                <circle cx="353" cy="111" r="3" fill="black" />
                <circle cx="353" cy="111" r="3" fill="black" />
                <circle cx="315" cy="111" r="3" fill="black" />
                <circle cx="315" cy="111" r="3" fill="black" />
                <circle cx="315" cy="111" r="3" fill="black" />
                <circle cx="315" cy="111" r="3" fill="black" />
                <circle cx="394" cy="111" r="3" fill="black" />
                <circle cx="394" cy="111" r="3" fill="black" />
                <circle cx="394" cy="111" r="3" fill="black" />
                <circle cx="394" cy="111" r="3" fill="black" />
                <circle cx="394" cy="30" r="3" fill="black" />
                <circle cx="394" cy="30" r="3" fill="black" />
                <circle cx="394" cy="30" r="3" fill="black" />
                <circle cx="394" cy="30" r="3" fill="black" />
                <circle cx="353" cy="384" r="3" fill="black" />
                <circle cx="353" cy="384" r="3" fill="black" />
                <circle cx="353" cy="384" r="3" fill="black" />
                <circle cx="353" cy="384" r="3" fill="black" />
                <circle cx="268" cy="347" r="3" fill="black" />
                <circle cx="268" cy="347" r="3" fill="black" />
                <circle cx="268" cy="347" r="3" fill="black" />
                <circle cx="268" cy="347" r="3" fill="black" />
                <circle cx="268" cy="384" r="3" fill="black" />
                <circle cx="268" cy="384" r="3" fill="black" />
                <circle cx="268" cy="384" r="3" fill="black" />
                <circle cx="268" cy="384" r="3" fill="black" />
                <circle cx="204" cy="347" r="3" fill="black" />
                <circle cx="204" cy="347" r="3" fill="black" />
                <circle cx="204" cy="347" r="3" fill="black" />
                <circle cx="204" cy="347" r="3" fill="black" />
                <circle cx="204" cy="314" r="3" fill="black" />
                <circle cx="204" cy="314" r="3" fill="black" />
                <circle cx="204" cy="314" r="3" fill="black" />
                <circle cx="204" cy="314" r="3" fill="black" />
                <circle cx="204" cy="384" r="3" fill="black" />
                <circle cx="204" cy="384" r="3" fill="black" />
                <circle cx="204" cy="384" r="3" fill="black" />
                <circle cx="204" cy="384" r="3" fill="black" />
                <circle cx="111" cy="347" r="3" fill="black" />
                <circle cx="111" cy="347" r="3" fill="black" />
                <circle cx="111" cy="347" r="3" fill="black" />
                <circle cx="111" cy="347" r="3" fill="black" />
                <circle cx="111" cy="314" r="3" fill="black" />
                <circle cx="111" cy="314" r="3" fill="black" />
                <circle cx="111" cy="314" r="3" fill="black" />
                <circle cx="111" cy="314" r="3" fill="black" />
                <circle cx="111" cy="384" r="3" fill="black" />
                <circle cx="111" cy="384" r="3" fill="black" />
                <circle cx="111" cy="384" r="3" fill="black" />
                <circle cx="111" cy="384" r="3" fill="black" />
                <circle cx="152" cy="417" r="3" fill="black" />
                <circle cx="152" cy="417" r="3" fill="black" />
                <circle cx="152" cy="417" r="3" fill="black" />
                <circle cx="152" cy="417" r="3" fill="black" />
                <circle cx="30" cy="459" r="3" fill="black" />
                <circle cx="30" cy="459" r="3" fill="black" />
                <circle cx="30" cy="459" r="3" fill="black" />
                <circle cx="30" cy="459" r="3" fill="black" />
                <circle cx="30" cy="395" r="3" fill="black" />
                <circle cx="30" cy="395" r="3" fill="black" />
                <circle cx="30" cy="395" r="3" fill="black" />
                <circle cx="30" cy="395" r="3" fill="black" />
                <circle cx="368" cy="417" r="3" fill="black" />
                <circle cx="368" cy="417" r="3" fill="black" />
                <circle cx="368" cy="417" r="3" fill="black" />
                <circle cx="368" cy="417" r="3" fill="black" />
                <circle cx="584" cy="417" r="3" fill="black" />
                <circle cx="584" cy="417" r="3" fill="black" />
                <circle cx="584" cy="417" r="3" fill="black" />
                <circle cx="584" cy="417" r="3" fill="black" />
                <circle cx="584" cy="314" r="3" fill="black" />
                <circle cx="584" cy="314" r="3" fill="black" />
                <circle cx="584" cy="314" r="3" fill="black" />
                <circle cx="584" cy="314" r="3" fill="black" />
                <circle cx="1198" cy="347" r="3" fill="black" />
                <circle cx="1198" cy="347" r="3" fill="black" />
                <circle cx="1198" cy="347" r="3" fill="black" />
                <circle cx="1198" cy="347" r="3" fill="black" />
                <circle cx="1247" cy="347" r="3" fill="black" />
                <circle cx="1247" cy="347" r="3" fill="black" />
                <circle cx="1247" cy="347" r="3" fill="black" />
                <circle cx="1247" cy="347" r="3" fill="black" />
                <circle cx="1297" cy="347" r="3" fill="black" />
                <circle cx="1297" cy="347" r="3" fill="black" />
                <circle cx="1297" cy="347" r="3" fill="black" />
                <circle cx="1297" cy="347" r="3" fill="black" />
                <circle cx="1346" cy="347" r="3" fill="black" />
                <circle cx="1346" cy="347" r="3" fill="black" />
                <circle cx="1346" cy="347" r="3" fill="black" />
                <circle cx="1346" cy="347" r="3" fill="black" />
                <circle cx="1381" cy="347" r="3" fill="black" />
                <circle cx="1381" cy="347" r="3" fill="black" />
                <circle cx="1381" cy="347" r="3" fill="black" />
                <circle cx="1381" cy="347" r="3" fill="black" />
                <circle cx="1417" cy="347" r="3" fill="black" />
                <circle cx="1417" cy="347" r="3" fill="black" />
                <circle cx="1417" cy="347" r="3" fill="black" />
                <circle cx="1417" cy="347" r="3" fill="black" />
                <circle cx="1148" cy="384" r="3" fill="black" />
                <circle cx="1148" cy="384" r="3" fill="black" />
                <circle cx="1148" cy="384" r="3" fill="black" />
                <circle cx="1148" cy="384" r="3" fill="black" />
                <circle cx="1198" cy="384" r="3" fill="black" />
                <circle cx="1198" cy="384" r="3" fill="black" />
                <circle cx="1198" cy="384" r="3" fill="black" />
                <circle cx="1198" cy="384" r="3" fill="black" />
                <circle cx="1297" cy="384" r="3" fill="black" />
                <circle cx="1297" cy="384" r="3" fill="black" />
                <circle cx="1297" cy="384" r="3" fill="black" />
                <circle cx="1297" cy="384" r="3" fill="black" />
                <circle cx="1381" cy="384" r="3" fill="black" />
                <circle cx="1381" cy="384" r="3" fill="black" />
                <circle cx="1381" cy="384" r="3" fill="black" />
                <circle cx="1381" cy="384" r="3" fill="black" />
                <circle cx="1381" cy="384" r="3" fill="black" />
                <circle cx="1381" cy="384" r="3" fill="black" />
                <circle cx="1381" cy="384" r="3" fill="black" />
                <circle cx="1381" cy="384" r="3" fill="black" />
                <circle cx="1348" cy="417" r="3" fill="black" />
                <circle cx="1348" cy="417" r="3" fill="black" />
                <circle cx="1348" cy="417" r="3" fill="black" />
                <circle cx="1348" cy="417" r="3" fill="black" />
                <circle cx="1417" cy="347" r="3" fill="black" />
                <circle cx="1417" cy="347" r="3" fill="black" />
                <circle cx="1417" cy="347" r="3" fill="black" />
                <circle cx="1417" cy="347" r="3" fill="black" />
              </g>
            )}
            <g className="arrows">
              <path
                d="M1451 169L1456.77 159L1445.23 159L1451 169ZM1450 152L1450 160L1452 160L1452 152L1450 152Z"
                fill="white"
              />
              <path
                d="M1451 336L1456.77 326L1445.23 326L1451 336ZM1450 319L1450 327L1452 327L1452 319L1450 319Z"
                fill="white"
              />
              <path
                d="M747.5 346.5L737.5 340.726V352.274L747.5 346.5ZM730.5 347.5H738.5V345.5H730.5V347.5Z"
                fill="white"
              />
              <path
                d="M730.5 420.5L740.5 426.274L740.5 414.726L730.5 420.5ZM747.5 419.5L739.5 419.5L739.5 421.5L747.5 421.5L747.5 419.5Z"
                fill="white"
              />
              <path
                d="M26 375L20.2265 385L31.7735 385L26 375ZM27 392L27 384L25 384L25 392L27 392Z"
                fill="white"
              />
              <path
                d="M1451 211L1445.23 221L1456.77 221L1451 211ZM1452 228L1452 220L1450 220L1450 228L1452 228Z"
                fill="white"
              />
            </g>
            <g
              className="barn-e"
              id="robot"
              style={{
                transform:
                  "translate(" +
                  robotPositionX +
                  "px, " +
                  robotPositionY +
                  "px)",
              }}
            >
              <g>
                 {/* style={{transform: "rotate(90deg)"}}> */}
              <path
                d="M1466.35 99.9844C1466.22 93.6506 1462.12 88.689 1460.09 87L1450.65 87L1450.65 143.926L1463.26 143.609C1463.1 143.477 1462.88 143.134 1463.26 142.817C1463.64 142.501 1464.37 142.157 1464.68 142.026L1469.75 143.926C1470.28 146.459 1471.57 151.416 1472.52 150.972C1473.47 150.529 1473.23 148.94 1473 148.201L1470.78 142.817L1470.78 137.909L1469.75 136.563L1466.03 136.563C1466.12 131.258 1466.24 122.519 1466.32 114.711C1467.63 114.711 1467.99 114.077 1468.01 113.761C1468.04 111.174 1468.09 105.606 1468.09 104.022C1468.09 102.439 1466.94 102.201 1466.37 102.28C1466.37 101.389 1466.36 100.616 1466.35 99.9844Z"
                fill="black"
              />
              <path
                d="M1434.65 99.9844C1434.78 93.6506 1438.87 88.689 1440.91 87L1450.65 87L1450.65 143.926L1437.74 143.609C1437.9 143.477 1438.12 143.134 1437.74 142.817C1437.36 142.501 1436.63 142.157 1436.31 142.026L1431.25 143.926C1430.72 146.459 1429.43 151.416 1428.48 150.972C1427.53 150.529 1427.76 148.94 1428 148.201L1430.22 142.817L1430.22 137.909L1431.25 136.563L1434.97 136.563C1434.88 131.258 1434.75 122.519 1434.68 114.711C1433.37 114.711 1433.01 114.077 1432.99 113.761C1432.96 111.174 1432.91 105.606 1432.91 104.022C1432.91 102.439 1434.05 102.201 1434.63 102.28C1434.63 101.389 1434.64 100.616 1434.65 99.9844Z"
                fill="black"
              />
              </g>
            </g>
          </g>
          <defs>
            <clipPath id="clip0_1_2">
              <rect width="1477" height="569" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </section>
    </>
  );
}

export default RouteMap;
