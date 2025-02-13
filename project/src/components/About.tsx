import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Book, Code, Coffee } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="glass-card"
      >
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg leading-relaxed mb-6">
              Hi! I'm Sayari, a Computer Science student passionate about AI and full-stack development. 
              I love solving complex problems and creating innovative solutions that make a difference.
            </p>
            <p className="text-lg leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, reading tech blogs, 
              or working on personal projects that challenge my skills and creativity.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass-morphism p-4 rounded-lg flex flex-col items-center text-center"
            >
              <Book className="w-8 h-8 mb-2" />
              <h3 className="font-semibold">Avid Reader</h3>
              <p className="text-sm">Always learning</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass-morphism p-4 rounded-lg flex flex-col items-center text-center"
            >
              <Code className="w-8 h-8 mb-2" />
              <h3 className="font-semibold">Problem Solver</h3>
              <p className="text-sm">Love challenges</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass-morphism p-4 rounded-lg flex flex-col items-center text-center col-span-2"
            >
              <Coffee className="w-8 h-8 mb-2" />
              <h3 className="font-semibold">Tech Enthusiast</h3>
              <p className="text-sm">Always exploring new technologies</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;