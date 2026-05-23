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
  team: { name: string; logo: string; league: string }
  assister?: RobloxUser | null
}

export function GoalCelebrationCard({ scorer, minute, team, assister }: GoalCelebrationCardProps) {
  return (
    <div className="w-full max-w-md mx-auto animate-float-in">
      <div className="relative bg-card rounded-3xl p-8 border border-border shadow-2xl overflow-hidden animate-pulse-glow">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-transparent to-transparent pointer-events-none" />
        
        {/* Content */}
        <div className="relative flex flex-col items-center gap-6">
          {/* Scorer Avatar */}
          <div className="relative">
            <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-accent/50 shadow-lg">
              {scorer.avatarUrl ? (
                <img
                  src={scorer.avatarUrl}
                  alt={scorer.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-secondary flex items-center justify-center">
                  <span className="text-3xl font-bold text-foreground">
                    {scorer.displayName.charAt(0)}
                  </span>
                </div>
              )}
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-accent/20 blur-xl -z-10" />
          </div>

          {/* Goal Text */}
          <div className="text-center space-y-1">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">
              GOOOALL!
            </h1>
          </div>

          {/* Scorer Name */}
          <div className="text-center">
            <p className="text-xl md:text-2xl font-bold text-foreground">
              {scorer.displayName}
            </p>
            <p className="text-muted-foreground text-sm">@{scorer.name}</p>
          </div>

          {/* Minute */}
          <div className="text-2xl md:text-3xl font-bold text-accent">
            {minute}&apos;
          </div>

          {/* Team Logo */}
          <div className="w-20 h-20 flex items-center justify-center">
            <img
              src={team.logo}
              alt={team.name}
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <p className="text-sm text-muted-foreground -mt-4">{team.name}</p>

          {/* Assist Section */}
          {assister && (
            <div className="w-full pt-4 border-t border-border/50 flex items-center justify-center gap-3">
              <span className="text-sm text-muted-foreground">Assist:</span>
              <div className="flex items-center gap-2">
                {assister.avatarUrl && (
                  <img
                    src={assister.avatarUrl}
                    alt={assister.name}
                    className="w-8 h-8 rounded-full object-cover border border-border"
                  />
                )}
                <span className="font-semibold text-foreground">{assister.displayName}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
