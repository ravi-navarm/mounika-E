import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarDays, Heart, MapPin, Sparkles } from "lucide-react";

const danceImage = "/radha-krishna-dance.png";
const boatImage = "/radha-krishna-boat.png";
const fluteImage = "/radha-krishna-flute.png";
const swingImage = "/radha-krishna-swing.png";

const floatingPetals = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: 4 + ((i * 11) % 92),
  duration: 11 + (i % 5),
  delay: i * 0.45,
  scale: 0.72 + (i % 4) * 0.12,
}));

function FloatingPetals() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-70">
      {floatingPetals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute top-[-10%] text-[18px] text-[#d48aa4] md:text-[22px]"
          style={{ left: `${petal.left}%` }}
          animate={{
            y: [0, 1000],
            x: [0, petal.id % 2 === 0 ? 26 : -26, 0],
            rotate: [0, 18, -12, 0],
            opacity: [0, 0.7, 0.45, 0],
            scale: [petal.scale, petal.scale + 0.12, petal.scale],
          }}
          transition={{ duration: petal.duration, repeat: Infinity, delay: petal.delay, ease: "linear" }}
        >
          ✿
        </motion.div>
      ))}
    </div>
  );
}

function GlowOrb({ className = "" }) {
  return (
    <div
      className={`absolute rounded-full blur-3xl ${className}`}
      style={{
        background:
          "radial-gradient(circle, rgba(255,255,255,.7) 0%, rgba(236,181,200,.35) 28%, rgba(115,190,160,.22) 54%, rgba(90,160,215,.2) 72%, transparent 100%)",
      }}
    />
  );
}

function GlassCard({ children, className = "" }) {
  return (
    <div className={`rounded-[30px] border border-[#caa772]/30 bg-white/62 p-6 shadow-[0_18px_45px_rgba(132,92,64,.12)] backdrop-blur-xl ${className}`}>
      {children}
    </div>
  );
}

