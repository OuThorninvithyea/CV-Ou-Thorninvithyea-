import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, CheckCircle, Loader2 } from "lucide-react";
import { EMAILJS_CONFIG } from "../../config/emailjs";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const { publicKey, serviceID, templateID } = EMAILJS_CONFIG;
    emailjs.send(serviceID, templateID, { from_name: formData.name, from_email: formData.email, reply_to: formData.email, subject: formData.subject, message: formData.message, to_name: "Ou Thorninvithyea" }, publicKey)
      .then(() => { setSubmitted(true); setFormData({ name: "", email: "", subject: "", message: "" }); setTimeout(() => setSubmitted(false), 4000); },
        (error) => { alert(`Failed: ${error.text || "Unknown error"}`); })
      .finally(() => setIsSubmitting(false));
  };

  const contactInfo = [
    { icon: <Mail className="w-5 h-5" />, title: "Email", value: "Vithyeasa@gmail.com", link: "mailto:Vithyeasa@gmail.com" },
    { icon: <Phone className="w-5 h-5" />, title: "Phone", value: "+855 11 423 735", link: "tel:+85511423735" },
    { icon: <MapPin className="w-5 h-5" />, title: "Location", value: "Phnom Penh, Cambodia", link: "https://maps.google.com/?q=Phnom+Penh,+Cambodia" },
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, url: "https://github.com/OuThorninvithyea?tab=repositories", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, url: "#", label: "LinkedIn" },
    { icon: <Twitter className="w-5 h-5" />, url: "#", label: "Twitter" },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white/5 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-[128px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true, margin: "-100px" }} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-sm text-gray-300 mb-4">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Work <span className="text-gray-400">Together</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-bold text-white mb-6">Contact Info</h3>
            <div className="space-y-4 mb-10">
              {contactInfo.map((info, index) => (
                <motion.a key={index} href={info.link} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }} viewport={{ once: true }} whileHover={{ x: 6 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-300 group">
                  <div className="p-2.5 rounded-lg bg-white/10 text-gray-300 group-hover:bg-white/20 group-hover:text-white transition-all">{info.icon}</div>
                  <div><p className="text-xs text-gray-400 mb-0.5">{info.title}</p><p className="text-sm text-gray-200 group-hover:text-white transition-colors">{info.value}</p></div>
                </motion.a>
              ))}
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-300 mb-4">Follow Me</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a key={index} href={social.url} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: index * 0.08 }} viewport={{ once: true }} whileHover={{ scale: 1.1, y: -3 }}
                    className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all" aria-label={social.label}>{social.icon}</motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>
              <form ref={form} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5">Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 transition-all text-sm" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 transition-all text-sm" placeholder="john@example.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1.5">Subject</label>
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 transition-all text-sm" placeholder="What's this about?" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1.5">Message</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={4} className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 transition-all resize-none text-sm" placeholder="Tell me about your project..." />
                </div>
                <motion.button type="submit" disabled={isSubmitting || submitted} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all ${submitted ? "bg-white text-black" : "bg-white text-black hover:bg-gray-200"} disabled:opacity-70 disabled:cursor-not-allowed`}>
                  {isSubmitting ? <><Loader2 size={18} className="animate-spin" />Sending...</> : submitted ? <><CheckCircle size={18} />Sent Successfully!</> : <><Send size={18} />Send Message</>}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }} className="text-center mt-20 pt-8 border-t border-white/5">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Ou Thorninvithyea. Built with React & Tailwind CSS.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
