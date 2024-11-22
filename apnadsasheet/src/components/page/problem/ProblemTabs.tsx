import {Lightbulb, Code, Youtube, PenTool, Zap, Database, Save} from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function ProblemTabs({ isDarkMode=false }) {
    return (
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
    )
}