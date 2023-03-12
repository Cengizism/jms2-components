import { useState } from "react";
import { Button } from "react-bootstrap";
import "../RouteMap/RouteMap.css";

function RouteMap() {
  const [x, setX] = useState(Math.random() * 250);

  function moveRobot () {
    setX(Math.random() * 250);
  }

  return (
    <>
      <h2>Route map</h2>

      <section className="border border-secondary p-3">
        <Button onClick={moveRobot}>Move robot</Button>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 900 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="900" height="600" fill="#1E1E1E" />
          <g clipPath="url(#clip0_0_1)">
            <rect width="900" height="600" fill="white" />
            <rect width="900" height="600" fill="#D9D9D9" />
            <rect x="79" y="433" width="754" height="86" fill="#D18686" />
            <rect
              x="833"
              y="91"
              width="426"
              height="86"
              transform="rotate(90 833 91)"
              fill="#D18686"
            />
            <rect
              x="100"
              y="10"
              width="30"
              height="30"
              fill="blue"
              stroke="none"
              id="robot"
              style={{transform: 'translate(' + x + 'px)'}}
            />
          </g>
          <defs>
            <clipPath id="clip0_0_1">
              <rect width="900" height="600" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </section>
    </>
  );
}

export default RouteMap;
