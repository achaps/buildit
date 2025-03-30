"use client";

import { Mail, MoveRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { useState } from "react";
import { cn } from "@/lib/utils";
import confetti from 'canvas-confetti';
import Image from "next/image";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { saveEmailToWaitlist } from '@/lib/actions'
import Link from 'next/link';

export default function CommunityPage() {
  const [showInput, setShowInput] = useState(false);
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
    if (emailRegex.test(email)) {
      const result = await saveEmailToWaitlist(email, 'community')
      if (result.success) {
        setError(false);
        setErrorMessage("");
        setIsRegistered(true);
        setShowInput(false);
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
      <div className="w-full min-h-screen">
        <div className="container relative mx-auto">
          {/* Logo en haut à gauche avec lien */}
          <div className="absolute top-8 left-8 z-10">
            <Link href="/">
              <Image
                src="/logo-black.png"
                alt="Buildr Network Logo"
                width={120}
                height={40}
                className="w-[80px] md:w-[120px] h-auto cursor-pointer hover:opacity-80 transition-opacity"
              />
            </Link>
          </div>
          <div className="flex gap-8 py-10 lg:py-20 items-center justify-center flex-col w-full">
            <div>
              <Link href="/docs">
                <Button variant="secondary" size="sm" className="gap-2 text-xs md:text-sm whitespace-nowrap px-3 py-1.5 mt-20">
                  Project Overview<MoveRight className="w-3 h-3" />
                </Button>
              </Link>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center">
                <span className="block text-spektr-cyan-50">Test & Review dApps</span>
                <span className="block font-semibold">Get $$$</span>
              </h1>

              <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
                Help us shape the future of decentralized project creation by testing and reviewing dApps. Get incentivized for each action & spot opportunities before anyone else
              </p>
            </div>
            <div className="flex flex-col gap-4 items-center">
              {/* Avatar group */}
              {!isRegistered && (
                <div className="flex items-center rounded-full border border-border bg-background/80 backdrop-blur-sm p-2 shadow-sm">
                  <div className="flex -space-x-2">
                    {[3, 4, 5, 6].map((num) => (
                      <Image
                        key={num}
                        width={24}
                        height={24}
                        className="w-6 h-6 rounded-full ring-2 ring-background"
                        src={`https://originui.com/avatar-80-0${num}.jpg`}
                        alt={`Avatar ${num}`}
                      />
                    ))}
                  </div>
                  <p className="pl-3 text-sm text-muted-foreground">
                    Join our<strong className="font-medium text-foreground"> +500</strong> members community
                  </p>
                </div>
              )}

              {isRegistered ? (
                <div className="flex flex-col items-center gap-4">
                  <RainbowButton variant="success" className="gap-2 cursor-default">
                    You&apos;re registered! <Mail className="w-4 h-4" />
                  </RainbowButton>
                  <Link 
                    href="https://x.com/buildr_network"
                    target="_blank"
                    className="flex items-center gap-2 rounded-full bg-black text-white px-4 py-2 hover:opacity-90 transition-opacity"
                  >
                    <p className="text-sm">
                      Join us on <span className="font-semibold">X</span> and get rewarded 👀
                    </p>
                    <MoveRight className="w-4 h-4" />
                  </Link>
                </div>
              ) : !showInput ? (
                <RainbowButton className="gap-2" onClick={() => setShowInput(true)}>
                  Join Waitlist <Mail className="w-4 h-4" />
                </RainbowButton>
              ) : (
                <div className="flex flex-col items-center gap-2">
                  <div className={cn(
                    "group relative inline-flex h-11 animate-rainbow items-center justify-center rounded-xl bg-[length:200%] [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent]",
                    error && "border-red-500",
                    "before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))]",
                    "bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",
                    "dark:bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]"
                  )}>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setError(false);
                      }}
                      placeholder="Enter your email"
                      className={cn(
                        "h-full w-full bg-transparent px-8 py-2",
                        "text-white placeholder:text-gray-400 focus:outline-none",
                        "min-w-[300px]"
                      )}
                      autoFocus
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          validateAndSubmitEmail();
                        }
                      }}
                    />
                    <button 
                      onClick={validateAndSubmitEmail}
                      className="absolute right-3 hover:text-white transition-colors"
                    >
                      <Check className="w-4 h-4 text-gray-400 hover:text-white" />
                    </button>
                  </div>
                  {error && (
                    <p className="text-red-500 text-sm">{errorMessage}</p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* PoC section */}
          <div id="poc" className="w-full mx-auto mt-20">
            <div className="flex justify-center w-full">
            <h2 className="text-2xl md:text-4xl font-bold text-center inline-flex mb-10 items-center gap-2 px-4">How it Works ?</h2>
            </div>
            <div className="flex justify-center w-full">
              <Image 
                src="/community-PoC.png"
                alt="Community PoC"
                width={1000}
                height={1000}
                className="w-[90%] md:w-[70%] h-auto"
              />
            </div>
          </div>
          
          {/* Ecosystem section */}
          <div id="how-it-works" className="w-full mx-auto mt-10 md:mt-20">
            <div className="flex justify-center w-full">
              <h2 className="text-2xl md:text-4xl font-bold text-center inline-flex mb-10 items-center gap-2 px-4">Buildr&apos;s Ecosystem</h2>
            </div>
            <div className="flex justify-center w-full">
              <h2 className="text-2xl md:text-1xl font-bold text-center mb-10 px-4 max-w-4xl">
                Each stakeholders gets rewarded <span className="aurora-text">fairly </span>during all the project lifetime
              </h2>
            </div>
            <div className="flex justify-center w-full">
              <Image 
                src="/how-it-works.png"
                alt="How it works"
                width={1200}
                height={1000}
                className="w-[95%] md:w-[80%] h-auto"
              />
            </div>
          </div>

          {/* Why Buildr section */}
          <div className="w-full mx-auto mt-10 md:mt-20">
            <div className="flex justify-center w-full">
              <h2 className="text-2xl md:text-4xl font-bold text-center inline-flex mb-10 items-center gap-2 px-4">Why Buildr is Better ?</h2>
            </div>
            <div className="flex justify-center w-full">
              <Image 
                src="/why-buildr.png"
                alt="Why Buildr"
                width={1200}
                height={1000}
                className="w-[95%] md:w-[80%] h-auto"
              />
            </div>
          </div>

          {/* Twitter logo en bas à droite */}
          <div className="fixed bottom-8 right-8">
            <Link href="https://x.com/buildr_network" target="_blank">
              <Image
                src="/twitter.png"
                alt="Twitter/X Logo"
                width={32}
                height={32}
                className="opacity-50 hover:opacity-100 transition-opacity"
              />
            </Link>
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
} 