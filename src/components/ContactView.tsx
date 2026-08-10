import React, { useState, useMemo } from 'react';
import { LocationWidget } from './LocationWidget';

interface ContactViewProps {
  onOpenCalendly: () => void;
}

interface FormFields {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormTouched {
  name?: boolean;
  email?: boolean;
  phone?: boolean;
  subject?: boolean;
  message?: boolean;
}

export const ContactView: React.FC<ContactViewProps> = ({ onOpenCalendly }) => {
  const [formData, setFormData] = useState<FormFields>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [touched, setTouched] = useState<FormTouched>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Real-time Field Validation Rules
  const errors = useMemo(() => {
    const errs: Record<string, string> = {};

    if (!formData.name.trim()) {
      errs.name = 'Full name is required.';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address (e.g. name@domain.com).';
    }

    if (formData.phone.trim() && !/^[0-9+\s()-]{7,20}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid phone number or leave blank.';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Subject is required.';
    } else if (formData.subject.trim().length < 3) {
      errs.subject = 'Subject must be at least 3 characters.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Message content is required.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    } else if (formData.message.length > 500) {
      errs.message = 'Message cannot exceed 500 characters.';
    }

    return errs;
  }, [formData]);

  const isFormValid = Object.keys(errors).length === 0;

  const handleBlur = (field: keyof FormFields) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleChange = (field: keyof FormFields, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mark all as touched
    setTouched({ name: true, email: true, phone: true, subject: true, message: true });

    if (!isFormValid) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('elnobun@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section className="py-12 px-6 max-w-[1200px] mx-auto w-full space-y-12" id="contact">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 font-mono-code text-xs font-semibold border border-blue-200/90 leading-none">
          <span className="material-symbols-outlined text-sm leading-none">mail</span>
          <span>Get In Touch</span>
        </div>
        <h1 className="font-headline text-3xl sm:text-5xl font-extrabold text-slate-900">
          Let's Build Something Together
        </h1>
        <p className="font-sans text-base text-slate-600 leading-relaxed">
          Lead Frontend Developer available for web application projects, accessibility audits, and team technical leadership. Response guaranteed within 24 hours.
        </p>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-start">
        {/* Contact Form Area (7 Cols) */}
        <div className="lg:col-span-7 bg-white rounded-lg border border-slate-200 p-6 sm:p-8 relative overflow-hidden transition-all duration-300 shadow-xs space-y-6">
          <div className="flex items-center justify-between pb-1">
            <h2 className="font-headline text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="material-symbols-outlined text-blue-600">send</span>
              Real-Time Validated Contact Form
            </h2>
            <span className="inline-flex items-center justify-center font-mono-code text-[11px] px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200/90 font-semibold leading-none">
              WCAG 2.1 AA Accessible
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 relative z-10" noValidate>
            {/* Name & Email Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name Field */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label htmlFor="name" className="font-mono-code text-xs text-slate-700 font-semibold">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  {touched.name && (
                    <span className="text-[11px] font-mono-code font-bold flex items-center gap-1">
                      {errors.name ? (
                        <span className="text-rose-600 flex items-center gap-0.5">
                          <span className="material-symbols-outlined text-xs">error</span> Invalid
                        </span>
                      ) : (
                        <span className="text-emerald-600 flex items-center gap-0.5">
                          <span className="material-symbols-outlined text-xs">check_circle</span> Valid
                        </span>
                      )}
                    </span>
                  )}
                </div>
                <div className="relative">
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    onBlur={() => handleBlur('name')}
                    placeholder="Ellis Enobun"
                    aria-invalid={touched.name && !!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={`w-full rounded-lg bg-white border px-4 py-2.5 font-sans text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-colors shadow-xs ${
                      touched.name
                        ? errors.name
                          ? 'border-rose-400 focus:border-rose-500 bg-rose-50/20'
                          : 'border-emerald-400 focus:border-emerald-500'
                        : 'border-slate-200 focus:border-blue-500'
                    }`}
                  />
                </div>
                {touched.name && errors.name && (
                  <p id="name-error" role="alert" className="text-xs text-rose-600 font-sans mt-1 flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">warning</span>
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label htmlFor="email" className="font-mono-code text-xs text-slate-700 font-semibold">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  {touched.email && (
                    <span className="text-[11px] font-mono-code font-bold flex items-center gap-1">
                      {errors.email ? (
                        <span className="text-rose-600 flex items-center gap-0.5">
                          <span className="material-symbols-outlined text-xs">error</span> Invalid
                        </span>
                      ) : (
                        <span className="text-emerald-600 flex items-center gap-0.5">
                          <span className="material-symbols-outlined text-xs">check_circle</span> Valid
                        </span>
                      )}
                    </span>
                  )}
                </div>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  onBlur={() => handleBlur('email')}
                  placeholder="elnobun@gmail.com"
                  aria-invalid={touched.email && !!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className={`w-full rounded-lg bg-white border px-4 py-2.5 font-sans text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-colors shadow-xs ${
                    touched.email
                      ? errors.email
                        ? 'border-rose-400 focus:border-rose-500 bg-rose-50/20'
                        : 'border-emerald-400 focus:border-emerald-500'
                      : 'border-slate-200 focus:border-blue-500'
                  }`}
                />
                {touched.email && errors.email && (
                  <p id="email-error" role="alert" className="text-xs text-rose-600 font-sans mt-1 flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">warning</span>
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Phone & Subject Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone Field */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label htmlFor="phone" className="font-mono-code text-xs text-slate-700 font-semibold">
                    Phone Number (Optional)
                  </label>
                </div>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  onBlur={() => handleBlur('phone')}
                  placeholder="Phone number"
                  className={`w-full rounded-lg bg-white border px-4 py-2.5 font-sans text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-colors shadow-xs ${
                    touched.phone && errors.phone ? 'border-rose-400' : 'border-slate-200 focus:border-blue-500'
                  }`}
                />
                {touched.phone && errors.phone && (
                  <p className="text-xs text-rose-600 font-sans mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Subject Field */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label htmlFor="subject" className="font-mono-code text-xs text-slate-700 font-semibold">
                    Subject <span className="text-rose-500">*</span>
                  </label>
                </div>
                <input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => handleChange('subject', e.target.value)}
                  onBlur={() => handleBlur('subject')}
                  placeholder="Project Inquiry / Frontend Architecture"
                  className={`w-full rounded-lg bg-white border px-4 py-2.5 font-sans text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-colors shadow-xs ${
                    touched.subject
                      ? errors.subject
                        ? 'border-rose-400 focus:border-rose-500'
                        : 'border-emerald-400 focus:border-emerald-500'
                      : 'border-slate-200 focus:border-blue-500'
                  }`}
                />
                {touched.subject && errors.subject && (
                  <p className="text-xs text-rose-600 font-sans mt-1">{errors.subject}</p>
                )}
              </div>
            </div>

            {/* Message Field with Live Counter */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label htmlFor="message" className="font-mono-code text-xs text-slate-700 font-semibold">
                  Project Brief or Enquiry <span className="text-rose-500">*</span>
                </label>
                <span className={`font-mono-code text-[11px] ${
                  formData.message.length > 500 ? 'text-rose-600 font-bold' : 'text-slate-400'
                }`}>
                  {formData.message.length} / 500
                </span>
              </div>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
                onBlur={() => handleBlur('message')}
                placeholder="Share your technical requirements, goals, or timelines..."
                className={`w-full rounded-lg bg-white border px-4 py-2.5 font-sans text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-colors shadow-xs resize-y ${
                  touched.message
                    ? errors.message
                      ? 'border-rose-400 focus:border-rose-500 bg-rose-50/20'
                      : 'border-emerald-400 focus:border-emerald-500'
                    : 'border-slate-200 focus:border-blue-500'
                }`}
              />
              {touched.message && errors.message && (
                <p className="text-xs text-rose-600 font-sans mt-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">warning</span>
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-mono-code text-xs font-bold uppercase tracking-wider py-3.5 rounded-lg transition-all shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 active:scale-98 disabled:opacity-50 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <span className="material-symbols-outlined animate-spin text-lg">sync</span>
                  <span>VALIDATING & SENDING...</span>
                </>
              ) : (
                <>
                  <span>SEND ENQUIRY</span>
                  <span className="material-symbols-outlined text-sm">send</span>
                </>
              )}
            </button>
          </form>

          {/* Success Overlay */}
          {isSubmitted && (
            <div className="absolute inset-0 bg-white/98 backdrop-blur-md z-20 flex flex-col items-center justify-center p-8 text-center rounded-lg border border-emerald-500/40 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4 text-emerald-600">
                <span className="material-symbols-outlined text-4xl">check_circle</span>
              </div>
              <h3 className="font-headline text-2xl font-bold text-slate-900 mb-2">Message Received!</h3>
              <p className="font-sans text-sm text-slate-600 max-w-xs mb-6">
                Thank you for reaching out, Ellis will review your enquiry and get back to you shortly.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
                  setTouched({});
                }}
                className="border border-slate-200 text-slate-800 hover:bg-slate-50 px-6 py-2 rounded-lg font-mono-code text-xs font-semibold transition-all shadow-xs"
              >
                SEND ANOTHER MESSAGE
              </button>
            </div>
          )}
        </div>

        {/* Right Info Column (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Direct Contact Card */}
          <div className="bg-white rounded-lg border border-slate-200 p-6 space-y-4 shadow-xs">
            <h3 className="font-mono-code text-xs text-slate-500 font-bold tracking-widest uppercase">
              DIRECT CONTACT DETAILS
            </h3>

            <div className="space-y-3">
              {/* Email Row */}
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center border border-blue-200 text-blue-600">
                    <span className="material-symbols-outlined text-lg">alternate_email</span>
                  </div>
                  <div>
                    <p className="font-sans text-sm font-semibold text-slate-900">elnobun@gmail.com</p>
                    <p className="font-mono-code text-[11px] text-slate-500">Primary Email</p>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 rounded-lg bg-white hover:bg-slate-100 text-blue-600 border border-slate-200 font-mono-code text-xs transition-colors flex items-center gap-1 shadow-xs"
                >
                  <span className="material-symbols-outlined text-xs">
                    {copiedEmail ? 'check' : 'content_copy'}
                  </span>
                  {copiedEmail ? 'Copied' : 'Copy'}
                </button>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between font-mono-code text-xs text-slate-500">
              <span>Location: Harlow, Essex, UK</span>
              <span className="text-emerald-600 font-semibold">Available for Hire</span>
            </div>
          </div>

          {/* Location Map Widget */}
          <LocationWidget />

          {/* Schedule Call Card */}
          <div className="bg-white rounded-lg border border-slate-200 p-6 text-center space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-xl">calendar_month</span>
            </div>

            <div>
              <h3 className="font-headline text-base font-bold text-slate-900">Schedule Technical Call</h3>
              <p className="font-sans text-xs text-slate-600 mt-0.5 leading-relaxed">
                Book a 30-minute discovery session directly on my calendar.
              </p>
            </div>

            <button
              onClick={onOpenCalendly}
              className="inline-flex items-center gap-1.5 font-mono-code text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-lg hover:bg-emerald-100 transition-all"
            >
              SCHEDULE TECHNICAL CALL
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
