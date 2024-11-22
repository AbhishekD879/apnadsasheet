import React from "react";
import { Share2 } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function CommunityHighlights() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Share2 className="h-6 w-6 mr-2 text-blue-500" />
          Community Highlights
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="/avatars/01.png" alt="@coderninja" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">@coderninja</p>
              <p className="text-xs text-gray-500">
                Solved 100 problems in 30 days!
              </p>
            </div>
            <Badge variant="secondary" className="ml-auto">
              Impressive!
            </Badge>
          </div>
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="/avatars/02.png" alt="@algolearner" />
              <AvatarFallback>AL</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">@algolearner</p>
              <p className="text-xs text-gray-500">
                Maintained a 50-day streak!
              </p>
            </div>
            <Badge variant="secondary" className="ml-auto">
              Dedicated!
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
