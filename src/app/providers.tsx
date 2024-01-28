"use client";

import { NextUIProvider } from "@nextui-org/react";
//NextUIProvider for global state management like react context
import React from "react";


interface ProvidersProps {
    children: React.ReactNode
}

export default function Providers({ children }: ProvidersProps) {
    return <NextUIProvider>{children}</NextUIProvider>
}