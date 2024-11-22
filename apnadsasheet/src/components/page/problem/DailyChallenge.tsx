import { Coffee, Zap } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DailyChallenge() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Coffee className="h-6 w-6 mr-2 text-brown-500" />
          Daily Challenge
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="font-semibold mb-2">Palindrome Number</p>
        <p className="text-sm text-gray-600 mb-4">
          Determine whether an integer is a palindrome.
        </p>
        <Button className="w-full bg-[#6674cc] hover:bg-[#505ba0]">
          <Zap className="h-4 w-4 mr-2" />
          Take the Challenge
        </Button>
      </CardContent>
    </Card>
  );
}
