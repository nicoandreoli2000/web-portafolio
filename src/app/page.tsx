import Image from "next/image";

/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  return (
    <main className="flex flex-col h-screen">
      <section id="about" className="h-screen flex items-center justify-around">
        <div className="flex flex-col items-center gap-10">
          <div style={{ right: "50px", position: "relative" }}>
            <div
              className="w-8 h-8"
              style={{
                background: "#6A7D9C",
                animation: "linear infinite 6s rotate",
              }}
            />
            <div
              className="w-6 h-6 rounded-full"
              style={{
                position: "absolute",
                top: "-5px",
                right: "-40px",
                background: "var(--primary)",
                animation: "ease-in infinite 3s moveX",
              }}
            />

            <div
              className="w-12 h-2"
              style={{
                position: "absolute",
                bottom: "-5px",
                right: "-90px",
                background: "#9C6A7D",
                animation: "ease-out infinite 3s moveXinverted",
              }}
            />
          </div>
          <style>
            {`
              @keyframes rotate {
                from {
                  transform: rotate(0deg);
                }
                to {
                  transform: rotate(360deg);
                }
              }

              @keyframes moveX {
                0%, 100% {
                  transform: translateX(0);
                }
                50% {
                  transform: translateX(40px);
                }
              }

              @keyframes moveXinverted {
                0%, 100% {
                  transform: translateX(0);
                }
                50% {
                  transform: translateX(-30px);
                }
              }

            `}
          </style>
          <h2 className="text-3xl text-white">
            I'm{" "}
            <strong
              className="text-6xl font-bold tracking-tighter"
              style={{ color: "var(--primary)" }}
            >
              Nicolas Andreoli
            </strong>
          </h2>
          <p className="text-2xl text-white">
            Frontend Web Developer & React Expert
          </p>
        </div>
      </section>
      {/* <section
        id="about"
        className="h-screen flex flex-col gap-2 pb-40"
        style={{ background: "var(--bg-secondary)" }}
      >
        <h2 className="text-xl text-white">About me</h2>
        <p className="text-white">
          I'm a frontend web developer with a passion for React. I have a
          background in design and a love for creating beautiful, intuitive user
          experiences.
        </p>
      </section>

      <section id="career">
        <h2 className="text-xl text-white">Career</h2>
        <p className="text-white">
          I've been working as a web developer for over 10 years. I've worked on
          a variety of projects, from small websites to large web applications.
          I'm always looking for new challenges and opportunities to learn and
          grow.
        </p>
      </section>

      <section id="contact" style={{ background: "var(--bg-secondary)" }}>
        <h2 className="text-xl text-white">Contact</h2>
        <p className="text-white">
          You can reach me at{" "}
          <a href="mailto:nicolasandreoli2000@gmail.com">Email</a> or{" "}
          <a
            href="
            https://www.linkedin.com/in/nicolas-andreoli-1a0b2a1b9/
          "
          >
            LinkedIn
          </a>
        </p>
      </section> */}
    </main>
  );
}
