import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function CardBuilders() {
  return (
    <Card className="backdrop-blur-sm bg-white/80 border-white w-[400px] h-[290px] overflow-hidden shadow-lg">
      {/* Background image with opacity */}
      <div 
        className="absolute inset-0 opacity-10 bg-[url('/builders-bg.png')] bg-cover"
        style={{ transform: 'scale(1) translate(2px)' }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        <CardHeader className="pb-0">
          <CardTitle className="text-2xl">Builders</CardTitle>
          <CardDescription>Developers & Product Owners</CardDescription>
        </CardHeader>

        <CardContent className="pt-6">
          <div className="space-y-2">
            <div>
              <h4 className="text-sm font-bold">Earn rewards for each submission</h4>
              <p className="text-sm text-muted-foreground">Distributed in pBUILDR</p>
            </div>
            <div>
              <h4 className="text-sm font-bold">Winning team gets Equity</h4>
              <p className="text-sm text-muted-foreground">Obtain a % of ownership & share revenues</p>
            </div>
            <div>
              <h4 className="text-sm font-bold">Post Launch support</h4>
              <p className="text-sm text-muted-foreground">Skyrocket your project with our Incubator</p>

            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
} 