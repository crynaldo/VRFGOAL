'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/ui/spinner'

interface RobloxUser {
  id: number
  name: string
  displayName: string
  avatarUrl: string | null
}

interface RobloxUserInputProps {
  label: string
  onUserFetch: (user: RobloxUser | null) => void
  optional?: boolean
}

export function RobloxUserInput({ label, onUserFetch, optional = false }: RobloxUserInputProps) {
  const [userId, setUserId] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [fetchedUser, setFetchedUser] = useState<RobloxUser | null>(null)

  const handleFetch = async () => {
    if (!userId.trim()) {
      setError('Please enter a user ID')
      return
    }

    setLoading(true)
    setError(null)

    try {
      const response = await fetch(`/api/roblox?userId=${userId}`)
      
      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Failed to fetch user')
      }

      const user = await response.json()
      setFetchedUser(user)
      onUserFetch(user)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch user')
      setFetchedUser(null)
      onUserFetch(null)
    } finally {
      setLoading(false)
    }
  }

  const handleClear = () => {
    setUserId('')
    setFetchedUser(null)
    setError(null)
    onUserFetch(null)
  }

  return (
    <div className="space-y-3">
      <label className="text-sm font-medium text-foreground">
        {label}
        {optional && <span className="text-muted-foreground ml-1">(Optional)</span>}
      </label>
      
      {fetchedUser ? (
        <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg border border-border">
          {fetchedUser.avatarUrl && (
            <img
              src={fetchedUser.avatarUrl}
              alt={fetchedUser.name}
              className="w-12 h-12 rounded-full object-cover"
            />
          )}
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-foreground truncate">{fetchedUser.displayName}</p>
            <p className="text-sm text-muted-foreground truncate">@{fetchedUser.name}</p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClear}
            className="text-muted-foreground hover:text-foreground"
          >
            Change
          </Button>
        </div>
      ) : (
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Enter Roblox User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleFetch()}
            className="bg-secondary/50 border-border text-foreground placeholder:text-muted-foreground"
          />
          <Button
            onClick={handleFetch}
            disabled={loading}
            className="bg-primary text-primary-foreground hover:bg-primary/90 min-w-[80px]"
          >
            {loading ? <Spinner className="w-4 h-4" /> : 'Fetch'}
          </Button>
        </div>
      )}
      
      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}
    </div>
  )
}
