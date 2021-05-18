import React from "react";
import { useSpring, animated } from "react-spring";

function SwingLogo() {
  const [{ x }, set] = useSpring(() => ({
    x: 0,
    reset: true,
  }));
  return (
    <div style={{ width: "70px", marginLeft: "70px" }} className="container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 652.63 544.01"
        onMouseLeave={() => set({ x: 0, color: "red" })}
        onMouseEnter={() => set({ x: 5, color: "#000" })}
        onClick={()=> set({ x: 10, color: "red" })}
      >
        <animated.path
          fill="#fff"
          stroke="#000"
          strokeMiterlimit="10"
          strokeWidth="30"
          d={x.to({
            range: [0, 5, 10],
            output: [
              "M10.04 416.61L572.54 416.61 641.54 534.01 40.54 534.01 10.04 416.61z",
              "M10.04 476.61L642.54 476.61 641.54 534.01 10.54 534.01 10.04 476.61z",
              "M10.04 534.61L602.54 534.61 641.54 416.01 40.54 416.01 10.04 476.61z",
              
            ],
          })}
        ></animated.path>
        <animated.path
          fill="none"
          stroke="#000"
          strokeMiterlimit="10"
          strokeWidth="30"
          d={x.to({
            range: [0, 5, 10],
            output: [
                "M506.54 1.11s-123.8 235.1 1 460M113.54 1.01s-123.8 235.1 1 460",
                "M506.54 1.11s3.8 235.1 1 500M113.54 1.01s3.8 235.1 1 500",
                "M506.54 1.11s123.8 235.1 1 460M113.54 1.01s123.8 235.1 1 460",
            ],
          })}
        ></animated.path>
      </svg>
    </div>
  );
}

export default SwingLogo;
