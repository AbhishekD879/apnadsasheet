import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import { Activity } from "lucide-react";

const RecentActivity = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center text-[#505ba0]">
          <Activity className="h-5 w-5 mr-2" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm">
          <li className="flex justify-between items-center">
            <span>Solved "Two Sum"</span>
            <span className="text-gray-500">2h ago</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Started "Merge Sort"</span>
            <span className="text-gray-500">1d ago</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Completed "Arrays" chapter</span>
            <span className="text-gray-500">3d ago</span>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
