'use client'

import { useState } from 'react'
import { TeamSelector } from '@/components/team-selector'
import { RobloxUserInput } from '@/components/roblox-user-input'
import { GoalCelebrationCard } from '@/components/goal-celebration-card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface RobloxUser {
  id: number
  name: string
  displayName: string
  avatarUrl: string | null
}

export default function Home() {
  const [step, setStep] = useState<'team' | 'details' | 'result'>('team')
  const [selectedTeam, setSelectedTeam] = useState<{ name: string; logo: string; league: string; primaryColor: string; secondaryColor: string } | null>(null)
  const [scorer, setScorer] = useState<RobloxUser | null>(null)
  const [assister, setAssister] = useState<RobloxUser | null>(null)
  const [minute, setMinute] = useState('')
  const [error, setError] = useState<string | null>(null)

  const handleTeamSelect = (team: { name: string; logo: string; league: string; primaryColor: string; secondaryColor: string }) => {
    setSelectedTeam(team)
    setStep('details')
  }

  const handleSubmit = () => {
    setError(null)
    console.log('[v0] Submit clicked, scorer:', scorer, 'minute:', minute)

    if (!scorer) {
      setError('Please fetch the goalscorer')
      return
    }

    if (!minute.trim()) {
      setError('Please enter the minute')
      return
    }

    const minuteNum = parseInt(minute)
    if (isNaN(minuteNum) || minuteNum < 1 || minuteNum > 120) {
      setError('Please enter a valid minute (1-120)')
      return
    }

    setStep('result')
  }

  const handleReset = () => {
    setStep('team')
    setSelectedTeam(null)
    setScorer(null)
    setAssister(null)
    setMinute('')
    setError(null)
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-foreground">Goal Celebration</h1>
            {step !== 'team' && (
              <Button
                variant="ghost"
                onClick={handleReset}
                className="text-muted-foreground hover:text-foreground"
              >
                Start Over
              </Button>
            )}
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Step 1: Team Selection */}
        {step === 'team' && (
          <div className="space-y-8 animate-float-in">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold text-foreground">Choose Your Team</h2>
              <p className="text-muted-foreground">Select a team from one of the top leagues</p>
            </div>
            <TeamSelector onTeamSelect={handleTeamSelect} selectedTeam={selectedTeam} />
          </div>
        )}

        {/* Step 2: Goal Details */}
        {step === 'details' && selectedTeam && (
          <div className="space-y-8 animate-float-in">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-4">
                <img src={selectedTeam.logo} alt={selectedTeam.name} className="w-16 h-16 object-contain" />
                <div>
                  <h2 className="text-2xl font-bold text-foreground">{selectedTeam.name}</h2>
                  <p className="text-sm text-muted-foreground">{selectedTeam.league}</p>
                </div>
              </div>
              <button
                onClick={() => setStep('team')}
                className="text-sm text-accent hover:underline"
              >
                Change team
              </button>
            </div>

            <div className="max-w-md mx-auto space-y-6">
              {/* Goalscorer */}
              <RobloxUserInput
                label="Goalscorer"
                onUserFetch={setScorer}
              />

              {/* Minute */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-foreground">
                  What minute?
                </label>
                <Input
                  type="number"
                  placeholder="e.g. 49"
                  value={minute}
                  onChange={(e) => setMinute(e.target.value)}
                  min={1}
                  max={120}
                  className="bg-secondary/50 border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>

              {/* Assist (Optional) */}
              <RobloxUserInput
                label="Assist"
                onUserFetch={setAssister}
                optional
              />

              {/* Error */}
              {error && (
                <p className="text-sm text-destructive text-center">{error}</p>
              )}

              {/* Submit */}
              <Button
                onClick={handleSubmit}
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold py-6 text-lg"
              >
                Create Goal Celebration
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Result */}
        {step === 'result' && scorer && selectedTeam && (
          <div className="space-y-8 animate-float-in">
            <GoalCelebrationCard
              scorer={scorer}
              minute={minute}
              team={selectedTeam}
              assister={assister}
            />

            <div className="flex justify-center">
              <Button
                onClick={handleReset}
                variant="outline"
                className="border-border text-foreground hover:bg-secondary"
              >
                Create Another
              </Button>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
