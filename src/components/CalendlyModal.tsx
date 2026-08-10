import React, { useState, useEffect } from 'react';

interface CalendlyModalProps {
  onClose: () => void;
}

export const CalendlyModal: React.FC<CalendlyModalProps> = ({ onClose }) => {
  const [selectedDate, setSelectedDate] = useState<string>('Tomorrow');
  const [selectedSlot, setSelectedSlot] = useState<string>('10:00 AM GMT');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [isBooked, setIsBooked] = useState(false);

  const dates = ['Tomorrow', 'Thursday', 'Friday', 'Next Monday'];
  const timeSlots = ['09:30 AM GMT', '11:00 AM GMT', '02:00 PM GMT', '04:00 PM GMT'];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setIsBooked(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white border border-slate-200 rounded-lg w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-blue-600 text-2xl">calendar_month</span>
            <div>
              <h2 className="font-headline text-base sm:text-lg font-bold text-slate-900">
                30-Minute Technical Discovery Call
              </h2>
              <p className="font-mono-code text-xs text-slate-500">Schedule direct technical call with Ellis Enobun (Lead Frontend Developer)</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-5 flex-grow">
          {!isBooked ? (
            <form onSubmit={handleBook} className="space-y-5">
              {/* Step 1: Select Date */}
              <div className="space-y-2">
                <label className="block font-mono-code text-xs text-blue-600 font-bold uppercase tracking-wider">
                  1. Select Meeting Date
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {dates.map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setSelectedDate(d)}
                      className={`p-2.5 rounded-lg font-mono-code text-xs text-center border transition-all ${
                        selectedDate === d
                          ? 'bg-blue-50 text-blue-600 border-blue-500 font-bold shadow-xs'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Select Time Slot */}
              <div className="space-y-2">
                <label className="block font-mono-code text-xs text-blue-600 font-bold uppercase tracking-wider">
                  2. Select Time Slot (UK GMT Time)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedSlot(slot)}
                      className={`p-2.5 rounded-lg font-mono-code text-xs text-center border transition-all ${
                        selectedSlot === slot
                          ? 'bg-blue-50 text-blue-600 border-blue-500 font-bold shadow-xs'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Attendee Information */}
              <div className="space-y-3 pt-2">
                <label className="block font-mono-code text-xs text-blue-600 font-bold uppercase tracking-wider">
                  3. Your Contact Details
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name *"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 font-sans text-xs focus:outline-none focus:border-blue-500 shadow-xs"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Your Email Address *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 font-sans text-xs focus:outline-none focus:border-blue-500 shadow-xs"
                  />
                </div>

                <textarea
                  rows={2}
                  placeholder="Project requirements, frontend goals, or inquiry details..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 font-sans text-xs focus:outline-none focus:border-blue-500 shadow-xs"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-blue-600 text-white font-mono-code text-xs font-bold uppercase tracking-wider hover:bg-blue-700 transition-all shadow-md active:scale-98"
              >
                CONFIRM & SCHEDULE TECHNICAL CALL
              </button>
            </form>
          ) : (
            <div className="text-center py-6 space-y-4 animate-in fade-in">
              <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                <span className="material-symbols-outlined text-3xl">task_alt</span>
              </div>

              <h3 className="font-headline text-2xl font-bold text-slate-900">Technical Call Scheduled!</h3>

              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 max-w-sm mx-auto text-left font-mono-code text-xs space-y-1.5 text-slate-700 shadow-xs">
                <div><span className="text-slate-500">Host:</span> Ellis Enobun</div>
                <div><span className="text-slate-500">Date:</span> {selectedDate}</div>
                <div><span className="text-slate-500">Time:</span> {selectedSlot}</div>
                <div><span className="text-slate-500">Attendee:</span> {name} ({email})</div>
                <div><span className="text-slate-500">Video Link:</span> <span className="text-blue-600 font-semibold">https://meet.google.com/ellis-enobun</span></div>
              </div>

              <p className="font-sans text-xs text-slate-600">
                A calendar invitation with the Google Meet link has been dispatched to {email}.
              </p>

              <button
                onClick={onClose}
                className="px-6 py-2 rounded-lg bg-blue-600 text-white font-mono-code text-xs font-bold transition-all shadow-xs"
              >
                DONE
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
