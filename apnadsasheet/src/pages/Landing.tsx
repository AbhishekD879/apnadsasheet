import Search from "@/components/page/landing/Search.tsx";
import BookmarkSection from "@/components/page/landing/BookmarkSection.tsx";
import DailyChallenge from "@/components/page/landing/DailyChallenge.tsx";
import ProgressOverview from "@/components/page/landing/ProgressOverview.tsx";
import Achievements from "@/components/page/landing/Achievements.tsx";
import RecentActivity from "@/components/page/landing/RecentActivity.tsx";
import AccordionScroll from "@/components/page/landing/AccordionScroll.tsx";

export default function TopicExplorer() {
  return (
    <div className="min-h-screen max-w-7xl m-auto  text-black">
      <main className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Search />

            <AccordionScroll />
          </div>

          <div className="space-y-6">
            <DailyChallenge />

            <BookmarkSection />

            <ProgressOverview />

            <Achievements />

            <RecentActivity />
          </div>
        </div>
      </main>
    </div>
  );
}
