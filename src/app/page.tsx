"use client";

import Image from "next/image";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { BuildrCard } from "@/components/ui/cards";
import { Card } from "@/components/ui/card";

export default function HomePage() {
  return (
    <AuroraBackground>
      <div className="w-full min-h-screen">
        <div className="container relative mx-auto">
          <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col w-full">
            {/* Logo et titre principal */}
            <div className="mb-0">
              <Image
                src="/logo-black-big.png"
                alt="Buildr Network Logo"
                width={300}
                height={100}
                className="w-[200px] md:w-[300px] h-auto"
              />
            </div>

            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-3xl tracking-tighter text-center">
                <span className="text-spektr-cyan-50">Make Venture Building</span>
                <span className="block font-semibold">Great Again</span>
              </h1>

              <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
                Buildr&apos;s purpose is to streamline project creation process. 
                Users co-create & govern projects while Ventures & Financiers share aligned incentives for long run success.
              </p>
            </div>

            {/* Nouvelle section avec titre et testimonial */}
            <div className="w-full max-w-3xl mx-auto mt-40">
              <Card className="p-8 backdrop-blur-sm bg-white border-white/20 shadow-lg">
              <h2 className="text-3xl md:text-5xl font-semibold text-left mb-12">
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
                    `&quot;`Make venture creation efficient, user-funded, community-driven and aligned with ALL stakeholders interests`&quot;`
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
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
}
