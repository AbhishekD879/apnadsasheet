import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Activity} from "lucide-react";
import {Progress} from "@/components/ui/progress.tsx";
import {useLandingContext} from "@/context/LandingContext.tsx";
import topics from "@/data/topics.ts";
import {SkeletonProgressOverview} from "@/components/util/Skeletons.tsx";

const determineLengthOfProblem = ()=>{
    let totalProgress = 0;
    topics.forEach((topic) => {
        topic.chapters.forEach((chapter) => {
            totalProgress += chapter.problems.length;
        });
    })
    return totalProgress;
}

const ProgressOverview = () => {
    const { completedProblem,loading } = useLandingContext(); // Access context
    const totalProblems = determineLengthOfProblem(); // Define total problems (can be dynamic)
    const progressPercentage =
        totalProblems > 0 ? (completedProblem.length / totalProblems) * 100 : 0;
    if(loading) return <SkeletonProgressOverview/>
    return  <Card>
        <CardHeader>
            <CardTitle className="flex items-center text-[#505ba0]">
                <Activity className="h-5 w-5 mr-2" />
                Progress Overview
            </CardTitle>
        </CardHeader>
        <CardContent>
            <div className="space-y-4">
                <div>
                    <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Overall Progress</span>
                        <span className="text-sm font-medium">{Math.round(progressPercentage)}%</span>
                    </div>
                    <Progress value={progressPercentage} className="w-full" />
                </div>
                <div>
                    <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Problems Solved</span>
                        <span className="text-sm font-medium">{completedProblem.length}/{totalProblems}</span>
                    </div>
                    <Progress max={totalProblems} value={completedProblem.length} className="w-full" />
                </div>
            </div>
        </CardContent>
    </Card>
}

export default ProgressOverview;