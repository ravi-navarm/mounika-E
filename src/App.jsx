import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarDays, Heart, MapPin, Sparkles } from "lucide-react";

const krishnaImage = "/krishna.png";
const radhaImage = "/radha.png";
const engagementPoster = "/group.png";

const petals = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: 4 + ((i * 11) % 92),
  duration: 11 + (i % 5),
  delay: i * 0.45,
  scale: 0.72 + (i % 4) * 0.12,
}));

function FloatingPetals() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-70">
      {petals.map((petal) => (
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
          transition={{
            duration: petal.duration,
            repeat: Infinity,
            delay: petal.delay,
            ease: "linear",
          }}
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
        {["rotate-[-36deg]", "rotate-[-18deg]", "rotate-[0deg]", "rotate-[18deg]", "rotate-[36deg]"].map((rot, i) => (
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
    const target = new Date("2026-04-26T18:00:00").getTime();

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
      title: "Sacred Date",
      value: "26 April 2026",
      text: "An evening of blessings, laughter, music, and a promise written with grace.",
    },
    {
      icon: MapPin,
      title: "Venue",
      value: "Hotel Kass",
      text: "A warm setting prepared with florals, light, and a joyful festive aura.",
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

            <div className="relative mx-auto flex w-full max-w-5xl items-center justify-center px-1 sm:px-4">
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.1, ease: "easeOut" }}
                className="relative w-full max-w-4xl scale-[0.96] sm:scale-100"
              >
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="mx-auto h-[28rem] w-full max-w-[22rem] rounded-[24px] border border-[#d8b777]/30 bg-[linear-gradient(180deg,rgba(214,182,121,.95),rgba(189,148,89,.95))] shadow-[0_20px_50px_rgba(120,82,44,.18)] sm:h-[30rem] sm:max-w-md sm:rounded-[28px]"
                >
                  <div className="relative h-full w-full overflow-hidden rounded-[24px] sm:rounded-[28px]">
                    <motion.div
                      initial={{ rotateX: 0 }}
                      animate={{ rotateX: [0, 0, -165, -165] }}
                      transition={{ duration: 1.8, times: [0, 0.2, 0.7, 1], ease: "easeInOut" }}
                      style={{ transformOrigin: "top center" }}
                      className="absolute left-0 top-0 h-32 w-full origin-top [transform-style:preserve-3d]"
                    >
                      <div className="absolute inset-0 mx-auto h-0 w-0 border-l-[140px] border-r-[140px] border-t-[95px] border-l-transparent border-r-transparent border-t-[#f6dfb0] sm:border-l-[190px] sm:border-r-[190px] sm:border-t-[130px] md:border-l-[220px] md:border-r-[220px] md:border-t-[140px]" />
                    </motion.div>

                    <div className="absolute inset-x-0 bottom-0 h-[78%] bg-[linear-gradient(180deg,rgba(234,205,148,.95),rgba(214,179,114,.98))] sm:h-[76%]" />
                    <div className="absolute inset-x-0 bottom-0 mx-auto h-0 w-0 border-l-[140px] border-r-[140px] border-b-[95px] border-l-transparent border-r-transparent border-b-[#efcf8c] sm:border-l-[190px] sm:border-r-[190px] sm:border-b-[130px] md:border-l-[220px] md:border-r-[220px] md:border-b-[145px]" />

                    <motion.div
                      initial={{ y: 70, opacity: 0.2 }}
                      animate={{ y: [70, 70, -18, -18], opacity: [0.2, 0.2, 1, 1] }}
                      transition={{ duration: 2.3, times: [0, 0.28, 0.78, 1], ease: "easeInOut", delay: 0.35 }}
                      className="absolute left-1/2 top-[12%] z-10 w-[92%] max-w-[540px] -translate-x-1/2 rounded-[22px] border border-[#d8b777]/25 bg-white/92 px-4 py-4 text-center shadow-[0_18px_40px_rgba(106,74,70,.14)] backdrop-blur-xl sm:top-[15%] sm:w-[88%] sm:rounded-[28px] sm:px-6 sm:py-6 md:px-10 md:py-8"
                    >
                      <p className="text-[10px] uppercase tracking-[0.28em] text-[#8d6132] sm:text-xs sm:tracking-[0.34em]">
                        With joyful hands, we invite you to
                      </p>
                      <h1 className="mt-3 font-serif text-[1.55rem] leading-tight text-[#2b1412] sm:mt-4 sm:text-3xl md:text-5xl">
                        Mounika & Manoj’s wedding celebration
                      </h1>
                      <p className="mx-auto mt-3 max-w-2xl text-[11px] leading-5 text-[#4f3734] sm:mt-4 sm:text-sm sm:leading-7 md:text-base">
                        Join us for a beautiful celebration of love, blessings, and togetherness as our families gather to witness this sacred beginning and share in the joy of our wedding festivities.
                      </p>
                      <div className="mt-3 flex flex-wrap items-center justify-center gap-2 sm:mt-5 sm:gap-3">
                        {["26 April 2026", "Hotel Kass"].map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-[#dcc18d]/35 bg-white px-3 py-1.5 text-[11px] text-[#4f3734] sm:px-4 sm:py-2 sm:text-sm"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
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
                      Wedding Celebration
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
                      With hearts full of gratitude and joy, we invite you to witness a luminous evening where devotion, family, and love meet in one beautiful promise.
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.38 }}
                      className="mt-8 flex flex-wrap gap-3"
                    >
                      {["Blessings & Celebration", "Divine Romance", "Elegant Evening"].map((pill) => (
                        <span
                          key={pill}
                          className="rounded-full border border-[#d8b777]/30 bg-white/75 px-4 py-2 text-sm text-[#4b312e] backdrop-blur-md"
                        >
                          {pill}
                        </span>
                      ))}
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.28 }}
                    className="relative"
                  >
                    <GlassCard className="relative overflow-hidden p-3 sm:p-4 md:p-5">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(244,208,120,.22),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(236,181,200,.2),transparent_30%),radial-gradient(circle_at_center,rgba(121,191,170,.14),transparent_40%),radial-gradient(circle_at_right,rgba(109,169,224,.12),transparent_35%)]" />
                      <div className="relative overflow-hidden rounded-[22px] border border-[#d8b777]/20 bg-white/55 p-2 sm:rounded-[26px] sm:p-3">
                        <img
                          src={engagementPoster}
                          alt="Mounika and Manoj engagement poster"
                          className="w-full rounded-[18px] object-cover sm:rounded-[22px]"
                        />
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
                    <motion.div
                      key={card.title}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                    >
                      <GlassCard className="h-full p-5 sm:p-6">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#dcc18d]/35 bg-white/80 text-[#b98a43]">
                          <Icon className="h-5 w-5" />
                        </div>
                        <p className="text-xs uppercase tracking-[0.28em] text-[#7e6255]">{card.title}</p>
                        <h3 className="mt-3 font-serif text-2xl text-[#2b1412]">{card.value}</h3>
                        <p className="mt-4 text-sm leading-7 text-[#4f3734]">{card.text}</p>
                        {card.link ? (
                          <a
                            href={card.link}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-4 inline-block rounded-full border border-[#dcc18d]/40 bg-white/85 px-4 py-2 text-sm text-[#80533a] transition hover:scale-[1.02]"
                          >
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
                <SectionTitle
                  eyebrow="Countdown"
                  title="The celebration begins soon"
                  subtitle="Counting the days until Mounika & Manoj begin this beautiful new chapter surrounded by love, family, and blessings."
                />
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
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <GlassCard className="relative overflow-hidden p-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,208,120,.18),transparent_35%),radial-gradient(circle_at_bottom,rgba(121,191,170,.14),transparent_35%),radial-gradient(circle_at_right,rgba(109,169,224,.12),transparent_35%)]" />
                    <div className="relative grid min-h-[320px] grid-cols-2 gap-2 p-2 sm:min-h-[430px] sm:gap-3 sm:p-4">
                      <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="flex items-end justify-center rounded-[22px] border border-[#d8b777]/20 bg-white/60 p-2"
                      >
                        <img src={krishnaImage} alt="Krishna inspired visual" className="h-[200px] w-auto object-contain sm:h-[280px] md:h-[400px]" />
                      </motion.div>
                      <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
                        className="flex items-end justify-center rounded-[22px] border border-[#d8b777]/20 bg-white/60 p-2"
                      >
                        <img src={radhaImage} alt="Radha inspired visual" className="h-[220px] w-auto object-contain sm:h-[300px] md:h-[430px]" />
                      </motion.div>
                    </div>
                  </GlassCard>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <SectionTitle
                    eyebrow="Our Story"
                    title="Like a melody carried gently through time, their love found its moment"
                    subtitle="Some bonds feel fated from the beginning. Mounika and Manoj bring together warmth, trust, laughter, and quiet devotion in a journey that feels both timeless and beautifully new."
                  />
                  <GlassCard className="mt-6 sm:mt-8">
                    <div className="space-y-5 text-sm leading-8 text-[#4f3734] md:text-base">
                      <p>
                        Their story is one of steady affection, shared values, meaningful conversations, and a connection that deepened with grace.
                      </p>
                      <p>
                        In every smile, every prayer, and every hopeful step, they discovered a companionship that feels gentle yet unwavering.
                      </p>
                      <p>
                        This wedding marks the beginning of a radiant chapter, blessed by family, guided by love, and celebrated with those dearest to their hearts.
                      </p>
                    </div>
                  </GlassCard>
                </motion.div>
              </div>
            </section>

            <section className="px-5 py-16 md:px-8">
              <div className="mx-auto max-w-6xl">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <GlassCard className="relative overflow-hidden p-5 text-center sm:p-8 md:p-12">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,208,120,.18),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(236,181,200,.16),transparent_32%),radial-gradient(circle_at_top_left,rgba(121,191,170,.12),transparent_30%),radial-gradient(circle_at_right,rgba(109,169,224,.12),transparent_35%)]" />
                    <div className="relative">
                      <p className="text-xs uppercase tracking-[0.35em] text-[#8d6132]">Blessing & Save The Date</p>
                      <h3 className="mt-3 font-serif text-3xl leading-tight text-[#2b1412] sm:mt-4 sm:text-4xl md:text-5xl">
                        Join us as love is adorned with promise
                      </h3>
                      <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-[#4f3734] md:text-base">
                        Your presence, blessings, and joyful wishes will make this evening even more memorable. Please save the date and celebrate this beautiful beginning with Mounika & Manoj.
                      </p>
                      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                        {["26 April 2026", "Hotel Kass", "With Love & Light"].map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-[#dcc18d]/35 bg-white/80 px-4 py-2 text-sm text-[#4f3734]"
                          >
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
                    <p className="mt-3 max-w-xl text-sm leading-7 text-[#4f3734]">
                      Peacock-feather splendor, lotus softness, and a celebration made radiant with blessings.
                    </p>
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
