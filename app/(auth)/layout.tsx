import Header from "@/components/Header";
import React, { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return <main className="min-h-screen bg-slate-800 flex items-center justify-center">
    {children}
    </main>;
};

export default AuthLayout;
