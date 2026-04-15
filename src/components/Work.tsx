import "./styles/Work.css";
// import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`, // Use actual scroll width
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    // Clean up (optional, good practice)
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {[
            { title: "VillageStay App", category: "Tourism Application", tools: "Flutter, Firebase, Dart", desc: "An application connecting travellers with authentic rural stays.", image: "/images/villagestay.jpeg" },
            { title: "Infosys Hackathon 2025", category: "Achievement", Platform: "Problem Solving", desc: "State Winner and National Finalist.", image: "/images/infosys.jpeg" },
            { title: "Android Dev Challenge", category: "Achievement", Platform: "Android App", desc: "Secured 2nd position at Festronix Hackathon 2025.", image: "/images/Festronix.jpeg" },
            { title: "Hack The Future", category: "Achievement", Platform: "Healthcare Solution", desc: "Recognized at Hack the Future by Startup Odisha.", image: "/images/Hack the future.jpeg" },
            { title: "Eureka 2025", category: "Achievement", Platform: "Business Model Pitch", desc: "Secured 3rd position in a national competition by E-Cell, IIT Bombay.", image: "/images/Eureka.jpeg" }
          ].map((project: any, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools / Platform</h4>
                <p>{project.tools || project.Platform}</p>
                <h4 style={{ marginTop: "20px" }}>Description</h4>
                <p>{project.desc}</p>
                {project.image && (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    style={{ marginTop: "20px", maxWidth: "100%", maxHeight: "350px", objectFit: "contain", borderRadius: "8px" }} 
                  />
                )}
              </div>
              {/* <WorkImage image="/images/placeholder.webp" alt={project.title} /> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
