import { Brain, Trophy, Target, Award } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

export default function LearningPath() {
    const progress = 35

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-[#505ba0] flex items-center">
                    <Brain className="h-6 w-6 mr-2" />
                    Learning Path
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                        <Trophy className="h-8 w-8 text-yellow-500" />
                        <div>
                            <p className="text-sm font-medium">Current Streak</p>
                            <p className="text-2xl font-bold">5 days</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Target className="h-8 w-8 text-green-500" />
                        <div>
                            <p className="text-sm font-medium">Problems Solved</p>
                            <p className="text-2xl font-bold">42 / 100</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Award className="h-8 w-8 text-purple-500" />
                        <div>
                            <p className="text-sm font-medium">Current Rank</p>
                            <p className="text-2xl font-bold">Silver</p>
                        </div>
                    </div>
                </div>
                <Progress value={progress} className="mt-4" />
                <p className="text-sm text-gray-600 mt-2">Level up to Gold by solving 8 more problems!</p>
            </CardContent>
        </Card>
    )
}