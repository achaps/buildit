"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { BuildrCard } from "@/components/ui/cards";
import { Card } from "@/components/ui/card";
import { CircleOff, TrendingUpDown, ThumbsDown, ShieldUser, Boxes, CircleDollarSign, Mail, Check } from "lucide-react";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { saveEmailToWaitlist } from '@/lib/actions';
import confetti from 'canvas-confetti';

export default function HomePage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState<'builder' | 'financier' | 'community' | null>(null);
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const validateAndSubmitEmail = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!selectedRole) {
      setError(true);
      setErrorMessage("Please select a role");
      return;
    }
    if (emailRegex.test(email)) {
      const result = await saveEmailToWaitlist(email, selectedRole);
      if (result.success) {
        setError(false);
        setErrorMessage("");
        setIsRegistered(true);
        setShowModal(false);
        triggerConfetti();
      } else {
        setError(true);
        setErrorMessage(result.error as string);
      }
    } else {
      setError(true);
      setErrorMessage("Please enter a valid email address");
    }
  };

  return (
    <AuroraBackground>
      <div className="w-full min-h-screen overflow-hidden">
        <div className="container relative mx-auto">
          {/* Navigation Menu */}
          <div className="flex justify-center w-full mt-10">
            <nav className="backdrop-blur-md bg-white/80 rounded-full border border-white/20 shadow-lg -mt-2">
              <ul className="flex items-center gap-1 p-1.5 text-[13px] sm:text-base">
                <li>
                  <Link 
                    href="/builders"
                    className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full hover:bg-white/20 transition-all hover:aurora-text text-foreground font-medium"
                  >
                    Builders
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/financiers"
                    className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full hover:bg-white/20 transition-all hover:aurora-text text-foreground font-medium"
                  >
                    Financiers
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/community"
                    className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full hover:bg-white/20 transition-all hover:aurora-text text-foreground font-medium"
                  >
                    Community
                  </Link>
                </li>
                <li className="ml-1">
                  <Link 
                    href="https://x.com/buildr_network"
                    target="_blank"
                    className="flex items-center px-2 py-1.5 sm:px-3 sm:py-2"
                  >
                    <Image
                      src="/twitter.png"
                      alt="Twitter"
                      width={16}
                      height={16}
                      className="opacity-70 hover:opacity-100 transition-opacity w-4 h-4 sm:w-5 sm:h-5"
                    />
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex gap-8 py-10 lg:py-20 items-center justify-center flex-col w-full">
            {/* Logo et titre principal */}
            <div className="flex flex-col items-center gap-8 w-full">
              <div className="mb-0">
                <Image priority
                  src="/logo-black-big.png"
                  alt="Buildr Network Logo"
                  width={300}
                  height={100}
                  className="w-[200px] md:w-[300px] h-auto"
                />
              </div>

              <div className="flex gap-4 flex-col items-center">
                <h1 className="text-5xl md:text-7xl max-w-3xl tracking-tighter text-center px-4">
                  <span className="text-spektr-cyan-50">Make Venture Building</span>
                  <span className="block font-semibold">Great Again</span>
                </h1>

                <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center px-4">
                  Buildr&apos;s purpose is to streamline project creation process. 
                  Users co-create & govern projects while Ventures & Financiers share aligned incentives for long run success.
                </p>

                {/* Waitlist Button and Modal */}
                <div className="flex flex-col items-center gap-4 mt-4">
                  {isRegistered ? (
                    <div className="flex flex-col items-center gap-4">
                      <RainbowButton variant="success" className="gap-2 cursor-default">
                        You&apos;re registered! <Check className="w-4 h-4" />
                      </RainbowButton>
                      <Link 
                        href="https://x.com/buildr_network"
                        target="_blank"
                        className="flex items-center gap-2 rounded-full bg-black text-white px-4 py-2 hover:opacity-90 transition-opacity"
                      >
                        <p className="text-sm">
                          Join us on <span className="font-semibold">X</span> and get rewarded 👀
                        </p>
                      </Link>
                    </div>
                  ) : !showModal ? (
                    <RainbowButton onClick={() => setShowModal(true)} className="gap-2">
                      Join Waitlist <Mail className="w-4 h-4" />
                    </RainbowButton>
                  ) : (
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
                      <div className="bg-black rounded-xl p-8 max-w-md w-full mx-4 relative">
                        <button 
                          onClick={() => setShowModal(false)}
                          className="absolute top-4 right-4 text-white hover:text-gray-700"
                        >
                          ×
                        </button>
                        <h3 className="text-xl text-white font-semibold mb-6">Join the Waitlist</h3>
                        <h4 className="text-l text-white font-semibold mb-2">Select a role</h4>
                        <div className="flex flex-col gap-4">
                          <div className="grid grid-cols-3 gap-2">
                            <button
                              onClick={() => setSelectedRole('builder')}
                              className={`relative inline-flex items-center justify-center rounded-lg bg-black text-white p-3 ${
                                selectedRole === 'builder' 
                                  ? 'border-2 border-white' 
                                  : 'border border-white/20 hover:border-white/40'
                              }`}
                            >
                              Builder
                            </button>
                            <button
                              onClick={() => setSelectedRole('financier')}
                              className={`relative inline-flex items-center justify-center rounded-lg bg-black text-white p-3 ${
                                selectedRole === 'financier' 
                                  ? 'border-2 border-white' 
                                  : 'border border-white/20 hover:border-white/40'
                              }`}
                            >
                              Financier
                            </button>
                            <button
                              onClick={() => setSelectedRole('community')}
                              className={`relative inline-flex items-center justify-center rounded-lg bg-black text-white p-3 ${
                                selectedRole === 'community' 
                                  ? 'border-2 border-white' 
                                  : 'border border-white/20 hover:border-white/40'
                              }`}
                            >
                              Community
                            </button>
                          </div>
                          <div className="relative">
                            <input
                              type="email"
                              value={email}
                              onChange={(e) => {
                                setEmail(e.target.value);
                                setError(false);
                              }}
                              placeholder="Enter your email"
                              className="w-full px-4 py-2 rounded-lg bg-black text-white border border-white/20 focus:outline-none focus:ring-0 placeholder:text-white/50"
                              onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                  validateAndSubmitEmail();
                                }
                              }}
                            />
                          </div>
                          {error && (
                            <p className="text-red-500 text-sm">{errorMessage}</p>
                          )}
                          <RainbowButton
                            onClick={validateAndSubmitEmail}
                            className="w-full"
                          >
                            Submit
                          </RainbowButton>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Testimonail section */}
            <div className="w-full max-w-3xl mx-auto mt-40">
              <Card className="p-8 backdrop-blur-sm bg-white border-white/20 shadow-lg">
              <h2 className="text-3xl md:text-5xl font-semibold text-left mb-12 px-4">
                Buildr&apos;s purpose is to <span className="aurora-text">streamline project creation</span> process
              </h2>
                <div className="flex items-center gap-8">
                  <div className="flex-shrink-0">
                    <Image
                      src="/coin-logo-light.png"
                      alt="Buildr Coin"
                      width={150}
                      height={150}
                      className="w-[120px] h-[120px]"
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="text-lg md:text-xl italic font-semibold text-muted-foreground">
                    &quot;Make venture creation efficient, user-funded, community-driven and aligned with ALL stakeholders interests&quot;
                    </p>
                    <div className="self-end">
                      <Image
                        src="/logo-black-big.png"
                        alt="Buildr Signature"
                        width={80}
                        height={30}
                        className="w-[80px] h-auto opacity-80"
                      />
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
              <div className="w-full">
                <BuildrCard variant="builders" />
              </div>
              <div className="w-full">
                <BuildrCard variant="financiers" />
              </div>
              <div className="w-full">
                <BuildrCard variant="community" />
              </div>
            </div>

            {/* Pain section */}
            <div className="w-full mx-auto mt-20">
              <div className="flex justify-center w-full">
                <h2 className="text-4xl md:text-4xl font-bold text-center mb-10 inline-flex items-center gap-2 px-4">
                  Without Buildr
                </h2>
              </div>
              <div className="flex justify-center w-full">
                <h2 className="text-4xl md:text-1xl font-bold text-center mb-16 px-4 max-w-4xl">
                  Blockchain projects lack Community involvement & Professional support in their early stages...
                </h2>
              </div>

              <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">
                {/* Première carte */}
                <div className="flex-1 w-full bg-white backdrop-blur-sm rounded-lg p-8 border border-white/20 shadow-lg">
                  <div className="flex items-center gap-4 mb-6">
                   <div className="p-3 rounded-lg aurora-bg">
                    <CircleOff className="w-6 h-6 text-white" />
                  </div>
                    <h3 className="text-xl font-semibold">No transparency & Missing support</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="text-muted-foreground">After hackathons or ICOs, there&apos;s no transparency regarding fund usage</li>
                    <li className="text-muted-foreground">Launchpads focus on fundraising rather than project success</li>
                    <li className="text-muted-foreground">Platforms provide no post-launch support to projects</li>
                  </ul>
                </div>

                {/* Séparateur */}
                <Image
                  src="/triangle.svg"
                  alt="separator"
                  width={30}
                  height={30}
                  className="hidden lg:block w-[30px] h-[30px]"
                />

                {/* Deuxième carte */}
                <div className="flex-1 w-full bg-white backdrop-blur-sm rounded-lg p-8 border border-white/20 shadow-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-lg aurora-bg">
                      <TrendingUpDown className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">VC dominance & <br></br>Retail exclusion</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="text-muted-foreground">ICO market is at its lowest, with VCs taking the best deals</li>
                    <li className="text-muted-foreground">VCs provide better support than retail investors can offer</li>
                    <li className="text-muted-foreground">No trusted intermediary between Financiers, Ventures, and Users</li>
                  </ul>
                </div>

                {/* Séparateur */}
                <Image
                  src="/triangle.svg"
                  alt="separator"
                  width={30}
                  height={30}
                  className="hidden lg:block w-[30px] h-[30px]"
                />

                {/* Troisième carte */}
                <div className="flex-1 w-full bg-white backdrop-blur-sm rounded-lg p-8 border border-white/20 shadow-lg">
                  <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg aurora-bg">
                    <ThumbsDown className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-l font-semibold">Poor product development & Community involvement</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="text-muted-foreground">Projects launch without real product-market fit</li>
                    <li className="text-muted-foreground">Marketing and backing prioritized over product value</li>
                    <li className="text-muted-foreground">Community only involved in final funding, not in solution co-creation</li>
                  </ul>
                </div>
              </div>

              {/* Ligne de conclusion */}
              <div className="flex flex-col lg:flex-row items-center justify-center mt-8 pt-8 border-t border-white/20 gap-4 lg:gap-0">
                <span className="text-muted-foreground text-center">Financiers are waisting money</span>
                <Image
                  src="/triangle.svg"
                  alt="separator"
                  width={30}
                  height={30}
                  className="hidden lg:block w-[30px] h-[30px] mx-8"
                />
                <span className="text-muted-foreground text-center">Ventures struggle to scale</span>
                <Image
                  src="/triangle.svg"
                  alt="separator"
                  width={30}
                  height={30}
                  className="hidden lg:block w-[30px] h-[30px] mx-8"
                />
                <span className="text-muted-foreground text-center">Users are exit liquidity</span>
              </div>
            </div>
            {/* Solution section */}
            <div className="w-full mx-auto mt-20">
              <div className="flex justify-center w-full">
                <h2 className="text-4xl md:text-4xl font-bold text-center mb-10 inline-flex items-center gap-2 px-4">
                  With Buildr
                </h2>
              </div>
              <div className="flex justify-center w-full">
                <h2 className="text-4xl md:text-1xl font-bold text-center mb-16 px-4 max-w-4xl">
                  Users co-create & govern projects while <br></br>Ventures & Financiers share <span className="aurora-text">aligned incentives</span> for long run success
                </h2>
              </div>

              <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">
                {/* Première carte */}
                <div className="flex-1 w-full bg-white backdrop-blur-sm rounded-lg p-8 border border-white/20 shadow-lg">
                  <div className="flex items-center gap-4 mb-6">
                   <div className="p-3 rounded-lg aurora-bg">
                    <ShieldUser className="w-6 h-6 text-white" />
                  </div>
                    <h3 className="text-xl font-semibold">Integration of Users from the ideation stage</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="text-muted-foreground">Users contribute through testimonials, votes, and feedback</li>
                    <li className="text-muted-foreground">Incentivized beta-testers shape product development</li>
                    <li className="text-muted-foreground">Community can participates in project financing</li>
                  </ul>
                </div>

                {/* Séparateur */}
                <Image
                  src="/triangle.svg"
                  alt="separator"
                  width={30}
                  height={30}
                  className="hidden lg:block w-[30px] h-[30px]"
                />

                {/* Deuxième carte */}
                <div className="flex-1 w-full bg-white backdrop-blur-sm rounded-lg p-8 border border-white/20 shadow-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-lg aurora-bg">
                      <Boxes className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">Decentralized post-launch incubation</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="text-muted-foreground">Curators involvement increases project chance of success</li>
                    <li className="text-muted-foreground">Support provided by Buildr DAO remains fair and transparent</li>
                    <li className="text-muted-foreground">Users and Financiers benefit from added guarantees</li>
                  </ul>
                </div>

                {/* Séparateur */}
                <Image
                  src="/triangle.svg"
                  alt="separator"
                  width={30}
                  height={30}
                  className="hidden lg:block w-[30px] h-[30px]"
                />

                {/* Troisième carte */}
                <div className="flex-1 w-full bg-white backdrop-blur-sm rounded-lg p-8 border border-white/20 shadow-lg">
                  <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg aurora-bg">
                    <CircleDollarSign className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">Aligned incentive system for each player</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="text-muted-foreground">Financiers, ecosystem and community earn profits if the project succeeds</li>
                    <li className="text-muted-foreground">Builders inherit a board, a solid use-base and additional funding </li>
                    <li className="text-muted-foreground">Users receive rewards & investment opportunities for testing feedback</li>
                  </ul>
                </div>
              </div>

              {/* Ligne de conclusion */}
              <div className="flex flex-col lg:flex-row items-center justify-center mt-8 pt-8 border-t border-white/20 gap-4 lg:gap-0 text-center">
                <Image
                  src="/triangle.svg"
                  alt="separator"
                  width={30}
                  height={30}
                  className="hidden lg:block w-[30px] h-[30px] mx-8"
                />
                <span className="text-muted-foreground">Each stakeholders now benefits from a <span className="font-bold">realigned & fair earnings redistrisbution</span>, while maximizing the project added value </span>
              </div>
            </div>
            {/* How it works section */}
            <div id="how-it-works" className="w-full mx-auto mt-20">
              <div className="flex justify-center w-full">
              <h2 className="text-4xl md:text-4xl font-bold text-center inline-flex mb-10 items-center gap-2 px-4"> How it works ?</h2>
              </div>
              <div className="flex justify-center w-full">
                <h2 className="text-4xl md:text-1xl font-bold text-center mb-16 px-4 max-w-4xl">
                Each stakeholders gets rewarded <span className="aurora-text">fairly </span>during all the project lifetime
                </h2>
              </div>
              <div className="flex justify-center w-full">
                <Image 
                  src="/how-it-works.png"
                  alt="How it works"
                  width={1200}
                  height={1000}
                  className="w-[80%] h-auto"
                />
              </div>
              </div>
              {/* Why Buildr section */}
              <div className="w-full mx-auto mt-20">
              <div className="flex justify-center w-full">
              <h2 className="text-4xl md:text-4xl font-bold text-center inline-flex mb-10 items-center gap-2 px-4"> Why Buildr is Better  ?</h2>
              </div>
              <div className="flex justify-center w-full">
                <Image 
                  src="/why-buildr.png"
                  alt="Why Buildr"
                  width={1200}
                  height={1000}
                  className="w-[80%] h-auto"
                />
              </div>
              </div>
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
}
