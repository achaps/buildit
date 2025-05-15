import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Press_Start_2P } from 'next/font/google';
import Typewriter from '../../components/Typewriter';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500'] });
const pressStart2P = Press_Start_2P({ subsets: ['latin'], weight: ['400'] });

export default function ArenaPage() {
  return (
    <main className={`bg-[#020103] min-h-screen w-full ${inter.className}`}>
      {/* Nav */}
      <nav className="flex items-center justify-between w-full max-w-[1200px] h-[88px] mx-auto px-3 py-3 sm:px-5 sm:w-[1200px]">
        <Image src="/logo-buildr-arena.png" alt="Buildr Arena Logo" width={120} height={40} className="mt-8 sm:mt-20" />
      </nav>
      {/* Hero Section */}
      <section className="relative flex flex-col items-center mt-10 sm:mt-20 mb-6 sm:mb-10 w-full px-2">
        <div className="flex items-center gap-2 bg-black border border-white/15 rounded-full px-3 py-1 sm:px-4 sm:py-2 mt-4 relative z-20">
          <span className="text-black font-bold text-[9px] sm:text-[10px] bg-white rounded-full px-2 py-1">NEW</span>
          <span className="text-white text-[13px] sm:text-[16px]">Arena 01 - DeFi Banking Killer</span>
        </div>
        <div className="relative z-10 flex flex-col items-center gap-3 sm:gap-4 mt-4 sm:mt-5 w-full">
          <h1 className="text-[2.1rem] sm:text-[82px] font-medium leading-[2.3rem] sm:leading-[74px] text-center bg-gradient-to-b from-white to-[#3A3DA5] bg-clip-text text-transparent tracking-tight break-words w-full max-w-[95vw] sm:max-w-none">Fuck <Typewriter className="inline" /> <br />We are the new VCs.</h1>
          <p className="text-white text-[1rem] sm:text-[20px] font-normal leading-[1.7rem] sm:leading-[32px] text-center max-w-[90vw] sm:max-w-[450px]">BUILDR Arena is the ultimate dev competition where community shape the future of DeFi</p>
        </div>
        <div className="absolute left-0 right-0 bottom-0 h-[180px] sm:h-[400px] bg-gradient-to-b from-transparent to-[#050208] z-0" />
      </section>
      {/* Buttons placeholder */}
      <button className={`flex overflow flex-col gap-4 mt-6 sm:mt-8 w-[160px] sm:w-[200px] mx-auto px-3 py-3 bg-black border-white border text-white text-[10px] sm:text-[8px] ${pressStart2P.className} text-center relative z-20`}>&gt; Arena is Loading...</button>
      {/* Image section */}
      <div className="mt-5 flex justify-center w-full px-2">
        <div className="relative w-full max-w-[95vw] sm:max-w-[1200px] flex justify-center">
          <div className="absolute -top-20 sm:-top-40 left-1/2 -translate-x-1/2 w-[320px] h-[320px] sm:w-[825px] sm:h-[825px] bg-[#00059A] blur-[60px] sm:blur-[100px] opacity-90 rounded-full" />
          <div className="relative w-full flex justify-center">
            <div className="relative max-w-full">
              {/* Rectangle with blur behind the image */}
              <div className="absolute -inset-2 sm:-inset-4 rounded-lg bg-[#00059A] blur-[10px] sm:blur-[20px] opacity-100 z-0"></div>
              {/* White glow on top */}
              <div className="absolute -inset-1 rounded-lg blur-[6px] sm:blur-[10px] bg-white/10 z-10"></div>
              <Image 
                src="/buildr-arena.png" 
                className="border-0 rounded-lg relative z-20 w-full h-auto mx-auto" 
                alt="Arena Hero" 
                width={2200} 
                height={500}
                priority
              />
            </div>
          </div>
        </div>
      </div>
      {/* Bottom image blur - enhanced visibility (moved 50px up) */}
      <div className="absolute left-0 right-0 h-[60px] sm:h-[150px] sm:w-full bg-black blur-[12px] sm:blur-[30px] opacity-100 rounded-lg z-20 -translate-y-[35px] sm:-translate-y-[100px]" />
      {/* CTA Section */}
      <section className="relative flex flex-col items-center w-full py-10 sm:py-20 px-2">
        <div className="absolute inset-1 bg-[url('/pattern.png')] bg-center min-w-full h-[220px] sm:h-[500px] bg-repeat opacity-100"></div>
        <div className="absolute -bottom-20 sm:-bottom-40 left-1/2 -translate-x-1/2 w-[350px] h-[50px] sm:w-[900px] sm:h-[120px] bg-[#00059A] blur-[40px] sm:blur-[90px] opacity-100 rounded-full -translate-y-[450px] sm:-translate-y-[550px]" />
        <div className="absolute left-1/2 -translate-x-1/2 top-0 z-0"></div>
        <div className="relative z-20 flex flex-col items-center gap-4 w-full">
          <div className="relative w-full">
            <div className="relative z-10 w-full">
              <h2 className="text-[1.5rem] sm:text-[56px] sm:mt-20 font-medium text-white text-center z-20 w-full">Already 500k USDT<br />raised with Community.</h2>
              {/* CTA Text */}
              <p className="p-10 text-justify text-[1rem] sm:text-[20px] mt-6 sm:mt-10 text-white text-center max-w-[95vw] sm:max-w-[900px] mx-auto">The ecosystem is slowly dying. VCs are in control, dominating the whole builders ecosystem. BUILDR Arena is the ultimate competition where community shape the future of DeFi. No VCs, no rulers, no unfair advantages, only Teams fighting to bring their vision to life.</p>
            </div>
          </div>
        </div>
      </section>
      {/* How it works Section */}
      <section className="bg-black py-10 sm:py-20 px-2 sm:px-8 relative w-full">
        <div className="relative z-10 w-full">
          <h2 className="text-[1.3rem] sm:text-[32px] font-medium text-white text-center mb-8 sm:mb-16">How it works ?</h2>
          {/* Step 01 */}
          <div className="grid grid-cols-1 sm:grid-cols-6 gap-2 mb-8 sm:mb-16 w-full">
            <div className="hidden sm:flex bg-black rounded-lg flex-col items-center justify-center relative border border-gray-700 rounded-lg py-4 sm:col-span-2">
              <div className="text-center text-white px-4 py-2 rounded-full text-3xl sm:text-5xl font-bold">01</div>
              <div className="text-white text-xl sm:text-3xl mt-10 sm:mt-40 font-medium relative z-10 text-center">STEP</div>
            </div>
            <div className="min-h-[220px] sm:min-h-[500px] backdrop-blur-sm rounded-lg relative flex flex-col justify-end items-center overflow-hidden py-4 sm:col-span-4">
              <div className="absolute inset-0 bg-[url('/bento-1.png')] bg-cover bg-center w-full h-full opacity-100"></div>
              <div className="w-full h-full p-4 sm:p-9 flex flex-col justify-end items-center relative">
                <h3 className="text-white text-2xl sm:text-4xl font-medium mb-8 sm:mb-20 relative z-10 text-center">Get $BUILDR to have DAO voting power</h3>
              </div>
            </div>
          </div>
          {/* Step 02 */}
          <div className="grid grid-cols-1 sm:grid-cols-6 gap-2 mb-8 sm:mb-16 w-full">
            <div className="min-h-[220px] sm:min-h-[500px] backdrop-blur-sm rounded-lg relative flex flex-col justify-end items-center overflow-hidden py-4 sm:col-span-4">
              <div className="absolute inset-0 bg-[url('/bento-2.png')] bg-cover bg-center w-full h-full opacity-100"></div>
              <div className="w-full h-full p-4 sm:p-9 flex flex-col justify-end items-center relative">
                <h3 className="text-white text-2xl sm:text-4xl font-medium mb-8 sm:mb-20 relative z-10 text-center">Meet the Teams & Bet on the Winner</h3>
              </div>
            </div>
            <div className="hidden sm:flex bg-black rounded-lg flex-col items-center justify-center relative border border-gray-700 rounded-lg py-4 sm:col-span-2">
              <div className="text-center text-white px-4 py-2 rounded-full text-3xl sm:text-5xl font-bold">02</div>
              <div className="text-white text-xl sm:text-3xl mt-10 sm:mt-40 font-medium relative z-10 text-center">STEP</div>
            </div>
          </div>
          {/* Step 03 */}
          <div className="grid grid-cols-1 sm:grid-cols-6 gap-2 mb-8 sm:mb-16 w-full">
            <div className="hidden sm:flex bg-black rounded-lg flex-col items-center justify-center relative border border-gray-700 rounded-lg py-4 sm:col-span-2">
              <div className="text-center text-white px-4 py-2 rounded-full text-3xl sm:text-5xl font-bold">03</div>
              <div className="text-white text-xl sm:text-3xl mt-10 sm:mt-40 font-medium relative z-10 text-center">STEP</div>
            </div>
            <div className="min-h-[220px] sm:min-h-[500px] backdrop-blur-sm rounded-lg relative flex flex-col justify-end items-center overflow-hidden py-4 sm:col-span-4">
              <div className="absolute inset-0 bg-[url('/bento-3.png')] bg-cover bg-center w-full h-full opacity-100"></div>
              <div className="w-full h-full p-4 sm:p-9 flex flex-col justify-end items-center relative">
                <h3 className="text-white text-2xl sm:text-4xl font-medium mb-8 sm:mb-20 relative z-10 text-center">Collect Rewards & Get Equity</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* The Rules Section */}
      <section className="bg-gradient-to-br from-[#00059A] to-[#020103] py-10 sm:py-20 px-2 sm:px-8 w-full">
        <div className="max-w-full sm:max-w-5xl mx-auto flex flex-col gap-6 sm:gap-10">
          <div className="flex flex-col gap-2 sm:gap-4">
            <h2 className="text-[1.5rem] sm:text-[56px] font-medium text-white">The Rules</h2>
          </div>
          {/* Rules grid placeholder */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 w-full">
            <div className="bg-white/5 rounded-lg p-4 sm:p-8 w-full sm:w-80 h-40 flex flex-col items-center justify-center">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M14 9.5v5"/>
                  <path d="M10 9.5v5"/>
                  <path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5Z"/>
                </svg>
                <p className="text-white font-medium text-base sm:text-lg">Daily Livestreams</p>
              </div>
              <p className="text-white/70 text-xs sm:text-sm text-center mt-2">Dev teams have to do at least one stream per day (Q&A)</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4 sm:p-8 w-full sm:w-80 h-40 flex flex-col items-center justify-center">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M2 12h20"/>
                  <path d="M2 4h20"/>
                  <path d="M16 20H2"/>
                  <path d="M22 20h-2"/>
                  <path d="M20 12V4"/>
                  <path d="M16 12V4"/>
                  <path d="M16 20v-8"/>
                  <path d="M20 20v-8"/>
                </svg>
                <p className="text-white font-medium text-base sm:text-lg">Bonding Curve</p>
              </div>
              <p className="text-white/70 text-xs sm:text-sm text-center mt-2">Team token must generate 100k$ Market Cap before being tradable</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4 sm:p-8 w-full sm:w-80 h-40 flex flex-col items-center justify-center">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M12 8c-2.8 0-5 2.2-5 5 0 2.8 2.2 5 5 5 2.8 0 5-2.2 5-5 0-2.8-2.2-5-5-5z"/>
                  <path d="M12 18v4"/>
                  <path d="M12 2v4"/>
                  <path d="m4.93 7.5 2.83 2.83"/>
                  <path d="M16.24 16.24 19.07 19.07"/>
                  <path d="m4.93 19.07 2.83-2.83"/>
                  <path d="M16.24 7.5 19.07 4.93"/>
                </svg>
                <p className="text-white font-medium text-base sm:text-lg">Rewards</p>
              </div>
              <p className="text-white/70 text-xs sm:text-sm text-center mt-2">Winning dev team will receive 1M USDT after election</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 w-full">
            <div className="bg-white/5 rounded-lg p-4 sm:p-8 w-full sm:w-80 h-40 flex flex-col items-center justify-center">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <path d="M12 18v-6"/>
                  <path d="M8 18v-1"/>
                  <path d="M16 18v-3"/>
                </svg>
                <p className="text-white font-medium text-base sm:text-lg">Content Evaluation</p>
              </div>
              <p className="text-white/70 text-xs sm:text-sm text-center mt-2">In the end of the contest, the team will share a GitHub repo</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4 sm:p-8 w-full sm:w-80 h-40 flex flex-col items-center justify-center">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="m9 12 2 2 4-4"/>
                  <path d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z"/>
                  <path d="M22 19H2"/>
                </svg>
                <p className="text-white font-medium text-base sm:text-lg">Picking the Winner</p>
              </div>
              <p className="text-white/70 text-xs sm:text-sm text-center mt-2">Both Community and BUILDR Arena will decide, vote will be made in DAO</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4 sm:p-8 w-full sm:w-80 h-40 flex flex-col items-center justify-center">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                </svg>
                <p className="text-white font-medium text-base sm:text-lg">Voting Power</p>
              </div>
              <p className="text-white/70 text-xs sm:text-sm text-center mt-2">Community need $BUILDR to be able to vote in Arena</p>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="flex flex-col sm:flex-row items-center justify-between w-full sm:w-[1195px] mx-auto py-8 sm:py-10 border-t border-white/15 mt-10 sm:mt-20 gap-4 sm:gap-0 px-2 sm:px-0">
        <Image src="/logo-buildr-arena.png" alt="Buildr Logo" width={100} height={34} className="w-[100px] h-auto sm:w-[120px] sm:h-full" />
        <div className="flex flex-col items-center sm:items-end sm:mt-10">
          <div className="flex items-center gap-2">
            <a href="https://x.com/buildr_network" target="_blank" rel="noopener noreferrer" aria-label="BUILDR Network on X" className="inline-flex items-center">
            <svg width="20" height="20" viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="white"/>
            </svg>
            </a>
          </div>
          <span className="mt-5 text-white/40 text-xs sm:text-base">© BUILDR Network</span>

        </div>
      </footer>
    </main>
  );
} 