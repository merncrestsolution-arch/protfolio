import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

/**
 * Catches rendering errors (e.g. WebGL unavailable) inside 3D canvases and
 * renders a graceful text fallback instead of crashing the page.
 */
export class CanvasErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error('3D canvas error:', error, info.componentStack);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="flex h-full w-full items-center justify-center p-6 text-center">
            <p className="font-mono text-sm text-muted">
              3D experience unavailable on this device.
            </p>
          </div>
        )
      );
    }
    return this.props.children;
  }
}
