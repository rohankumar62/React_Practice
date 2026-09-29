import { useEffect, useState } from 'react'

const products = [
  { id: 1, name: 'Laptop', price: 55000, inStock: true },
  { id: 2, name: 'Mouse', price: 800, inStock: false },
  { id: 3, name: 'Keyboard', price: 1500, inStock: true },
  { id: 4, name: 'Monitor', price: 12000, inStock: true },
]

const navItems = [
  ['01', 'Variables', 'variables'], ['02', 'Data types', 'types'], ['03', 'Objects & arrays', 'objects'],
  ['04', 'Functions', 'functions'], ['05', 'Destructuring', 'destructuring'], ['06', 'Spread & rest', 'spread'],
  ['07', 'Transform data', 'transform'], ['08', 'FE-102 ticket', 'ticket'],
]

function CodeBlock({ children }) {
  return <pre className="overflow-x-auto rounded-2xl border border-slate-700/70 bg-[#0a1221] p-5 text-left text-[13px] leading-6 text-cyan-100 shadow-inner shadow-black/20"><code>{children}</code></pre>
}

function Stat({ value, label }) {
  return <div className="border-l border-slate-700 pl-4"><p className="text-2xl font-black text-white">{value}</p><p className="mt-1 text-xs uppercase tracking-widest text-slate-500">{label}</p></div>
}

function Flow({ label, icon, active }) {
  return <div className={`rounded-xl border p-5 ${active ? 'border-cyan-400/50 bg-cyan-400/10' : 'border-slate-700 bg-[#0a1221]'}`}><p className={`font-mono text-2xl ${active ? 'text-cyan-300' : 'text-slate-500'}`}>{icon}</p><p className="mt-2 text-xs font-bold text-white">{label}</p></div>
}

function AnimatedPipeline() {
  const [run, setRun] = useState(0)
  const [phase, setPhase] = useState(0)
  const stages = ['Backend sends data', 'filter() checks stock', 'map() reshapes data', 'React renders UI']

  useEffect(() => {
    const timer = window.setInterval(() => {
      setPhase((current) => (current + 1) % stages.length)
    }, 1400)
    return () => window.clearInterval(timer)
  }, [run, stages.length])

  return <div className="mt-8 rounded-3xl border border-cyan-400/20 bg-[#091321] p-5 sm:p-7">
    <div className="flex flex-wrap items-start justify-between gap-4"><div><p className="font-mono text-[10px] font-bold uppercase tracking-[.2em] text-cyan-300">Live data pipeline</p><h3 className="mt-2 text-xl font-bold text-white">Watch one response become UI</h3><p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">The glowing packet represents a product moving through each JavaScript operation. The unavailable Mouse is rejected by <code>filter()</code>; the remaining products continue to the screen.</p></div><button onClick={() => { setPhase(0); setRun((value) => value + 1) }} className="rounded-xl border border-cyan-400/40 px-4 py-2 text-xs font-bold text-cyan-200 transition hover:bg-cyan-400/10">↻ Replay flow</button></div>
    <div className="relative mt-8 overflow-hidden rounded-2xl border border-slate-800 bg-[#060d18] p-5">
      <div className="pointer-events-none absolute left-[12%] right-[12%] top-[4.4rem] hidden h-px bg-gradient-to-r from-cyan-400/40 via-cyan-400/70 to-[#c4ff5b]/50 sm:block" />
      <div className="relative grid gap-6 sm:grid-cols-4">{[['01', 'Backend', 'API'], ['02', 'filter()', 'Gate'], ['03', 'map()', 'Transform'], ['04', 'UI cards', 'Render']].map(([number, label, sub], index) => <div key={label} className={`relative z-10 flex flex-col items-center text-center transition-all duration-500 ${phase === index ? 'scale-105' : 'opacity-75'}`}><div className={`grid size-16 place-items-center rounded-2xl border font-mono text-sm font-bold ${phase === index ? 'border-cyan-300 bg-cyan-400/20 text-cyan-200 shadow-lg shadow-cyan-400/20' : 'border-slate-700 bg-[#0d1727] text-slate-500'}`}>{number}</div><p className="mt-3 text-sm font-bold text-white">{label}</p><p className="mt-1 text-[10px] uppercase tracking-widest text-slate-500">{sub}</p></div>)}</div>
      <div className="mt-8 grid gap-2 sm:grid-cols-4">{products.map((product, index) => <div key={product.id} className={`data-packet rounded-lg border px-3 py-2 font-mono text-[11px] transition-all duration-500 ${product.inStock ? 'border-[#c4ff5b]/30 bg-[#c4ff5b]/5 text-[#c4ff5b]' : 'border-rose-400/30 bg-rose-400/5 text-rose-300'} ${phase === 1 && !product.inStock ? 'packet-rejected' : ''}`} style={{ animationDelay: `${index * 180}ms` }}><span>{product.name}</span><span className="float-right">{product.inStock ? '✓ pass' : '× reject'}</span></div>)}</div>
    </div>
    <div className="mt-4 flex items-center gap-2 text-xs text-slate-500"><span className="size-2 animate-pulse rounded-full bg-cyan-300" />{stages[phase]}<span className="ml-auto font-mono text-cyan-300">step {phase + 1}/4</span></div>
  </div>
}

