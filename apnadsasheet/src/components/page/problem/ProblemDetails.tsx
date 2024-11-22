import { Rocket, Youtube, ExternalLink, BookOpen } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ProblemDetails({ selectedTopic = "Two Sum" }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-[#505ba0]">
          {selectedTopic}
        </CardTitle>
        <CardDescription>
          <div className="flex flex-wrap gap-2 mt-2">
            <Badge variant="secondary" className="bg-[#6674cc] text-white">
              Easy
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Youtube className="h-4 w-4" />
              Tutorial
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <ExternalLink className="h-4 w-4" />
              LeetCode
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <BookOpen className="h-4 w-4" />
              Article
            </Badge>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">
          Given an array of integers nums and an integer target, return indices
          of the two numbers such that they add up to target. You may assume
          that each input would have exactly one solution, and you may not use
          the same element twice.
        </p>
        <Button className="bg-[#6674cc] hover:bg-[#505ba0]">
          <Rocket className="h-4 w-4 mr-2" />
          Start Solving
        </Button>
      </CardContent>
    </Card>
  );
}
