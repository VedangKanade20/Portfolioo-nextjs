


'use client'

import { ThemeProvider as NextThemesProvider } from "next-themes"

import { type ThemeProviderProps } from "next-themes"

// Explicitly define props to ensure compatibility with RootLayout
export function ThemeProvider({ children, defaultTheme = "system", enableSystem = true, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme={defaultTheme}
      enableSystem={enableSystem}
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}