function Section({ id, eyebrow, title, intro, children }) {
  return <section id={id} className="scroll-mt-24 border-b border-slate-800/80 py-16 first:pt-0"><p className="mb-3 font-mono text-xs font-bold uppercase tracking-[.2em] text-cyan-300">{eyebrow}</p><h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">{title}</h2><p className="mt-4 mb-8 max-w-2xl text-base leading-7 text-slate-400">{intro}</p>{id === 'transform' && <AnimatedPipeline />}{children}</section>
}

function TicketSection() {
  const [showOnlyStock, setShowOnlyStock] = useState(true)
  const visibleProducts = (showOnlyStock ? products.filter((product) => product.inStock) : products).map(({ name, price }) => ({ name, price }))

  return <section id="ticket" className="scroll-mt-24 pt-20"><div className="rounded-3xl border border-[#c4ff5b]/30 bg-gradient-to-br from-[#142a2b] via-[#101d2d] to-[#101525] p-6 sm:p-10"><div className="flex flex-wrap items-start justify-between gap-5"><div><span className="rounded-full bg-[#c4ff5b] px-3 py-1 font-mono text-[10px] font-black text-[#0a1420]">TICKET FE-102</span><h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl">Build the product list.</h2><p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">Filter out unavailable products, then create a smaller object for each item that the UI actually needs.</p></div><span className="text-5xl">⌁</span></div><div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_.9fr]"><CodeBlock>{`const result = products
  .filter((product) => product.inStock)
  .map(({ name, price }) => ({
    name,
    price
  }));`}</CodeBlock><div className="rounded-2xl border border-slate-700/80 bg-[#09121f]/70 p-5"><div className="flex items-center justify-between"><p className="text-xs font-bold uppercase tracking-widest text-slate-500">Output preview</p><button onClick={() => setShowOnlyStock(!showOnlyStock)} className="rounded-lg border border-cyan-400/30 px-3 py-1.5 text-[11px] font-bold text-cyan-300 transition hover:bg-cyan-400/10">{showOnlyStock ? 'Show all' : 'Only in stock'}</button></div><div className="mt-4 space-y-2">{visibleProducts.map((product) => <div key={product.name} className="flex items-center justify-between rounded-lg bg-[#101d2d] px-4 py-3"><span className="text-sm font-semibold text-white">{product.name}</span><span className="font-mono text-xs text-[#c4ff5b]">₹{product.price.toLocaleString('en-IN')}</span></div>)}</div><p className="mt-4 text-[11px] text-slate-500">{visibleProducts.length} products ready to render</p></div></div></div></section>
}

function App() {
  return <div className="min-h-screen overflow-x-hidden bg-[#080d1a]">
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/80 bg-[#080d1a]/90 backdrop-blur-xl"><div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 lg:px-10"><a href="#top" className="flex items-center gap-3 text-sm font-bold tracking-tight text-white"><span className="grid size-8 place-items-center rounded-lg bg-[#c4ff5b] text-lg text-[#0b1420]">&lt;/&gt;</span>DevPath <span className="hidden font-normal text-slate-500 sm:inline">/ React training</span></a><div className="flex items-center gap-3 text-xs text-slate-400"><span className="hidden sm:inline">Chapter 01</span><span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1.5 font-semibold text-cyan-300">In progress · 30%</span></div></div></header>
    <div id="top" className="mx-auto flex max-w-[1440px] pt-16"><aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-72 shrink-0 border-r border-slate-800/80 px-8 py-10 lg:block"><p className="mb-5 text-[10px] font-bold uppercase tracking-[.22em] text-slate-500">Chapter map</p><nav className="space-y-1">{navItems.map(([number, label, href], index) => <a key={href} href={`#${href}`} className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition hover:bg-slate-800/70 ${index === 0 ? 'bg-slate-800/60 text-white' : 'text-slate-400 hover:text-white'}`}><span className="font-mono text-[11px] text-slate-600 group-hover:text-cyan-400">{number}</span>{label}</a>)}</nav><div className="mt-12 rounded-2xl border border-slate-700/70 bg-gradient-to-br from-[#111d32] to-[#0c1425] p-5"><span className="text-xl">⚡</span><p className="mt-3 text-sm font-semibold text-white">Your learning sprint</p><p className="mt-1 text-xs leading-5 text-slate-400">Small concepts. Real tickets. Production thinking.</p><div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-700"><div className="h-full w-[30%] rounded-full bg-[#c4ff5b]" /></div></div></aside>
      <main className="min-w-0 flex-1 px-5 py-12 sm:px-8 lg:px-20 lg:py-20"><section className="relative max-w-4xl" aria-labelledby="hero-title"><div className="pointer-events-none absolute -left-24 -top-24 size-80 rounded-full bg-cyan-500/10 blur-3xl" /><p className="relative mb-5 font-mono text-xs font-bold uppercase tracking-[.22em] text-cyan-300">CHAPTER 01 · PART 01</p><h1 id="hero-title" className="relative max-w-3xl text-4xl font-black tracking-[-.04em] text-white sm:text-6xl lg:text-7xl">JavaScript for <span className="text-[#c4ff5b]">React.</span></h1><p className="relative mt-6 max-w-2xl text-lg leading-8 text-slate-400">Do not memorize isolated syntax. Learn each concept as a real product-team step: take data, transform it, and turn it into a reliable user interface.</p><div className="mt-9 flex flex-wrap gap-3"><a href="#variables" className="rounded-xl bg-[#c4ff5b] px-5 py-3 text-sm font-bold text-[#0a1420] shadow-lg shadow-lime-300/10 transition hover:-translate-y-0.5">Start learning <span className="ml-2">↓</span></a><span className="rounded-xl border border-slate-700 px-5 py-3 text-sm text-slate-400">⌁ 12 min read · visual guide</span></div><div className="mt-14 grid gap-3 sm:grid-cols-3"><Stat value="08" label="core concepts" /><Stat value="01" label="company ticket" /><Stat value="∞" label="React patterns" /></div></section>
        <div className="my-20 h-px bg-gradient-to-r from-cyan-400/60 via-slate-700 to-transparent" />
        <Section id="variables" eyebrow="01 · Foundation" title="Variables: give your data a name" intro="Every piece of a React interface starts with data. Variables give that data a meaningful name, make your code readable, and provide a value that your component can use during rendering."><div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]"><CodeBlock>{`const company = "Silent Digital Hub";

