import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Award, Gift, Medal, Target} from "lucide-react";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip.tsx";

const Achievements = () => {
    return <Card>
        <CardHeader>
            <CardTitle className="flex items-center text-[#505ba0]">
                <Gift className="h-5 w-5 mr-2" />
                Achievements
            </CardTitle>
        </CardHeader>
        <CardContent>
            <div className="grid grid-cols-3 gap-2">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <div className="flex flex-col items-center">
                                <Medal className="h-8 w-8 text-yellow-500" />
                                <span className="text-xs mt-1">Beginner</span>
                            </div>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Solved 10 Easy Problems</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <div className="flex flex-col items-center">
                                <Target className="h-8 w-8 text-red-500" />
                                <span className="text-xs mt-1">Sharpshooter</span>
                            </div>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Solved 5 Medium Problems</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <div className="flex flex-col items-center opacity-50">
                                <Award className="h-8 w-8 text-purple-500" />
                                <span className="text-xs mt-1">Expert</span>
                            </div>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Solve 3 Hard Problems to Unlock</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
        </CardContent>
    </Card>
}

export default Achievements;