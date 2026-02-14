import React, { useState } from 'react';
import { FaHandHoldingHeart, FaLock, FaCreditCard, FaCalculator } from 'react-icons/fa';

const Donate = () => {
    const [amount, setAmount] = useState('');
    const [customAmount, setCustomAmount] = useState('');

    const handleAmountClick = (val) => {
        setAmount(val);
        setCustomAmount('');
    };

    const handleCustomChange = (e) => {
        setCustomAmount(e.target.value);
        setAmount('');
    };

    return (
        <div className="bg-accent min-h-screen pb-20">
            {/* Header */}
            <div className="bg-primary text-white py-16 text-center">
                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Support Your Masjid</h1>
                <p className="text-xl opacity-90 max-w-2xl mx-auto px-4">"The believer's shade on the Day of Resurrection will be their charity." - Prophet Muhammad (ﷺ)</p>
            </div>

            <div className="max-w-5xl mx-auto px-6 -mt-10">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                    <div className="p-8 md:p-12">
                        <h2 className="text-2xl font-bold text-primary mb-8 text-center">Choose Donation Amount</h2>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                            {[10, 20, 50, 100].map((val) => (
                                <button
                                    key={val}
                                    onClick={() => handleAmountClick(val)}
                                    className={`py-4 rounded-xl text-xl font-bold transition-all ${amount === val ? 'bg-primary text-white shadow-lg transform scale-105' : 'bg-gray-50 text-gray-700 hover:bg-gray-100'}`}
                                >
                                    £{val}
                                </button>
                            ))}
                        </div>

                        <div className="mb-10">
                            <label className="block text-sm font-bold text-gray-500 mb-2 uppercase tracking-wide">Or Enter Custom Amount</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-xl">£</span>
                                <input
                                    type="number"
                                    value={customAmount}
                                    onChange={handleCustomChange}
                                    className="w-full pl-10 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0 text-xl font-bold text-primary outline-none transition-colors"
                                    placeholder="0.00"
                                />
                            </div>
                        </div>

                        <button className="w-full bg-secondary text-white font-bold text-xl py-5 rounded-xl hover:opacity-90 transition-opacity shadow-lg flex items-center justify-center gap-3">
                            <FaLock size={18} /> Proceed to Secure Payment
                        </button>

                        <div className="mt-6 flex justify-center gap-6 text-gray-400 grayscale opacity-70">
                            <FaCreditCard size={32} />
                            {/* Add Visa/Mastercard icons here typically */}
                            <span className="font-bold text-lg">STRIPE / PAYPAL</span>
                        </div>
                    </div>
                </div>

                {/* Campaign Cards */}
                <div className="mt-16">
                    <h3 className="text-2xl font-serif font-bold text-primary mb-6">Active Campaigns</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Card 1 */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase mb-2 inline-block">Expansion</span>
                                    <h4 className="text-xl font-bold text-primary">New Prayer Hall Carpet</h4>
                                </div>
                                <div className="bg-accent p-3 rounded-full text-secondary">
                                    <FaHandHoldingHeart size={24} />
                                </div>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-3 mb-2">
                                <div className="bg-secondary h-3 rounded-full" style={{ width: '65%' }}></div>
                            </div>
                            <div className="flex justify-between text-sm text-gray-600 font-medium mb-6">
                                <span>£6,500 raised</span>
                                <span>Goal: £10,000</span>
                            </div>
                            <button className="w-full border-2 border-primary text-primary font-bold py-2 rounded-lg hover:bg-primary hover:text-white transition-colors">Donate to Campaign</button>
                        </div>

                        {/* Zakat Widget */}
                        <div className="bg-gradient-to-br from-primary to-green-800 text-white p-6 rounded-2xl shadow-lg relative overflow-hidden">
                            <div className="relative z-10">
                                <h4 className="text-xl font-bold mb-2 flex items-center gap-2"><FaCalculator /> Zakat Calculator</h4>
                                <p className="text-white/80 mb-6 text-sm">Not sure how much to give? Use our simple tool to calculate your obligation.</p>
                                <button className="bg-white text-primary font-bold py-3 px-6 rounded-lg hover:bg-secondary hover:text-white transition-colors w-full">
                                    Open Calculator
                                </button>
                            </div>
                            <FaCalculator className="absolute -bottom-4 -right-4 text-white/5" size={120} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donate;
