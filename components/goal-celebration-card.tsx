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
}

export function GoalCelebrationCard({ scorer, minute, team, assister }: GoalCelebrationCardProps) {
  return (
    <div className="w-full max-w-md mx-auto animate-float-in">
      {/* Outer glowing border */}
      <div 
        className="relative p-[2px] rounded-[1.5rem] overflow-hidden"
        style={{
          background: `linear-gradient(180deg, ${team.primaryColor}80, ${team.primaryColor}20, ${team.primaryColor}60)`,
          boxShadow: `0 0 60px ${team.primaryColor}40, inset 0 0 60px ${team.primaryColor}10`,
        }}
      >
        {/* Main card with stadium background */}
        <div 
          className="relative rounded-[1.4rem] overflow-hidden"
          style={{
            background: `linear-gradient(180deg, ${team.primaryColor}15 0%, #050510 30%, #0a0a1a 100%)`,
          }}
        >
          {/* Stadium background image */}
          <div 
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: 'url(/stadium-bg.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center top',
            }}
          />
          
          {/* Team color overlay gradient */}
          <div 
            className="absolute inset-0"
            style={{
              background: `linear-gradient(180deg, ${team.primaryColor}30 0%, transparent 40%, ${team.primaryColor}10 100%)`,
            }}
          />

          {/* Light rays effect */}
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-40 opacity-30"
            style={{
              background: `radial-gradient(ellipse at center top, ${team.primaryColor}60, transparent 70%)`,
            }}
          />
          
          {/* Content */}
          <div className="relative px-6 py-10 flex flex-col items-center">
            {/* Scorer Avatar with glowing ring */}
            <div className="relative mb-6">
              {/* Outer glow */}
              <div 
                className="absolute inset-0 rounded-full blur-xl opacity-60 scale-110"
                style={{ backgroundColor: team.primaryColor }}
              />
              {/* Avatar ring */}
              <div 
                className="relative w-28 h-28 rounded-full p-[3px]"
                style={{
                  background: `linear-gradient(180deg, ${team.primaryColor}, ${team.secondaryColor || team.primaryColor}80)`,
                  boxShadow: `0 0 30px ${team.primaryColor}60`,
                }}
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-[#0a0a1a]">
                  {scorer.avatarUrl ? (
                    <img
                      src={scorer.avatarUrl}
                      alt={scorer.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-3xl font-bold text-white">
                        {scorer.displayName.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* GOAL! Text - 3D italic style */}
            <h1 
              className="text-6xl md:text-7xl font-black italic tracking-tight mb-4"
              style={{ 
                color: team.primaryColor,
                textShadow: `
                  0 0 40px ${team.primaryColor}80,
                  0 4px 0 ${team.secondaryColor || team.primaryColor}40,
                  0 8px 20px rgba(0,0,0,0.8)
                `,
                WebkitTextStroke: `1px ${team.primaryColor}`,
              }}
            >
              GOAL!
            </h1>

            {/* Scorer Info */}
            <div className="text-center mb-6">
              <p className="text-2xl md:text-3xl font-bold text-white mb-1">
                {scorer.displayName}
              </p>
              <p className="text-neutral-500 text-sm">@{scorer.name}</p>
            </div>

            {/* Minute Badge - Hexagonal style */}
            <div className="relative mb-8">
              {/* Side decorations */}
              <div 
                className="absolute top-1/2 -translate-y-1/2 -left-12 w-8 h-[2px]"
                style={{ 
                  background: `linear-gradient(90deg, transparent, ${team.primaryColor})`,
                }}
              />
              <div 
                className="absolute top-1/2 -translate-y-1/2 -right-12 w-8 h-[2px]"
                style={{ 
                  background: `linear-gradient(270deg, transparent, ${team.primaryColor})`,
                }}
              />
              {/* Badge */}
              <div 
                className="relative px-8 py-3 clip-hexagon"
                style={{ 
                  backgroundColor: `${team.primaryColor}15`,
                  border: `2px solid ${team.primaryColor}60`,
                  boxShadow: `0 0 20px ${team.primaryColor}30`,
                }}
              >
                <span 
                  className="text-2xl font-bold"
                  style={{ color: team.primaryColor }}
                >
                  {minute}&apos;
                </span>
              </div>
            </div>

            {/* Team Section - Hexagonal frame */}
            <div className="relative mb-8">
              {/* Hexagon frame */}
              <div 
                className="relative p-[2px] clip-hexagon-tall"
                style={{
                  background: `linear-gradient(180deg, ${team.primaryColor}80, ${team.primaryColor}30)`,
                }}
              >
                <div 
                  className="clip-hexagon-tall px-8 py-6 flex flex-col items-center gap-3"
                  style={{ 
                    backgroundColor: `rgba(10, 10, 26, 0.9)`,
                  }}
                >
                  <img
                    src={team.logo}
                    alt={team.name}
                    className="w-20 h-20 object-contain drop-shadow-lg"
                  />
                </div>
              </div>
              {/* Team name below hexagon */}
              <p 
                className="text-center mt-3 font-bold tracking-wide text-sm uppercase"
                style={{ color: team.primaryColor }}
              >
                {team.name}
              </p>
            </div>

            {/* Assist Section */}
            {assister && (
              <div className="absolute bottom-6 left-6 flex items-center gap-3">
                {/* Assist avatar */}
                <div 
                  className="w-12 h-12 rounded-full p-[2px]"
                  style={{
                    background: `linear-gradient(180deg, ${team.primaryColor}80, ${team.primaryColor}40)`,
                  }}
                >
                  <div className="w-full h-full rounded-full overflow-hidden bg-[#0a0a1a]">
                    {assister.avatarUrl ? (
                      <img
                        src={assister.avatarUrl}
                        alt={assister.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="font-bold text-white text-sm">
                          {assister.displayName.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <p 
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: team.primaryColor }}
                  >
                    Assist
                  </p>
                  <p className="font-bold text-white text-sm">{assister.displayName}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
