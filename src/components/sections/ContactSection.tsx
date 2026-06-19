import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Globe, Copy, Check } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Toast } from '../ui/Toast';
import { GlassmorphicCard } from '../ui/GlassmorphicCard';
import { useCardTilt } from '../../hooks/useCardTilt';
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from '../../animations/variants';
import { CONTACT_INFO } from '../../utils/constants';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ show: boolean; type: 'success' | 'error'; message: string }>({
    show: false,
    type: 'success',
    message: '',
  });
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setToast({ show: true, type: 'error', message: 'Please fill in all fields' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setToast({ show: true, type: 'error', message: 'Please enter a valid email' });
      return;
    }

    setLoading(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
          },
          publicKey
        );
      } else {
        const response = await fetch(
          `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_INFO.email)}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              _subject: `Portfolio Contact: ${formData.subject}`,
              message: formData.message,
              _template: 'table',
              _captcha: 'false',
            }),
          }
        );

        if (!response.ok) {
          throw new Error('Failed to send message');
        }
      }

      setToast({ show: true, type: 'success', message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email error:', error);
      setToast({ show: true, type: 'error', message: 'Failed to send message. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(CONTACT_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden">
      <div className="parallax-bg absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-black mb-4">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Ready to start your project? Let's discuss how I can help bring your ideas to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <ContactCard
                icon={Mail}
                title="Email"
                value={CONTACT_INFO.email}
                action="Copy"
                onAction={copyEmail}
                copied={copiedEmail}
              />
              
              <ContactCard
                icon={MessageCircle}
                title="WhatsApp"
                value="Direct Message"
                action="Open"
                href={CONTACT_INFO.whatsapp}
              />
              
              <ContactCard
                icon={Globe}
                title="Website"
                value="https://merncrest.lk"
                action="Visit"
                href={CONTACT_INFO.company}
              />
            </motion.div>

            <motion.div variants={fadeInRight}>
              <GlassmorphicCard className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors"
                      placeholder="Project inquiry"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                      placeholder="Tell me about your project..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary text-bg font-display font-bold py-3 rounded-lg hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-bg/30 border-t-bg rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <span>Send Message</span>
                    )}
                  </button>
                </form>
              </GlassmorphicCard>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ ...toast, show: false })}
        />
      )}
    </section>
  );
}

interface ContactCardProps {
  icon: any;
  title: string;
  value: string;
  action: string;
  href?: string;
  onAction?: () => void;
  copied?: boolean;
}

function ContactCard({ icon: Icon, title, value, action, href, onAction, copied }: ContactCardProps) {
  const { ref, onMouseMove, onMouseLeave } = useCardTilt(8);

  const handleClick = () => {
    if (onAction) {
      onAction();
    } else if (href) {
      window.open(href, '_blank');
    }
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="glass p-6 flex items-center justify-between tilt-card hover:border-primary/40 transition-colors"
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div>
          <p className="text-sm text-muted mb-1">{title}</p>
          <p className="font-medium">{value}</p>
        </div>
      </div>
      
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors font-medium text-sm flex items-center gap-2"
      >
        {copied ? (
          <>
            <Check className="w-4 h-4" />
            Copied
          </>
        ) : (
          <>
            {onAction && <Copy className="w-4 h-4" />}
            {action}
          </>
        )}
      </button>
    </div>
  );
}
