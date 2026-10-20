import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Clock3, Instagram, MapPin, Menu as MenuIcon, MessageCircle, Plus, X } from "lucide-react";
import "./index.css";

const PHONE = "923066888356";
const WHATSAPP = `https://wa.me/${PHONE}`;
const orderUrl = (message = "Hi Dumsteam! I'd like to place an order.") => `${WHATSAPP}?text=${encodeURIComponent(message)}`;
const INSTAGRAM = "https://www.instagram.com/dumsteam.pk/";
const MAPS = "https://www.google.com/maps/search/?api=1&query=Karachi%2C%20Pakistan";

const dishes = [
  { n: "01", name: "Chicken Dumplings", description: "Classic, juicy, and always a good idea.", price: 450, tag: "THE CLASSIC" },
  { n: "02", name: "Chicken Cheese Dumplings", description: "A little creamy, a lot comforting.", price: 500, tag: "CROWD FAVOURITE" },
  { n: "03", name: "Chicken Tikka Dumplings", description: "Bold tikka flavour tucked into every fold.", price: 550, tag: "A LITTLE KICK" },
  { n: "04", name: "Chicken Cheese Tikka", description: "Spicy meets cheesy. The best of both worlds.", price: 600, tag: "THE BIG COMBO" },
];

function Brand({ compact = false }) {
  return <a href="#top" aria-label="Dumsteam home" className="group inline-flex min-w-0 items-center gap-2.5 text-[#293323] no-underline">
    <span className="grid size-10 shrink-0 place-items-center rounded-full border border-[#35432d]/70 bg-[#eee8d7] font-display text-xl transition-transform duration-300 group-hover:rotate-[-8deg]">蒸</span>
    <span className="min-w-0 font-display text-[22px] font-bold leading-none tracking-[-.065em] sm:text-[25px]">dumsteam
      {!compact && <span className="mt-1.5 block font-sans text-[7px] font-semibold tracking-[.17em]">DUMPLINGS THAT HIT DIFFERENT.</span>}
    </span>
  </a>;
}

function OrderButton({ children = "Order on WhatsApp", className = "", light = false, message }) {
  return <a href={orderUrl(message)} target="_blank" rel="noopener noreferrer"
    className={`inline-flex min-h-12 items-center justify-center gap-3 px-5 py-3 text-center text-[11px] font-bold tracking-wide transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b66c4c] ${light ? "bg-[#f7f3e9] text-[#35432d] hover:bg-white" : "bg-[#35432d] text-[#f7f3e9] hover:bg-[#263321]"} ${className}`}>
    {children}<ArrowUpRight size={15} strokeWidth={1.8} />
  </a>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const nav = [["The menu", "#menu"], ["Our story", "#story"], ["Find us", "#find-us"]];
  return <>
    <div className="bg-[#35432d] px-3 py-2 text-center text-[8px] font-medium tracking-[.13em] text-[#f7f3e9] sm:text-[9px] sm:tracking-[.2em]">
      A LITTLE FOLD. A LOT OF FLAVOUR. <span className="ml-1 text-[#d9cda9]">✳</span>
    </div>
    <header className="sticky top-0 z-40 border-b border-[#ded8c7]/90 bg-[#fcfaf4]/95 backdrop-blur-md">
      <div className="mx-auto flex h-[70px] max-w-[1320px] items-center justify-between px-4 sm:h-[82px] sm:px-7 lg:px-12">
        <Brand />
        <button type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open}
          onClick={() => setOpen(v => !v)} className="grid size-11 shrink-0 place-items-center border border-[#d8d2c0] text-[#35432d] md:hidden">
          {open ? <X size={21} /> : <MenuIcon size={21} />}
        </button>
        <nav aria-label="Main navigation" className="hidden items-center gap-5 md:flex lg:gap-8">
          {nav.map(([label, href]) => <a key={href} href={href} className="min-h-11 content-center text-[11px] font-semibold text-[#35432d] transition-colors hover:text-[#b66c4c]">{label}</a>)}
          <OrderButton className="min-h-11 px-4" />
        </nav>
      </div>
      {open && <nav aria-label="Mobile navigation" className="border-t border-[#ded8c7] bg-[#fcfaf4] px-4 pb-5 pt-2 md:hidden">
        {nav.map(([label, href], i) => <a key={href} href={href} onClick={() => setOpen(false)} className="flex min-h-12 items-center justify-between border-b border-[#e6e0d1] text-sm font-medium">{label}<span className="font-mono text-[10px] text-[#8b8e7a]">0{i + 1}</span></a>)}
        <OrderButton className="mt-4 w-full" />
      </nav>}
    </header>
  </>;
}

