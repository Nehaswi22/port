import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, Download, Github, Linkedin } from 'lucide-react';

const Contact = () => {
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
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <motion.a
              href="mailto:contact@example.com"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 glass-morphism p-4 rounded-lg"
            >
              <Mail className="w-6 h-6" />
              <span>contact@example.com</span>
            </motion.a>
            
            <motion.a
              href="tel:+1234567890"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 glass-morphism p-4 rounded-lg"
            >
              <Phone className="w-6 h-6" />
              <span>+1 (234) 567-890</span>
            </motion.a>
            
            <motion.div className="flex gap-4">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="glass-morphism p-3 rounded-full"
              >
                <Github className="w-6 h-6" />
              </motion.a>
              
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="glass-morphism p-3 rounded-full"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </div>
          
          <div className="flex flex-col items-center justify-center">
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              className="glass-morphism px-6 py-3 rounded-lg flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;