let userStatus = "offline";
userStatus = "online";`}</CodeBlock><div className="rounded-2xl border border-slate-700/70 bg-[#101a2d] p-6"><p className="mb-5 text-xs font-bold uppercase tracking-widest text-slate-500">Reference model</p><div className="rounded-xl border border-cyan-400/30 bg-cyan-400/5 p-4"><p className="font-mono text-xs text-cyan-300">const user</p><div className="my-3 flex justify-center text-2xl text-slate-600">↓</div><div className="space-y-2 rounded-lg bg-[#0a1221] p-4 font-mono text-xs"><p><span className="text-fuchsia-300">name:</span> <span className="text-[#c4ff5b]">"Rohan"</span></p><p><span className="text-fuchsia-300">role:</span> <span className="text-[#c4ff5b]">"Developer"</span></p></div></div><p className="mt-4 text-xs leading-5 text-slate-400"><code>const</code> prevents reassignment of the reference. It does not freeze the contents of an object.</p></div></div><div className="mt-6 grid gap-3 sm:grid-cols-2"><div className="rounded-xl border border-slate-800 bg-[#0d1627] p-4 text-sm text-slate-300"><b className="text-[#c4ff5b]">const</b> — use by default when the binding will not be reassigned.</div><div className="rounded-xl border border-slate-800 bg-[#0d1627] p-4 text-sm text-slate-300"><b className="text-cyan-300">let</b> — use when the variable must receive a new value later.</div></div></Section>
        <Section id="types" eyebrow="02 · Recognise your data" title="Data types: understand the API payload" intro="An API response can contain strings, numbers, booleans, null values, arrays, and objects at the same time. Identify the shape of the data before deciding how to render it."><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{[['Aa', 'string', '"Rohan"', 'text-fuchsia-300'], ['#', 'number', '25', 'text-amber-300'], ['✓', 'boolean', 'true', 'text-cyan-300'], ['∅', 'null', 'null', 'text-rose-300'], ['[]', 'array', '["React"]', 'text-[#c4ff5b]'], ['{}', 'object', '{ id: 101 }', 'text-sky-300']].map(([icon, type, example, color]) => <div key={type} className="rounded-2xl border border-slate-800 bg-[#0d1627] p-5 transition hover:-translate-y-1 hover:border-slate-600"><span className={`font-mono text-2xl ${color}`}>{icon}</span><p className="mt-4 text-sm font-semibold text-white">{type}</p><p className="mt-1 font-mono text-xs text-slate-500">{example}</p></div>)}</div><div className="mt-6 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-5"><p className="text-sm font-bold text-amber-200">Developer habit: inspect before rendering</p><p className="mt-2 text-sm leading-6 text-slate-400">When a screen breaks, first ask: is the value missing, null, or a different type than expected? This simple check prevents many API-driven UI bugs.</p></div></Section>
        <Section id="objects" eyebrow="03 · Shape the response" title="Objects & arrays" intro="Objects describe one entity. Arrays describe a collection of entities—the exact structure you use to render dashboard rows, cards, menus, and tables."><div className="grid gap-6 lg:grid-cols-2"><CodeBlock>{`const employee = {
  name: "Aman",
  address: null
};