function HeroPhoto() {
  return <div className="relative mx-auto w-full max-w-[540px] pb-7 pl-3 pr-2 pt-5 sm:pb-10 sm:pl-6 sm:pt-7 md:mt-1 md:pr-5">
    <div className="absolute right-0 top-0 h-[82%] w-[83%] border border-[#a9aa91]" />
    <div className="photo-frame relative z-[1] rotate-[1deg] bg-[#e6dec9] p-2.5 shadow-[0_20px_50px_rgba(45,53,34,.11)] sm:p-3">
      <img className="hero-photo block aspect-[.98] w-full object-cover sm:aspect-[.92]" src="https://images.unsplash.com/photo-1563247527-9a9c5b1f7c1b?auto=format&fit=crop&w=1100&q=85" alt="Steamed dumplings served with dipping sauce" onError={e => { e.currentTarget.style.display = "none"; e.currentTarget.nextElementSibling.style.display = "flex"; }} />
      <div style={{display:"none"}} className="paper-noise aspect-[.98] w-full flex-col items-center justify-center bg-[#e8ddc2] text-center text-[#35432d] sm:aspect-[.92]"><span className="text-6xl">🥟</span><span className="mt-3 font-display text-xl">A steamy little happy place.</span><span className="mt-2 font-mono text-[9px] tracking-widest">FRESHLY FOLDED · KARACHI</span></div>
    </div>
    <div className="orbit-stamp absolute left-0 top-[11%] z-[2] grid size-[82px] place-content-center rounded-full border border-[#35432d] bg-[#fcfaf4] text-center text-[7px] leading-[1.65] tracking-[.13em] sm:left-[-1%] sm:size-[94px] sm:text-[8px]">
      FRESHLY<br />STEAMED<br /><span className="text-base">✳</span> MADE TO<br />MAKE YOUR DAY
    </div>
    <div className="absolute bottom-0 right-1 z-[2] max-w-[130px] rotate-[-3deg] bg-[#35432d] px-3 py-2.5 text-[#f7f3e9] sm:right-0 sm:px-4 sm:py-3">
      <span className="font-mono text-[8px] tracking-[.12em]">THE DAILY CRAVING</span><span className="mt-1 block font-display text-sm italic sm:text-base">Folded with love.</span>
    </div>
    <span aria-hidden="true" className="absolute bottom-[15%] left-0 z-[2] font-display text-3xl text-[#b66c4c]">✳</span>
  </div>;
}

function Hero() {
  return <section id="top" className="overflow-hidden bg-[#f1ecdd]">
    <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-2 px-5 pb-12 pt-9 sm:px-8 sm:pb-16 sm:pt-14 md:grid-cols-[.92fr_1.08fr] md:gap-7 md:px-10 md:py-14 lg:gap-16 lg:px-16 lg:py-20">
      <div className="reveal-up relative z-[3] max-w-[560px]">
        <div className="font-mono flex flex-wrap items-center gap-2 text-[9px] tracking-[.1em] text-[#35432d] sm:text-[10px]"><span className="size-2 rounded-full bg-[#b66c4c]" /> KARACHI, PAKISTAN <span className="text-[#a7a18d]">/</span> VOL. 01</div>
        <p className="mt-7 font-mono text-[9px] uppercase tracking-[.2em] text-[#8a8d78] sm:mt-10">A journal of very good bites</p>
        <h1 className="font-display mt-3 text-[clamp(3.25rem,13vw,5.3rem)] font-medium leading-[.98] tracking-[-.065em] text-[#293323] sm:mt-4 sm:text-7xl lg:text-[5.4rem] xl:text-[6.1rem]">
          A little<br />fold.<br /><em className="text-[#35432d]">A lot of</em><br /><em className="text-[#35432d]">flavour.</em>
        </h1>
        <div className="mt-5 flex items-start gap-3 sm:mt-7">
          <span className="mt-1 h-12 w-[2px] shrink-0 bg-[#b66c4c]" />
          <p className="max-w-[330px] text-[13px] leading-6 text-[#6e7161] sm:text-sm sm:leading-7">Little parcels of comfort, folded up and steamed just right. Made for snack breaks, midnight cravings, and “okay, one more.”</p>
        </div>
        <div className="mt-6 flex flex-col gap-3 min-[390px]:flex-row min-[390px]:items-center sm:mt-8">
          <OrderButton className="w-full min-[390px]:w-auto">Get your dumplings</OrderButton>
          <a href="#menu" className="inline-flex min-h-11 items-center justify-center gap-2 px-3 text-[11px] font-semibold text-[#35432d] hover:text-[#b66c4c]">Read the menu <ArrowDown size={14} /></a>
        </div>
        <div className="mt-7 flex items-center gap-2 font-mono text-[8px] tracking-[.12em] text-[#77796a] sm:mt-10"><Clock3 size={13} /> DAILY, 12 PM — 12 AM <span className="mx-1 text-[#b66c4c]">✳</span> TAKE-AWAY & DELIVERY</div>
      </div>
      <HeroPhoto />
      <div className="col-span-full mt-6 flex items-center justify-between border-t border-[#d5cfbd] pt-3 font-mono text-[7px] tracking-[.12em] text-[#77796a] sm:text-[8px] sm:tracking-[.17em] md:mt-4">
        <span>ISSUE NO. 001 <span className="mx-1 text-[#b66c4c]">/</span> THE DUMPLING EDIT</span><a href="#story" className="inline-flex min-h-8 items-center gap-2 hover:text-[#b66c4c]">TURN THE PAGE <ArrowDownRight size={13} /></a>
      </div>
    </div>
  </section>;
}

