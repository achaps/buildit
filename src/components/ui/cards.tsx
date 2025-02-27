import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";

type CardProps = {
  variant: 'builders' | 'financiers' | 'community';
};

type CardContent = {
  title: string;
  description: string;
  bgImage: string;
  features: Array<{
    title: string;
    description: string;
  }>;
};

const CARD_CONTENT: Record<CardProps['variant'], CardContent> = {
  builders: {
    title: "Builders",
    description: "Developers & Product Owners",
    bgImage: "/builders-bg.png",
    features: [
      {
        title: "Earn rewards for each submission",
        description: "Distributed in pBUILDR",
      },
      {
        title: "Winning team gets Equity",
        description: "Obtain a % of ownership & share revenues",
      },
      {
        title: "Post Launch support",
        description: "Skyrocket your project with our Incubator",
      },
    ],
  },
  financiers: {
    title: "Financiers",
    description: "Founders & Investors",
    bgImage: "/founders-bg.png",
    features: [
      {
        title: "Grow your ecosystem", 
        description: "Top-tier Builders ready to ship your projects",
      },
      {
        title: "Get your first User base",
        description: "Community involvement from 0 to post-launch",
      },
      {
        title: "Secure your funds",
        description: "Transparent fund management & distribution",
      },
    ],
  },
  community: {
    title: "Community",
    description: "Users & Testers",
    bgImage: "/community-bg.png",
    features: [
      {
        title: "Test & Earn",
        description: "DAO based decision making, from the start",
      },
      {
        title: "Co-Create & Govern",
        description: "Community involvement from 0 to post-launch",
      },
      {
        title: "Become an Insider",
        description: "Get involved in bullish projects before anyone else",
      },
    ],
  },
};

export function BuildrCard({ variant }: CardProps) {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const content = CARD_CONTENT[variant];
  const isWhite = variant === 'builders' || variant === 'community';

  const bgClasses = {
    builders: 'bg-[url("/builders-bg.png")]',
    financiers: 'bg-[url("/founders-bg.png")]',
    community: 'bg-[url("/community-bg.png")]',
  };

  const handleClick = () => {
    if (variant === 'builders') {
      router.push('/builders');
    } else if (variant === 'financiers') {
      router.push('/financiers');
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <Card 
      className={`backdrop-blur-sm ${isWhite ? 'bg-white/80' : 'bg-white'} border-white w-[400px] h-[290px] overflow-hidden shadow-lg transition-transform duration-200 ease-out cursor-pointer`}
      onMouseMove={handleMouseMove}
      onMouseLeave={(e) => {
        handleMouseLeave();
        setIsHovered(false);
      }}
      onMouseEnter={() => setIsHovered(true)}
      onClick={handleClick}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(1.02)`,
        transition: 'transform 0.2s ease-out',
      }}
    >
      {/* Background image with opacity */}
      <div 
        className={`absolute inset-0 opacity-10 bg-cover ${bgClasses[variant]}`}
        style={{ transform: 'scale(1) translate(2px)' }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        <CardHeader className="pb-0">
          <CardTitle 
            className={`text-2xl transition-all duration-300 ${
              isHovered ? 'aurora-text' : ''
            }`}
          >
            {content.title}
          </CardTitle>
          <CardDescription>{content.description}</CardDescription>
        </CardHeader>

        <CardContent className="pt-6">
          <div className="space-y-2">
            {content.features.map((feature, index) => (
              <div key={index}>
                <h4 className="text-sm font-bold">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </div>
    </Card>
  );
} 