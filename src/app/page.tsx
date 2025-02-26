"use client";

import Image from "next/image";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { CardFinanciers } from "@/components/ui/card-financiers";
import { CardBuilders } from "@/components/ui/card-builders";
import { CardCommunity } from "@/components/ui/card-community";
export default function HomePage() {
  return (
    <AuroraBackground>
      <div className="w-full min-h-screen">
        <div className="container relative mx-auto">
          <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col w-full">
            {/* Logo centré */}
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">

              {/* Builders Card */}
              <div className="w-full">
              <CardBuilders />
              </div>

              {/* Financiers Cards Section */}
              <div className="w-full">
                <CardFinanciers />
              </div>

              {/* Community Card */}
              <div className="w-full">
                <CardCommunity />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
}
