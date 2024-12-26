import React from 'react';

const AuthLayout = ({ children }) => {
  return (
    <div id='boxx' className="min-h-screen bg-[#fafafa] flex">
      <img
        className="absolute bottom-[-7.6vh] left-[-3vw] w-1/4 h-auto object-contain opacity-[30%]"
        src="/CodeAntImage.png"
        alt="Image"
      />
      <div className="hidden sm:flex w-[50%] bg-white flex-col items-center justify-center p-6 space-y-6">
        <div className="bg-white shadow-lg drop-shadow-2xl rounded-2xl p-6 w-3/4">
          <div className='flex items-center'>
            <img
              src="/CodeAntImage.png"
              alt="Logo"
              className="w-12 h-auto rounded-full relative bottom-2"
            />
            <h3 className="text-lg font-bold text-[#162441] mb-4">AI to Detect & Autofix Bad Code</h3>
          </div>
          <hr />
          <div className="grid grid-cols-3 relative top-2 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold">30+</p>
              <p className="text-gray-500 text-sm">Language Support</p>
            </div>
            <div>
              <p className="text-2xl font-bold">10K+</p>
              <p className="text-gray-500 text-sm">Developers</p>
            </div>
            <div>
              <p className="text-2xl font-bold">100K+</p>
              <p className="text-gray-500 text-sm">Hours Saved</p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-2xl drop-shadow-2xl rounded-xl p-6 w-[40%] relative left-32 -top-8 z-10 border border-gray-200 transform scale-105">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-[#e6e3fe] rounded-full flex items-center justify-center">
                <img src="/pie-chart.png" alt="" />
              </div>
              <div className="flex ml-36 font-semibold text-[#0d53c9] text-sm">
                <img
                  className='w-4 object-contain mr-1'
                  src="up-arrow.png" alt="" />
                <span>14%</span>
                <span className='text-black absolute top-14 right-4 text-sm'>This Weak</span>
              </div>
            </div>
          </div>
          <p className="text-gray-500 text-sm">Issues Fixed</p>
          <p className="text-4xl font-bold">500K+</p>
        </div>
      </div>

      <div className="min-h-screen sm:w-[50%] flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-6 space-y-6">
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center gap-2">
              <img
                src="/Codeant.avif"
                alt="Logo"
                className="w-52 h-auto rounded-full invert"
              />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold">Welcome to CodeAnt AI</h1>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;