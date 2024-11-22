import { useState } from 'react'
import { Search, Menu, BookOpen, Youtube, ExternalLink, User, Code, Zap, Trophy, Star, Brain, Target, Award, Lightbulb, Rocket, Coffee, MessageSquare, HelpCircle, FileText, Gift, PenTool, Save, Database,  Share2, ArrowUpRight, Sparkles,  Gamepad2,  Play,  Settings, LogOut, } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Switch } from '@/components/ui/switch'
import { ScrollArea } from '@/components/ui/scroll-area'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function Problem() {
    const [selectedTopic, setSelectedTopic] = useState('Arrays')
    const [progress, setProgress] = useState(35)
    const [isDarkMode, setIsDarkMode] = useState(false)
    const [xp, setXp] = useState(1250)

    return (
        <main className="flex-1 flex flex-col overflow-hidden">
            {/* Header */}
            <header className={`p-4 flex items-center justify-between border-b border-[#e1e1e1] ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <div className="flex items-center">
                    <Button variant="ghost" size="icon" aria-label="Toggle sidebar">
                        <Menu className="h-6 w-6" />
                    </Button>
                    <div className="ml-4 relative">
                        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input type="search" placeholder="Search topics..." className="pl-8 w-64" />
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Switch
                                    checked={isDarkMode}
                                    onCheckedChange={setIsDarkMode}
                                    className="data-[state=checked]:bg-[#6674cc]"
                                />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Toggle {isDarkMode ? 'light' : 'dark'} mode</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <User className="h-6 w-6" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <User className="mr-2 h-4 w-4" />
                                <span>Profile</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Settings className="mr-2 h-4 w-4" />
                                <span>Settings</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <LogOut className="mr-2 h-4 w-4" />
                                <span>Logout</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </header>

            {/* Content */}
            <ScrollArea className="flex-1">
                <div className="max-w-6xl mx-auto p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Left Column */}
                        <div className="md:col-span-2 space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-2xl font-bold text-[#505ba0]">{selectedTopic}</CardTitle>
                                    <CardDescription>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            <Badge variant="secondary" className="bg-[#6674cc] text-white">Easy</Badge>
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
                                        Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.
                                    </p>
                                    <Button className="bg-[#6674cc] hover:bg-[#505ba0]">
                                        <Rocket className="h-4 w-4 mr-2" />
                                        Start Solving
                                    </Button>
                                </CardContent>
                            </Card>

                            <Tabs defaultValue="problem">
                                <TabsList className="grid w-full grid-cols-4">
                                    <TabsTrigger value="problem">Problem</TabsTrigger>
                                    <TabsTrigger value="solution">Solution</TabsTrigger>
                                    <TabsTrigger value="video">Video Tutorial</TabsTrigger>
                                    <TabsTrigger value="notes">Notes</TabsTrigger>
                                </TabsList>
                                <TabsContent value="problem">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="flex items-center">
                                                <Lightbulb className="h-6 w-6 mr-2 text-yellow-500" />
                                                Problem Details
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p>Detailed problem description and examples go here.</p>
                                        </CardContent>
                                    </Card>
                                </TabsContent>
                                <TabsContent value="solution">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="flex items-center">
                                                <Code className="h-6 w-6 mr-2 text-green-500" />
                                                Solution
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                      <pre className={`p-4 rounded-md overflow-x-auto ${isDarkMode ? 'bg-gray-800' : 'bg-[#f8f8fd]'}`}>
                        <code className="text-sm">
                          {`function twoSum(nums: number[], target: number): number[] {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}`}
                        </code>
                      </pre>
                                            <div className="mt-4 space-y-2">
                                                <p className="text-sm text-gray-600 flex items-center">
                                                    <Zap className="h-4 w-4 mr-2 text-yellow-500" />
                                                    Time Complexity: O(n)
                                                </p>
                                                <p className="text-sm text-gray-600 flex items-center">
                                                    <Database className="h-4 w-4 mr-2 text-blue-500" />
                                                    Space Complexity: O(n)
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </TabsContent>
                                <TabsContent value="video">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="flex items-center">
                                                <Youtube className="h-6 w-6 mr-2 text-red-500" />
                                                Video Tutorial
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="aspect-video">
                                                <iframe
                                                    width="100%"
                                                    height="100%"
                                                    src="https://www.youtube.com/embed/KLlXCFG5TnA"
                                                    title="YouTube video player"
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                ></iframe>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </TabsContent>
                                <TabsContent value="notes">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="flex items-center">
                                                <PenTool className="h-6 w-6 mr-2 text-purple-500" />
                                                Your Notes
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                      <textarea
                          className={`w-full p-2 border rounded-md ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white'}`}
                          rows={6}
                          placeholder="Add your notes here..."
                      ></textarea>
                                            <Button className="mt-2 bg-[#6674cc] hover:bg-[#505ba0]">
                                                <Save className="h-4 w-4 mr-2" />
                                                Save Notes
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </TabsContent>
                            </Tabs>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <Gamepad2 className="h-6 w-6 mr-2 text-indigo-500" />
                                        Interactive Coding Playground
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="mb-4">
                                        <label htmlFor="code-input" className="block text-sm font-medium mb-2">Enter your code:</label>
                                        <textarea
                                            id="code-input"
                                            className={`w-full p-2 border rounded-md font-mono text-sm ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white'}`}
                                            rows={6}
                                            defaultValue={`function twoSum(nums, target) {
  // Your implementation here
}`}
                                        ></textarea>
                                    </div>
                                    <Button className="bg-[#6674cc] hover:bg-[#505ba0]">
                                        <Play className="h-4 w-4 mr-2" />
                                        Run Code
                                    </Button>
                                    <div className="mt-4">
                                        <h4 className="font-medium mb-2">Output:</h4>
                                        <pre className={`p-2 rounded-md ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100'}`}>
                      // Code execution results will appear here
                    </pre>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-6">
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

                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <Coffee className="h-6 w-6 mr-2 text-brown-500" />
                                        Daily Challenge
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="font-semibold mb-2">Palindrome Number</p>
                                    <p className="text-sm text-gray-600 mb-4">Determine whether an integer is a palindrome.</p>
                                    <Button className="w-full bg-[#6674cc] hover:bg-[#505ba0]">
                                        <Zap className="h-4 w-4 mr-2" />
                                        Take the Challenge
                                    </Button>
                                </CardContent>
                            </Card>

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
                                                <p className="text-xs text-gray-500">Solved 100 problems in 30 days!</p>
                                            </div>
                                            <Badge variant="secondary" className="ml-auto">Impressive!</Badge>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <Avatar>
                                                <AvatarImage src="/avatars/02.png" alt="@algolearner" />
                                                <AvatarFallback>AL</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <p className="text-sm font-medium">@algolearner</p>
                                                <p className="text-xs text-gray-500">Maintained a 50-day streak!</p>
                                            </div>
                                            <Badge variant="secondary" className="ml-auto">Dedicated!</Badge>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </ScrollArea>

            {/* Footer */}
            <footer className={`border-t border-[#e1e1e1] p-4 text-center text-sm ${isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-600'}`}>
                <div className="flex justify-center space-x-4">
                    <a href="#" className="hover:text-[#6674cc] flex items-center">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        Feedback
                    </a>
                    <a href="#" className="hover:text-[#6674cc] flex items-center">
                        <HelpCircle className="h-4 w-4 mr-1" />
                        Support
                    </a>
                    <a href="#" className="hover:text-[#6674cc] flex items-center">
                        <FileText className="h-4 w-4 mr-1" />
                        Documentation
                    </a>
                    <a href="#" className="hover:text-[#6674cc] flex items-center">
                        <ArrowUpRight className="h-4 w-4 mr-1" />
                        Upgrade to Pro
                    </a>
                </div>
            </footer>
        </main>
    )
}