import React, { useState } from 'react';
import SectionHeading from './common/SectionHeading';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would typically handle form submission to a backend
    console.log(formData);
    alert('Thanks for your message! I\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Have a question or want to work together?"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 p-3 rounded-full bg-primary-500/10">
                  <Mail size={20} className="text-primary-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <a 
                    href="mailto:contact@example.com" 
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    tanujashree2004@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-3 rounded-full bg-primary-500/10">
                  <Phone size={20} className="text-primary-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Phone</h4>
                  <a 
                    href="tel:+11234567890" 
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    +91 7205055728
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-3 rounded-full bg-primary-500/10">
                  <MapPin size={20} className="text-primary-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Location</h4>
                  <p className="text-gray-300">Cuttack, Odisha, India</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 text-white">Connect With Me</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/Tanujashree27" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary-800 border border-gray-700 hover:border-primary-500 hover:bg-primary-500/10 transition-all"
                >
                  <Github size={20} className="text-white hover:text-primary-400" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/tanuja-shree-bb736b273/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary-800 border border-gray-700 hover:border-primary-500 hover:bg-primary-500/10 transition-all"
                >
                  <Linkedin size={20} className="text-white hover:text-primary-400" />
                </a>
                <a 
                  href="https://x.com/tanuja_shree_73" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary-800 border border-gray-700 hover:border-primary-500 hover:bg-primary-500/10 transition-all"
                >
                  <Twitter size={20} className="text-white hover:text-primary-400" />
                </a>
              </div>
            </div>
            {/* Coding Platforms */}
<div className="mt-8">
  <h3 className="text-2xl font-bold mb-6 text-white">Coding Platforms</h3>
  <div className="flex space-x-4">
    <a 
      href="https://leetcode.com/u/Tanujashree/" 
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full bg-secondary-800 border border-gray-700 hover:border-primary-500 hover:bg-primary-500/10 transition-all"
    >
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" 
        alt="LeetCode" 
        className="w-5 h-5"
      />
    </a>
    <a 
      href="https://www.hackerrank.com/tanujashree27" 
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full bg-secondary-800 border border-gray-700 hover:border-primary-500 hover:bg-primary-500/10 transition-all"
    >
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png" 
        alt="HackerRank" 
        className="w-5 h-5"
      />
    </a>
  </div>
</div>
{/* hihihihi */}
          </div>
          
          <div className="bg-secondary-800 rounded-lg p-8 border border-gray-700">
            <h3 className="text-2xl font-bold mb-6 text-white">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label 
                  htmlFor="name" 
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full p-3 bg-secondary-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className="w-full p-3 bg-secondary-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label 
                  htmlFor="subject" 
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full p-3 bg-secondary-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Your message"
                  className="w-full p-3 bg-secondary-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white resize-none"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 px-6 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md transition-colors flex items-center justify-center"
              >
                <Send size={16} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;