// safe access — no crash
employee.address?.city`}</CodeBlock><div className="rounded-2xl border border-slate-700/70 bg-[#101a2d] p-5"><div className="mb-4 flex items-center justify-between"><span className="text-xs font-bold uppercase tracking-widest text-slate-500">API response</span><span className="rounded-full bg-rose-400/10 px-2 py-1 text-[10px] text-rose-300">address missing</span></div><div className="space-y-2 font-mono text-xs"><div className="rounded-lg bg-[#0a1221] p-3 text-slate-300">employee <span className="text-slate-600">→</span> <span className="text-fuchsia-300">{`{}`}</span></div><div className="ml-7 rounded-lg border border-cyan-400/20 bg-cyan-400/5 p-3 text-cyan-200">address?.city <span className="text-slate-500">→</span> undefined</div></div><p className="mt-4 text-xs leading-5 text-slate-400">Optional chaining safely stops at a missing value instead of throwing an error.</p></div></div></Section>
        <Section id="functions" eyebrow="04 · Reusable logic" title="Functions: one job, repeatable" intro="React event handlers, calculations, and data transformations belong in functions. Arrow functions are concise, composable, and common in modern React codebases."><div className="grid gap-6 lg:grid-cols-[.8fr_1.2fr]"><div className="rounded-2xl border border-[#c4ff5b]/20 bg-[#c4ff5b]/5 p-6"><p className="text-4xl">ƒ</p><p className="mt-4 text-lg font-bold text-white">Input → Process → Output</p><p className="mt-2 text-sm leading-6 text-slate-400">Keep functions focused on one job. A precise name should make the function understandable without requiring a comment.</p></div><CodeBlock>{`const calculateSalary = (salary, bonus) => {
  return salary + bonus;
};

