import {
  BarChart,
  Cpu,
  GitBranch,
  Layers,
  Search,
  TreesIcon as Tree,
  Workflow,
  Zap,
  Database,
  Network,
  Lock,
  CodeIcon,
} from "lucide-react";

// Function to generate consistent unique ID based on the object's name
function generateStaticId(name: string, parentName?: string): string {
  const baseString = parentName ? `${parentName}-${name}` : name;
  let hash = 0;
  for (let i = 0; i < baseString.length; i++) {
    const char = baseString.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return `id-${Math.abs(hash).toString(36)}`;
}

// Define types for better type safety
export interface Problem {
  id: string;
  name: string;
  difficulty: "Easy" | "Medium" | "Hard";
  status: "completed" | "in-progress" | "not-started";
  youtubeLink: string;
  leetcodeLink: string;
  articleLink: string;
}

export interface Chapter {
  id: string;
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  progress: number;
  problems: Problem[];
}

export interface Topic {
  id: string;
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  progress: number;
  chapters: Chapter[];
}

const topics: Topic[] = [
  {
    id: generateStaticId("Data Structures"),
    name: "Data Structures",
    icon: Layers,
    progress: 65,
    chapters: [
      {
        id: generateStaticId("Arrays", "Data Structures"),
        name: "Arrays",
        icon: BarChart,
        progress: 80,
        problems: [
          {
            id: generateStaticId("Two Sum", "Arrays"),
            name: "Two Sum",
            difficulty: "Easy",
            status: "completed",
            youtubeLink: "https://www.youtube.com/watch?v=KLlXCFG5TnA",
            leetcodeLink: "https://leetcode.com/problems/two-sum/",
            articleLink: "https://www.geeksforgeeks.org/two-sum/",
          },
          {
            id: generateStaticId("Best Time to Buy and Sell Stock", "Arrays"),
            name: "Best Time to Buy and Sell Stock",
            difficulty: "Easy",
            status: "in-progress",
            youtubeLink: "https://www.youtube.com/watch?v=1pkOgXD63yU",
            leetcodeLink:
              "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
            articleLink: "https://www.geeksforgeeks.org/stock-buy-sell/",
          },
          {
            id: generateStaticId("Contains Duplicate", "Arrays"),
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
        id: generateStaticId("Linked Lists", "Data Structures"),
        name: "Linked Lists",
        icon: GitBranch,
        progress: 50,
        problems: [
          {
            id: generateStaticId("Reverse Linked List", "Linked Lists"),
            name: "Reverse Linked List",
            difficulty: "Easy",
            status: "completed",
            youtubeLink: "https://www.youtube.com/watch?v=D7y_hoT_YZI",
            leetcodeLink: "https://leetcode.com/problems/reverse-linked-list/",
            articleLink: "https://www.geeksforgeeks.org/reverse-a-linked-list/",
          },
          {
            id: generateStaticId("Merge Two Sorted Lists", "Linked Lists"),
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
            id: generateStaticId("Linked List Cycle", "Linked Lists"),
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
        id: generateStaticId("Trees", "Data Structures"),
        name: "Trees",
        icon: Tree,
        progress: 30,
        problems: [
          {
            id: generateStaticId("Maximum Depth of Binary Tree", "Trees"),
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
            id: generateStaticId("Validate Binary Search Tree", "Trees"),
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
            id: generateStaticId("Binary Tree Level Order Traversal", "Trees"),
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
      {
        id: generateStaticId("Hash Tables", "Data Structures"),
        name: "Hash Tables",
        icon: Database,
        progress: 40,
        problems: [
          {
            id: generateStaticId("First Unique Character", "Hash Tables"),
            name: "First Unique Character",
            difficulty: "Easy",
            status: "not-started",
            youtubeLink: "https://www.youtube.com/watch?v=Wh9_DbsF_8Q",
            leetcodeLink:
              "https://leetcode.com/problems/first-unique-character-in-a-string/",
            articleLink:
              "https://www.geeksforgeeks.org/first-unique-character-in-a-string/",
          },
          {
            id: generateStaticId("Group Anagrams", "Hash Tables"),
            name: "Group Anagrams",
            difficulty: "Medium",
            status: "not-started",
            youtubeLink: "https://www.youtube.com/watch?v=WSGZDB-YAg0",
            leetcodeLink: "https://leetcode.com/problems/group-anagrams/",
            articleLink:
              "https://www.geeksforgeeks.org/given-a-sequence-of-words-print-all-anagrams-together/",
          },
        ],
      },
    ],
  },
  {
    id: generateStaticId("Algorithms"),
    name: "Algorithms",
    icon: Cpu,
    progress: 40,
    chapters: [
      {
        id: generateStaticId("Sorting", "Algorithms"),
        name: "Sorting",
        icon: Workflow,
        progress: 60,
        problems: [
          {
            id: generateStaticId("Bubble Sort", "Sorting"),
            name: "Bubble Sort",
            difficulty: "Easy",
            status: "completed",
            youtubeLink: "https://www.youtube.com/watch?v=xli_FI7CuzA",
            leetcodeLink: "https://leetcode.com/problems/sort-an-array/",
            articleLink: "https://www.geeksforgeeks.org/bubble-sort/",
          },
          {
            id: generateStaticId("Merge Sort", "Sorting"),
            name: "Merge Sort",
            difficulty: "Medium",
            status: "in-progress",
            youtubeLink: "https://www.youtube.com/watch?v=4VqmGXwpLqc",
            leetcodeLink: "https://leetcode.com/problems/sort-an-array/",
            articleLink: "https://www.geeksforgeeks.org/merge-sort/",
          },
          {
            id: generateStaticId("Quick Sort", "Sorting"),
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
        id: generateStaticId("Searching", "Algorithms"),
        name: "Searching",
        icon: Search,
        progress: 40,
        problems: [
          {
            id: generateStaticId("Binary Search", "Searching"),
            name: "Binary Search",
            difficulty: "Easy",
            status: "completed",
            youtubeLink: "https://www.youtube.com/watch?v=P3YID7liBug",
            leetcodeLink: "https://leetcode.com/problems/binary-search/",
            articleLink: "https://www.geeksforgeeks.org/binary-search/",
          },
          {
            id: generateStaticId("Depth-First Search", "Searching"),
            name: "Depth-First Search",
            difficulty: "Medium",
            status: "not-started",
            youtubeLink: "https://www.youtube.com/watch?v=7fujbpJ0LB4",
            leetcodeLink: "https://leetcode.com/problems/number-of-islands/",
            articleLink:
              "https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/",
          },
          {
            id: generateStaticId("Breadth-First Search", "Searching"),
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
        id: generateStaticId("Dynamic Programming", "Algorithms"),
        name: "Dynamic Programming",
        icon: Zap,
        progress: 20,
        problems: [
          {
            id: generateStaticId("Fibonacci Number", "Dynamic Programming"),
            name: "Fibonacci Number",
            difficulty: "Easy",
            status: "completed",
            youtubeLink: "https://www.youtube.com/watch?v=P8Xa2BitN3I",
            leetcodeLink: "https://leetcode.com/problems/fibonacci-number/",
            articleLink:
              "https://www.geeksforgeeks.org/program-for-nth-fibonacci-number/",
          },
          {
            id: generateStaticId("Climbing Stairs", "Dynamic Programming"),
            name: "Climbing Stairs",
            difficulty: "Easy",
            status: "not-started",
            youtubeLink: "https://www.youtube.com/watch?v=Y0lT9Fck7qI",
            leetcodeLink: "https://leetcode.com/problems/climbing-stairs/",
            articleLink:
              "https://www.geeksforgeeks.org/count-ways-reach-nth-stair/",
          },
          {
            id: generateStaticId("Coin Change", "Dynamic Programming"),
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
  {
    id: generateStaticId("System Design"),
    name: "System Design",
    icon: Network,
    progress: 25,
    chapters: [
      {
        id: generateStaticId("Basic Concepts", "System Design"),
        name: "Basic Concepts",
        icon: CodeIcon,
        progress: 0,
        problems: [
          {
            id: generateStaticId("Design URL Shortener", "Basic Concepts"),
            name: "Design URL Shortener",
            difficulty: "Medium",
            status: "not-started",
            youtubeLink: "https://www.youtube.com/watch?v=fMZMm1lWi9w",
            leetcodeLink:
              "https://leetcode.com/discuss/interview-question/124658/Design-a-URL-Shortener/",
            articleLink:
              "https://www.geeksforgeeks.org/system-design-url-shortening-service/",
          },
          {
            id: generateStaticId("Design Parking Lot", "Basic Concepts"),
            name: "Design Parking Lot",
            difficulty: "Medium",
            status: "not-started",
            youtubeLink: "https://www.youtube.com/watch?v=DSGsa0pu8-k",
            leetcodeLink:
              "https://leetcode.com/discuss/interview-question/object-oriented-design/124551/Design-a-Parking-Lot",
            articleLink:
              "https://www.geeksforgeeks.org/design-parking-lot-using-object-oriented-design/",
          },
        ],
      },
      {
        id: generateStaticId("Security Design", "System Design"),
        name: "Security Design",
        icon: Lock,
        progress: 0,
        problems: [
          {
            id: generateStaticId(
              "Design Authentication System",
              "Security Design",
            ),
            name: "Design Authentication System",
            difficulty: "Hard",
            status: "not-started",
            youtubeLink: "https://www.youtube.com/watch?v=uj_4FlBMmQs",
            leetcodeLink:
              "https://leetcode.com/discuss/interview-question/system-design/124604/Design-an-Authentication-System",
            articleLink:
              "https://www.geeksforgeeks.org/system-design-authentication-authorization-with-jwt/",
          },
        ],
      },
    ],
  },
];

export default topics;
