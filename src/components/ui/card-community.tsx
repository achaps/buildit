import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function CardCommunity() {
  return (
    <Card className="backdrop-blur-sm bg-white border-white w-[400px] h-[290px] overflow-hidden shadow-lg">
      {/* Background image with opacity */}
      <div 
        className="absolute inset-0 opacity-10 bg-[url('/community-bg.png')] bg-cover"
        style={{ transform: 'scale(1) translate(2px)' }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        <CardHeader className="pb-0">
          <CardTitle className="text-2xl">Community</CardTitle>
          <CardDescription>Users & Testers</CardDescription>
        </CardHeader>

        <CardContent className="pt-6">
          <div className="space-y-2">
            <div>
              <h4 className="text-sm font-bold">Test & Earn</h4>
              <p className="text-sm text-muted-foreground">DAO based decision making, from the start</p>
            </div>
            <div>
              <h4 className="text-sm font-bold">Co-Create & Govern</h4>
              <p className="text-sm text-muted-foreground">Community involvement from 0 to post-launch</p>
            </div>
            <div>
              <h4 className="text-sm font-bold">Become an Insider</h4>
              <p className="text-sm text-muted-foreground">Get involved in bullish projects before anyone else </p>

            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
} 