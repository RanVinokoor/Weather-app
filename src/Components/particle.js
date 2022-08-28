import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function App() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options = {{
        autoPlay: true,
        background: {
          color: {
            value: "transparent"
          }
        },
        particles: {
          color: {
            value: "#3983d3"
          },
          move: {
            angle: {
              offset: 0,
              value: 90
            },
            decay: 0,
            direction: "bottom",
            drift: 0,
            enable: true,
            speed: 2
          },
          number: {
            density: {
              enable: true,
              area: 1000,
              factor: 1500
            },
            limit: 0,
            value: 400
          },
          opacity: {
            value: 0,
            random: false,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.5,
              sync: false
            }
          },
          size: {
            value: 2,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false
            }
          }
        }
      }}
    />
  );
}