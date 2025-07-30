export default function Aboutscreen() {
  return (
    <div className="bg-background text-foreground p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          About This Project
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          This is a demo application built to showcase the power of modern web
          technologies. It uses a stack of cutting-edge tools to provide a
          fast, reliable, and enjoyable user experience.
        </p>

        <div className="space-y-10">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Core Technologies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-lg border shadow-sm">
                <h3 className="text-lg font-semibold mb-2">React</h3>
                <p className="text-sm text-muted-foreground">
                  A JavaScript library for building user interfaces.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border shadow-sm">
                <h3 className="text-lg font-semibold mb-2">TanStack Query</h3>
                <p className="text-sm text-muted-foreground">
                  A powerful data-fetching library for server state.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border shadow-sm">
                <h3 className="text-lg font-semibold mb-2">TanStack Router</h3>
                <p className="text-sm text-muted-foreground">
                  A fully type-safe router for React.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border shadow-sm">
                <h3 className="text-lg font-semibold mb-2">Tailwind CSS</h3>
                <p className="text-sm text-muted-foreground">
                  A utility-first CSS framework for rapid UI development.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border shadow-sm">
                <h3 className="text-lg font-semibold mb-2">Vite</h3>
                <p className="text-sm text-muted-foreground">
                  A next-generation frontend tooling.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Features</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Modern, responsive UI design.</li>
              <li>Client-side routing with TanStack Router.</li>
              <li>
                Efficient data fetching and caching with TanStack Query.
              </li>
              <li>A mock API using JSON Server.</li>
              <li>A collapsible sidebar for navigation.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}