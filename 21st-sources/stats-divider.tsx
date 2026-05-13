// 21st.dev component cache for HANDOFF MODE.
// Query: "stats numbers oversized typography"
// Component: Stats Defautlt — three-column stats with vertical dividers, oversized
//   numerals, descriptor below.
// Date cached: 2026-05-13
// Use: All three directions — credentials/numbers strip. Pattern borrowed:
//   `divide-x md:divide-y-0` for clean editorial separation, 5xl numerals.

export default function StatsSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
          <div className="space-y-4">
            <div className="text-5xl font-bold">+1200</div>
            <p>Stars on GitHub</p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl font-bold">22 Million</div>
            <p>Active Users</p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl font-bold">+500</div>
            <p>Powered Apps</p>
          </div>
        </div>
      </div>
    </section>
  );
}
