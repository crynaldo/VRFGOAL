'use client'

import { useState, useRef } from 'react'
import { toPng } from 'html-to-image'
import { TeamSelector } from '@/components/team-selector'
import { RobloxUserInput } from '@/components/roblox-user-input'
import { GoalCelebrationCard } from '@/components/goal-celebration-card'
import { GoalMarkerPicker, GoalMarker } from '@/components/goal-marker-picker'
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
  const [marker, setMarker] = useState<GoalMarker | null>(null)
  const [error, setError] = useState<string | null>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const [copyState, setCopyState] = useState<'idle' | 'working' | 'copied' | 'error'>('idle')

  const handleTeamSelect = (team: { name: string; logo: string; league: string; primaryColor: string; secondaryColor: string }) => {
    setSelectedTeam(team)
    setStep('details')
  }

  const handleSubmit = () => {
    setError(null)

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
    setMarker(null)
    setError(null)
    setCopyState('idle')
  }

  const handleCopyImage = async () => {
    if (!cardRef.current) return
    setCopyState('working')
    try {
      const dataUrl = await toPng(cardRef.current, {
        cacheBust: true,
        pixelRatio: 3,
        skipFonts: false,
      })
      const blob = await (await fetch(dataUrl)).blob()

      if (navigator.clipboard && typeof ClipboardItem !== 'undefined') {
        await navigator.clipboard.write([
          new ClipboardItem({ 'image/png': blob }),
        ])
        setCopyState('copied')
      } else {
        // Fallback: trigger a download if clipboard images are unsupported
        const link = document.createElement('a')
        link.download = `goal-${scorer?.name ?? 'celebration'}.png`
        link.href = dataUrl
        link.click()
        setCopyState('copied')
      }
      setTimeout(() => setCopyState('idle'), 2500)
    } catch (err) {
      console.log('[v0] Copy image failed:', err)
      setCopyState('error')
      setTimeout(() => setCopyState('idle'), 2500)
    }
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
              <p className="text-muted-foreground">Pick a club or national team to celebrate with</p>
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

              {/* Goal marker (Optional) */}
              <GoalMarkerPicker marker={marker} onChange={setMarker} />

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
          <div className="space-y-6 animate-float-in">
            <div ref={cardRef}>
              <GoalCelebrationCard
                scorer={scorer}
                minute={minute}
                team={selectedTeam}
                assister={assister}
                marker={marker}
              />
            </div>

            <div className="flex flex-col items-center gap-3 max-w-sm mx-auto">
              <Button
                onClick={handleCopyImage}
                disabled={copyState === 'working'}
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold py-6 text-base"
              >
                {copyState === 'working' && 'Generating image...'}
                {copyState === 'copied' && 'Copied to clipboard!'}
                {copyState === 'error' && 'Copy failed — try again'}
                {copyState === 'idle' && 'Copy image to clipboard'}
              </Button>

              <Button
                onClick={handleReset}
                variant="outline"
                className="w-full border-border text-foreground hover:bg-secondary"
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
