import Image from "next/image";
import { Mail } from "lucide-react";

export default function BuildersPage() {
  return (
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
  );
}

<p className="pl-3 text-sm text-muted-foreground">
  You&apos;re registered! <Mail className="w-4 h-4" />
</p> 