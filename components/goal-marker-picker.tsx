'use client'

import { useRef } from 'react'

export interface GoalMarker {
  x: number
  y: number
  cx: number
  cy: number
}

export const GOAL_TYPES = [
  'Volley',
  'Bicycle Kick',
  'Powershot',
  'Header',
  'Finesse Shot',
  'Long Shot',
  'Free Kick',
  'Penalty',
  'Chip',
  'Tap-in',
]

// Shot origin (pitch level, center) as a percentage of the goal box
const START = { x: 50, y: 99 }

const clamp = (v: number) => Math.max(0, Math.min(100, v))

interface GoalMarkerPickerProps {
  marker: GoalMarker | null
  onChange: (marker: GoalMarker | null) => void
  goalType: string
  onGoalTypeChange: (type: string) => void
}

export function GoalMarkerPicker({ marker, onChange, goalType, onGoalTypeChange }: GoalMarkerPickerProps) {
  const areaRef = useRef<HTMLDivElement>(null)
  const draggingRef = useRef(false)
  const suppressClickRef = useRef(false)

  const getRelative = (clientX: number, clientY: number) => {
    const rect = areaRef.current!.getBoundingClientRect()
    return {
      x: clamp(((clientX - rect.left) / rect.width) * 100),
      y: clamp(((clientY - rect.top) / rect.height) * 100),
    }
  }

  const handleAreaClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (suppressClickRef.current) {
      suppressClickRef.current = false
      return
    }
    const { x, y } = getRelative(e.clientX, e.clientY)
    // Default the control point to the midpoint, lifted upward for a natural arc
    const cx = (START.x + x) / 2
    const cy = (START.y + y) / 2 - 14
    onChange({ x, y, cx: clamp(cx), cy: clamp(cy) })
  }

  const startControlDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    e.stopPropagation()
    e.preventDefault()
    draggingRef.current = true
    ;(e.currentTarget as Element).setPointerCapture(e.pointerId)
  }

  const moveControl = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current || !marker) return
    const { x, y } = getRelative(e.clientX, e.clientY)
    onChange({ ...marker, cx: x, cy: y })
  }

  const endControlDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return
    draggingRef.current = false
    suppressClickRef.current = true
    ;(e.currentTarget as Element).releasePointerCapture?.(e.pointerId)
  }

  const trailPath = marker
    ? `M ${START.x} ${START.y} Q ${marker.cx} ${marker.cy} ${marker.x} ${marker.y}`
    : ''

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
            Clear trail
          </button>
        )}
      </div>

      <div
        ref={areaRef}
        onClick={handleAreaClick}
        className="relative w-full aspect-[2/1] rounded-xl overflow-hidden border border-border bg-black cursor-crosshair select-none touch-none"
      >
        {/* Goal net image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/goal-net.png"
          alt="Football goal"
          className="absolute inset-0 w-full h-full object-contain pointer-events-none"
          draggable={false}
        />

        {/* Shot trail */}
        {marker && (
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full pointer-events-none"
          >
            <path
              d={trailPath}
              fill="none"
              stroke="rgba(239,68,68,0.35)"
              strokeWidth={7}
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
            <path
              d={trailPath}
              fill="none"
              stroke="#ef4444"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeDasharray="4 3"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        )}

        {marker ? (
          <>
            {/* Shot origin dot */}
            <span
              className="absolute w-2 h-2 rounded-full bg-white/70 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              style={{ left: `${START.x}%`, top: `${START.y}%` }}
            />

            {/* Entry point (red ball) */}
            <div
              className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
            >
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-red-500/30 animate-ping" />
              <span
                className="relative block w-3.5 h-3.5 rounded-full bg-red-500"
                style={{ boxShadow: '0 0 10px 2px rgba(239,68,68,0.9)' }}
              />
            </div>

            {/* Draggable curve control */}
            <div
              onPointerDown={startControlDrag}
              onPointerMove={moveControl}
              onPointerUp={endControlDrag}
              className="absolute -translate-x-1/2 -translate-y-1/2 cursor-grab active:cursor-grabbing touch-none"
              style={{ left: `${marker.cx}%`, top: `${marker.cy}%` }}
            >
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full border border-white/40 bg-white/10" />
              <span className="relative block w-4 h-4 rounded-full bg-white ring-2 ring-red-500 shadow-lg" />
              <span className="absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap text-[0.6rem] font-semibold text-white/70 bg-black/60 px-1.5 py-0.5 rounded">
                drag to curve
              </span>
            </div>
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-xs font-medium text-white/50 bg-black/50 px-3 py-1.5 rounded-full">
              Tap inside the goal to set where it went in
            </span>
          </div>
        )}
      </div>

      {/* Helper text */}
      <p className="text-xs text-muted-foreground">
        Tap to place the entry point, then drag the white dot in the middle to shape the shot&apos;s curve.
      </p>

      {/* Goal type */}
      <div className="space-y-2 pt-1">
        <label className="text-sm font-medium text-foreground">
          Type of goal <span className="text-muted-foreground">(optional)</span>
        </label>
        <select
          value={goalType}
          onChange={(e) => onGoalTypeChange(e.target.value)}
          className="w-full rounded-md bg-secondary/50 border border-border text-foreground text-sm px-3 py-2.5 outline-none focus:ring-2 focus:ring-accent/50"
        >
          <option value="">No specific type</option>
          {GOAL_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
