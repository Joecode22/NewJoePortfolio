import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section id="testimonials" className="pt-32 pb-16">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
          TESTIMONIALS
        </p>
        <LineGradient width="w-2/5" />
        <p className="mt-10">
        As I traversed this dynamic career journey, I've gathered some glowing reviews along the way. and no, they're not all from my mom! Here's what folks who've worked with me have to say.
        </p>
      </motion.div>

      {/* TESTIMONIALS */}
      <div className="md:flex md:justify-between gap-8">
        { /* Testimonial 1 */ }
        <TestimonialBlock
          colorClass="bg-blue"
          imageUrl="./assets/person-1.png"
          quote="Joe's swift mastery of the DIACAP certification process was pivotal in ensuring uninterrupted cyber defense operations for the entire US Air Force. 'Outstanding Job!'"
          personName="Colonel Alfred Cockfield"
          personPosition="Commander, 24th Air Force"
        />

        { /* Testimonial 2 */ }
        <TestimonialBlock
          colorClass="bg-red"
          imageUrl="./assets/person-2.png"
          quote="Joe established our cyber intelligence unit in addition to his normal shift work. His efforts were foundational in creating a key aspect of the squadron that endures to this day."
          personName="Captain Dan Gunter"
          personPosition="AFCERT Cybersecurity Crew Commander"
        />

        { /* Testimonial 3 */ }
        <TestimonialBlock
          colorClass="bg-yellow"
          imageUrl="./assets/person-3.png"
          quote="Joe's SMART and TALENTED nature, coupled with his OUTSTANDING work ethic and DEDICATION, makes him ideal for graduate-level research and development. He has my HIGHEST ENDORSEMENT."
          personName="Gregory Spriggs, PhD"
          personPosition="Nuclear Weapons Physicist, LLNL"
        />
      </div>
    </section>
  );
};

const TestimonialBlock = ({ colorClass, imageUrl, quote, personName, personPosition }) => (
  <motion.div
    className={`mx-auto relative ${colorClass} max-w-[400px] h-[400px] flex flex-col justify-end p-16 mt-48`}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.6 }}
    variants={{
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    }}
  >
    <div className="absolute top-[-75px] -ml-[80px] left-1/2 w-[150px] h-[150px] bg-no-repeat bg-center bg-cover" 
         style={{ backgroundImage: `url(${imageUrl})` }}>
    </div>
    <p className="font-playfair text-6xl">“</p>
    <p className="text-center text-xl">{quote}</p>
    <div className="text-center mt-4">
      <p className="font-semibold text-lg">{personName}</p>
      <p className="text-sm">{personPosition}</p>
    </div>
  </motion.div>
);

export default Testimonials;
