import {
  Trophy,
  Flame,
  Star,
  Search,
  Bell,
  Menu,
  User,
  Settings,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Link } from "react-router-dom";
import useAuth from "@/hooks/useAuth.tsx";
import { apiCaller } from "@/lib/ApiCaller.ts";
import { initialUser } from "@/context/AuthContext.tsx";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Topics",
    href: "/topics",
  },
  {
    name: "Challenges",
    href: "/challenges",
  },
  {
    name: "Leaderboard",
    href: "/leaderboard",
  },
];

export default function TopicExplorerHeader() {
  const { email } = useAuth();
  return (
    <header className="bg-background border-b border-border sticky top-0 z-10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <Trophy className="h-8 w-8 text-primary" />
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-muted-foreground hover:text-primary"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {email ? <ProfileDropdown /> : <AuthButton />}
        </div>
      </div>
    </header>
  );
}

const AuthButton = () => {
  return (
    <div className="hidden md:block">
      <div className="ml-4 flex items-center md:ml-6">
        <Button variant="default" size="default">
          <Link to="/auth">Sign in/Login</Link>
        </Button>
      </div>
    </div>
  );
};

const ProfileDropdown = () => {
  const auth = useAuth();

  const handleLogout = async () => {
    await apiCaller.request("/logout", {
      baseUrl: "auth",
    });
    localStorage.removeItem("token");
    if (auth.setUser) auth.setUser(initialUser);
  };
  return (
    <>
      <div className="hidden md:block">
        <div className="ml-4 flex items-center md:ml-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-muted-foreground" />
            </div>
            <Input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4"
            />
          </div>
          <Button variant="ghost" size="icon" className="ml-2">
            <Bell className="h-5 w-5" />
          </Button>
          <Badge variant="secondary" className="ml-2">
            <Flame className="h-4 w-4 mr-1 text-orange-500" />5 Day Streak
          </Badge>
          <Badge variant="secondary" className="ml-2">
            <Star className="h-4 w-4 mr-1 text-yellow-500" />
            1024 XP
          </Badge>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="ml-2">
                <Avatar>
                  <AvatarImage
                    src={auth.profilePicture || "https://github.com/shadcn.png"}
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="md:hidden">
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </>
  );
};
