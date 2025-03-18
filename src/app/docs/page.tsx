"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  Menu, 
  ChevronDown, 
  ChevronRight,
  BookOpen,
  Users,
  Building2,
  Rocket,
  Coins,
  Map,
  HelpCircle,
  Target,
  Lightbulb,
  Handshake,
  LineChart,
  Wallet,
  Lock,
  BarChart,
  Timer,
  Scale,
  MessageSquare,
  Code,
  PiggyBank,
  FileText,
  Brain,
  Briefcase
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Subsection {
  title: string;
  displayTitle?: string;
  id: string;
  icon: React.ElementType;
  content?: string;
}

interface Section {
  title: string;
  id: string;
  icon: React.ElementType;
  subsections: Subsection[];
}

interface DocsSidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  sections: Section[];
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
  expandedSections: string[];
  onToggleSection: (sectionId: string) => void;
}

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState<string>("introduction");
  const [expandedSections, setExpandedSections] = useState<string[]>(["introduction"]);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const sections: Section[] = [
    {
      title: "Introduction",
      id: "introduction",
      icon: BookOpen,
      subsections: [
        { 
          title: "Mission & Vision",
          displayTitle: "BUILDR is the Y Combinator killer for Web3.",
          id: "mission-vision", 
          icon: Target,
          content: `We created the ultimate accelerator platform connecting Financiers, Builders, and Community through transparent blockchain governance, and incentivized collaboration, transforming visionary ideas into successful decentralized applications.

Buildr connects three essential actors in a smart ecosystem that transforms how Web3 projects are built, funded, and adopted:

<strong>Financiers (founders, KOLs, DeFi whales, DAOs)</strong>

 • Bringing their visions to life from ideation to massive adoption
 • Benefiting from a transparent, secure, and efficient launchpad
 • Getting a dedicated user base and access to top-tier building teams from Day 1

<strong>Builders (developers, project managers, product owners, designers)</strong>

 • Allowing them to never build for free again, we reinvented Hackathons 
 • Getting rewarded in tokens and equity for every project they build
 • Becoming the next generation of Web3 builders

<strong>Community (organized as a DAO including users, technical professionals, investors, AI agents)</strong>

 • Becoming insiders and getting early access to projects 
 • Allowing investement opportunities in promissing projects with no minimum entry barrier
 • Making their voice heard and influencing project direction through DAO governance
 
This isn't just another launchpad—it's a complete ecosystem redesign that aligns incentives across all participants, creating a self-reinforcing environment where quality projects thrive, builders receive fair compensation, and community members gain meaningful ownership.`
        },
        { 
          title: "Problem Statement", 
          id: "problem-statement", 
          icon: Lightbulb,
          content: `Even with available third-party teams, project management typically lacks transparency and efficiency, leading to delays and misaligned outcomes. Projects also frequently face insufficient market exposure before launch, increasing risks in the fast-paced Web3 environment.

<strong>Identified problems include:</strong>

• No transparency & Missing support
• VC dominance & Retail exclusion
• Poor product development & Community involvement

This results in wasted financial resources, difficulty scaling for Ventures, and users treated merely as exit liquidity.`
        },
        { 
          title: "Value Proposition", 
          id: "value-proposition", 
          icon: Handshake,
          content: `<strong>Buildr provides a comprehensive solution that addresses the key challenges in Web3 project development:</strong>

• AI-powered project evaluation and validation
• Transparent blockchain governance
• Incentivized collaboration between all stakeholders
• Comprehensive incubator services
• Community-driven project development
• Fair and transparent reward distribution`
        },
      ],
    },
    {
      title: "Actors",
      id: "actors",
      icon: Users,
      subsections: [
        { 
          title: "Financiers", 
          id: "financiers", 
          icon: Wallet,
          content: `<strong>Who?</strong>

• Founders: Existing project teams or individuals aiming to expand their token ecosystem
• KOLs: Influential figures with substantial communities and robust distribution capabilities
• DeFi Whales: Entities with considerable assets looking to launch new blockchain ventures
• DAOs: Decentralized Autonomous Organizations possessing dedicated funds
• Community Initiative: Members with compelling project ideas

<strong>Identified problems Financiers face:</strong>

• No transparency & Missing support
• VC dominance & Retail exclusion
• Poor product development & Community involvement`
        },
        { 
          title: "Builders", 
          id: "builders", 
          icon: Building2,
          content: `<strong>Who?</strong>

Technical talent capable of turning ideas into functional blockchain projects:
• Developers
• Project Managers
• Product Owners
• UX/UI Designers
• Curators

<strong>Why?</strong>

• Significant acquisition challenges in a hyper-competitive market
• Limited real-world market exposure
• Equity ownership is essential for long-term trust and motivation
• Struggle with strategy and distribution despite technical expertise`
        },
        { 
          title: "Community (DAO)", 
          id: "community", 
          icon: Users,
          content: `<strong>Who?</strong>

Organized as a DAO, including:
• Everyday users eager to test and engage with dApps
• Technical professionals providing detailed feedback
• Investors participating in building processes
• AI agents evaluating project potential

<strong>Why?</strong>

• Early exposure to innovative Web3 projects
• Opportunity to earn equity without investment minimums
• Active role in project validation and lifecycle
• Ability to propose and collaborate on visionary projects`
        },
      ],
    },
    {
      title: "Buildr Platform",
      id: "buildr-platform",
      icon: Rocket,
      subsections: [
        { 
          title: "Project Submission Process", 
          id: "project-submission", 
          icon: FileText,
          content: `<strong>Simplified submission process allowing Financiers to outline:</strong>

• Project goals and expected outcomes
• Existing brand assets
• Time constraints
• Maximum Builder participation
• Rewards structure
• Equity allocation`
        },
        { 
          title: "AI-Powered Project Evaluation", 
          id: "ai-evaluation", 
          icon: Brain,
          content: `<strong>AI agent evaluation considers:</strong>

• Historical success of Financiers
• Social media performance
• Current market trends
• Blockchain market health
• Innovative potential
• Economic viability
• Benchmarking against similar solutions

<strong>AI-driven pre-valuation provides:</strong>

• Initial financial visibility
• Community funding pool options
• DAO validation through governance
• Secondary evaluation upon launch`
        },
        { 
          title: "Community Involvement & Governance", 
          id: "community-governance", 
          icon: Scale,
          content: `<strong>Community integrated into selection and validation:</strong>

• DAO-curated selection shortlist
• Community-driven reviews
• Technical and functional testing
• Post-selection procedures
• Community-driven final validation
• Transparent reward distribution`
        },
        { 
          title: "Investment Pool Mechanics", 
          id: "investment-pool", 
          icon: PiggyBank,
          content: `<strong>Optional investment pool mechanisms:</strong>

• Community investors secure future project rewards
• Flexible locking conditions
• Pre-launch investor flexibility
• Secure escrow management
• Transparent fund tracking`
        },
      ],
    },
    {
      title: "Incubator",
      id: "incubator",
      icon: Building2,
      subsections: [
        { 
          title: "Services & Responsibilities", 
          id: "services", 
          icon: Briefcase,
          content: `<strong>Central to the Buildr ecosystem, the incubator ensures:</strong>

• Transparent reward and equity distribution
• Rigorous growth-related fund-tracking
• Strategic advice from recognized experts
• Continuous engagement between teams and DAO
• Active, collaborative governance`
        },
        { 
          title: "Strategic Partnerships", 
          id: "partnerships", 
          icon: Handshake,
          content: `<strong>Partnerships with:</strong>

• Prominent Web3 entities
• Media outlets
• Exchanges
• Industry experts
• Influencers`
        },
        { 
          title: "Fund Transparency & Tracking", 
          id: "transparency", 
          icon: LineChart,
          content: `<strong>Comprehensive tracking and transparency:</strong>

• Blockchain-based fund management
• Real-time reporting
• Automated accountability
• Public dashboards
• Smart contract escrow services`
        },
      ],
    },
    {
      title: "Tokenomics",
      id: "tokenomics",
      icon: Coins,
      subsections: [
        { 
          title: "$BUILDR Token Utility", 
          id: "token-utility", 
          icon: Coins,
          content: `<strong>$BUILDR token provides:</strong>

• DAO governance rights
• Exclusive project investment opportunities
• Community rewards
• Builder incentives
• Event-driven giveaways`
        },
        { 
          title: "Token Distribution & Vesting", 
          id: "token-distribution", 
          icon: BarChart,
          content: `<strong>Initial phases utilize convertible pBUILDR token:</strong>

• Fully functional post-TGE
• Maturity milestone-based conversion
• Transparent vesting schedules
• Fair distribution mechanisms`
        },
        { 
          title: "Staking and Rewards", 
          id: "staking", 
          icon: Lock,
          content: `<strong>Staking mechanisms:</strong>

• Governance participation
• Reward multipliers
• Exclusive access to projects
• Community voting power
• Platform fee sharing`
        },
      ],
    },
    {
      title: "Roadmap",
      id: "roadmap",
      icon: Map,
      subsections: [
        { 
          title: "Development Milestones", 
          id: "milestones", 
          icon: Timer,
          content: `<strong>Q1 2025 - Initial Setup:</strong>

• Launch dedicated landing pages
• Waitlist registrations
• Initial marketing campaign

<strong>Q2 2025:</strong>

• MVP platform release
• AI evaluation algorithms
• DAO governance mechanisms
• First round of onboarding

<strong>Q3 2025:</strong>

• Incubator program launch
• Strategic partnerships
• Public beta launch
• Blockchain fund transparency

<strong>Q4 2025:</strong>

• Security and legal audit infrastructure
• AI evaluation enhancement
• Official ecosystem launch
• Token Generation Event`
        },
        { 
          title: "Long-Term Vision & Scalability", 
          id: "vision", 
          icon: Rocket,
          content: `<strong>2026 and Beyond:</strong>

• Scaling Buildr Incubator
• Enhanced DAO governance
• Platform AI improvements
• Blockchain tool development
• Global market expansion`
        },
      ],
    },
    {
      title: "FAQs",
      id: "faqs",
      icon: HelpCircle,
      subsections: [
        { 
          title: "General Questions", 
          id: "general-faqs", 
          icon: MessageSquare,
          content: `<strong>What exactly is Buildr?</strong>
Buildr is a Web3 launchpad and incubator platform connecting Financiers, Builders, and Community members, streamlining blockchain project creation, funding, and growth through AI-powered evaluations and decentralized governance.

<strong>Who can benefit from using Buildr?</strong>
Founders, influential KOLs, DeFi whales, DAOs, blockchain developers, product managers, UX/UI designers, tech enthusiasts, early adopters, and investors all benefit directly through equity, rewards, and meaningful participation.

<strong>How can I join Buildr at this stage?</strong>
You can join by registering through our dedicated landing pages for Financiers, Builders, or Community members, and sign up for early waitlist access.`
        },
        { 
          title: "Technical Questions", 
          id: "technical-faqs", 
          icon: Code,
          content: `<strong>How is transparency ensured in Buildr?</strong>
Buildr uses blockchain-based smart contracts for complete fund transparency, real-time reporting, and automated accountability through an accessible blockchain explorer and public dashboards.

<strong>How are projects evaluated?</strong>
Projects undergo AI-driven initial and secondary evaluations, considering market trends, social presence, economic viability, innovative potential, and technical robustness.

<strong>How does the DAO influence decisions?</strong>
The DAO actively participates in pre-selection, validation, equity distribution, governance, and the strategic direction of projects through transparent voting mechanisms.`
        },
        { 
          title: "Investment & Participation", 
          id: "investment-faqs", 
          icon: PiggyBank,
          content: `<strong>Is there a minimum amount required to invest in Buildr projects?</strong>
No, Buildr democratizes investment by allowing participation without a minimum investment, making equity opportunities accessible for all members.

<strong>How is transparency of investment funds guaranteed?</strong>
Funds are managed through blockchain-based escrow smart contracts providing full transparency, with real-time tracking accessible to all stakeholders via a dedicated dashboard.

<strong>When and how can I withdraw my investment?</strong>
Investors have flexible entry and exit options in the investment pools before final Builder selection. After project launch, agreed-upon unlocking schedules apply to maintain market stability.`
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:hidden">
        <div className="container flex h-14 items-center justify-between">
          <Link href="/">
            <Image
              src="/logo-black.png"
              alt="Buildr Logo"
              width={120}
              height={40}
              className="dark:invert"
            />
          </Link>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="h-8 w-8 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 border-l">
              <DocsSidebar
                sections={sections}
                activeSection={activeSection}
                onSectionChange={setActiveSection}
                expandedSections={expandedSections}
                onToggleSection={handleToggleSection}
                className="pt-12"
              />
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Desktop header */}
      <header className="hidden md:flex h-16 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex items-center justify-between">
          <Link href="/">
            <Image
              src="/logo-black.png"
              alt="Buildr Logo"
              width={120}
              height={40}
              className="dark:invert"
            />
          </Link>
          <div className="flex-1 flex items-center justify-center">
            <nav className="rounded-full">
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
        </div>
      </header>

      <div className="flex h-[calc(100vh-4rem)]">
        {/* Desktop Sidebar */}
        <div className="hidden md:flex w-[280px] border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="w-full">
            <DocsSidebar 
              sections={sections} 
              activeSection={activeSection} 
              onSectionChange={setActiveSection}
              expandedSections={expandedSections}
              onToggleSection={handleToggleSection}
            />
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Main Content */}
          <ScrollArea className="flex-1">
            <div className="container mx-auto px-6 py-8 max-w-4xl">
              <div className="prose prose-slate dark:prose-invert max-w-none">
                {sections.map((section) => (
                  <div key={section.id} id={section.id} className="mb-16">
                    <h1 className="text-4xl font-bold mb-8 border-b pb-4">
                      {section.title}
                    </h1>
                    {section.subsections.map((subsection) => (
                      <div key={subsection.id} id={subsection.id} className="mb-12">
                        <h2 className="text-2xl font-semibold mb-6 text-primary/90">
                          {subsection.displayTitle || subsection.title === "Mission & Vision" ? "BUILDR is the Y Combinator killer for Web3." : subsection.title}
                        </h2>
                        <div className="px-1">
                          <div 
                            className="whitespace-pre-line text-muted-foreground"
                            dangerouslySetInnerHTML={{ __html: subsection.content || '' }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}

function DocsSidebar({ 
  sections, 
  activeSection, 
  onSectionChange, 
  expandedSections,
  onToggleSection,
  className 
}: DocsSidebarProps) {
  return (
    <div className={cn("h-full flex flex-col", className)}>
      <div className="flex-1 overflow-y-auto">
        <div className="space-y-4 py-2">
          <div className="px-3 py-2">
            <div className="space-y-1">
              {sections.map((section: Section) => (
                <div key={section.id}>
                  <Button
                    variant={activeSection === section.id ? "secondary" : "ghost"}
                    className="w-full justify-start font-normal group"
                    onClick={() => {
                      onSectionChange(section.id);
                      onToggleSection(section.id);
                    }}
                  >
                    <section.icon className="h-4 w-4 mr-2" />
                    {section.title}
                    {expandedSections.includes(section.id) ? (
                      <ChevronDown className="h-4 w-4 ml-auto transition-transform group-hover:translate-y-0.5" />
                    ) : (
                      <ChevronRight className="h-4 w-4 ml-auto transition-transform group-hover:translate-x-0.5" />
                    )}
                  </Button>
                  {expandedSections.includes(section.id) && (
                    <div className="ml-4 mt-2 space-y-1">
                      {section.subsections.map((subsection: Subsection) => (
                        <Button
                          key={subsection.id}
                          variant="ghost"
                          className="w-full justify-start text-sm font-normal group"
                          onClick={() => {
                            document.getElementById(subsection.id)?.scrollIntoView({ behavior: "smooth" });
                          }}
                        >
                          {subsection.title}
                          <ChevronRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 