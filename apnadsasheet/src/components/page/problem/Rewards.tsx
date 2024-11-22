import { Gift, Sparkles, Star, Award } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export default function Rewards() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center">
                    <Gift className="h-6 w-6 mr-2 text-pink-500" />
                    Rewards
                </CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-2">
                    <li className="flex items-center">
                        <Sparkles className="h-5 w-5 mr-2 text-yellow-500" />
                        <span className="text-sm">Exclusive "Code Ninja" avatar at 50 problems</span>
                    </li>
                    <li className="flex items-center">
                        <Star className="h-5 w-5 mr-2 text-purple-500" />
                        <span className="text-sm">1-month free premium at 100 problems</span>
                    </li>
                    <li className="flex items-center">
                        <Award className="h-5 w-5 mr-2 text-green-500" />
                        <span className="text-sm">Certificate of Achievement at 500 problems</span>
                    </li>
                </ul>
            </CardContent>
        </Card>
    )
}