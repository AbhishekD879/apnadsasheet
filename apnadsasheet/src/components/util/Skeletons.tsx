import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const SkeletonProblemCard = () => (
    <Card className="p-4 hover:bg-gray-50 transition-colors duration-200 border-gray-200">
        <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-32 h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-16 h-6 bg-gray-200 rounded animate-pulse"></div>
            </div>
            <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-8 h-8 bg-gray-200 rounded animate-pulse"></div>
                ))}
            </div>
        </div>
    </Card>
)

export const SkeletonChapter = () => (
    <AccordionItem value="skeleton-chapter" className="border-b border-gray-200 py-2">
        <AccordionTrigger className="hover:no-underline">
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gray-200 rounded animate-pulse"></div>
                    <div className="w-32 h-6 bg-gray-200 rounded animate-pulse"></div>
                </div>
                <div className="flex items-center space-x-3">
                    <div className="w-24 h-2 bg-gray-200 rounded animate-pulse"></div>
                    <div className="w-8 h-4 bg-gray-200 rounded animate-pulse"></div>
                </div>
            </div>
        </AccordionTrigger>
        <AccordionContent>
            <div className="mt-2 space-y-2 pl-9">
                {[1, 2, 3].map((i) => (
                    <SkeletonProblemCard key={i} />
                ))}
            </div>
        </AccordionContent>
    </AccordionItem>
)

export const SkeletonTopic = () => (
    <Card className="mb-6">
        <CardHeader className="bg-white">
            <CardTitle className="text-white">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gray-200 rounded animate-pulse"></div>
                        <div className="w-48 h-8 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                </div>
            </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
            <Accordion type="multiple" className="w-full">
                {[1, 2, 3].map((i) => (
                    <SkeletonChapter key={i} />
                ))}
            </Accordion>
        </CardContent>
    </Card>
)

export function SkeletonAccordionScroll() {
    return (
        <ScrollArea className="h-[calc(100vh-4rem)] py-8">
            <div className="max-w-4xl mx-auto">
                {[1, 2, 3].map((i) => (
                    <SkeletonTopic key={i} />
                ))}
            </div>
        </ScrollArea>
    )
}


export const SkeletonAchievements = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center">
                    <div className="h-5 w-5 mr-2 bg-gray-200 rounded animate-pulse" />
                    <div className="h-6 w-32 bg-gray-200 rounded animate-pulse" />
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-3 gap-2">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="flex flex-col items-center">
                            <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse" />
                            <div className="h-4 w-16 mt-1 bg-gray-200 rounded animate-pulse" />
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

export const SkeletonBookmarkSection = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center">
                    <div className="h-5 w-5 mr-2 bg-gray-200 rounded animate-pulse" />
                    <div className="h-6 w-24 bg-gray-200 rounded animate-pulse" />
                </CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-2">
                    {[1, 2, 3].map((i) => (
                        <li key={i} className="flex items-center space-x-2">
                            <div className="h-8 w-8 bg-gray-200 rounded animate-pulse" />
                            <div className="h-6 w-full bg-gray-200 rounded animate-pulse" />
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    )
}

export const SkeletonDailyChallenge = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center">
                    <div className="h-5 w-5 mr-2 bg-gray-200 rounded animate-pulse" />
                    <div className="h-6 w-32 bg-gray-200 rounded animate-pulse" />
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="h-6 w-3/4 mb-2 bg-gray-200 rounded animate-pulse" />
                <div className="h-4 w-1/2 mb-4 bg-gray-200 rounded animate-pulse" />
                <div className="h-10 w-full bg-gray-200 rounded animate-pulse" />
            </CardContent>
        </Card>
    )
}

export const SkeletonProgressOverview = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center">
                    <div className="h-5 w-5 mr-2 bg-gray-200 rounded animate-pulse" />
                    <div className="h-6 w-40 bg-gray-200 rounded animate-pulse" />
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {[1, 2].map((i) => (
                        <div key={i}>
                            <div className="flex justify-between mb-1">
                                <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
                                <div className="h-4 w-12 bg-gray-200 rounded animate-pulse" />
                            </div>
                            <div className="h-2 w-full bg-gray-200 rounded animate-pulse" />
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}
