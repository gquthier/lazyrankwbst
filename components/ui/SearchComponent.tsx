"use client"
import React, { useState } from "react"

const APP_URL = 'https://app.lazyrank.io';

const SearchComponent = () => {
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = async () => {
    if (!websiteUrl.trim()) {
      return;
    }

    // Clean the URL (add https:// if missing)
    let cleanUrl = websiteUrl.trim();

    if (!cleanUrl.startsWith('http://') && !cleanUrl.startsWith('https://')) {
      cleanUrl = 'https://' + cleanUrl;
    }

    setIsAnalyzing(true);

    // Redirect to the app with the URL
    setTimeout(() => {
      window.location.href = `${APP_URL}/analyzing?url=${encodeURIComponent(cleanUrl)}`;
    }, 300);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAnalyze();
    }
  };

  return (
    <div className="relative flex w-full items-center justify-center px-4 sm:px-0">
      <div className="h-min-screen absolute z-[-1] w-full"></div>
      <div
        id="poda"
        className="group relative flex w-full items-center justify-center"
      >
        <div className="absolute z-[-1] h-full max-h-[70px] w-full sm:max-w-[408px] overflow-hidden rounded-xl blur-[3px] before:absolute before:top-1/2 before:left-1/2 before:z-[-2] before:h-[999px] before:w-[999px] before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-60 before:bg-[conic-gradient(rgba(255,255,255,0),#fde7d7_8%,rgba(255,255,255,0)_38%,rgba(255,255,255,0)_50%,#ffd6b0_60%,rgba(255,255,255,0)_87%)] before:bg-no-repeat before:transition-all before:duration-2000 before:content-[''] group-focus-within:before:rotate-[420deg] group-focus-within:before:duration-[4000ms] group-hover:before:rotate-[-120deg]"></div>
        <div className="absolute z-[-1] h-full max-h-[65px] w-full sm:max-w-[406px] overflow-hidden rounded-xl blur-[3px] before:absolute before:top-1/2 before:left-1/2 before:z-[-2] before:h-[600px] before:w-[600px] before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-[82deg] before:bg-[conic-gradient(rgba(255,255,255,0),#fde1c6,rgba(255,255,255,0)_12%,rgba(255,255,255,0)_50%,#ffcaa0,rgba(255,255,255,0)_62%)] before:bg-no-repeat before:transition-all before:duration-2000 before:content-[''] group-focus-within:before:rotate-[442deg] group-focus-within:before:duration-[4000ms] group-hover:before:rotate-[-98deg]"></div>
        <div className="absolute z-[-1] h-full max-h-[65px] w-full sm:max-w-[406px] overflow-hidden rounded-xl blur-[3px] before:absolute before:top-1/2 before:left-1/2 before:z-[-2] before:h-[600px] before:w-[600px] before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-[82deg] before:bg-[conic-gradient(rgba(255,255,255,0),#fde1c6,rgba(255,255,255,0)_12%,rgba(255,255,255,0)_50%,#ffcaa0,rgba(255,255,255,0)_62%)] before:bg-no-repeat before:transition-all before:duration-2000 before:content-[''] group-focus-within:before:rotate-[442deg] group-focus-within:before:duration-[4000ms] group-hover:before:rotate-[-98deg]"></div>
        <div className="absolute z-[-1] h-full max-h-[65px] w-full sm:max-w-[406px] overflow-hidden rounded-xl blur-[3px] before:absolute before:top-1/2 before:left-1/2 before:z-[-2] before:h-[600px] before:w-[600px] before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-[82deg] before:bg-[conic-gradient(rgba(255,255,255,0),#fde1c6,rgba(255,255,255,0)_12%,rgba(255,255,255,0)_50%,#ffcaa0,rgba(255,255,255,0)_62%)] before:bg-no-repeat before:transition-all before:duration-2000 before:content-[''] group-focus-within:before:rotate-[442deg] group-focus-within:before:duration-[4000ms] group-hover:before:rotate-[-98deg]"></div>

        <div className="absolute z-[-1] h-full max-h-[63px] w-full sm:max-w-[400px] overflow-hidden rounded-lg blur-[2px] before:absolute before:top-1/2 before:left-1/2 before:z-[-2] before:h-[600px] before:w-[600px] before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-[83deg] before:bg-[conic-gradient(rgba(255,255,255,0)_0%,#ffe1c7,rgba(255,255,255,0)_10%,rgba(255,255,255,0)_50%,#ffd2ad,rgba(255,255,255,0)_60%)] before:bg-no-repeat before:brightness-110 before:transition-all before:duration-2000 before:content-[''] group-focus-within:before:rotate-[443deg] group-focus-within:before:duration-[4000ms] group-hover:before:rotate-[-97deg]"></div>

        <div className="absolute z-[-1] h-full max-h-[59px] w-full sm:max-w-[394px] overflow-hidden rounded-xl blur-[0.5px] before:absolute before:top-1/2 before:left-1/2 before:z-[-2] before:h-[600px] before:w-[600px] before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-70 before:bg-[conic-gradient(#ffffff,#ffe1c7_8%,#ffffff_20%,#ffffff_50%,#ffd2ad_65%,#ffffff_75%)] before:bg-no-repeat before:brightness-105 before:transition-all before:duration-2000 before:content-[''] group-focus-within:before:rotate-[430deg] group-focus-within:before:duration-[4000ms] group-hover:before:rotate-[-110deg]"></div>

        <div id="main" className="group relative w-full">
          <input
            placeholder="https://votre-site.com"
            type="text"
            name="text"
            value={websiteUrl}
            onChange={(e) => setWebsiteUrl(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isAnalyzing}
            className="h-[52px] sm:h-[56px] w-full sm:max-w-[392px] rounded-lg border border-gray-200/80 bg-white px-[59px] text-base sm:text-lg text-gray-600 placeholder-gray-400 shadow-sm focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <div className="before:animate-spin-slow absolute top-[7px] right-[7px] h-[42px] w-[40px] overflow-hidden rounded-lg before:absolute before:top-1/2 before:left-1/2 before:h-[600px] before:w-[600px] before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-90 before:bg-[conic-gradient(rgba(0,0,0,0),#d8d7e8,rgba(0,0,0,0)_50%,rgba(0,0,0,0)_50%,#d8d7e8,rgba(0,0,0,0)_100%)] before:bg-no-repeat before:brightness-105 before:content-['']"></div>
          <button
            type="button"
            id="filter-icon"
            onClick={handleAnalyze}
            disabled={isAnalyzing}
            className="absolute top-2 right-2 [isolation:isolate] z-[2] flex h-full max-h-10 w-auto items-center gap-2 overflow-hidden rounded-lg border border-orange-600/40 bg-orange-500 px-3 text-sm font-semibold text-black shadow-sm transition hover:bg-orange-400 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isAnalyzing ? (
              <>
                <div className="h-4 w-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                <span>Analyse...</span>
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="rgba(0,0,0,1)"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M5.92 15.3L9.86 13.1L9.92 12.9L9.86 12.8H9.66L9 12.76L6.76 12.7L4.8 12.6L2.9 12.5L2.42 12.4L2 11.8L2.04 11.5L2.44 11.24L3.02 11.28L4.28 11.38L6.18 11.5L7.56 11.58L9.6 11.82H9.92L9.96 11.68L9.86 11.6L9.78 11.52L7.8 10.2L5.68 8.8L4.56 7.98L3.96 7.58L3.66 7.18L3.54 6.34L4.08 5.74L4.82 5.8L5 5.84L5.74 6.42L7.34 7.64L9.4 9.2L9.7 9.44L9.82 9.36L9.84 9.3L9.7 9.08L8.6 7L7.4 4.92L6.86 4.06L6.72 3.54C6.66 3.34 6.64 3.14 6.64 2.94L7.24 2.1L7.6 2L8.44 2.12L8.76 2.4L9.28 3.6L10.1 5.46L11.4 7.98L11.8 8.74L12 9.42L12.06 9.62H12.2V9.52L12.3 8.08L12.5 6.34L12.7 4.1L12.76 3.46L13.08 2.7L13.68 2.3L14.2 2.52L14.6 3.1L14.54 3.46L14.32 5L13.8 7.42L13.5 9.06H13.68L13.88 8.84L14.7 7.76L16.08 6.04L16.68 5.34L17.4 4.6L17.86 4.24H18.72L19.34 5.18L19.06 6.16L18.18 7.28L17.44 8.22L16.38 9.64L15.74 10.78L15.8 10.86H15.94L18.34 10.34L19.62 10.12L21.14 9.86L21.84 10.18L21.92 10.5L21.64 11.18L20 11.58L18.08 11.98L15.22 12.64L15.18 12.66L15.22 12.72L16.5 12.84L17.06 12.88H18.42L20.94 13.08L21.6 13.48L21.98 14.02L21.92 14.42L20.9 14.94L19.54 14.62L16.34 13.86L15.26 13.6H15.1V13.68L16.02 14.58L17.68 16.08L19.8 18.02L19.9 18.5L19.64 18.9L19.36 18.86L17.52 17.46L16.8 16.86L15.2 15.5H15.1V15.64L15.46 16.18L17.42 19.12L17.52 20.02L17.38 20.3L16.86 20.5L16.32 20.38L15.16 18.78L13.96 16.98L13.02 15.34L12.92 15.42L12.34 21.46L12.08 21.76L11.48 22L10.98 21.6L10.7 21L10.98 19.76L11.3 18.16L11.56 16.88L11.8 15.3L11.94 14.78V14.74H11.8L10.6 16.4L8.8 18.86L7.36 20.38L7.02 20.52L6.42 20.22L6.48 19.66L6.8 19.2L8.8 16.64L10 15.06L10.8 14.14L10.78 14.04H10.72L5.44 17.48L4.5 17.6L4.1 17.2L4.14 16.6L4.34 16.4L5.94 15.3H5.92Z"></path>
                </svg>
                <span>Analyser</span>
              </>
            )}
          </button>
          <div id="search-icon" className="absolute top-[15px] left-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="rgba(234,113,46,1)"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM9.71002 19.6674C8.74743 17.6259 8.15732 15.3742 8.02731 13H4.06189C4.458 16.1765 6.71639 18.7747 9.71002 19.6674ZM10.0307 13C10.1811 15.4388 10.8778 17.7297 12 19.752C13.1222 17.7297 13.8189 15.4388 13.9693 13H10.0307ZM19.9381 13H15.9727C15.8427 15.3742 15.2526 17.6259 14.29 19.6674C17.2836 18.7747 19.542 16.1765 19.9381 13ZM4.06189 11H8.02731C8.15732 8.62577 8.74743 6.37407 9.71002 4.33256C6.71639 5.22533 4.458 7.8235 4.06189 11ZM10.0307 11H13.9693C13.8189 8.56122 13.1222 6.27025 12 4.24799C10.8778 6.27025 10.1811 8.56122 10.0307 11ZM14.29 4.33256C15.2526 6.37407 15.8427 8.62577 15.9727 11H19.9381C19.542 7.8235 17.2836 5.22533 14.29 4.33256Z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchComponent
