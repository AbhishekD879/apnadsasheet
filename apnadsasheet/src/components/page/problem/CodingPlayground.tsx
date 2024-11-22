import { Gamepad2, Play } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function CodingPlayground({ isDarkMode=false }) {
    return (
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
    )
}