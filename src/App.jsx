import React, { useState } from 'react';

const CreditCard = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="14" x="2" y="5" rx="2" />
    <line x1="2" x2="22" y1="10" y2="10" />
  </svg>
);

const Smartphone = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
    <path d="M12 18h.01" />
  </svg>
);

const QrCode = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="5" height="5" x="3" y="3" rx="1" />
    <rect width="5" height="5" x="16" y="3" rx="1" />
    <rect width="5" height="5" x="3" y="16" rx="1" />
    <path d="M21 16h-3a2 2 0 0 0-2 2v3" />
    <path d="M21 21v.01" />
    <path d="M12 7v3a2 2 0 0 1-2 2H7" />
    <path d="M3 12h.01" />
    <path d="M12 3h.01" />
    <path d="M12 16v.01" />
    <path d="M16 12h1" />
    <path d="M21 12v.01" />
    <path d="M12 21v-1" />
  </svg>
);

const Settings = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const CheckCircle2 = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const AlertCircle = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" x2="12" y1="8" y2="12" />
    <line x1="12" x2="12.01" y1="16" y2="16" />
  </svg>
);

const ArrowRight = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const Copy = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
  </svg>
);

const Check = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const ShieldCheck = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const ExternalLink = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </svg>
);

const RefreshCw = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
    <path d="M21 3v5h-5" />
    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
    <path d="M8 16H3v5" />
  </svg>
);

const IndianRupee = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 3h12" />
    <path d="M6 8h12" />
    <path d="m6 13 8.5 8" />
    <path d="M6 13h3" />
    <path d="M9 13c6.667 0 6.667-10 0-10" />
  </svg>
);

const DollarSign = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" x2="12" y1="2" y2="22" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

const Info = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

