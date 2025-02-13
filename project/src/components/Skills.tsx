import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = {
  'Programming Languages': ['Python', 'JavaScript', 'TypeScript', 'Java'],
  'Web Technologies': ['React', 'Node.js', 'HTML5', 'CSS3', 'TailwindCSS'],
  'AI & ML': ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Computer Vision'],
  'Tools & Others': ['Git', 'Docker', 'AWS', 'MongoDB', 'PostgreSQL'],
};

const Skills = () => {
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
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-morphism p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1 rounded-full glass-morphism text-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;