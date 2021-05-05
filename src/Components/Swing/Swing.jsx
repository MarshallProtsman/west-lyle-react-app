import { useSpring, animated } from "react-spring";
import { useDrag } from "react-use-gesture";

function Swing() {
  const [{ x }, set] = useSpring(() => ({
    x: 0,
  }));
  const bind = useDrag(
    ({ movement: [x], velocity, down, direction: [dx], tap }) => {
      if (!down) {
        if (x > -100) {
          set({ x: 0 });
        } else if (x < -300) {
          set({ x: -400 });
        } else {
          set({ x: -200 });
        }
        return;
      }
      set({ x });
    }
  );

  return (
    <div style={{ width: "50px", marginLeft: "50px" }} className="container" {...bind()}>
      <svg
        id="Swinging"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 652.63 544.01"
      >
        <defs></defs>
        <animated.polygon
          class="cls-1"
          points={x.to({
            range: [0, 0, 0],
            output: [
              "10.03 337.02 642.53 337.02 641.53 488.42 10.53 488.42 10.03 337.02",
              "10.04 416.61 642.54 416.61 641.54 534.01 10.54 534.01 10.04 416.61",
              "10.04 416.61 642.54 416.61 641.54 534.01 10.54 534.01 10.04 416.61",
            ],
          })}
          style={{
            fill: "none",
            stroke: "#000",
            strokeMiterLimit: "10",
            strokeWidth: "50px",
          }}
        />
        <animated.path
          d={x.to({
            range: [0, 0, 0],
            output: [
              "M507.5,3.9S614,207,508.36,399",
              "M507.5,3.9S614,207,518.36,399",
              "M507.5,3.9s523.8,235.1,508.36,460",
            ],
          })}
          transform={x.to({
            range: [0, 0, 0],
            output: [
              "translate(-0.96 -2.79)",
              "translate(-0.96 -2.79)",
              "translate(-0.97 2.62)",
            ],
          })}
          style={{
            fill: "none",
            stroke: "#000",
            strokeMiterLimit: "10",
            strokeWidth: "50px",
          }}
        />
        <animated.path
          class="cls-2"
          d={x.to({
            range: [0, 0, 0],
            output: [
              "M114.5,3.8S242,201.4,115.36,399",
              "M114.5,3.8S242,201.4,125.36,399",
              // "M114.5,3.8s23.8,23.8,100,460",
              "M107.5,3.9s123.8,5.1,108.36,460",
            ],
          })}
          transform="translate(-0.96 -2.79)"
          style={{
            fill: "none",
            stroke: "#000",
            strokeMiterLimit: "10",
            strokeWidth: "50px",
          }}
        />
      </svg>
    </div>
  );
}

export default Swing