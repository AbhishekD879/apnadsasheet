import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Bookmark, HashIcon} from "lucide-react";
import {useLandingContext} from "@/context/LandingContext.tsx";
import {Button} from "@/components/ui/button.tsx";
import topics, {Problem} from "@/data/topics.ts";
import {Badge} from "@/components/ui/badge.tsx";
import {SkeletonBookmarkSection} from "@/components/util/Skeletons.tsx";

function getBookmarkedProblems(bookmarkedProblemIds: string[]) {
    const bookmarkedProblems: Problem[] = [];

    topics.forEach(topic => {
        topic.chapters.forEach(chapter => {
            chapter.problems.forEach(problem => {
                if (bookmarkedProblemIds.includes(problem.id)) {
                    bookmarkedProblems.push(problem);
                }
            });
        });
    });
    return bookmarkedProblems;
}

const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
        case 'easy': return 'bg-green-100 text-green-800 border-green-300'
        case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-300'
        case 'hard': return 'bg-red-100 text-red-800 border-red-300'
        default: return 'bg-gray-100 text-gray-800 border-gray-300'
    }
}

const BookmarkSection = () =>{
    const {bookmarkedProblem, loading} = useLandingContext()
    const bookmarks = getBookmarkedProblems(bookmarkedProblem);
    if (loading) return <SkeletonBookmarkSection/>
    return  <Card>
        <CardHeader>
            <CardTitle className="flex items-center text-[#505ba0]">
                <Bookmark className="h-5 w-5 mr-2" />
                Bookmarks
            </CardTitle>
        </CardHeader>
        <CardContent>
            <ul className="space-y-2">
                {bookmarks.length?(bookmarks.map((bookmark) => (
                    <li key={bookmark.id}>
                        <Button
                            variant="ghost"
                            className="w-full justify-start text-left"
                            onClick={() => window.open(bookmark.leetcodeLink, "_blank")}
                        >
                            <HashIcon/>
                            {bookmark.name}
                            <Badge className={`${getDifficultyColor(bookmark.difficulty)}`}>
                                {bookmark.difficulty}
                            </Badge>
                        </Button>
                    </li>
                ))):(<li className="text-gray-500">No bookmarks yet</li>)}
            </ul>
        </CardContent>
    </Card>
}

export default BookmarkSection;