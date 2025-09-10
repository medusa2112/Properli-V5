import React from 'react'

export function App() {
  const [dark, setDark] = React.useState(false)
  React.useEffect(() => { document.documentElement.classList.toggle('dark', dark) }, [dark])
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-5xl mx-auto py-10 px-6">
        <div className="flex items-center justify-between">
          <h1 className="heading-bold text-2xl">Properli V5</h1>
          <button className="btn btn-primary" onClick={() => setDark(!dark)}>{dark ? 'Light' : 'Dark'} mode</button>
        </div>
        <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-300">
          Monochrome tokens + minimal components to avoid style drift.
        </p>
      </div>
    </div>
  )
}
