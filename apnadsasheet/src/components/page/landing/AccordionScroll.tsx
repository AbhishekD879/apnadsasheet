import { ScrollArea } from "@/components/ui/scroll-area"
import { Progress } from "@/components/ui/progress"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Bookmark, BookOpen, CheckCircle, Circle, ExternalLink, HelpCircle, Youtube } from "lucide-react"
import topics, {Chapter as TChapter, Problem as TProblem, Topic as TTopic} from "@/data/topics"
import {useLandingContext} from "@/context/LandingContext.tsx";
import {Link} from "react-router-dom";
import {SkeletonChapter, SkeletonProblemCard, SkeletonTopic} from "@/components/util/Skeletons.tsx";

const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
        case 'easy': return 'bg-green-100 text-green-800 border-green-300'
        case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-300'
        case 'hard': return 'bg-red-100 text-red-800 border-red-300'
        default: return 'bg-gray-100 text-gray-800 border-gray-300'
    }
}

const getStatusIcon = (status: string) => {
    switch (status) {
        case 'completed': return <CheckCircle className="h-4 w-4 text-green-500" />
        case 'in-progress': return <Circle className="h-4 w-4 text-yellow-500" />
        case 'not-started': return <HelpCircle className="h-4 w-4 text-gray-500" />
        default: return null
    }
}

const ProblemCard = ({ problem }:{
    problem:TProblem
}) =>{
    const {dispatch,bookmarkedProblem,loading,completedProblem} = useLandingContext()
    if(loading) return <SkeletonProblemCard/>
    return  <Card className="p-4 hover:bg-gray-50 transition-colors duration-200 border-gray-200">
        <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
                <Checkbox checked={completedProblem.includes(problem.id)} onClick={()=>dispatch({
                    type:"TOGGLE_COMPLETED_PROBLEM",
                    payload:problem.id
                })} />
                <span className="font-medium">{problem.name}</span>
                <Badge className={`${getDifficultyColor(problem.difficulty)}`}>
                    {problem.difficulty}
                </Badge>
                {getStatusIcon(problem.status)}
            </div>
            <div className="flex space-x-2">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="outline" size="icon" onClick={() => window.open(problem.youtubeLink, '_blank')}>
                                <Youtube className="h-4 w-4 text-red-500" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Watch YouTube Tutorial</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="outline" size="icon" onClick={() => window.open(problem.leetcodeLink, '_blank')}>
                                <ExternalLink className="h-4 w-4 text-blue-500" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Solve on LeetCode</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="outline" size="icon" onClick={() => window.open(problem.articleLink, '_blank')}>
                                <BookOpen className="h-4 w-4 text-green-500" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Read Article</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <Link to={`/problem/${problem.id}`}>
                    <Button variant="default">
                        Solve
                    </Button>
                </Link>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={() => dispatch({
                                    type:"TOGGLE_BOOKMARKED_PROBLEM",
                                    payload:problem.id
                                })}
                            >
                                <Bookmark
                                    className={`h-4 w-4 ${
                                        bookmarkedProblem.includes(problem.id)
                                            ? 'text-yellow-500 fill-yellow-500'
                                            : 'text-gray-500'
                                    }`}
                                />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Add Bookmark</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
        </div>
    </Card>
}

const Chapter = ({ chapter }:{
    chapter:TChapter
}) => {
    const { completedProblem,loading } = useLandingContext();
    const totalCompletedProblemForChapter = chapter.problems.filter((problem) =>completedProblem.includes(problem.id));
    const totalProblems = chapter.problems.length;
    const progressPercentage =
        totalProblems > 0 ? (totalCompletedProblemForChapter.length / totalProblems) * 100 : 0;
    if(loading) return <SkeletonChapter/>
    return(
        <AccordionItem value={chapter.name} className="border-b border-gray-200 py-2">
            <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center space-x-3">
                        <chapter.icon className="h-6 w-6 text-blue-600" />
                        <span className="text-lg font-medium text-gray-900">{chapter.name}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Progress value={Math.round(progressPercentage)} className="w-24" />
                        <span className="text-sm text-gray-600">{Math.round(progressPercentage)}%</span>
                    </div>
                </div>
            </AccordionTrigger>
            <AccordionContent>
                <div className="mt-2 space-y-2 pl-9">
                    {chapter.problems.map((problem) => (
                        <ProblemCard key={problem.name} problem={problem} />
                    ))}
                </div>
            </AccordionContent>
        </AccordionItem>
    )
}


const Topic = ({ topic }:{
    topic:TTopic
}) => {
    const {loading} = useLandingContext()
    if(loading) return <SkeletonTopic/>
    return(
        <Card className="mb-6">
            <CardHeader className="bg-white">
                <CardTitle className="text-white">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <topic.icon className="h-8 w-8" />
                            <span className="text-2xl font-bold">{topic.name}</span>
                        </div>
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
                <Accordion type="multiple" className="w-full">
                    {topic.chapters.map((chapter) => (
                        <Chapter key={chapter.name} chapter={chapter} />
                    ))}
                </Accordion>
            </CardContent>
        </Card>
    )
}

function AccordionScroll() {
    const {searchTerm} = useLandingContext()
    // Filter topics based on search term and return the filtered topics.
    const filteredTopics = topics.map(topic => ({
        ...topic,
        chapters: topic.chapters.map(chapter => ({
            ...chapter,
            problems: chapter.problems.filter(problem =>
                problem.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
        })).filter(chapter => chapter.problems.length > 0)
    })).filter(topic => topic.chapters.length > 0)
    return (
        <ScrollArea className="h-[calc(100vh- .5rem)] py-8">
            <div className="max-w-4xl mx-auto">
                {filteredTopics.map((topic) => (
                    <Topic key={topic.name} topic={topic} />
                ))}
            </div>
        </ScrollArea>
    )
}

export default AccordionScroll