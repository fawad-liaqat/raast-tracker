import React, { useEffect, useState } from 'react'

// Top bar with a link back to the portfolio and the theme toggle.
// The theme itself is set before the first paint by the script in
// index.html, which also exposes window.flTheme and fires "themechange"
// on <html> when the theme changes.
const PORTFOLIO = 'https://fawad-liaqat.netlify.app/'

function current() {
  return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark'
}

export function ThemeToggle() {
  const [theme, setTheme] = useState(current)
  useEffect(() => {
    const root = document.documentElement
    const sync = () => setTheme(current())
    root.addEventListener('themechange', sync)
    return () => root.removeEventListener('themechange', sync)
  }, [])
  const next = theme === 'dark' ? 'light' : 'dark'
  const label = `Switch to ${next} mode`
  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label={label}
      title={label}
      onClick={() => window.flTheme && window.flTheme.set(next)}
    >
      <svg className="ti-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
      <svg className="ti-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
        <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" />
      </svg>
    </button>
  )
}

export default function TopBar() {
  return (
    <div className="topbar">
      <a className="topbar-home" href={PORTFOLIO}>Portfolio</a>
      <ThemeToggle />
    </div>
  )
}
