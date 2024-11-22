import { useState, useEffect } from "react";
import {
  Search,
  Layers,
  GitBranch,
  TreesIcon as Tree,
  Cpu,
  Zap,
  Workflow,
  BarChart,
  CheckCircle,
  Circle,
  HelpCircle,
  Youtube,
  ExternalLink,
  BookOpen,
  Medal,
  Target,
  Award,
  Bookmark,
  Calendar,
  Activity,
  Gift,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const topics = [
  {
    name: "Data Structures",
    icon: Layers,
    progress: 65,
    chapters: [
      {
        name: "Arrays",
        icon: BarChart,
        progress: 80,
        problems: [
          {
            name: "Two Sum",
            difficulty: "Easy",
            status: "completed",
            youtubeLink: "https://www.youtube.com/watch?v=KLlXCFG5TnA",
            leetcodeLink: "https://leetcode.com/problems/two-sum/",
            articleLink: "https://www.geeksforgeeks.org/two-sum/",
          },
          {
            name: "Best Time to Buy and Sell Stock",
            difficulty: "Easy",
            status: "in-progress",
            youtubeLink: "https://www.youtube.com/watch?v=1pkOgXD63yU",
            leetcodeLink:
              "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
            articleLink: "https://www.geeksforgeeks.org/stock-buy-sell/",
          },
          {
            name: "Contains Duplicate",
            difficulty: "Easy",
            status: "not-started",
            youtubeLink: "https://www.youtube.com/watch?v=3OamzN90kPg",
            leetcodeLink: "https://leetcode.com/problems/contains-duplicate/",
            articleLink:
              "https://www.geeksforgeeks.org/find-duplicates-in-on-time-and-constant-extra-space/",
          },
        ],
      },
      {
        name: "Linked Lists",
        icon: GitBranch,
        progress: 50,
        problems: [
          {
            name: "Reverse Linked List",
            difficulty: "Easy",
            status: "completed",
            youtubeLink: "https://www.youtube.com/watch?v=D7y_hoT_YZI",
            leetcodeLink: "https://leetcode.com/problems/reverse-linked-list/",
            articleLink: "https://www.geeksforgeeks.org/reverse-a-linked-list/",
          },
          {
            name: "Merge Two Sorted Lists",
            difficulty: "Easy",
            status: "not-started",
            youtubeLink: "https://www.youtube.com/watch?v=XIdigk956u0",
            leetcodeLink:
              "https://leetcode.com/problems/merge-two-sorted-lists/",
            articleLink:
              "https://www.geeksforgeeks.org/merge-two-sorted-linked-lists/",
          },
          {
            name: "Linked List Cycle",
            difficulty: "Easy",
            status: "not-started",
            youtubeLink: "https://www.youtube.com/watch?v=gBTe7lFR3vc",
            leetcodeLink: "https://leetcode.com/problems/linked-list-cycle/",
            articleLink:
              "https://www.geeksforgeeks.org/detect-loop-in-a-linked-list/",
          },
        ],
      },
      {
        name: "Trees",
        icon: Tree,
        progress: 30,
        problems: [
          {
            name: "Maximum Depth of Binary Tree",
            difficulty: "Easy",
            status: "completed",
            youtubeLink: "https://www.youtube.com/watch?v=YT1994beXn0",
            leetcodeLink:
              "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
            articleLink:
              "https://www.geeksforgeeks.org/find-the-maximum-depth-or-height-of-a-tree/",
          },
          {
            name: "Validate Binary Search Tree",
            difficulty: "Medium",
            status: "not-started",
            youtubeLink: "https://www.youtube.com/watch?v=s6ATEkipzow",
            leetcodeLink:
              "https://leetcode.com/problems/validate-binary-search-tree/",
            articleLink:
              "https://www.geeksforgeeks.org/a-program-to-check-if-a-binary-tree-is-bst-or-not/",
          },
          {
            name: "Binary Tree Level Order Traversal",
            difficulty: "Medium",
            status: "not-started",
            youtubeLink: "https://www.youtube.com/watch?v=6ZnyEApgFYg",
            leetcodeLink:
              "https://leetcode.com/problems/binary-tree-level-order-traversal/",
            articleLink:
              "https://www.geeksforgeeks.org/level-order-tree-traversal/",
          },
        ],
      },
    ],
  },
  {
    name: "Algorithms",
    icon: Cpu,
    progress: 40,
    chapters: [
      {
        name: "Sorting",
        icon: Workflow,
        progress: 60,
        problems: [
          {
            name: "Bubble Sort",
            difficulty: "Easy",
            status: "completed",
            youtubeLink: "https://www.youtube.com/watch?v=xli_FI7CuzA",
            leetcodeLink: "https://leetcode.com/problems/sort-an-array/",
            articleLink: "https://www.geeksforgeeks.org/bubble-sort/",
          },
          {
            name: "Merge Sort",
            difficulty: "Medium",
            status: "in-progress",
            youtubeLink: "https://www.youtube.com/watch?v=4VqmGXwpLqc",
            leetcodeLink: "https://leetcode.com/problems/sort-an-array/",
            articleLink: "https://www.geeksforgeeks.org/merge-sort/",
          },
          {
            name: "Quick Sort",
            difficulty: "Medium",
            status: "not-started",
            youtubeLink: "https://www.youtube.com/watch?v=Hoixgm4-P4M",
            leetcodeLink: "https://leetcode.com/problems/sort-an-array/",
            articleLink: "https://www.geeksforgeeks.org/quick-sort/",
          },
        ],
      },
      {
        name: "Searching",
        icon: Search,
        progress: 40,
        problems: [
          {
            name: "Binary Search",
            difficulty: "Easy",
            status: "completed",
            youtubeLink: "https://www.youtube.com/watch?v=P3YID7liBug",
            leetcodeLink: "https://leetcode.com/problems/binary-search/",
            articleLink: "https://www.geeksforgeeks.org/binary-search/",
          },
          {
            name: "Depth-First Search",
            difficulty: "Medium",
            status: "not-started",
            youtubeLink: "https://www.youtube.com/watch?v=7fujbpJ0LB4",
            leetcodeLink: "https://leetcode.com/problems/number-of-islands/",
            articleLink:
              "https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/",
          },
          {
            name: "Breadth-First Search",
            difficulty: "Medium",
            status: "not-started",
            youtubeLink: "https://www.youtube.com/watch?v=oDqjPvD54Ss",
            leetcodeLink:
              "https://leetcode.com/problems/binary-tree-level-order-traversal/",
            articleLink:
              "https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/",
          },
        ],
      },
      {
        name: "Dynamic Programming",
        icon: Zap,
        progress: 20,
        problems: [
          {
            name: "Fibonacci Number",
            difficulty: "Easy",
            status: "completed",
            youtubeLink: "https://www.youtube.com/watch?v=P8Xa2BitN3I",
            leetcodeLink: "https://leetcode.com/problems/fibonacci-number/",
            articleLink:
              "https://www.geeksforgeeks.org/program-for-nth-fibonacci-number/",
          },
          {
            name: "Climbing Stairs",
            difficulty: "Easy",
            status: "not-started",
            youtubeLink: "https://www.youtube.com/watch?v=Y0lT9Fck7qI",
            leetcodeLink: "https://leetcode.com/problems/climbing-stairs/",
            articleLink:
              "https://www.geeksforgeeks.org/count-ways-reach-nth-stair/",
          },
          {
            name: "Coin Change",
            difficulty: "Medium",
            status: "not-started",
            youtubeLink: "https://www.youtube.com/watch?v=H9bfqozjoqs",
            leetcodeLink: "https://leetcode.com/problems/coin-change/",
            articleLink: "https://www.geeksforgeeks.org/coin-change-dp-7/",
          },
        ],
      },
    ],
  },
];

export default function TopicExplorer() {
  const [searchTerm, setSearchTerm] = useState("");
  const [completedTopics, setCompletedTopics] = useState<
    Record<string, boolean>
  >({});
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  // const router = useRouter()

  useEffect(() => {
    const savedCompletedTopics = localStorage.getItem("completedTopics");
    const savedBookmarks = localStorage.getItem("bookmarks");
    if (savedCompletedTopics) {
      setCompletedTopics(JSON.parse(savedCompletedTopics));
    }
    if (savedBookmarks) {
      setBookmarks(JSON.parse(savedBookmarks));
    }
  }, []);

  const saveCompletedTopics = (newCompletedTopics: Record<string, boolean>) => {
    const validatedTopics = Object.entries(newCompletedTopics).reduce(
      (acc, [key, value]) => {
        acc[key] = value === true;
        return acc;
      },
      {} as Record<string, boolean>,
    );
    setCompletedTopics(validatedTopics);
    localStorage.setItem("completedTopics", JSON.stringify(validatedTopics));
  };

  const saveBookmarks = (newBookmarks: string[]) => {
    setBookmarks(newBookmarks);
    localStorage.setItem("bookmarks", JSON.stringify(newBookmarks));
  };

  const toggleBookmark = (problemName: string) => {
    const newBookmarks = bookmarks.includes(problemName)
      ? bookmarks.filter((b) => b !== problemName)
      : [...bookmarks, problemName];
    saveBookmarks(newBookmarks);
  };

  const filteredTopics = topics
    .map((topic) => ({
      ...topic,
      chapters: topic.chapters
        .map((chapter) => ({
          ...chapter,
          problems: chapter.problems.filter((problem) =>
            problem.name.toLowerCase().includes(searchTerm.toLowerCase()),
          ),
        }))
        .filter((chapter) => chapter.problems.length > 0),
    }))
    .filter((topic) => topic.chapters.length > 0);

  const handleProblemClick = (problemName: string) => {
    // router.push(`/dsa-quest?problem=${encodeURIComponent(problemName)}`)
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "easy":
        return "bg-green-500";
      case "medium":
        return "bg-yellow-500";
      case "hard":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "in-progress":
        return <Circle className="h-4 w-4 text-yellow-500" />;
      case "not-started":
        return <HelpCircle className="h-4 w-4 text-gray-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen max-w-7xl m-auto  text-black">
      <main className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-2xl text-[#505ba0]">
                  Explore Data Structures and Algorithms
                </CardTitle>
                <CardDescription>
                  Navigate through topics, chapters, and problems to master DSA
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    type="search"
                    placeholder="Search topics, chapters, or problems..."
                    className="pl-8"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>

            <ScrollArea className="h-[calc(100vh-16rem)]">
              <Accordion type="multiple" className="w-full space-y-4">
                {filteredTopics.map((topic) => (
                  <AccordionItem value={topic.name} key={topic.name}>
                    <AccordionTrigger className="bg-white rounded-lg p-4 hover:no-underline shadow-md transition-all duration-300 hover:shadow-lg">
                      <div className="flex items-center space-x-2">
                        <topic.icon className="h-8 w-8 text-[#6674cc]" />
                        <span className="text-xl font-semibold">
                          {topic.name}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Progress value={topic.progress} className="w-24" />
                        <span className="text-sm text-gray-500">
                          {topic.progress}%
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="mt-2 space-y-2">
                        {topic.chapters.map((chapter) => (
                          <Accordion
                            type="single"
                            collapsible
                            key={chapter.name}
                          >
                            <AccordionItem value={chapter.name}>
                              <AccordionTrigger className="bg-gray-50 rounded-lg p-3 hover:no-underline">
                                <div className="flex items-center space-x-2">
                                  <chapter.icon className="h-6 w-6 text-[#505ba0]" />
                                  <span className="text-lg">
                                    {chapter.name}
                                  </span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Progress
                                    value={chapter.progress}
                                    className="w-20"
                                  />
                                  <span className="text-sm text-gray-500">
                                    {chapter.progress}%
                                  </span>
                                </div>
                              </AccordionTrigger>
                              <AccordionContent>
                                <ul className="mt-2 space-y-2">
                                  {chapter.problems.map((problem) => (
                                    <li key={problem.name}>
                                      <Card className="p-4 hover:bg-gray-50 transition-colors duration-200">
                                        <div className="flex items-center justify-between">
                                          <div className="flex items-center space-x-2">
                                            <Checkbox
                                              checked={
                                                completedTopics[problem.name] ||
                                                false
                                              }
                                              onCheckedChange={(checked) => {
                                                saveCompletedTopics({
                                                  ...completedTopics,
                                                  [problem.name]:
                                                    checked === true,
                                                });
                                              }}
                                            />
                                            <span className="font-medium">
                                              {problem.name}
                                            </span>
                                            <Badge
                                              className={`${getDifficultyColor(problem.difficulty)}`}
                                            >
                                              {problem.difficulty}
                                            </Badge>
                                            {getStatusIcon(problem.status)}
                                          </div>
                                          <div className="flex space-x-2">
                                            <TooltipProvider>
                                              <Tooltip>
                                                <TooltipTrigger asChild>
                                                  <Button
                                                    variant="outline"
                                                    size="icon"
                                                    onClick={() =>
                                                      window.open(
                                                        problem.youtubeLink,
                                                        "_blank",
                                                      )
                                                    }
                                                  >
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
                                                  <Button
                                                    variant="outline"
                                                    size="icon"
                                                    onClick={() =>
                                                      window.open(
                                                        problem.leetcodeLink,
                                                        "_blank",
                                                      )
                                                    }
                                                  >
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
                                                  <Button
                                                    variant="outline"
                                                    size="icon"
                                                    onClick={() =>
                                                      window.open(
                                                        problem.articleLink,
                                                        "_blank",
                                                      )
                                                    }
                                                  >
                                                    <BookOpen className="h-4 w-4 text-green-500" />
                                                  </Button>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                  <p>Read Article</p>
                                                </TooltipContent>
                                              </Tooltip>
                                            </TooltipProvider>
                                            <Button
                                              variant="default"
                                              onClick={() =>
                                                handleProblemClick(problem.name)
                                              }
                                            >
                                              Solve
                                            </Button>
                                            <TooltipProvider>
                                              <Tooltip>
                                                <TooltipTrigger asChild>
                                                  <Button
                                                    variant="outline"
                                                    size="icon"
                                                    onClick={() =>
                                                      toggleBookmark(
                                                        problem.name,
                                                      )
                                                    }
                                                  >
                                                    <Bookmark
                                                      className={`h-4 w-4 ${
                                                        bookmarks.includes(
                                                          problem.name,
                                                        )
                                                          ? "text-yellow-500 fill-yellow-500"
                                                          : "text-gray-500"
                                                      }`}
                                                    />
                                                  </Button>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                  <p>
                                                    {bookmarks.includes(
                                                      problem.name,
                                                    )
                                                      ? "Remove Bookmark"
                                                      : "Add Bookmark"}
                                                  </p>
                                                </TooltipContent>
                                              </Tooltip>
                                            </TooltipProvider>
                                          </div>
                                        </div>
                                      </Card>
                                    </li>
                                  ))}
                                </ul>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </ScrollArea>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-[#505ba0]">
                  <Bookmark className="h-5 w-5 mr-2" />
                  Bookmarks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {bookmarks.map((bookmark) => (
                    <li key={bookmark}>
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-left"
                        onClick={() => handleProblemClick(bookmark)}
                      >
                        {bookmark}
                      </Button>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-[#505ba0]">
                  <Calendar className="h-5 w-5 mr-2" />
                  Daily Challenge
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-2">Palindrome Number</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Determine whether an integer is a palindrome.
                </p>
                <Button className="w-full">Take the Challenge</Button>
              </CardContent>
            </Card>

            <Card>
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
                      <span className="text-sm font-medium">
                        Overall Progress
                      </span>
                      <span className="text-sm font-medium">45%</span>
                    </div>
                    <Progress value={45} className="w-full" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">
                        Problems Solved
                      </span>
                      <span className="text-sm font-medium">27/100</span>
                    </div>
                    <Progress value={27} className="w-full" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
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

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-[#505ba0]">
                  <Activity className="h-5 w-5 mr-2" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between items-center">
                    <span>Solved "Two Sum"</span>
                    <span className="text-gray-500">2h ago</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Started "Merge Sort"</span>
                    <span className="text-gray-500">1d ago</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Completed "Arrays" chapter</span>
                    <span className="text-gray-500">3d ago</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