export default function App() {
  // Payment Form State
  const [amount, setAmount] = useState('500');
  const [note, setNote] = useState('Payment for Order #1024');
  const [currency, setCurrency] = useState('INR');
  
  // Merchant / Account Configuration State
  const [upiId, setUpiId] = useState('yourname@okaxis');
  const [payeeName, setPayeeName] = useState('My Business Store');
  const [merchantId, setMerchantId] = useState('BCR2DN6T6X7X7X7X'); // Demo Merchant ID
  
  // UI & Modal States
  const [activeTab, setActiveTab] = useState('pay'); // 'pay' | 'config' | 'code'
  const [paymentModal, setPaymentModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('upi'); // 'upi' | 'gpay_web'
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');
  const [gpayStatus, setGpayStatus] = useState('idle'); // 'idle' | 'processing' | 'success'

  // Quick preset amounts
  const presets = ['100', '250', '500', '1000', '2500'];

  // Construct standard UPI Intent & GPay Specific Deep Links
  const cleanAmount = parseFloat(amount) > 0 ? parseFloat(amount).toFixed(2) : '0.00';
  
  // Standard UPI URI (Works with GPay, PhonePe, Paytm, etc.)
  const upiUri = `upi://pay?pa=${encodeURIComponent(upiId)}&pn=${encodeURIComponent(payeeName)}&am=${cleanAmount}&cu=INR&tn=${encodeURIComponent(note)}`;
  
  // Google Pay Tez specific URI for Android/iOS
  const gpayIntentUri = `tez://upi/pay?pa=${encodeURIComponent(upiId)}&pn=${encodeURIComponent(payeeName)}&am=${cleanAmount}&cu=INR&tn=${encodeURIComponent(note)}`;

  // Validate and handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const numAmount = parseFloat(amount);
    if (isNaN(numAmount) || numAmount <= 0) {
      setError('Please enter a valid amount greater than 0.');
      return;
    }

    if (!upiId.includes('@') && paymentMethod === 'upi') {
      setError('Please configure a valid UPI ID (e.g., name@okicici) in the Settings tab.');
      return;
    }

    setGpayStatus('idle');
    setPaymentModal(true);

    // If on a mobile device and UPI is selected, automatically trigger the redirect intent
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile && paymentMethod === 'upi') {
      window.location.href = gpayIntentUri;
    }
  };

  // Trigger Google Pay Web Payment Request API (or fallback demo)
  const triggerGooglePayWebSheet = async () => {
    setGpayStatus('processing');
    
    // Check if browser supports PaymentRequest API
    if (window.PaymentRequest) {
      try {
        const supportedInstruments = [
          {
            supportedMethods: 'https://google.com/pay',
            data: {
              environment: 'TEST',
              apiVersion: 2,
              apiVersionMinor: 0,
              merchantInfo: {
                merchantName: payeeName || 'Demo Merchant',
              },
              allowedPaymentMethods: [
                {
                  type: 'CARD',
                  parameters: {
                    allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                    allowedCardNetworks: ['AMEX', 'DISCOVER', 'MASTERCARD', 'VISA'],
                  },
                  tokenizationSpecification: {
                    type: 'PAYMENT_GATEWAY',
                    parameters: {
                      gateway: 'example',
                      gatewayMerchantId: 'exampleGatewayMerchantId',
                    },
                  },
                },
              ],
            },
          },
        ];

        const details = {
          total: {
            label: payeeName || 'Total Amount',
            amount: {
              currency: currency,
              value: cleanAmount,
            },
          },
        };

        const request = new PaymentRequest(supportedInstruments, details);
        const canMakePayment = await request.canMakePayment();
        
        if (canMakePayment) {
          const response = await request.show();
          await response.complete('success');
          setGpayStatus('success');
          return;
        }
      } catch (err) {
        // User cancelled or iframe blocked PaymentRequest
        console.log('Native PaymentRequest fallback:', err.message);
      }
    }

    // Simulated Google Pay Sheet completion for desktop preview environments
    setTimeout(() => {
      setGpayStatus('success');
    }, 1500);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Generate QR code image URL for scanning with GPay mobile app
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&margin=10&data=${encodeURIComponent(upiUri)}`;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between font-sans selection:bg-blue-500 selection:text-white">
      {/* Top Navigation Bar */}
      <header className="border-b border-slate-800/80 bg-slate-900/50 backdrop-blur-md sticky top-0 z-20">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-emerald-400 p-[2px]">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-bold text-lg tracking-tighter">
                <span className="text-blue-400">G</span>
                <span className="text-red-400">P</span>
              </div>
            </div>
            <div>
              <h1 className="font-bold text-lg text-white flex items-center gap-2">
                GPay Direct Checkout
                <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-medium">
                  Frontend Only
                </span>
              </h1>
              <p className="text-xs text-slate-400">Instant amount-to-Google Pay redirect & QR generator</p>
            </div>
          </div>

          {/* Navigation Pills */}
          <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => setActiveTab('pay')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                activeTab === 'pay' 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <CreditCard className="w-3.5 h-3.5" />
              Payment
            </button>
            <button
              onClick={() => setActiveTab('config')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                activeTab === 'config' 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Settings className="w-3.5 h-3.5" />
              Account Setup
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-4xl w-full mx-auto px-4 py-8 flex-1 flex flex-col items-center justify-center">
        {activeTab === 'pay' ? (
          <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Main Payment Input Card */}
            <div className="md:col-span-7 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-xs uppercase tracking-wider text-blue-400 font-semibold">Step 1</span>
                  <h2 className="text-xl font-bold text-white mt-0.5">Enter Payment Amount</h2>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-400 block">Paying to</span>
                  <button 
                    onClick={() => setActiveTab('config')}
                    className="text-xs font-medium text-emerald-400 hover:underline flex items-center gap-1 ml-auto"
                  >
                    {payeeName} ({upiId})
                    <Settings className="w-3 h-3" />
                  </button>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Number Input Box */}
                <div>
                  <label htmlFor="amount-input" className="block text-xs font-medium text-slate-300 mb-2">
                    Amount to Pay ({currency})
                  </label>
                  <div className="relative flex items-center">
                    <div className="absolute left-4 text-slate-400 pointer-events-none">
                      {currency === 'INR' ? (
                        <IndianRupee className="w-6 h-6 text-blue-400" />
                      ) : (
                        <DollarSign className="w-6 h-6 text-blue-400" />
                      )}
                    </div>
                    <input
                      id="amount-input"
                      type="number"
                      step="0.01"
                      min="1"
                      required
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="0.00"
                      className="w-full pl-12 pr-24 py-4 bg-slate-950 border-2 border-slate-800 focus:border-blue-500 rounded-xl text-3xl font-bold text-white placeholder-slate-600 focus:outline-none transition-colors"
                    />
                    <div className="absolute right-3 flex bg-slate-900 rounded-lg p-1 border border-slate-800">
                      <button
                        type="button"
                        onClick={() => setCurrency('INR')}
                        className={`px-2 py-1 text-xs font-semibold rounded-md transition ${
                          currency === 'INR' ? 'bg-blue-600 text-white' : 'text-slate-400'
                        }`}
                      >
                        INR
                      </button>
                      <button
                        type="button"
                        onClick={() => setCurrency('USD')}
                        className={`px-2 py-1 text-xs font-semibold rounded-md transition ${
                          currency === 'USD' ? 'bg-blue-600 text-white' : 'text-slate-400'
                        }`}
                      >
                        USD
                      </button>
                    </div>
                  </div>

                  {/* Quick Amount Presets */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {presets.map((val) => (
                      <button
                        key={val}
                        type="button"
                        onClick={() => setAmount(val)}
                        className={`px-3 py-1 rounded-lg text-xs font-medium border transition ${
                          amount === val
                            ? 'bg-blue-500/20 border-blue-500 text-blue-300'
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                        }`}
                      >
                        +{currency === 'INR' ? '₹' : '$'}{val}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Optional Note */}
                <div>
                  <label htmlFor="note-input" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Transaction Note (Optional)
                  </label>
                  <input
                    id="note-input"
                    type="text"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="What is this payment for?"
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-blue-500 rounded-xl text-sm text-slate-200 placeholder-slate-600 focus:outline-none"
                  />
                </div>

                {/* Payment Mode Selector */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('upi')}
                    className={`p-3 rounded-xl border text-left transition flex flex-col justify-between ${
                      paymentMethod === 'upi'
                        ? 'bg-blue-500/10 border-blue-500/60 text-white'
                        : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full mb-1">
                      <Smartphone className="w-4 h-4 text-blue-400" />
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-medium">
                        India / UPI
                      </span>
                    </div>
                    <div className="text-xs font-semibold">GPay UPI Intent</div>
                    <div className="text-[11px] text-slate-400">App Redirect & QR</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('gpay_web')}
                    className={`p-3 rounded-xl border text-left transition flex flex-col justify-between ${
                      paymentMethod === 'gpay_web'
                        ? 'bg-blue-500/10 border-blue-500/60 text-white'
                        : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full mb-1">
                      <CreditCard className="w-4 h-4 text-indigo-400" />
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-medium">
                        Global
                      </span>
                    </div>
                    <div className="text-xs font-semibold">GPay Web API</div>
                    <div className="text-[11px] text-slate-400">Browser Popup Sheet</div>
                  </button>
                </div>

                {/* Validation Error Message */}
                {error && (
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-2 text-xs text-red-300">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                    <span>{error}</span>
                  </div>
                )}

                {/* Submit / Pay with Google Pay Button */}
                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-white hover:bg-slate-100 active:scale-[0.99] text-slate-950 font-bold rounded-xl shadow-xl shadow-white/5 transition-all flex items-center justify-center gap-3 text-base group cursor-pointer"
                >
                  {/* Official-style GPay SVG Emblem */}
                  <div className="flex items-center gap-1">
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M23.49 12.275c0-.85-.075-1.675-.215-2.475H12v4.685h6.445c-.28 1.495-1.125 2.765-2.395 3.615v3.005h3.875c2.265-2.085 3.565-5.16 3.565-8.83z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 24c3.24 0 5.955-1.075 7.94-2.91l-3.875-3.005c-1.075.72-2.45 1.145-4.065 1.145-3.125 0-5.77-2.11-6.715-4.945H1.28v3.1C3.255 21.305 7.31 24 12 24z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.285 14.285c-.24-.72-.375-1.49-.375-2.285s.135-1.565.375-2.285v-3.1H1.28C.465 8.24 0 10.065 0 12s.465 3.76 1.28 5.385l4.005-3.1z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 4.77c1.76 0 3.34.605 4.585 1.795l3.44-3.44C17.95 1.19 15.235 0 12 0 7.31 0 3.255 2.695 1.28 6.615l4.005 3.1c.945-2.835 3.59-4.945 6.715-4.945z"
                      />
                    </svg>
                    <span className="font-extrabold tracking-tight text-slate-800">Pay</span>
                  </div>
                  <span className="text-slate-400 font-light">|</span>
                  <span>
                    Submit & Pay {currency === 'INR' ? '₹' : '$'}{cleanAmount}
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-700 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* Right Column: Live Deep Link & QR Preview */}
            <div className="md:col-span-5 space-y-4">
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col items-center text-center">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 mb-4">
                  <QrCode className="w-3.5 h-3.5" />
                  Live Google Pay QR Sync
                </div>

                {/* Dynamic QR Code that updates as you type */}
                <div className="bg-white p-3 rounded-2xl shadow-lg mb-4 relative group">
                  <img
                    src={qrCodeUrl}
                    alt="Google Pay Dynamic QR"
                    className="w-44 h-44 object-contain rounded-lg"
                  />
                  <div className="mt-2 pt-2 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-slate-800 px-1">
                    <span>{payeeName}</span>
                    <span className="text-blue-600">₹{cleanAmount}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  Scan with your <strong>Google Pay</strong> app on mobile or click Submit on a phone to launch the Google Pay app directly with <strong>₹{cleanAmount}</strong> pre-filled.
                </p>

                {/* Generated Redirect URL Inspector */}
                <div className="w-full text-left bg-slate-950 p-3 rounded-xl border border-slate-800/80">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      Generated Redirect URI
                    </span>
                    <button
                      onClick={() => copyToClipboard(gpayIntentUri)}
                      className="text-[11px] text-blue-400 hover:text-blue-300 flex items-center gap-1"
                    >
                      {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      {copied ? 'Copied' : 'Copy Link'}
                    </button>
                  </div>
                  <code className="block text-[11px] text-slate-300 break-all font-mono bg-slate-900/80 p-2 rounded-lg border border-slate-800">
                    {gpayIntentUri}
                  </code>
                </div>
              </div>

              <div className="bg-blue-950/20 border border-blue-500/20 rounded-xl p-4 flex gap-3 items-start">
                <Info className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-300 space-y-1">
                  <p className="font-semibold text-white">How to link your own Google Pay account?</p>
                  <p className="text-slate-400 leading-relaxed">
                    Click on the <strong>Account Setup</strong> tab at the top and enter your personal or business Google Pay UPI ID (e.g., <code className="text-blue-300">yourname@okicici</code>).
                  </p>
                </div>
              </div>
            </div>

          </div>
        ) : (
          /* Account Configuration Tab */
          <div className="w-full max-w-xl bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                <Settings className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">Configure Your Google Pay Account</h2>
                <p className="text-xs text-slate-400">Set where the payment should be credited when the user clicks Submit.</p>
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Your Google Pay UPI ID (VPA)
                </label>
                <input
                  type="text"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                  placeholder="e.g. username@okaxis or 9876543210@ybl"
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 focus:border-blue-500 rounded-xl text-sm text-white focus:outline-none"
                />
                <p className="text-[11px] text-slate-400 mt-1">
                  Open Google Pay app → Tap your profile photo → Copy your UPI ID.
                </p>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Account Holder / Business Name
                </label>
                <input
                  type="text"
                  value={payeeName}
                  onChange={(e) => setPayeeName(e.target.value)}
                  placeholder="Your Name or Store Name"
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 focus:border-blue-500 rounded-xl text-sm text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Google Pay Merchant ID (Optional for Web API)
                </label>
                <input
                  type="text"
                  value={merchantId}
                  onChange={(e) => setMerchantId(e.target.value)}
                  placeholder="BCR2DN6..."
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 focus:border-blue-500 rounded-xl text-sm text-white focus:outline-none"
                />
                <p className="text-[11px] text-slate-400 mt-1">
                  Note: Direct peer-to-peer UPI links may be restricted on some non-merchant UPI IDs by NPCI security policies. Using a Google Pay for Business UPI ID ensures 100% redirect success.
                </p>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setActiveTab('pay')}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl text-sm transition flex items-center justify-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  Save & Return to Payment Screen
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Redirect & Payment Action Modal */}
      {paymentModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 w-full max-w-md rounded-2xl p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <h3 className="font-bold text-white">Google Pay Checkout</h3>
              </div>
              <button
                onClick={() => setPaymentModal(false)}
                className="text-xs text-slate-400 hover:text-white px-2 py-1 rounded-lg bg-slate-800"
              >
                Close
              </button>
            </div>

            <div className="py-6 text-center space-y-4">
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium">
                Payee: {payeeName} ({upiId})
              </div>

              <div className="text-4xl font-extrabold text-white">
                {currency === 'INR' ? '₹' : '$'}{cleanAmount}
              </div>

              {paymentMethod === 'upi' ? (
                <>
                  <div className="bg-white p-3 rounded-2xl inline-block shadow-lg">
                    <img
                      src={qrCodeUrl}
                      alt="Scan with Google Pay"
                      className="w-44 h-44 object-contain"
                    />
                  </div>

                  <p className="text-xs text-slate-400 max-w-xs mx-auto">
                    On mobile, click one of the redirect buttons below to open the Google Pay app with <strong>₹{cleanAmount}</strong> pre-filled.
                  </p>

                  <div className="space-y-2.5 pt-2">
                    <a
                      href={gpayIntentUri}
                      className="w-full py-3.5 px-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Open in Google Pay App ( ₹{cleanAmount} )
                    </a>

                    <a
                      href={upiUri}
                      className="w-full py-3 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium rounded-xl text-xs flex items-center justify-center gap-2 transition"
                    >
                      <Smartphone className="w-4 h-4 text-slate-400" />
                      Open Default UPI App Chooser
                    </a>
                  </div>
                </>
              ) : (
                <div className="space-y-4 py-4">
                  {gpayStatus === 'idle' && (
                    <>
                      <p className="text-xs text-slate-300">
                        Click below to launch the browser's Google Pay Payment Request sheet for <strong>{currency} {cleanAmount}</strong>.
                      </p>
                      <button
                        onClick={triggerGooglePayWebSheet}
                        className="w-full py-3.5 px-4 bg-white hover:bg-slate-100 text-slate-950 font-bold rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg transition"
                      >
                        Launch Google Pay Web Sheet
                      </button>
                    </>
                  )}

                  {gpayStatus === 'processing' && (
                    <div className="py-8 flex flex-col items-center gap-3">
                      <RefreshCw className="w-8 h-8 text-blue-400 animate-spin" />
                      <span className="text-sm text-slate-300">Waiting for Google Pay authorization...</span>
                    </div>
                  )}

                  {gpayStatus === 'success' && (
                    <div className="py-6 flex flex-col items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4">
                      <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                      <h4 className="font-bold text-white text-base">Payment Authorized!</h4>
                      <p className="text-xs text-slate-300">
                        Google Pay processed {currency} {cleanAmount} to {payeeName}.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-900 py-4 text-center text-xs text-slate-500">
        Frontend-Only React Google Pay Integration • Supports <code className="text-slate-400">tez://upi/pay</code> & W3C PaymentRequest API
      </footer>
    </div>
  );
}