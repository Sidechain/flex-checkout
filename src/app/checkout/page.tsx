'use client';
import Image from 'next/image';
import React, { useState } from 'react';

// Placeholder icons - replace with actual icons (e.g., from react-icons or SVGs)
const ChevronLeftIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>;
const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>;

const CheckoutPage: React.FC = () => {
  const [currentView, setCurrentView] = useState<'initialChoice' | 'flexOptions'>('initialChoice');
  const [simSelected, setSimSelected] = useState(false); // State for the SIM add-on

  return (
    <div className="bg-white min-h-screen p-12">
      {/* Header */}
      <header className="mx-auto p-4 flex justify-between items-center border-b">
        <button className="flex items-center text-neutral-900 hover:text-neutral-700 p-2"> 
          <ChevronLeftIcon />
          <span className="ml-2">Tillbaka</span>
        </button>
        <div>
          {/* Placeholder for Samsung Logo */}
          <span className="text-2xl font-bold text-neutral-900">SAMSUNG</span>
        </div>
        <div className="flex items-center text-neutral-900">
          <PhoneIcon />
          <span className="ml-2">0707-123 456</span> 
        </div>
      </header>

      {/* Samsung Flex Bar */}
      <div className="bg-black text-white text-left py-3 px-4 w-full my-4">
        <span className="font-semibold">Samsung Flex</span>
      </div>

      {/* Main Content */}
      <main className="mx-auto p-2 max-w-7xl w-full">
        <h1 className="text-3xl font-bold mb-8 text-center md:text-left text-neutral-900">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column: Shipping and Payment */}
        <div>
          {currentView === 'initialChoice' && (
            <div className="space-y-4">
              <div
                className="border border-neutral-300 rounded-lg p-6 cursor-pointer hover:bg-neutral-50 hover:border-neutral-500 transition-colors"
                onClick={() => setCurrentView('flexOptions')}
              >
                <h3 className="text-lg font-semibold text-neutral-900">Jag vill bli Flex-kund</h3>
              </div>
              <div
                className="border border-neutral-300 rounded-lg p-6 cursor-pointer hover:bg-neutral-50 hover:border-neutral-500 transition-colors"
                onClick={() => setCurrentView('flexOptions')}
              >
                <h3 className="text-lg font-semibold text-neutral-900">Jag har en Flex-prenumeration</h3>
              </div>
            </div>
          )}

          {currentView === 'flexOptions' && (
            <div className="space-y-6"> 
              <div className="space-y-4">
                <div
                  className="border border-neutral-300 rounded-lg p-6 cursor-pointer hover:bg-neutral-50 hover:border-neutral-500 transition-colors"
                  onClick={() => console.log('Selected: Full flexibilitet')} // Placeholder
                >
                  <h3 className="text-lg font-semibold text-neutral-900">Full flexibilitet</h3>
                </div>
                <div
                  className="border border-neutral-300 rounded-lg p-6 cursor-pointer hover:bg-neutral-50 hover:border-neutral-500 transition-colors"
                  onClick={() => console.log('Selected: Flex 24 månader')} // Placeholder
                >
                  <h3 className="text-lg font-semibold text-neutral-900">Flex 24 månader</h3>
                </div>
              </div>

              {/* SIM Add-on Button */}
              <button
                onClick={() => setSimSelected(!simSelected)}
                className={`w-full flex items-center justify-between p-4 rounded-lg border transition-colors ${
                  simSelected 
                    ? 'bg-green-100 border-green-500 text-green-700' 
                    : 'bg-neutral-50 border-neutral-300 hover:border-neutral-500 text-neutral-700'
                }`}
              >
                <span className="font-medium">Lägg till SIM-kort från Oister (30 SEK rabatt!)</span>
                {/* Basic checkbox-like indicator */}
                <div className={`w-5 h-5 border-2 rounded ${simSelected ? 'bg-green-500 border-green-600' : 'border-neutral-400'}`} />
              </button>
            </div>
          )}
        </div>

        {/* Right Column: Order Summary */}
        <div>
          <section>
            <div className="bg-neutral-100 p-6 rounded-lg text-neutral-900 space-y-4">
              {/* Section 1: Product */}
              <div>
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold">Galaxy S25 Edge</h3>
                  <span className="font-semibold">469 kr/mån</span>
                </div>
                <p className="text-sm text-neutral-700">med Flex 24 månader</p>
              </div>

              <hr className="border-neutral-300" />

              {/* Section 2: Din månadskostnad */}
              <div>
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold">Din månadskostnad</h3>
                  <span className="font-semibold">469 kr/mån</span>
                </div>
              </div>

              {/* Section 3: Oister SIM (Conditional) */}
              {simSelected && (
                <>
                  <hr className="border-neutral-300" />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Image src="/oister.jpg" alt="Oister logo" width={100} height={100} />
                      <span className="text-sm">SIM-kort från Oister</span>
                    </div>
                    <span className="text-sm text-green-700 font-semibold text-right">-30 kr (engångsrabatt)</span>
                  </div>
                </>
              )}


              <hr className="border-neutral-300" />

              {/* Section 4: Att betala idag */}
              <div> {/* This is "Att betala idag" */}
                <div className="flex justify-between items-center font-bold text-lg ">
                  <span>Att betala idag</span>
                  <span>
                    {/* Base price is 469, discount of 30 if simSelected is true */}
                    {simSelected ? 469 - 30 : 469} kr
                  </span>
                </div>
              </div>
              <hr className="border-neutral-300" />
              {/* Section 5: Continue Button */}
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-semibold transition-colors">
                Fortsätt
              </button>
            </div>
          </section>
        </div>
      </div>
      </main>
    </div>
  );
};

export default CheckoutPage;