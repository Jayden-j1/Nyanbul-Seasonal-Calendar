import SeasonalContainers from "../components/ui/SeasonalContainers";


export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50">
      <main>
        <SeasonalContainers />
      </main>
      {children}
    </div>
  );
}
