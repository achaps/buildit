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

export default function BuildersPage() {
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
      const result = await saveEmailToWaitlist(email, 'builder')
      if (result.success) {
        setError(false);
        setIsRegistered(true);
        setShowInput(false);
        triggerConfetti();
      } else {
        setError(true);
      }
    } else {
      setError(true);
    }
  };

  return (
    <AuroraBackground>
      <div className="w-full min-h-screen">
        <div className="container relative mx-auto">
          <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col w-full">
            <div>
              <Button variant="secondary" size="sm" className="gap-4">
                Read our Roadmap<MoveRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center">
                <span className="block text-spektr-cyan-50">Hackathons, with a</span>
                <span className="block font-semibold">100% Win Rate</span>
              </h1>

              <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
                Our platform connects Founders and Builders in a unique way, making sure every submitted project is rewarded
              </p>
            </div>
            <div className="flex flex-col gap-4 items-center">
              {/* Avatar group */}
              {!isRegistered && (
                <div className="flex items-center rounded-full border border-border bg-background/80 backdrop-blur-sm p-2 shadow-sm">
                  <div className="flex -space-x-2">
                    {[3, 4, 5, 6].map((num) => (
                      <img
                        key={num}
                        className="w-6 h-6 rounded-full ring-2 ring-background"
                        src={`https://originui.com/avatar-80-0${num}.jpg`}
                        alt={`Avatar ${num}`}
                      />
                    ))}
                  </div>
                  <p className="pl-3 text-sm text-muted-foreground">
                    Limited seats, only <strong className="font-medium text-foreground">99</strong> spots left
                  </p>
                </div>
              )}

              {isRegistered ? (
                <div className="flex flex-col items-center gap-4">
                  <RainbowButton variant="success" className="gap-2 cursor-default">
                    You're registered! <Mail className="w-4 h-4" />
                  </RainbowButton>
                  <div className="flex items-center gap-2 rounded-full bg-black text-white px-4 py-2">
                    <p className="text-sm">
                      Join us on <span className="font-semibold">X</span> and get rewarded 👀
                    </p>
                    <MoveRight className="w-4 h-4" />
                  </div>
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
                    <p className="text-red-500 text-sm">Please enter a valid email address</p>
                  )}
                </div>
              )}
            </div>
          </div>
          
          {/* Twitter logo en bas à droite */}
          <div className="fixed bottom-8 right-8">
            <Image
              src="/twitter.png"
              alt="Twitter/X Logo"
              width={32}
              height={32}
              className="opacity-50 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
} 