function SectionLabel({ children, number }) {
  return <div className="font-mono flex items-center gap-3 text-[9px] tracking-[.15em] text-[#35432d]"><span className="text-[#b66c4c]">{number}</span><span className="h-px w-7 bg-[#b66c4c]" />{children}</div>;
}

function Story() {
  return <section id="story" className="bg-[#fcfaf4]">
    <div className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 sm:py-24 lg:px-16 lg:py-28">
      <SectionLabel number="01">A NOTE FROM THE STEAMER</SectionLabel>
      <div className="mt-7 grid gap-6 md:grid-cols-[1.15fr_.85fr] md:items-end md:gap-16">
        <h2 className="font-display max-w-3xl text-[clamp(2.7rem,9vw,5.7rem)] leading-[1.04] tracking-[-.06em]">Not just dumplings.<br /><em className="text-[#35432d]">A whole mood.</em></h2>
        <div className="max-w-md pb-1"><p className="text-[13px] leading-7 text-[#6e7161] sm:text-sm sm:leading-8">Some things don't need to be complicated. A warm basket, a good sauce, and a few minutes where the only plan is that first bite.</p><p className="mt-4 font-display text-lg italic text-[#b66c4c]">Simple ingredients. Big comfort.</p></div>
      </div>
    </div>
    <div className="overflow-hidden border-y border-[#d8d2c0] bg-[#e9e3d3] py-4 sm:py-5"><p className="whitespace-nowrap text-center font-mono text-[9px] tracking-[.22em] text-[#35432d] sm:text-[10px] sm:tracking-[.3em]">FOLD <span className="mx-2 text-[#b66c4c]">✳</span> STEAM <span className="mx-2 text-[#b66c4c]">✳</span> DIP <span className="mx-2 text-[#b66c4c]">✳</span> REPEAT <span className="mx-2 text-[#b66c4c]">✳</span> FOLD <span className="mx-2 text-[#b66c4c]">✳</span> STEAM <span className="mx-2 text-[#b66c4c]">✳</span> DIP</p></div>
  </section>;
}