calculateSalary(50000, 5000); // 55000`}</CodeBlock></div></Section>
        <Section id="destructuring" eyebrow="05 · Read data clearly" title="Destructuring: unpack what you need" intro="Destructuring creates local variables from object properties or array positions. In React, it keeps component props and API transformations easy to scan."><div className="grid gap-6 lg:grid-cols-2"><CodeBlock>{`const employee = {
  name: "Aman",
  department: "Frontend",
  experience: 2
};

const { name, department } = employee;`}</CodeBlock><div className="rounded-2xl border border-slate-700/70 bg-[#101a2d] p-6"><p className="text-xs font-bold uppercase tracking-widest text-slate-500">Visual mapping</p><div className="mt-5 space-y-3 font-mono text-xs"><div className="rounded-lg bg-[#0a1221] p-3 text-slate-400">employee <span className="float-right text-slate-600">{`{ name, department, ... }`}</span></div><div className="flex justify-center text-cyan-400">↓ pick named properties</div><div className="grid grid-cols-2 gap-2"><span className="rounded-lg border border-cyan-400/30 bg-cyan-400/5 p-3 text-cyan-200">name = Aman</span><span className="rounded-lg border border-cyan-400/30 bg-cyan-400/5 p-3 text-cyan-200">department = Frontend</span></div></div><p className="mt-5 text-sm leading-6 text-slate-400">The original object stays unchanged. You simply create convenient local names.</p></div></div></Section>
        <Section id="spread" eyebrow="06 · Preserve immutability" title="Spread & rest: copy, extend, collect" intro="Spread copies values into a new object or array. This is the foundation of immutable React updates: create a new value instead of mutating existing state."><div className="grid gap-6 lg:grid-cols-2"><CodeBlock>{`const user = {
  id: 1,
  name: "Aman",
  role: "Developer"
};

const updatedUser = {
  ...user,
  role: "React Developer"
};`}</CodeBlock><div className="rounded-2xl border border-slate-700/70 bg-[#101a2d] p-6"><p className="text-xs font-bold uppercase tracking-widest text-slate-500">Old object → new object</p><div className="mt-5 flex items-center gap-3 font-mono text-xs"><div className="flex-1 rounded-lg bg-[#0a1221] p-4 text-slate-400">role: Developer</div><span className="text-2xl text-cyan-400">+</span><div className="flex-1 rounded-lg border border-[#c4ff5b]/30 bg-[#c4ff5b]/5 p-4 text-[#c4ff5b]">role: React Developer</div></div><p className="mt-5 text-sm leading-6 text-slate-400">React can detect the new object reference and render predictably. Direct state mutation can leave the UI stale.</p></div></div></Section>
        <Section id="transform" eyebrow="07 · The React superpower" title="map, filter & find" intro="Much of daily React work is transforming API data into a shape that the UI can safely and efficiently render."><div className="relative overflow-hidden rounded-2xl border border-slate-700 bg-[#101a2d] p-6"><div className="grid items-center gap-4 text-center sm:grid-cols-[1fr_auto_1fr_auto_1fr]"><Flow label="API data" icon="{ }" /><span className="text-2xl text-cyan-400">→</span><Flow label="filter()" icon="⌕" active /><span className="text-2xl text-cyan-400">→</span><Flow label="map() → UI" icon="▤" active /></div><div className="mt-6 grid gap-3 font-mono text-xs sm:grid-cols-3"><div className="rounded-lg bg-[#0a1221] p-3 text-slate-400">all employees <b className="float-right text-white">3</b></div><div className="rounded-lg bg-[#0a1221] p-3 text-slate-400">active only <b className="float-right text-[#c4ff5b]">2</b></div><div className="rounded-lg bg-[#0a1221] p-3 text-slate-400">UI cards <b className="float-right text-cyan-300">2</b></div></div></div><div className="mt-6"><CodeBlock>{`const activeEmployees = employees
  .filter((employee) => employee.active)
  .map((employee) => ({
    ...employee,
    name: employee.name.toUpperCase()
  }));`}</CodeBlock></div><div className="mt-5 grid gap-3 sm:grid-cols-3"><div className="rounded-xl border border-slate-800 bg-[#0d1627] p-4 text-sm text-slate-300"><b className="text-cyan-300">map()</b><br />Transforms every item.</div><div className="rounded-xl border border-slate-800 bg-[#0d1627] p-4 text-sm text-slate-300"><b className="text-cyan-300">filter()</b><br />Keeps matching items.</div><div className="rounded-xl border border-slate-800 bg-[#0d1627] p-4 text-sm text-slate-300"><b className="text-cyan-300">find()</b><br />Returns the first match.</div></div></Section>
        <TicketSection /><footer className="mt-24 flex flex-col justify-between gap-3 border-t border-slate-800 pt-8 text-xs text-slate-500 sm:flex-row"><span>DevPath · React training notes</span><span>Built for curious developers ✦</span></footer>
      </main>
    </div>
  </div>
}

export default App
