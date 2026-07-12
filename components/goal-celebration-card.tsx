'use client'

interface RobloxUser {
  id: number
  name: string
  displayName: string
  avatarUrl: string | null
}

interface GoalCelebrationCardProps {
  scorer: RobloxUser
  minute: string
  team: { name: string; logo: string; league: string; primaryColor: string; secondaryColor: string }
  assister?: RobloxUser | null
  marker?: { x: number; y: number; cx: number; cy: number } | null
  goalType?: string
}

// Shot origin (pitch level, center) — must match the picker
const START = { x: 50, y: 99 }

export function GoalCelebrationCard({ scorer, minute, team, assister, marker, goalType }: GoalCelebrationCardProps) {
  const primary = team.primaryColor
  const secondary = team.secondaryColor || team.primaryColor

  const trailPath = marker
    ? `M ${START.x} ${START.y} Q ${marker.cx} ${marker.cy} ${marker.x} ${marker.y}`
    : ''

  return (
    <div className="w-full max-w-md mx-auto animate-float-in">
      {/* Outer glowing frame */}
      <div
        className="relative rounded-[2rem] p-[1.5px] overflow-hidden"
        style={{
          background: `linear-gradient(160deg, ${primary}cc, ${primary}22 35%, transparent 60%, ${primary}66)`,
          boxShadow: `0 0 80px ${primary}55, 0 20px 60px rgba(0,0,0,0.7)`,
        }}
      >
        {/* Card body */}
        <div className="relative rounded-[1.95rem] overflow-hidden bg-[#05070d]">
          {/* Stadium background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(/vrf-stadium.png)' }}
          />

          {/* Darkening + team tint overlays for legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#05070d]/40 via-[#05070d]/70 to-[#05070d]/95" />
          <div
            className="absolute inset-0 mix-blend-overlay"
            style={{
              background: `radial-gradient(ellipse at 50% 30%, ${primary}66, transparent 65%)`,
            }}
          />
          <div
            className="absolute inset-x-0 top-0 h-1/2"
            style={{
              background: `linear-gradient(180deg, ${primary}40, transparent)`,
            }}
          />

          {/* Top light sweep */}
          <div
            className="absolute -top-10 left-1/2 -translate-x-1/2 w-[160%] h-48 opacity-50 blur-2xl"
            style={{
              background: `radial-gradient(ellipse at center, ${primary}aa, transparent 70%)`,
            }}
          />

          {/* Content */}
          <div className="relative px-8 pt-9 pb-8 flex flex-col items-center">
            {/* Scorer avatar */}
            <div className="relative mb-5">
              <div
                className="absolute inset-0 rounded-full blur-2xl opacity-70 scale-125"
                style={{ backgroundColor: primary }}
              />
              <div
                className="relative w-28 h-28 rounded-full p-[3px]"
                style={{
                  background: `conic-gradient(from 180deg, ${primary}, ${secondary}, ${primary})`,
                  boxShadow: `0 0 40px ${primary}aa`,
                }}
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-[#05070d] ring-2 ring-black/40">
                  {scorer.avatarUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={scorer.avatarUrl} alt={scorer.name} className="w-full h-full object-cover" crossOrigin="anonymous" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-3xl font-bold text-white">{scorer.displayName.charAt(0)}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* GOAL! */}
            <h1
              className="text-6xl font-black italic tracking-tight mb-3 leading-none select-none whitespace-nowrap px-2"
              style={{
                background: `linear-gradient(180deg, #ffffff 10%, ${primary} 55%, ${primary}aa 100%)`,
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: `drop-shadow(0 0 25px ${primary}aa) drop-shadow(0 4px 8px rgba(0,0,0,0.8))`,
              }}
            >
              GOAL!
            </h1>

            {/* Scorer name */}
            <div className="text-center mb-6">
              <p className="text-2xl font-extrabold text-white tracking-tight leading-tight drop-shadow-lg">
                {scorer.displayName}
              </p>
              <p className="text-sm font-medium text-white/45">@{scorer.name}</p>
            </div>

            {/* Minute badge */}
            <div className="relative mb-7 flex items-center gap-3">
              <div className="h-[1.5px] w-12" style={{ background: `linear-gradient(90deg, transparent, ${primary})` }} />
              <div
                className="relative px-7 py-2 clip-hexagon backdrop-blur-sm"
                style={{
                  background: `linear-gradient(180deg, ${primary}33, ${primary}11)`,
                  border: `1.5px solid ${primary}99`,
                  boxShadow: `0 0 25px ${primary}55, inset 0 0 15px ${primary}22`,
                }}
              >
                <span className="text-xl font-black text-white tracking-wide" style={{ textShadow: `0 0 12px ${primary}` }}>
                  {minute}&apos;
                </span>
              </div>
              <div className="h-[1.5px] w-12" style={{ background: `linear-gradient(270deg, transparent, ${primary})` }} />
            </div>

            {/* Team panel */}
            <div className="relative w-full max-w-[19rem] mb-2">
              <div
                className="relative rounded-2xl p-[1.5px] overflow-hidden"
                style={{ background: `linear-gradient(180deg, ${primary}aa, ${primary}22)` }}
              >
                <div
                  className="rounded-2xl px-6 pt-6 pb-4 flex flex-col items-center gap-3 backdrop-blur-md"
                  style={{ background: `linear-gradient(180deg, rgba(8,10,18,0.85), rgba(8,10,18,0.65))` }}
                >
                  <div
                    className="absolute inset-x-0 top-0 h-px"
                    style={{ background: `linear-gradient(90deg, transparent, ${primary}, transparent)` }}
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={team.logo}
                    alt={team.name}
                    className="w-20 h-20 object-contain"
                    style={{ filter: `drop-shadow(0 4px 14px ${primary}88)` }}
                    crossOrigin="anonymous"
                  />
                  <p className="text-center font-bold tracking-[0.12em] text-xs uppercase text-white/90">
                    {team.name}
                  </p>
                </div>
              </div>
            </div>

            {/* Goal trail diagram */}
            {marker && (
              <div className="mt-5 w-full max-w-[19rem]">
                <p className="text-center text-[0.6rem] font-bold uppercase tracking-[0.2em] mb-2 text-white/60">
                  How it went in
                </p>
                <div
                  className="relative w-full aspect-[2/1] rounded-lg overflow-hidden"
                  style={{
                    background: 'rgba(0,0,0,0.55)',
                    border: `1px solid ${primary}55`,
                    boxShadow: `inset 0 0 18px ${primary}22`,
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/goal-net.png"
                    alt="Goal"
                    className="absolute inset-0 w-full h-full object-contain opacity-80"
                    crossOrigin="anonymous"
                  />

                  {/* Shot trail */}
                  <svg
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    className="absolute inset-0 w-full h-full pointer-events-none"
                  >
                    <path
                      d={trailPath}
                      fill="none"
                      stroke={`${primary}66`}
                      strokeWidth={7}
                      strokeLinecap="round"
                      vectorEffect="non-scaling-stroke"
                    />
                    <path
                      d={trailPath}
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth={2}
                      strokeLinecap="round"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>

                  {/* Entry point (red ball) */}
                  <div
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
                  >
                    <span
                      className="block w-2.5 h-2.5 rounded-full bg-red-500"
                      style={{ boxShadow: '0 0 8px 2px rgba(239,68,68,0.95)' }}
                    />
                  </div>
                </div>

                {/* Goal type caption */}
                {goalType && (
                  <div className="mt-2 flex justify-center">
                    <span
                      className="px-3 py-1 rounded-full text-[0.65rem] font-bold uppercase tracking-[0.15em] text-white"
                      style={{
                        background: `${primary}22`,
                        border: `1px solid ${primary}66`,
                        boxShadow: `0 0 12px ${primary}33`,
                      }}
                    >
                      {goalType}
                    </span>
                  </div>
                )}
              </div>
            )}

            {/* Goal type caption when there is no trail diagram */}
            {!marker && goalType && (
              <div className="mt-4 flex justify-center">
                <span
                  className="px-3 py-1 rounded-full text-[0.65rem] font-bold uppercase tracking-[0.15em] text-white"
                  style={{
                    background: `${primary}22`,
                    border: `1px solid ${primary}66`,
                    boxShadow: `0 0 12px ${primary}33`,
                  }}
                >
                  {goalType}
                </span>
              </div>
            )}

            {/* Assist */}
            {assister && (
              <div className="mt-5 w-full flex items-center gap-3 pt-4 border-t border-white/10">
                <div
                  className="w-11 h-11 rounded-full p-[2px] shrink-0"
                  style={{ background: `linear-gradient(180deg, ${primary}, ${secondary}80)` }}
                >
                  <div className="w-full h-full rounded-full overflow-hidden bg-[#05070d]">
                    {assister.avatarUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={assister.avatarUrl} alt={assister.name} className="w-full h-full object-cover" crossOrigin="anonymous" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="font-bold text-white text-sm">{assister.displayName.charAt(0)}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="min-w-0">
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em]" style={{ color: primary }}>
                    Assist
                  </p>
                  <p className="font-bold text-white text-sm truncate">{assister.displayName}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
