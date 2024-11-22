import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Calendar} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";

import topics, {Problem} from "@/data/topics"; // Adjust the import path as necessary

// Function to get all problems from topics
const getAllProblems = () => {
    const problems: Problem[] = [];
    topics.forEach((topic) =>
        topic.chapters.forEach((chapter) =>
            chapter.problems.forEach((problem) => problems.push(problem))
        )
    );
    return problems;
};

// Function to generate a consistent daily challenge based on the date
const getDailyChallenge = () => {
    const problems = getAllProblems();
    const today = new Date().toISOString().split("T")[0]; // e.g., "2024-11-21"
    const hash = Array.from(today).reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const index = hash % problems.length; // Deterministic index
    return problems[index];
};

const DailyChallenge = () => {
    const challenge= getDailyChallenge();
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center text-[#505ba0]">
                    <Calendar className="h-5 w-5 mr-2" />
                    Daily Challenge
                </CardTitle>
            </CardHeader>
            <CardContent>
                <h3 className="font-semibold mb-2">{challenge.name}</h3>
                <p className="text-sm text-gray-600 mb-4">
                    Difficulty: <strong>{challenge.difficulty}</strong>
                </p>
                <Button
                    className="w-full"
                    onClick={() => window.open(challenge.leetcodeLink, "_blank")}
                >
                    Take the Challenge
                </Button>
            </CardContent>
        </Card>
    );
};

export default DailyChallenge;