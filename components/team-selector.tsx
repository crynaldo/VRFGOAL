'use client'

import { useState } from 'react'
import { leagues, LeagueKey } from '@/lib/teams'
import { cn } from '@/lib/utils'

interface TeamSelectorProps {
  onTeamSelect: (team: { name: string; logo: string; league: string; primaryColor: string; secondaryColor: string }) => void
  selectedTeam: { name: string; logo: string; league: string; primaryColor: string; secondaryColor: string } | null
}

export function TeamSelector({ onTeamSelect, selectedTeam }: TeamSelectorProps) {
  const [activeLeague, setActiveLeague] = useState<LeagueKey>('premierLeague')

  const leagueKeys = Object.keys(leagues) as LeagueKey[]

  return (
    <div className="space-y-6">
      {/* League Tabs */}
      <div className="flex flex-wrap gap-2 justify-center">
        {leagueKeys.map((key) => (
          <button
            key={key}
            onClick={() => setActiveLeague(key)}
            className={cn(
              'px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm',
              activeLeague === key
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            )}
          >
            {leagues[key].name}
          </button>
        ))}
      </div>

      {/* Teams Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {leagues[activeLeague].teams.map((team) => (
          <button
            key={team.name}
            onClick={() => onTeamSelect({ ...team, league: leagues[activeLeague].name })}
            className={cn(
              'group relative flex flex-col items-center gap-3 p-4 rounded-xl transition-all duration-300',
              'bg-secondary/50 hover:bg-secondary border border-border',
              selectedTeam?.name === team.name && 'ring-2 ring-accent bg-secondary'
            )}
          >
            <div className="relative w-16 h-16 flex items-center justify-center">
              <img
                src={team.logo}
                alt={team.name}
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <span className="text-xs font-medium text-center text-foreground/80 group-hover:text-foreground transition-colors">
              {team.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
