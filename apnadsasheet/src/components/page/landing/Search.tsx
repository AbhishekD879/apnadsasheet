import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Search as SearchIoc} from "lucide-react"
import {useLandingContext} from "@/context/LandingContext.tsx";
const Search =() =>{
    const {dispatch,searchTerm} = useLandingContext()
    return  <Card className="mb-6">
        <CardHeader>
            <CardTitle className="text-2xl text-[#505ba0]">Explore Data Structures and Algorithms</CardTitle>
            <CardDescription>Navigate through topics, chapters, and problems to master DSA</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="relative">
                <SearchIoc className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                    type="search"
                    placeholder="Search topics, chapters, or problems..."
                    className="pl-8"
                    value={searchTerm}
                    onChange={(e) => dispatch({type:"SET_SEARCH_TERM",payload:e.target.value})}
                />
            </div>
        </CardContent>
    </Card>
}

export default Search;