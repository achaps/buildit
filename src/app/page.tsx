"use client";

import Image from "next/image";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { BuildrCard } from "@/components/ui/cards";
import { Card } from "@/components/ui/card";
import { CircleOff, TrendingUpDown, ThumbsDown, ShieldUser, Boxes, CircleDollarSign } from "lucide-react";

export default function HomePage() {
  return (
    <AuroraBackground>
      <div className="w-full min-h-screen">
        <div className="container relative mx-auto">
          <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col w-full">
            {/* Logo et titre principal */}
            <div className="mb-0">
              <Image priority
                src="/logo-black-big.png"
                alt="Buildr Network Logo"
                width={300}
                height={100}
                className="w-[200px] md:w-[300px] h-auto"
              />
            </div>

            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-3xl tracking-tighter text-center px-4">
                <span className="text-spektr-cyan-50">Make Venture Building</span>
                <span className="block font-semibold">Great Again</span>
              </h1>

              <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center px-4">
                Buildr&apos;s purpose is to streamline project creation process. 
                Users co-create & govern projects while Ventures & Financiers share aligned incentives for long run success.
              </p>
            </div>

            {/* Nouvelle section avec titre et testimonial */}
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
            <h2 className="text-4xl md:text-4xl font-bold text-left mb-10 inline-flex items-center gap-2 px-4">
                Whithout Buildr</h2>
              <h2 className="text-4xl md:text-3xl font-bold text-left mb-16 px-4">
                Blockchain projects lack <br></br>Community involvement & Professional support in their early stages...
              </h2>

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
              <h2 className="text-4xl md:text-4xl font-bold text-center mb-10 inline-flex items-center gap-2 px-4">
                Whith Buildr
              </h2>
              <h2 className="text-4xl md:text-3xl font-bold text-left mb-16 px-4">
                Users co-create & govern projects while <br></br> Ventures & Financiers share <span className="aurora-text">aligned incentives</span> for long run success
              </h2>

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
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
}
