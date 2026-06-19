import { useState } from 'react';
import { ImageIcon } from 'lucide-react';

interface ImagePlaceholderProps {
  src?: string;
  alt: string;
  className?: string;
  placeholderLabel?: string;
  shape?: 'circle' | 'rounded' | 'square';
  style?: React.CSSProperties;
}

export function ImagePlaceholder({ 
  src, 
  alt, 
  className = '', 
  placeholderLabel, 
  shape = 'rounded', 
  style 
}: ImagePlaceholderProps) {
  const [failed, setFailed] = useState(false);

  const borderRadius = 
    shape === 'circle' ? 'rounded-full' : 
    shape === 'rounded' ? 'rounded-2xl' : 
    'rounded-none';

  if (!src || failed) {
    return (
      <div
        className={`${borderRadius} ${className} border-2 border-dashed border-primary/40 
                   bg-surface/60 backdrop-blur flex flex-col items-center justify-center gap-2 p-4`}
        style={style}
      >
        <ImageIcon className="w-10 h-10 text-primary/50" />
        <span className="font-mono text-xs text-muted/70 text-center px-2">
          {placeholderLabel || alt}
        </span>
        <span className="font-mono text-xs text-muted/40 text-center px-2">
          Place in /public/images/
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`${borderRadius} ${className} object-cover`}
      style={style}
      onError={() => setFailed(true)}
      loading="lazy"
    />
  );
}