function PeacockAccent({ className = "" }) {
  return (
    <motion.div
      className={`pointer-events-none absolute ${className}`}
      animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
      transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="relative h-28 w-28 md:h-36 md:w-36">
        {[
          "rotate-[-36deg]",
          "rotate-[-18deg]",
          "rotate-[0deg]",
          "rotate-[18deg]",
          "rotate-[36deg]",
        ].map((rot, i) => (
          <motion.div
            key={rot}
            className={`absolute left-1/2 top-2 h-20 w-8 -translate-x-1/2 origin-bottom rounded-full bg-gradient-to-t from-[#4b9f8a] via-[#65b89f] to-[#9dd7c3] opacity-80 md:h-28 md:w-10 ${rot}`}
            animate={{ scaleY: [1, 1.08, 1] }}
            transition={{ duration: 2.8 + i * 0.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute left-1/2 top-3 h-8 w-8 -translate-x-1/2 rounded-full bg-[#214f86] md:h-10 md:w-10" />
            <div className="absolute left-1/2 top-5 h-4 w-4 -translate-x-1/2 rounded-full bg-[#6ec7c8] md:top-6 md:h-5 md:w-5" />
            <div className="absolute left-1/2 top-6 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#f0cb63] md:top-[30px] md:h-3 md:w-3" />
          </motion.div>
        ))}
        <motion.div
          className="absolute bottom-0 left-1/2 h-10 w-10 -translate-x-1/2 rounded-full bg-gradient-to-b from-[#214f86] to-[#173863] shadow-[0_6px_20px_rgba(23,56,99,.25)] md:h-12 md:w-12"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute bottom-2 left-1/2 h-12 w-1 -translate-x-1/2 rounded-full bg-[#214f86] md:h-14" />
      </div>
    </motion.div>
  );
}

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d8b777]/30 bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.28em] text-[#8d6132] backdrop-blur-md"
      >
        <Sparkles className="h-3.5 w-3.5" />
        {eyebrow}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-serif text-3xl leading-tight text-[#2f1715] md:text-5xl"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#4f3734] md:text-base"
      >
        {subtitle}
      </motion.p>
    </div>
  );
}

function LotusDivider() {
  return (
    <div className="flex items-center justify-center gap-3 py-4 text-[#a97a42]">
      <span className="h-px w-14 bg-gradient-to-r from-transparent to-[#d4b26e]" />
      <span className="text-lg">✦</span>
      <span className="text-2xl">❀</span>
      <span className="text-lg">✦</span>
      <span className="h-px w-14 bg-gradient-to-l from-transparent to-[#d4b26e]" />
    </div>
  );
}

function CountdownCard({ label, value }) {
  return (
    <GlassCard className="text-center p-4 sm:p-6">
      <div className="font-serif text-4xl text-[#2f1715] sm:text-5xl md:text-6xl">{String(value).padStart(2, "0")}</div>
      <div className="mt-3 text-[11px] uppercase tracking-[0.28em] text-[#7e6255] sm:text-xs sm:tracking-[0.32em]">{label}</div>
    </GlassCard>
  );
}

function IntroLotus() {
  const backPetals = [
    { id: "b1", left: "left-[18px] sm:left-[24px]", rotateFrom: -42, rotateTo: -24 },
    { id: "b2", left: "left-[66px] sm:left-[82px]", rotateFrom: -24, rotateTo: -10 },
    { id: "b3", left: "left-1/2 -translate-x-1/2", rotateFrom: 0, rotateTo: 0 },
    { id: "b4", left: "right-[66px] sm:right-[82px]", rotateFrom: 24, rotateTo: 10 },
    { id: "b5", left: "right-[18px] sm:right-[24px]", rotateFrom: 42, rotateTo: 24 },
  ];

  const frontPetals = [
    { id: "f1", left: "left-[56px] sm:left-[72px]", rotateFrom: -26, rotateTo: -12 },
    { id: "f2", left: "left-1/2 -translate-x-1/2", rotateFrom: 0, rotateTo: 0 },
    { id: "f3", left: "right-[56px] sm:right-[72px]", rotateFrom: 26, rotateTo: 12 },
  ];

  return (
    <div className="relative mx-auto flex w-full max-w-5xl items-center justify-center px-1 sm:px-4">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-4xl scale-[0.96] sm:scale-100"
      >
        <div className="relative mx-auto flex h-[31rem] w-full max-w-[24rem] items-center justify-center sm:h-[33rem] sm:max-w-md">
          <motion.div
            className="absolute h-[260px] w-[260px] rounded-full border border-white/20 sm:h-[320px] sm:w-[320px]"
            animate={{ scale: [0.92, 1.05, 0.92], opacity: [0.16, 0.36, 0.16] }}
            transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute h-[220px] w-[220px] rounded-full border border-white/14 sm:h-[280px] sm:w-[280px]"
            animate={{ rotate: [0, 360], opacity: [0.1, 0.24, 0.1] }}
            transition={{ duration: 13, repeat: Infinity, ease: "linear" }}
          />

          <div className="absolute bottom-[15%] left-1/2 z-0 w-[300px] -translate-x-1/2 sm:w-[360px]">
            <div className="relative h-[220px] sm:h-[245px]">
              <div className="absolute bottom-[8px] left-1/2 h-6 w-[180px] -translate-x-1/2 rounded-full bg-[#c89058]/18 blur-2xl sm:w-[220px]" />

              {backPetals.map((petal, idx) => (
                <motion.div
                  key={petal.id}
                  className={`absolute bottom-[42px] ${petal.left} h-[124px] w-[92px] sm:bottom-[50px] sm:h-[146px] sm:w-[104px]`}
                  initial={{ rotate: petal.rotateFrom, y: 18, scale: 0.88, opacity: 0.88 }}
                  animate={{ rotate: [petal.rotateFrom, petal.rotateTo], y: [18, 0], scale: [0.88, 1], opacity: [0.88, 1] }}
                  transition={{ duration: 1.9, ease: [0.22, 1, 0.36, 1], delay: idx * 0.08 }}
                  style={{ transformOrigin: "bottom center", filter: "drop-shadow(0 10px 16px rgba(170,102,126,.16))" }}
                >
                  <svg viewBox="0 0 72 200" className="h-full w-full">
                    <defs>
                      <linearGradient id={`back-${petal.id}`} x1="36" y1="0" x2="36" y2="200" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#fff4f8" />
                        <stop offset="36%" stopColor="#f7d2de" />
                        <stop offset="72%" stopColor="#e6a4ba" />
                        <stop offset="100%" stopColor="#c86f92" />
                      </linearGradient>
                    </defs>
                    <path d="M36 3 C56 24, 68 56, 68 96 C68 136, 54 168, 36 197 C18 168, 4 136, 4 96 C4 56, 16 24, 36 3 Z" fill={`url(#back-${petal.id})`} />
                    <path d="M36 14 C47 30, 54 56, 54 92 C54 128, 47 154, 36 184 C25 154, 18 128, 18 92 C18 56, 25 30, 36 14 Z" fill="rgba(255,255,255,.24)" />
                    <path d="M36 18 C38 50, 38 112, 36 176" stroke="rgba(160,74,108,.22)" strokeWidth="1.3" strokeLinecap="round" />
                  </svg>
                </motion.div>
              ))}

              {frontPetals.map((petal, idx) => (
                <motion.div
                  key={petal.id}
                  className={`absolute bottom-[10px] ${petal.left} h-[110px] w-[78px] sm:bottom-[12px] sm:h-[128px] sm:w-[90px]`}
                  initial={{ rotate: petal.rotateFrom, y: 24, scale: 0.84, opacity: 0.94 }}
                  animate={{ rotate: [petal.rotateFrom, petal.rotateTo], y: [24, 0], scale: [0.84, 1], opacity: [0.94, 1] }}
                  transition={{ duration: 2.15, ease: [0.22, 1, 0.36, 1], delay: 0.18 + idx * 0.1 }}
                  style={{ transformOrigin: "bottom center", filter: "drop-shadow(0 12px 16px rgba(170,102,126,.14))" }}
                >
                  <svg viewBox="0 0 72 200" className="h-full w-full">
                    <defs>
                      <linearGradient id={`front-${petal.id}`} x1="36" y1="0" x2="36" y2="200" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#fff8fb" />
                        <stop offset="40%" stopColor="#f8dce5" />
                        <stop offset="74%" stopColor="#efb7c8" />
                        <stop offset="100%" stopColor="#d984a2" />
                      </linearGradient>
                    </defs>
                    <path d="M36 3 C56 24, 68 56, 68 96 C68 136, 54 168, 36 197 C18 168, 4 136, 4 96 C4 56, 16 24, 36 3 Z" fill={`url(#front-${petal.id})`} />
                    <path d="M36 14 C47 30, 54 56, 54 92 C54 128, 47 154, 36 184 C25 154, 18 128, 18 92 C18 56, 25 30, 36 14 Z" fill="rgba(255,255,255,.28)" />
                    <path d="M36 18 C38 50, 38 112, 36 176" stroke="rgba(160,74,108,.18)" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ y: 88, opacity: 0, scale: 0.72 }}
            animate={{ y: [88, 88, 0, 0], opacity: [0, 0, 1, 1], scale: [0.72, 0.72, 1, 1] }}
            transition={{ duration: 3, times: [0, 0.5, 0.84, 1], ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
            className="absolute left-1/2 top-[10%] z-20 flex -translate-x-1/2 flex-col items-center"
          >
            <div className="relative flex items-center justify-center">
              <motion.div
                className="absolute h-[280px] w-[280px] rounded-full border border-white/16 sm:h-[340px] sm:w-[340px]"
                animate={{ scale: [0.9, 1.05, 0.9], opacity: [0.08, 0.24, 0.08] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2.1 }}
              />
              <motion.div
                className="absolute h-[232px] w-[232px] rounded-full border border-[#e7edf2]/18 sm:h-[280px] sm:w-[280px]"
                animate={{ rotate: [0, 360], opacity: [0.12, 0.28, 0.12] }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear", delay: 2.1 }}
              />
              <motion.div
                className="absolute h-[190px] w-[190px] rounded-full border border-[#cfd7de]/14 sm:h-[228px] sm:w-[228px]"
                animate={{ rotate: [360, 0], opacity: [0.08, 0.2, 0.08] }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 2.1 }}
              />

              <motion.div
                className="relative h-[148px] w-[148px] sm:h-[168px] sm:w-[168px]"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 2.1 }}
              >
                <motion.div
                  className="absolute left-1/2 top-1/2 h-[96px] w-[96px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[10px] border-[#d9dee3] bg-[linear-gradient(180deg,rgba(255,255,255,.9),rgba(226,232,238,.46))] sm:h-[108px] sm:w-[108px] sm:border-[11px]"
                  animate={{ boxShadow: ["0 0 18px rgba(225,232,238,.22)", "0 0 42px rgba(225,232,238,.4)", "0 0 18px rgba(225,232,238,.22)"] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 2.1 }}
                />
                <motion.div
                  className="absolute left-1/2 top-[8px] h-[52px] w-[52px] -translate-x-1/2 rotate-45 rounded-[14px] border-[3px] border-[#ffffff] bg-[linear-gradient(180deg,#ffffff_0%,#eef3f7_100%)] sm:top-[6px] sm:h-[58px] sm:w-[58px]"
                  animate={{ y: [0, -8, 0], scale: [1, 1.08, 1], rotate: [45, 49, 45] }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: 2.1 }}
                  style={{ boxShadow: "0 0 22px rgba(255,255,255,.95), 0 0 26px rgba(220,230,240,.55)" }}
                />
                <motion.div
                  className="absolute left-1/2 top-[27px] h-[8px] w-[8px] -translate-x-1/2 rounded-full bg-white sm:top-[28px]"
                  animate={{ scale: [1, 1.22, 1], opacity: [0.75, 1, 0.75] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 2.1 }}
                  style={{ boxShadow: "0 0 16px rgba(255,255,255,1)" }}
                />
                <motion.div
                  className="absolute left-[8px] top-[42px] h-[10px] w-[10px] rounded-full bg-white/85"
                  animate={{ y: [0, -10, 0], x: [0, -5, 0], opacity: [0, 0.8, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 2.3 }}
                  style={{ filter: "blur(1px)" }}
                />
                <motion.div
                  className="absolute right-[10px] top-[30px] h-[9px] w-[9px] rounded-full bg-white/80"
                  animate={{ y: [0, -8, 0], x: [0, 5, 0], opacity: [0, 0.75, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 2.6 }}
                  style={{ filter: "blur(1px)" }}
                />
                <motion.div
                  className="absolute left-[22px] bottom-[26px] h-[7px] w-[7px] rounded-full bg-[#e8eef3]"
                  animate={{ y: [0, -7, 0], opacity: [0, 0.7, 0] }}
                  transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut", delay: 2.45 }}
                  style={{ filter: "blur(1px)" }}
                />
              </motion.div>
            </div>

            <motion.div
              className="mt-10 text-center"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: [0, 0, 0.4, 1], y: [18, 18, 8, 0] }}
              transition={{ duration: 2.1, times: [0, 0.42, 0.74, 1], ease: [0.22, 1, 0.36, 1], delay: 1.0 }}
            >
              <motion.div
                className="rounded-[28px] border border-white/35 bg-white/55 px-6 py-4 shadow-[0_12px_30px_rgba(90,61,57,.12)] backdrop-blur-xl sm:px-8 sm:py-5"
                initial={{ scale: 0.96 }}
                animate={{ scale: [0.96, 1.01, 1] }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 1.05 }}
              >
                <motion.p
                  className="text-[10px] uppercase tracking-[0.42em] text-[#9b6f46] sm:text-[11px]"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 1.15 }}
                >
                  From Ponnoju Vidya Sagar & Vani
                </motion.p>
                <motion.h3
                  className="mt-3 font-serif text-2xl leading-tight text-[#4a2e2a] sm:text-3xl"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 1.28 }}
                >
                  Mounika & Manoj
                </motion.h3>
                <motion.p
                  className="mt-2 text-sm leading-6 text-[#6a4a45] sm:text-base"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 1.42 }}
                >
                  warmly invite you to their ring ceremony
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default function App() {
  const [stage, setStage] = useState("intro");
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const backgroundStyle = useMemo(
    () => ({
      backgroundColor: "#f8efe8",
      backgroundImage:
        "radial-gradient(circle at 12% 18%, rgba(255,255,255,.9), transparent 16%), radial-gradient(circle at 85% 14%, rgba(121,191,170,.38), transparent 18%), radial-gradient(circle at 18% 76%, rgba(241,178,197,.30), transparent 18%), radial-gradient(circle at 82% 72%, rgba(109,169,224,.28), transparent 20%), linear-gradient(135deg, rgba(250,244,236,1) 0%, rgba(244,252,246,1) 30%, rgba(252,241,246,1) 62%, rgba(240,247,255,1) 100%)",
    }),
    []
  );

  useEffect(() => {
    const introTimer = setTimeout(() => setStage("site"), 5200);
    const target = new Date("2026-04-26T10:30:00").getTime();
    const updateCountdown = () => {
      const now = Date.now();
      const diff = Math.max(target - now, 0);
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => {
      clearTimeout(introTimer);
      clearInterval(timer);
    };
  }, []);

  const detailCards = [
    {
      icon: CalendarDays,
      title: "Date & Time",
      value: "26 April · 10:30 AM",
      text: "A beautiful morning with family, laughter, and the start of a lovely new chapter.",
    },
    {
      icon: MapPin,
      title: "Venue",
      value: "Hotel Kass, 5th Floor, Kompally",
      text: "A warm setting prepared with flowers, light, and happy celebration.",
      link: "https://maps.app.goo.gl/Cn1dToMioiiW4LJ16",
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden text-[#2f1715]" style={backgroundStyle}>
      <AnimatePresence mode="wait">
        {stage === "intro" && (
          <motion.section
            key="intro-stage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.9 }}
            className="relative flex min-h-screen items-center justify-center overflow-hidden px-3 py-6 sm:px-4 sm:py-10"
          >
            <FloatingPetals />
            <GlowOrb className="left-[8%] top-[15%] h-64 w-64 opacity-45" />
            <GlowOrb className="bottom-[8%] right-[10%] h-72 w-72 opacity-35" />
            <IntroLotus />
          </motion.section>
        )}

        {stage === "site" && (
          <motion.main
            key="site-stage"
            initial={{ opacity: 0, scale: 1.02, filter: "blur(16px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative"
          >
            <FloatingPetals />
            <PeacockAccent className="right-6 top-24 hidden lg:block" />
            <GlowOrb className="left-[-4rem] top-16 h-72 w-72 opacity-35" />
            <GlowOrb className="right-[-2rem] top-[28rem] h-96 w-96 opacity-30" />
            <GlowOrb className="bottom-40 left-[15%] h-72 w-72 opacity-30" />

            <section className="relative overflow-hidden px-5 pb-16 pt-16 md:px-8 md:pt-20">
              <div className="relative mx-auto max-w-7xl px-1 sm:px-0">
                <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_.95fr]">
                  <div>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                      className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d8b777]/30 bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.35em] text-[#8d6132] backdrop-blur-md"
                    >
                      <Heart className="h-3.5 w-3.5" />
                      Ring Ceremony
                    </motion.p>
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.22 }}
                      className="font-serif text-4xl leading-[1.05] tracking-tight text-[#2b1412] sm:text-5xl md:text-7xl"
                    >
                      Mounika & Manoj
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="mt-5 max-w-2xl text-sm leading-7 text-[#4f3734] sm:text-base sm:leading-8 md:text-lg"
                    >
                      We’re happy to invite you to our ring ceremony and celebrate this special morning with the people we love most.
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.38 }}
                      className="mt-8 flex flex-wrap gap-3"
                    >
                      {["Family & Blessings", "A Special Morning", "Celebrate With Us"].map((pill) => (
                        <span key={pill} className="rounded-full border border-[#d8b777]/30 bg-white/75 px-4 py-2 text-sm text-[#4b312e] backdrop-blur-md">
                          {pill}
                        </span>
                      ))}
                    </motion.div>
                  </div>

                  <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28 }} className="relative">
                    <GlassCard className="relative overflow-hidden p-3 sm:p-4 md:p-5">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(244,208,120,.22),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(236,181,200,.2),transparent_30%),radial-gradient(circle_at_center,rgba(121,191,170,.14),transparent_40%),radial-gradient(circle_at_right,rgba(109,169,224,.12),transparent_35%)]" />
                      <div className="relative overflow-hidden rounded-[22px] border border-[#d8b777]/20 bg-white/55 p-2 sm:rounded-[26px] sm:p-3">
                        <img src={swingImage} alt="Radha Krishna swing artwork" className="h-[360px] w-full rounded-[18px] object-cover object-center sm:h-[520px] sm:rounded-[22px]" />
                      </div>
                    </GlassCard>
                  </motion.div>
                </div>
              </div>
            </section>

            <section className="px-5 py-6 md:px-8 md:py-12">
              <div className="mx-auto grid max-w-6xl gap-4 sm:gap-5 md:grid-cols-2">
                {detailCards.map((card, index) => {
                  const Icon = card.icon;
                  return (
                    <motion.div key={card.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
                      <GlassCard className="h-full p-5 sm:p-6">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#dcc18d]/35 bg-white/80 text-[#b98a43]">
                          <Icon className="h-5 w-5" />
                        </div>
                        <p className="text-xs uppercase tracking-[0.28em] text-[#7e6255]">{card.title}</p>
                        <h3 className="mt-3 font-serif text-2xl text-[#2b1412]">{card.value}</h3>
                        <p className="mt-4 text-sm leading-7 text-[#4f3734]">{card.text}</p>
                        {card.link ? (
                          <a href={card.link} target="_blank" rel="noreferrer" className="mt-4 inline-block rounded-full border border-[#dcc18d]/40 bg-white/85 px-4 py-2 text-sm text-[#80533a] transition hover:scale-[1.02]">
                            Open Maps
                          </a>
                        ) : null}
                      </GlassCard>
                    </motion.div>
                  );
                })}
              </div>
            </section>

            <section className="px-5 py-16 md:px-8">
              <div className="mx-auto max-w-7xl px-1 sm:px-0">
                <SectionTitle eyebrow="Countdown" title="The day is getting close" subtitle="Counting down to a beautiful morning filled with love, family, and happy memories." />
                <LotusDivider />
                <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
                  <CountdownCard label="Days" value={timeLeft.days} />
                  <CountdownCard label="Hours" value={timeLeft.hours} />
                  <CountdownCard label="Minutes" value={timeLeft.minutes} />
                  <CountdownCard label="Seconds" value={timeLeft.seconds} />
                </div>
              </div>
            </section>

            <section className="px-5 py-16 md:px-8">
              <div className="mx-auto grid max-w-7xl items-center gap-6 sm:gap-8 lg:grid-cols-[.95fr_1.05fr]">
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                  <GlassCard className="relative overflow-hidden p-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,208,120,.18),transparent_35%),radial-gradient(circle_at_bottom,rgba(121,191,170,.14),transparent_35%),radial-gradient(circle_at_right,rgba(109,169,224,.12),transparent_35%)]" />
                    <div className="relative grid items-stretch gap-2 p-2 sm:gap-3 sm:p-4 md:grid-cols-2">
                      <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="flex h-full overflow-hidden rounded-[22px] border border-[#d8b777]/20 bg-white/60 p-2">
                        <img src={fluteImage} alt="Radha Krishna flute artwork" className="h-[280px] w-full rounded-[18px] object-cover object-center sm:h-[360px] md:h-[430px]" />
                      </motion.div>
                      <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }} className="flex h-full overflow-hidden rounded-[22px] border border-[#d8b777]/20 bg-white/60 p-2">
                        <img src={boatImage} alt="Radha Krishna boat artwork" className="h-[280px] w-full rounded-[18px] object-cover object-center sm:h-[360px] md:h-[430px]" />
                      </motion.div>
                    </div>
                  </GlassCard>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                  <SectionTitle eyebrow="Our Story" title="A bond that just makes sense" subtitle="When messy meets planned, and when fire meets ice, the balance just feels right." />
                  <GlassCard className="mt-6 sm:mt-8">
                    <div className="mb-5 overflow-hidden rounded-[22px] border border-[#d8b777]/20 bg-white/60 p-2">
                      <img src={danceImage} alt="Radha Krishna dance scene" className="h-[220px] w-full rounded-[18px] object-cover object-center sm:h-[260px]" />
                    </div>
                    <div className="space-y-4 text-sm leading-7 text-[#4f3734] md:text-base">
                      <p>Sometimes two people are brought together and just seem to fit in all the right ways.</p>
                      <p>Different in nature, yet easy with each other, they bring a sense of balance that feels natural and full of promise.</p>
                      <p>This ring ceremony marks the beginning of a beautiful new chapter, shared with the people who mean the most.</p>
                    </div>
                  </GlassCard>
                </motion.div>
              </div>
            </section>

            <section className="px-5 py-16 md:px-8">
              <div className="mx-auto max-w-6xl">
                <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <GlassCard className="relative overflow-hidden p-5 text-center sm:p-8 md:p-12">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,208,120,.18),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(236,181,200,.16),transparent_32%),radial-gradient(circle_at_top_left,rgba(121,191,170,.12),transparent_30%),radial-gradient(circle_at_right,rgba(109,169,224,.12),transparent_35%)]" />
                    <div className="relative">
                      <p className="text-xs uppercase tracking-[0.35em] text-[#8d6132]">Save The Date</p>
                      <h3 className="mt-3 font-serif text-3xl leading-tight text-[#2b1412] sm:mt-4 sm:text-4xl md:text-5xl">Please join us for a beautiful morning</h3>
                      <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-[#4f3734] md:text-base">Your presence and blessings would mean a lot to us. Please save the date and come celebrate this happy beginning with Mounika & Manoj.</p>
                      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                        {["26 April · 10:30 AM", "Hotel Kass, 5th Floor, Kompally", "With love, Mounika & Manoj"].map((item) => (
                          <span key={item} className="rounded-full border border-[#dcc18d]/35 bg-white/80 px-4 py-2 text-sm text-[#4f3734]">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              </div>
            </section>

            <footer className="relative mt-6 overflow-hidden px-5 pb-12 pt-16 md:px-8">
              <PeacockAccent className="left-4 top-2 scale-75 md:left-10 md:scale-90" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(109,169,224,.16),transparent_25%),radial-gradient(circle_at_left,rgba(121,191,170,.16),transparent_28%),radial-gradient(circle_at_right,rgba(236,181,200,.16),transparent_28%)]" />
              <div className="relative mx-auto max-w-7xl rounded-[28px] border border-[#d8b777]/22 bg-white/60 px-4 py-8 backdrop-blur-xl sm:px-6 sm:py-10 md:rounded-[32px] md:px-10">
                <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
                  <div>
                    <p className="text-xs uppercase tracking-[0.32em] text-[#8d6132]">Mounika & Manoj</p>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-[#4f3734]">A celebration shaped with music, flowers, and the timeless beauty of Radha Krishna.</p>
                  </div>
                  <div className="flex items-center gap-4 text-2xl text-[#b98a43]">
                    <span>🪶</span>
                    <span>❀</span>
                    <span>♫</span>
                    <span>❀</span>
                    <span>🪶</span>
                  </div>
                </div>
              </div>
            </footer>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
