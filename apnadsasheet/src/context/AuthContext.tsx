import React, {createContext, ReactNode, useLayoutEffect, useState} from "react";
import type { User } from "@/types/User";
import {apiCaller} from "@/lib/ApiCaller.ts";
export const initialUser: User = {
    id: "",
    email: "",
    profilePicture: "",
}
export const AuthContext = createContext<User & {
    setUser?: React.Dispatch<React.SetStateAction<User>>
    authLoading:boolean
}>({
    ...initialUser,
    authLoading: false,
});

const fetchMe = async () => {
    const response = await apiCaller.request<{
        message: string,
        user: User,
    }>("/me", {
        baseUrl: "auth",
        credentials: "include",
        headers:{
            "Authorization": `${localStorage.getItem("token")}`,
        },
    });
    if (response.data) {
        return response;
    }
    return null;
}

export default function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User>(initialUser);
    const [authLoading, setAuthLoading] = useState(false);
    useLayoutEffect(() => {
        const fetchUser = async () => {
            setAuthLoading(true);
            const response = await fetchMe();
            if (response?.data?.user) {
                setUser(response.data?.user);
            } else {
                setUser(initialUser);
            }
            setAuthLoading(false);
        };
        fetchUser();
    }, []);
    return (
        <AuthContext.Provider value={{
            ...user,
            id: user?.id || "",
            email: user?.email || "",
            profilePicture: user?.profilePicture || "",
            setUser: setUser,
            authLoading: authLoading
        }}>
            {children}
        </AuthContext.Provider>
    );
}