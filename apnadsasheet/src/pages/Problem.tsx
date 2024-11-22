import { ScrollArea } from '@/components/ui/scroll-area'
import LearningPath from "@/components/page/problem/LearningPath.tsx";
import DailyChallenge from "@/components/page/problem/DailyChallenge.tsx";
import Rewards from "@/components/page/problem/Rewards.tsx";
import CommunityHighlights from "@/components/page/problem/CommunityHighlights.tsx";
import CodingPlayground from "@/components/page/problem/CodingPlayground.tsx";
import ProblemTabs from "@/components/page/problem/ProblemTabs.tsx";
import ProblemDetails from "@/components/page/problem/ProblemDetails.tsx";

export default function Problem() {


    return (
        <main className="flex-1 flex flex-col overflow-hidden">
            {/* Content */}
            <ScrollArea className="flex-1">
                <div className="max-w-6xl mx-auto p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Left Column */}
                        <div className="md:col-span-2 space-y-6">
                            <ProblemDetails/>

                            <ProblemTabs/>

                            <CodingPlayground/>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-6">
                            <LearningPath/>

                            <DailyChallenge/>

                            <Rewards/>

                            <CommunityHighlights/>
                        </div>
                    </div>
                </div>
            </ScrollArea>
        </main>
    )
}