function MenuSection() {
  return <section id="menu" className="bg-[#efeadb]">
    <div className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 sm:py-24 lg:px-16 lg:py-28">
      <SectionLabel number="02">THE MENU, FOLDED OPEN</SectionLabel>
      <div className="mt-6 flex flex-col gap-4 sm:mt-7 md:flex-row md:items-end md:justify-between">
        <h2 className="font-display text-[clamp(2.7rem,8vw,5.2rem)] leading-[1.02] tracking-[-.06em]">The good<br className="hidden sm:block" /> <em className="text-[#35432d]">stuff.</em></h2>
        <p className="max-w-xs text-[12px] leading-6 text-[#77796a] sm:text-[13px] sm:leading-7">Six pieces per order. Pick your favourite, add a little sauce, and make an occasion out of absolutely nothing.</p>
      </div>
      <div className="mt-8 border-t border-[#bdb9a5] sm:mt-11">
        {dishes.map(dish => <article key={dish.n} className="group grid grid-cols-[35px_minmax(0,1fr)_auto] items-start gap-3 border-b border-[#bdb9a5] py-5 transition-colors duration-200 hover:bg-[#e8e1cf]/70 sm:grid-cols-[54px_minmax(0,1fr)_100px] sm:items-center sm:gap-5 sm:py-7">
          <span className="pt-1 font-mono text-[9px] tracking-widest text-[#b66c4c] sm:text-[10px]">{dish.n}</span>
          <div className="min-w-0">
            <span className="font-mono text-[7px] tracking-[.13em] text-[#8b8d78] sm:text-[8px]">{dish.tag}</span>
            <h3 className="font-display mt-1 text-[19px] font-medium leading-tight tracking-[-.035em] sm:text-2xl md:text-[27px]">{dish.name}</h3>
            <p className="mt-1.5 max-w-lg text-[10px] leading-5 text-[#77796a] sm:text-xs sm:leading-6">{dish.description}</p>
          </div>
          <div className="flex flex-col items-end gap-2 pt-2 sm:items-end sm:pt-0"><strong className="font-display text-[17px] font-semibold sm:text-xl">Rs {dish.price}</strong><a href={orderUrl(`Hi Dumsteam! I'd like to order ${dish.name} (6 pieces) for Rs ${dish.price}.`)} target="_blank" rel="noopener noreferrer" aria-label={`Order ${dish.name}`} className="grid size-9 place-items-center border border-[#bdb9a5] transition-all hover:border-[#35432d] hover:bg-[#35432d] hover:text-[#f7f3e9]"><Plus size={15} /></a></div>
        </article>)}
      </div>
      <div className="mt-8 grid gap-0 border-y border-[#bdb9a5] sm:grid-cols-3 sm:divide-x sm:divide-[#bdb9a5]">
        <div className="flex items-start gap-3 border-b border-[#bdb9a5] py-4 sm:border-0 sm:px-4 sm:py-5 sm:first:pl-0"><span className="mt-0.5 text-lg text-[#b66c4c]">◉</span><div><h3 className="text-[11px] font-bold">Special sauce</h3><p className="mt-1 text-[10px] leading-5 text-[#77796a]">One complimentary with your order. Extra sauce Rs 80.</p></div></div>
        <div className="flex items-start gap-3 border-b border-[#bdb9a5] py-4 sm:border-0 sm:px-4 sm:py-5"><span className="mt-0.5 text-lg text-[#b66c4c]">☼</span><div><h3 className="text-[11px] font-bold">Soft drinks · 345 ml</h3><p className="mt-1 text-[10px] leading-5 text-[#77796a]">Pepsi, 7UP or Mirinda · Rs 100 each</p></div></div>
        <div className="flex items-start gap-3 py-4 sm:px-4 sm:py-5 sm:pr-0"><span className="mt-0.5 text-lg text-[#b66c4c]">♧</span><div><h3 className="text-[11px] font-bold">Water · 330 ml</h3><p className="mt-1 text-[10px] leading-5 text-[#77796a]">A bottle of water · Rs 70</p></div></div>
      </div>
      <div className="mt-3 flex flex-col gap-1 text-[9px] leading-5 text-[#77796a] sm:flex-row sm:justify-between"><span>All prices in PKR.</span><span>Delivery is Rs 150, charged separately.</span></div>
      <div className="mt-7 flex flex-col gap-4 bg-[#35432d] p-5 text-[#f7f3e9] sm:flex-row sm:items-center sm:justify-between sm:p-7"><div><p className="font-mono text-[8px] tracking-[.16em] text-[#d9cda9]">THE NEXT PAGE IS YOURS</p><p className="font-display mt-2 text-xl sm:text-2xl">Craving something good?</p></div><OrderButton light className="w-full sm:w-auto" message="Hi Dumsteam! I'd like to place an order: " >Order your favourites</OrderButton></div>
    </div>
  </section>;
}

function OrderCallout() {
  return <section className="relative overflow-hidden bg-[#35432d] px-5 py-16 text-center text-[#f7f3e9] sm:px-8 sm:py-24">
    <span aria-hidden="true" className="pointer-events-none absolute -left-10 top-4 font-display text-[140px] text-[#aab091]/10 sm:left-[7%] sm:text-[190px]">蒸</span>
    <span aria-hidden="true" className="pointer-events-none absolute -right-8 bottom-0 font-display text-[140px] text-[#aab091]/10 sm:right-[8%] sm:text-[190px]">蒸</span>
    <div className="relative mx-auto max-w-xl"><SectionLabel number="03"><span className="text-[#d9cda9]">YOUR CRAVINGS CALLED</span></SectionLabel>
      <h2 className="font-display mt-7 text-[clamp(2.8rem,10vw,5.5rem)] leading-[1.03] tracking-[-.06em]">Let's make this<br /><em className="text-[#d9cda9]">a dumpling day.</em></h2>
      <p className="mx-auto mt-5 max-w-sm text-xs leading-6 text-[#d0d0bd] sm:text-[13px] sm:leading-7">A quick message, your order, and something lovely to look forward to.</p>
      <OrderButton light className="mt-7 w-full min-[390px]:w-auto" />
      <p className="mt-4 font-mono text-[8px] tracking-wide text-[#c4c5b1]">ADVANCE ONLINE PAYMENTS ONLY · TAKE-AWAY & DELIVERY</p>
    </div>
  </section>;
}

