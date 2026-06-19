import { useState } from 'react';
import { useMouseStore } from '../../store/mouseStore';

interface MouseTrackingControlsProps {
  showDebug?: boolean;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export function MouseTrackingControls({ 
  showDebug = false,
  position = 'bottom-right' 
}: MouseTrackingControlsProps) {
  const [isVisible, setIsVisible] = useState(showDebug);
  const { snx, sny, nx, ny } = useMouseStore();
  const smoothRotateX = sny * 8;
  const smoothRotateY = snx * 8;
  const smoothRotateZ = (snx * sny) * 2;

  const positionClasses = {
    'top-left': 'top-8 left-8',
    'top-right': 'top-8 right-8',
    'bottom-left': 'bottom-8 left-8',
    'bottom-right': 'bottom-8 right-8',
  };

  if (!isVisible && !showDebug) return null;

  return (
    <div className={`fixed ${positionClasses[position]} z-50 space-y-2`}>
      {/* Toggle button */}
      {!showDebug && (
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="glass px-4 py-2 rounded-lg text-xs font-mono hover:bg-primary/10 transition-all"
        >
          {isVisible ? '🔽 Hide Debug' : '🔼 Show Debug'}
        </button>
      )}

      {/* Debug panel */}
      {isVisible && (
        <div className="glass p-4 rounded-lg space-y-3 max-w-xs pointer-events-auto">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-primary font-bold text-sm">360° Tracking Active</span>
            </div>
            {!showDebug && (
              <button
                onClick={() => setIsVisible(false)}
                className="text-muted hover:text-white text-xs"
              >
                ✕
              </button>
            )}
          </div>

          {/* Rotation values */}
          <div className="space-y-1 text-xs font-mono">
            <div className="text-muted mb-2">Rotation Angles:</div>
            <div className="flex justify-between">
              <span className="text-accent">Rotate X:</span>
              <span className="text-white">{smoothRotateX.toFixed(2)}°</span>
            </div>
            <div className="flex justify-between">
              <span className="text-accent">Rotate Y:</span>
              <span className="text-white">{smoothRotateY.toFixed(2)}°</span>
            </div>
            <div className="flex justify-between">
              <span className="text-accent">Rotate Z:</span>
              <span className="text-white">{smoothRotateZ.toFixed(2)}°</span>
            </div>
          </div>

          {/* Normalized position */}
          <div className="space-y-1 text-xs font-mono">
            <div className="text-muted mb-2">Mouse Position:</div>
            <div className="flex justify-between">
              <span className="text-secondary">X (normalized):</span>
              <span className="text-white">{nx.toFixed(3)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-secondary">Y (normalized):</span>
              <span className="text-white">{ny.toFixed(3)}</span>
            </div>
          </div>

          {/* Visual indicator */}
          <div className="relative h-24 bg-black/20 rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-xs text-muted">
              Mouse Position
            </div>
            <div
              className="absolute w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50"
              style={{
                left: `${(nx + 1) * 50}%`,
                top: `${(-ny + 1) * 50}%`,
                transform: 'translate(-50%, -50%)',
              }}
            />
            {/* Crosshair */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-px h-full bg-white/10" />
              <div className="absolute w-full h-px bg-white/10" />
            </div>
          </div>

          {/* Info */}
          <div className="text-xs text-muted pt-2 border-t border-white/10">
            Move your mouse to see 3D effects
          </div>
        </div>
      )}

      {/* Mini indicator when collapsed */}
      {!isVisible && !showDebug && (
        <div className="glass px-3 py-2 rounded-lg">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs text-primary font-mono">360°</span>
          </div>
        </div>
      )}
    </div>
  );
}

// Simpler visual indicator component
export function MouseTrackingIndicator() {
  return (
    <div className="fixed bottom-8 left-8 z-50 glass px-4 py-2 rounded-full flex items-center gap-2 pointer-events-none">
      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
      <span className="text-xs font-mono text-primary">360° Active</span>
    </div>
  );
}
