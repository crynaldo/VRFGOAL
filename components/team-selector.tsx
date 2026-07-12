'use client'

import { useState } from 'react'
import { leagues, LeagueKey, nations, NationKey } from '@/lib/teams'
import { cn } from '@/lib/utils'

type SelectedTeam = { name: string; logo: string; league: string; primaryColor: string; secondaryColor: string }

interface TeamSelectorProps {
  onTeamSelect: (team: SelectedTeam) => void
  selectedTeam: SelectedTeam | null
}

type Mode = 'clubs' | 'international'

export function TeamSelector({ onTeamSelect, selectedTeam }: TeamSelectorProps) {
  const [mode, setMode] = useState<Mode>('clubs')
  const [activeLeague, setActiveLeague] = useState<LeagueKey>('premierLeague')
  const [activeNation, setActiveNation] = useState<NationKey>('asia')

  const leagueKeys = Object.keys(leagues) as LeagueKey[]
  const nationKeys = Object.keys(nations) as NationKey[]

  const isInternational = mode === 'international'
  const group = isInternational ? nations[activeNation] : leagues[activeLeague]

  return (
    <div className="space-y-6">
      {/* Clubs / International toggle */}
      <div className="flex justify-center">
        <div className="inline-flex items-center gap-1 rounded-full border border-border bg-secondary/40 p-1">
          {(['clubs', 'international'] as Mode[]).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={cn(
                'px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 capitalize',
                mode === m
                  ? 'bg-accent text-accent-foreground shadow-lg'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {m === 'clubs' ? 'Clubs' : 'International'}
            </button>
          ))}
        </div>
      </div>

      {/* Group tabs (leagues or continents) */}
      <div className="flex flex-wrap gap-2 justify-center">
        {isInternational
          ? nationKeys.map((key) => (
              <button
                key={key}
                onClick={() => setActiveNation(key)}
                className={cn(
                  'px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm',
                  activeNation === key
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                )}
              >
                {nations[key].name}
              </button>
            ))
          : leagueKeys.map((key) => (
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

      {/* Teams / Nations Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {group.teams.map((team) => (
          <button
            key={team.name}
            onClick={() => onTeamSelect({ ...team, league: group.name })}
            className={cn(
              'group relative flex flex-col items-center gap-3 p-4 rounded-xl transition-all duration-300',
              'bg-secondary/50 hover:bg-secondary border border-border',
              selectedTeam?.name === team.name && 'ring-2 ring-accent bg-secondary'
            )}
          >
            <div
              className={cn(
                'relative flex items-center justify-center transition-transform duration-300 group-hover:scale-110',
                isInternational
                  ? 'w-16 h-11 rounded-md overflow-hidden shadow-md ring-1 ring-white/10'
                  : 'w-16 h-16'
              )}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={team.logo}
                alt={team.name}
                className={cn('w-full h-full', isInternational ? 'object-cover' : 'object-contain')}
              />
            </div>
            <span className="text-xs font-medium text-center text-foreground/80 group-hover:text-foreground transition-colors leading-tight">
              {team.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
