import React, { useState, useRef } from 'react';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaUser,
  FaCommentDots,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaCheckCircle,
  FaExclamationCircle,
} from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import SectionTitle from './SectionTitle';
import swal from 'sweetalert';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'forhadmia416@gmail.com',
      link: 'mailto:forhadmia416@gmail.com',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+880 1717808752',
      link: 'tel:+8801717808752',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Rangpur, Bangladesh',
      link: '#',
      color: 'from-blue-500 to-cyan-500',
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      link: 'https://github.com/forhadmia1',
      label: 'GitHub',
    },
    {
      icon: <FaLinkedin />,
      link: 'https://linkedin.com/in/forhadmia',
      label: 'LinkedIn',
    },
    {
      icon: <FaTwitter />,
      link: 'https://twitter.com/forhadmia',
      label: 'Twitter',
    },
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.user_name.trim()) {
      newErrors.user_name = 'Name is required';
    } else if (formData.user_name.length < 2) {
      newErrors.user_name = 'Name must be at least 2 characters';
    }

    if (!formData.user_email.trim()) {
      newErrors.user_email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.user_email)) {
      newErrors.user_email = 'Please enter a valid email';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      swal(
        'Validation Error',
        'Please fill in all required fields correctly',
        'error',
        {
          buttons: false,
          timer: 2000,
        },
      );
      return;
    }

    setIsSubmitting(true);

    emailjs
      .sendForm(
        'service_s57s2uw',
        'template_qmx47hk',
        form.current,
        'NoDhDZ5D8YebXhkbu',
      )
      .then(
        (result) => {
          setIsSubmitting(false);
          swal(
            'Success!',
            'Your message has been sent successfully!',
            'success',
            {
              buttons: false,
              timer: 2000,
            },
          );
          setFormData({
            user_name: '',
            user_email: '',
            subject: '',
            message: '',
          });
          form.current.reset();
        },
        (error) => {
          setIsSubmitting(false);
          swal('Error!', 'Something went wrong. Please try again.', 'error', {
            buttons: false,
            timer: 2000,
          });
        },
      );
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-gradient-to-b from-base-100 to-base-200 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <SectionTitle width={200}>CONTACT ME</SectionTitle>

        {/* Section Description */}
        <div className="text-center max-w-2xl mx-auto my-16">
          <p className="text-neutral/70 text-lg leading-relaxed">
            Have a project in mind or want to collaborate? Feel free to reach
            out. I'm always open to discussing new opportunities and bringing
            your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info Side */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="group flex items-center gap-4 p-5 bg-base-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-base-200 hover:border-primary/30"
                >
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center text-white text-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                  >
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm text-neutral/60 mb-1">
                      {info.title}
                    </h4>
                    <p className="text-neutral font-semibold group-hover:text-primary transition-colors">
                      {info.value}
                    </p>
                  </div>
                  <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity text-2xl">
                    →
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-base-100 rounded-2xl p-6 shadow-lg border border-base-200">
              <h4 className="text-lg font-bold text-neutral mb-4 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-primary rounded-full"></span>
                Connect With Me
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-base-200 flex items-center justify-center text-neutral hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white transition-all duration-300 hover:scale-110 group shadow-md hover:shadow-lg"
                    title={social.label}
                  >
                    <span className="text-xl group-hover:scale-110 transition-transform">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-6 border border-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                  <FaCommentDots className="text-white text-lg" />
                </div>
                <h4 className="text-lg font-bold text-neutral">Let's Talk</h4>
              </div>
              <p className="text-neutral/70 text-sm leading-relaxed">
                I'm currently available for freelance work and full-time
                positions. If you have a project that needs coding or a position
                that needs filling, feel free to contact me.
              </p>
            </div>
          </div>

          {/* Contact Form Side */}
          <div className="bg-base-100 rounded-2xl p-6 md:p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                <FaPaperPlane className="text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-neutral">Send a Message</h3>
            </div>

            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              {/* Name Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral flex items-center gap-2">
                  <FaUser className="text-primary" />
                  Your Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="John Doe"
                    className={`w-full px-4 py-3 rounded-xl bg-base-200 border-2 transition-all duration-300 outline-none ${
                      errors.user_name
                        ? 'border-red-500 focus:border-red-500'
                        : focusedField === 'name'
                          ? 'border-primary bg-base-100'
                          : 'border-transparent hover:border-primary/30'
                    }`}
                  />
                  {formData.user_name && !errors.user_name && (
                    <FaCheckCircle className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500" />
                  )}
                </div>
                {errors.user_name && (
                  <p className="text-red-500 text-xs flex items-center gap-1">
                    <FaExclamationCircle />
                    {errors.user_name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral flex items-center gap-2">
                  <FaEnvelope className="text-primary" />
                  Your Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="john@example.com"
                    className={`w-full px-4 py-3 rounded-xl bg-base-200 border-2 transition-all duration-300 outline-none ${
                      errors.user_email
                        ? 'border-red-500 focus:border-red-500'
                        : focusedField === 'email'
                          ? 'border-primary bg-base-100'
                          : 'border-transparent hover:border-primary/30'
                    }`}
                  />
                  {formData.user_email &&
                    !errors.user_email &&
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.user_email) && (
                      <FaCheckCircle className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500" />
                    )}
                </div>
                {errors.user_email && (
                  <p className="text-red-500 text-xs flex items-center gap-1">
                    <FaExclamationCircle />
                    {errors.user_email}
                  </p>
                )}
              </div>

              {/* Subject Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral flex items-center gap-2">
                  <FaCommentDots className="text-primary" />
                  Subject
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Project Inquiry"
                    className={`w-full px-4 py-3 rounded-xl bg-base-200 border-2 transition-all duration-300 outline-none ${
                      errors.subject
                        ? 'border-red-500 focus:border-red-500'
                        : focusedField === 'subject'
                          ? 'border-primary bg-base-100'
                          : 'border-transparent hover:border-primary/30'
                    }`}
                  />
                  {formData.subject && !errors.subject && (
                    <FaCheckCircle className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500" />
                  )}
                </div>
                {errors.subject && (
                  <p className="text-red-500 text-xs flex items-center gap-1">
                    <FaExclamationCircle />
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral flex items-center gap-2">
                  <FaCommentDots className="text-primary" />
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className={`w-full px-4 py-3 rounded-xl bg-base-200 border-2 transition-all duration-300 outline-none resize-none ${
                    errors.message
                      ? 'border-red-500 focus:border-red-500'
                      : focusedField === 'message'
                        ? 'border-primary bg-base-100'
                        : 'border-transparent hover:border-primary/30'
                  }`}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs flex items-center gap-1">
                    <FaExclamationCircle />
                    {errors.message}
                  </p>
                )}
                <p className="text-xs text-neutral/50">
                  {formData.message.length}/500 characters
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-3 ${
                  isSubmitting
                    ? 'bg-primary/50 cursor-not-allowed'
                    : 'bg-primary hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5'
                } text-secondary`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-secondary border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
