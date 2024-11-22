import { MessageSquare, HelpCircle, FileText, ArrowUpRight } from 'lucide-react'

export default function Footer() {
    return (
        <footer className={`border-t border-[#e1e1e1] p-4 text-center text-sm bg-white text-gray-600`}>
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
    )
}