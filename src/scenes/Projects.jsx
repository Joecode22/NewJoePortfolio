import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, description, githubUrl, liveUrl }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">{description}</p>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 hover:text-red hover:font-semibold hover:bg-blue"
        >
          GitHub
        </a>
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 block text-blue-500 hover:text-blue-700 hover:text-red hover:font-semibold hover:bg-blue"
        >
          Live Site
        </a>
      </div>
      <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          The following projects were recently built during my time at The
          Coding Bootcamp at the University of Texas.
        </p>
      </motion.div>

      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >Crafting Engaging Front-End Experiences</div>
          <Project
            title="Groovehub Remixed"
            description="Built with MERN/GraphQL, using user authentication implemented with JWT and OAuth2.0, Groovehub allows users to securely connect with the Spotify API to find and share playlists with the community. Live chat implemented with google firebase allows users to discuss their favorite music in real time."
            githubUrl="https://github.com/Dannymak1993/Groovehub-Remixed"
            liveUrl="https://groovehub-remixed-2f12da1632a2.herokuapp.com/"
          />
          <Project
            title="Quiz App"
            description="Built with HTML, CSS, and JavaScript, this quiz app allows users to test their knowledge and save their high scores."
            githubUrl="https://github.com/Joecode22/Ukraine-Quiz/tree/main"
            liveUrl="https://joecode22.github.io/Ukraine-Quiz/"
          />
          <Project
            title="Date Night"
            description="Built with JavaScript, JQuery and the Materialize CSS framework, Date Night intigrates with The Cocktail DB and The Meal DB APIs to allow users to find dish and drink recipies and save their favorites."
            githubUrl="https://github.com/rxs291/5GuysMakingYourDateNight"
            liveUrl="https://rxs291.github.io/5GuysMakingYourDateNight/"
          />

          <Project
            title="Portfolio Site"
            description="Built with React and Tailwind CSS, This portfolio showcases your skills and projects bringing them to life with animations and transitions using Framer Motion."
            githubUrl="https://github.com/Joecode22/NewJoePortfolio"
            liveUrl="https://rxs291.github.io/5GuysMakingYourDateNight/"
          />
          {/* Repeat for other projects */}
          {/* <Project 
              title="Project 2" 
              description="Description for Project 2" 
              githubUrl="https://github.com/example/project2"
              liveUrl="https://live-example.com/project2"
          /> */}
          {/* ... more projects ... */}
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            Engineering Robust Back-End Solutions & Deployment
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
