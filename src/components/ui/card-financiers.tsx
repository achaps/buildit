import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function CardFinanciers() {
  return (
    <Card className="backdrop-blur-sm bg-white border-white/20 w-[400px] h-[290px] overflow-hidden shadow-lg">
      {/* Background image with opacity */}
      <div 
        className="absolute inset-0 opacity-10 bg-[url('/founders-bg.png')] bg-cover"
        style={{ transform: 'scale(1) translate(2px)' }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        <CardHeader className="pb-0">
          <CardTitle className="text-2xl">Financiers</CardTitle>
          <CardDescription>Founders & Investors</CardDescription>
        </CardHeader>

        <CardContent className="pt-6">
          <div className="space-y-2">
            <div>
              <h4 className="text-sm font-bold">Grow your ecosystem</h4>
              <p className="text-sm text-muted-foreground">Top-tier Builders ready to ship your projects</p>
            </div>
            <div>
              <h4 className="text-sm font-bold">Get your first User base</h4>
              <p className="text-sm text-muted-foreground">Community involvement from 0 to post-launch</p>
            </div>
            <div>
              <h4 className="text-sm font-bold">Secure your funds</h4>
              <p className="text-sm text-muted-foreground">Transparent fund management & distribution</p>

            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
} 