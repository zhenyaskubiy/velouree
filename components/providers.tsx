"use client"

import type { ReactNode } from "react"
import { StoreProvider } from "@/context/store-context"
import { Toaster } from "sonner"

export function Providers({ children }: { children: ReactNode }) {
  return (
    <StoreProvider>
      {children}
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#3D1C2E",
            color: "#F5F0E8",
            border: "1px solid rgba(196, 162, 101, 0.3)",
          },
        }}
      />
    </StoreProvider>
  )
}
