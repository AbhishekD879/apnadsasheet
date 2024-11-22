import { Card } from "@/components/ui/card.tsx";

export default function LoadingPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <Card className="p-8 max-w-sm w-full shadow-lg rounded-lg">
        <div className="flex flex-col items-center">
          <div className="text-3xl font-bold text-blue-600 mb-4">DSA Quest</div>
          <div className="relative w-24 h-24 mb-4">
            <div className="absolute inset-0 border-4 border-blue-200 rounded-full"></div>
            <div
              className="absolute inset-0 border-4 border-blue-600 rounded-full animate-spin-slow"
              style={{
                borderRightColor: "transparent",
                borderTopColor: "transparent",
              }}
            ></div>
          </div>
          <div className="text-gray-600 text-center">
            <p className="mb-2">Preparing your coding adventure...</p>
            <p className="text-sm">Sharpening algorithms and data structures</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
