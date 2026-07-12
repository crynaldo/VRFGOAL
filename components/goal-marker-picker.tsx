'use client'

import { useRef } from 'react'

export interface GoalMarker {
  x: number
  y: number
}

interface GoalMarkerPickerProps {
  marker: GoalMarker | null
  onChange: (marker: GoalMarker | null) => void
}

export function GoalMarkerPicker({ marker, onChange }: GoalMarkerPickerProps) {
  const areaRef = useRef<HTMLDivElement>(null)

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = areaRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    onChange({
      x: Math.max(0, Math.min(100, x)),
      y: Math.max(0, Math.min(100, y)),
    })
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-foreground">
          Where did the ball enter? <span className="text-muted-foreground">(optional)</span>
        </label>
        {marker && (
          <button
            type="button"
            onClick={() => onChange(null)}
            className="text-xs text-accent hover:underline"
          >
            Clear marker
          </button>
        )}
      </div>

      <div
        ref={areaRef}
        onClick={handleClick}
        className="relative w-full aspect-[2/1] rounded-xl overflow-hidden border border-border bg-black cursor-crosshair select-none"
      >
        {/* Goal net image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/goal-net.png"
          alt="Football goal"
          className="absolute inset-0 w-full h-full object-contain pointer-events-none"
          draggable={false}
        />

        {/* Placed marker (red ball) */}
        {marker ? (
          <div
            className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
          >
            {/* pulsing ring */}
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-red-500/30 animate-ping" />
            {/* the ball / dot */}
            <span
              className="relative block w-3.5 h-3.5 rounded-full bg-red-500"
              style={{ boxShadow: '0 0 10px 2px rgba(239,68,68,0.9)' }}
            />
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-xs font-medium text-white/50 bg-black/50 px-3 py-1.5 rounded-full">
              Tap inside the goal to place the ball
            </span>
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <span
          className="w-3 h-3 rounded-full bg-red-500 shrink-0"
          style={{ boxShadow: '0 0 6px 1px rgba(239,68,68,0.9)' }}
        />
        <span>The red dot marks where the ball entered the goal.</span>
      </div>
    </div>
  )
}
