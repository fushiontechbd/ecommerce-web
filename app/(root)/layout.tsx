import Header from "@/components/Header";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return <main className="min-h-screen">


<Header/>
    {children}
    </main>;
};

export default layout;