function Contact() {
  const rows = [
    { icon: <Clock3 size={17} />, label: "THE HOURS", value: "Every day, 12 PM – 12 AM" },
    { icon: <MapPin size={17} />, label: "THE NEIGHBOURHOOD", value: "Karachi, Pakistan", link: "Explore Karachi", href: MAPS },
    { icon: <MessageCircle size={17} />, label: "ORDERS & QUESTIONS", value: "0306 6888356", link: "Chat on WhatsApp", href: WHATSAPP },
    { icon: <Instagram size={17} />, label: "FOLLOW ALONG", value: "@dumsteam.pk", link: "Find us on Instagram", href: INSTAGRAM },
  ];
  return <section id="find-us" className="bg-[#fcfaf4]">
    <div className="mx-auto grid max-w-[1320px] gap-8 px-5 py-16 sm:px-8 sm:py-24 md:grid-cols-[.9fr_1.1fr] md:items-center md:gap-16 lg:px-16 lg:py-28">
      <div><SectionLabel number="04">THE LAST PAGE</SectionLabel><h2 className="font-display mt-6 text-[clamp(2.7rem,8vw,4.7rem)] leading-[1.03] tracking-[-.06em]">We're just a<br /><em className="text-[#35432d]">message away.</em></h2><p className="mt-5 max-w-sm text-[13px] leading-7 text-[#6e7161]">A craving, a question, a quick hello. We'd love to hear from you.</p><a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-11 items-center gap-2 text-[11px] font-bold text-[#b66c4c] hover:underline">Follow the little journal <ArrowRight size={14} /></a></div>
      <div className="border-y border-[#d8d2c0] bg-[#f4efe2] px-4 sm:px-7">
        {rows.map(row => <div key={row.label} className="flex items-start gap-3 border-b border-[#d8d2c0] py-5 last:border-0 sm:gap-4 sm:py-6"><span className="grid size-10 shrink-0 place-items-center rounded-full border border-[#c5c0a9] text-[#35432d]">{row.icon}</span><div className="min-w-0 flex-1"><p className="font-mono text-[8px] tracking-[.13em] text-[#77796a]">{row.label}</p><p className="mt-1.5 break-words font-display text-[15px] font-semibold sm:text-base">{row.value}</p>{row.link && <a className="mt-1.5 inline-flex min-h-8 items-center text-[10px] font-semibold text-[#b66c4c] hover:underline" href={row.href} target="_blank" rel="noopener noreferrer">{row.link} <ArrowUpRight className="ml-1" size={12} /></a>}</div></div>)}
      </div>
    </div>
  </section>;
}

function Footer() {
  return <footer className="bg-[#e9e3d3] px-5 pb-24 pt-7 sm:px-8 sm:pb-7 lg:px-12">
    <div className="mx-auto flex max-w-[1320px] flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><Brand compact /><p className="font-mono text-[8px] tracking-[.12em] text-[#626957]">GOOD DUMPLINGS. ALWAYS. <span className="text-[#b66c4c]">✳</span></p><div className="flex gap-5 text-[10px] font-semibold"><a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="hover:text-[#b66c4c]">Instagram ↗</a><a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="hover:text-[#b66c4c]">WhatsApp ↗</a></div></div>
    <p className="mx-auto mt-6 max-w-[1320px] border-t border-[#d2cbb8] pt-4 text-center font-mono text-[7px] tracking-[.12em] text-[#77796a]">© 2026 DUMSTEAM · MADE WITH A LITTLE EXTRA SAUCE.</p>
  </footer>;
}

function App() {
  return <><Header /><main><Hero /><Story /><MenuSection /><OrderCallout /><Contact /></main><Footer />
    <a href={orderUrl()} target="_blank" rel="noopener noreferrer" className="fixed bottom-3 left-3 right-3 z-50 flex min-h-12 items-center justify-center gap-2 bg-[#35432d] px-4 py-3 text-xs font-bold text-[#f7f3e9] shadow-[0_8px_28px_rgba(38,48,31,.2)] transition hover:bg-[#263321] sm:hidden"><MessageCircle size={16} /> Order on WhatsApp <ArrowUpRight size={15} /></a>
  </>;
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App /></React.StrictMode>);