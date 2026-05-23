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
      {/* Outer gradient glow based on team colors */}
      <div 
        className="relative p-[3px] rounded-[2rem] overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${team.primaryColor}, ${team.secondaryColor}, ${team.primaryColor})`,
        }}
      >
        {/* Animated gradient overlay */}
        <div 
          className="absolute inset-0 opacity-80 animate-gradient-shift"
          style={{
            background: `linear-gradient(45deg, ${team.primaryColor}00, ${team.primaryColor}, ${team.secondaryColor}, ${team.primaryColor}00)`,
            backgroundSize: '300% 300%',
          }}
        />
        
        {/* Main card */}
        <div className="relative bg-[#0a0a0a] rounded-[1.85rem] overflow-hidden">
          {/* Inner glow from team color */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              background: `radial-gradient(ellipse at top, ${team.primaryColor}40, transparent 60%)`,
            }}
          />
          
          {/* Content */}
          <div className="relative p-8 flex flex-col items-center gap-5">
            {/* Scorer Avatar with team color ring */}
            <div className="relative mt-2">
              <div 
                className="w-32 h-32 rounded-full p-[3px]"
                style={{
                  background: `linear-gradient(135deg, ${team.primaryColor}, ${team.secondaryColor})`,
                }}
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-[#0a0a0a]">
                  {scorer.avatarUrl ? (
                    <img
                      src={scorer.avatarUrl}
                      alt={scorer.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">
                        {scorer.displayName.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              {/* Glow behind avatar */}
              <div 
                className="absolute inset-0 rounded-full blur-2xl -z-10 opacity-50"
                style={{ backgroundColor: team.primaryColor }}
              />
            </div>

            {/* Goal Text with team color */}
            <h1 
              className="text-5xl md:text-6xl font-black tracking-tight"
              style={{ 
                color: team.primaryColor,
                textShadow: `0 0 40px ${team.primaryColor}60`,
              }}
            >
              GOAL!
            </h1>

            {/* Scorer Info */}
            <div className="text-center space-y-1">
              <p className="text-2xl md:text-3xl font-bold text-white">
                {scorer.displayName}
              </p>
              <p className="text-neutral-500 text-sm">@{scorer.name}</p>
            </div>

            {/* Minute with team accent */}
            <div 
              className="px-6 py-2 rounded-full text-xl font-bold"
              style={{ 
                backgroundColor: `${team.primaryColor}20`,
                color: team.primaryColor,
                border: `1px solid ${team.primaryColor}40`,
              }}
            >
              {minute}&apos;
            </div>

            {/* Team Section */}
            <div className="flex flex-col items-center gap-3 py-4">
              <div 
                className="w-24 h-24 flex items-center justify-center p-3 rounded-2xl"
                style={{ backgroundColor: `${team.primaryColor}10` }}
              >
                <img
                  src={team.logo}
                  alt={team.name}
                  className="max-w-full max-h-full object-contain drop-shadow-lg"
                />
              </div>
              <p className="text-neutral-400 font-medium">{team.name}</p>
            </div>

            {/* Assist Section */}
            {assister && (
              <div 
                className="w-full pt-5 mt-2 border-t flex items-center justify-between px-2"
                style={{ borderColor: `${team.primaryColor}30` }}
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="w-12 h-12 rounded-full p-[2px]"
                    style={{
                      background: `linear-gradient(135deg, ${team.primaryColor}80, ${team.secondaryColor}80)`,
                    }}
                  >
                    <div className="w-full h-full rounded-full overflow-hidden bg-[#0a0a0a]">
                      {assister.avatarUrl ? (
                        <img
                          src={assister.avatarUrl}
                          alt={assister.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="font-bold text-white">
                            {assister.displayName.charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 uppercase tracking-wider">Assist</p>
                    <p className="font-semibold text-white">{assister.displayName}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
