import React, { useState } from 'react';
import './Contact.scss';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import logo from '../../assets/logoicon.png';
import emailjs from '@emailjs/browser';
import { Snackbar, Alert } from '@mui/material';
import type { AlertColor } from '@mui/material';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID!;
const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID!;

emailjs.init(USER_ID);

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    subject: '',
    email: '',
    message: '',
  });
  const [sending, setSending] = useState(false);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] =
    useState<AlertColor>('success');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    const templateParams = {
      name: `${form.firstName} ${form.lastName}`,
      title: form.subject,
      email: form.email,
      phone: form.phone,
      message: form.message,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
      .then(
        () => {
          setSnackbarMsg('Thanks! Your message has been sent.');
          setSnackbarSeverity('success');
          setForm({
            firstName: '',
            lastName: '',
            phone: '',
            subject: '',
            email: '',
            message: '',
          });
        },
        (err) => {
          console.error('EmailJS error:', err);
          setSnackbarMsg('Oops! Something went wrong. Please try again later.');
          setSnackbarSeverity('error');
          setSnackbarOpen(true);
        }
      )
      .finally(() => {
        setSnackbarOpen(true);
        setSending(false);
      });
  };

  const handleCloseSnackbar = (
    _event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') return;
    setSnackbarOpen(false);
  };

  return (
    <section id="contact" className="contact">
      <div className="container contact__inner">
        <h2 className="contact__title">
          Contact <span className="contact__accent">Me</span>
        </h2>

        <div className="contact__grid">
          {/* Left: Info */}
          <div className="contact__info">
            <img src={logo} alt="Logo" className="contact__logo" />
            <p className="contact__text">
              I’m a Professional Frontend Developer with a solid background in
              the Information Technology and Services industry. I specialize in
              building interactive & user-friendly interfaces, with expertise in
              modern frameworks and a strong eye for design.
            </p>
            <ul className="contact__socials">
              <li className="contact__social">
                <a
                  href="https://linkedin.com/in/bidangshree-brahma"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              </li>

              <li className="contact__social">
                <a href="mailto:bardwi.brm@gmail.com" aria-label="Email">
                  <FaEnvelope />
                </a>
              </li>
              <li className="contact__social">
                <a
                  href="https://github.com/bardwi"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
              </li>
            </ul>
          </div>

          {/* Right: Form */}
          <div className="contact__form">
            <form onSubmit={handleSubmit}>
              <input
                className="contact__field"
                type="text"
                name="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange}
                required
              />
              <input
                className="contact__field"
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange}
                required
              />
              <input
                className="contact__field"
                type="tel"
                name="phone"
                placeholder="Phone"
                value={form.phone}
                onChange={handleChange}
              />
              <input
                className="contact__field"
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
              />
              <input
                className="contact__field"
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <textarea
                className="contact__field"
                name="message"
                placeholder="Message"
                value={form.message}
                onChange={handleChange}
                required
              />
              <button
                type="submit"
                className="contact__submit"
                disabled={sending}
              >
                {sending ? 'Sending…' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{ width: '100%' }}
        >
          {snackbarMsg}
        </Alert>
      </Snackbar>
    </section>
  );
};

export default Contact;
