'use client';

interface LazyRankLogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'light' | 'dark';
  showText?: boolean;
}

export function LazyRankLogo({
  size = 'md',
  variant = 'default',
  showText = true
}: LazyRankLogoProps) {
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-10 w-10'
  };

  const textSizeClasses = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl'
  };

  const bgColors = {
    default: 'bg-black',
    light: 'bg-white',
    dark: 'bg-black'
  };

  const textColors = {
    default: 'text-white',
    light: 'text-black',
    dark: 'text-white'
  };

  const brandTextColors = {
    default: 'text-gray-900',
    light: 'text-white',
    dark: 'text-gray-900'
  };

  return (
    <div className="flex items-center gap-2">
      {/* Logo Icon - Rocket with "L" */}
      <div className={`${sizeClasses[size]} ${bgColors[variant]} ${textColors[variant]} rounded-lg flex items-center justify-center font-bold shadow-lg relative overflow-hidden group`}>
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Icon - L with Rocket */}
        <div className="relative z-10 flex items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className={size === 'sm' ? 'h-3 w-3' : size === 'md' ? 'h-4 w-4' : 'h-5 w-5'}
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Rocket shape with L */}
            <path
              d="M12 2L8 8L6 10L4 12L6 14L8 12L10 10L14 6L12 2Z"
              fill="currentColor"
              opacity="0.8"
            />
            <path
              d="M6 14L4 16L6 18L8 16L6 14Z"
              fill="currentColor"
              opacity="0.6"
            />
            {/* L letter */}
            <path
              d="M10 8V16H16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Brand Name */}
      {showText && (
        <div className="flex items-baseline gap-0.5">
          <span className={`font-bold tracking-tight ${textSizeClasses[size]} ${brandTextColors[variant]}`}>
            Lazy
          </span>
          <span className={`font-bold tracking-tight ${textSizeClasses[size]} bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent`}>
            Rank
          </span>
          <span className={`font-normal ${size === 'sm' ? 'text-xs' : size === 'md' ? 'text-sm' : 'text-base'} text-gray-400`}>
            .io
          </span>
        </div>
      )}
    </div>
  );
}

// Alternative minimal version
export function LazyRankLogoMinimal({ variant = 'default' }: { variant?: 'default' | 'light' | 'dark' }) {
  const bgColors = {
    default: 'bg-gradient-to-br from-black to-gray-800',
    light: 'bg-gradient-to-br from-white to-gray-100',
    dark: 'bg-gradient-to-br from-black to-gray-800'
  };

  const textColors = {
    default: 'text-white',
    light: 'text-black',
    dark: 'text-white'
  };

  return (
    <div className={`h-8 w-8 ${bgColors[variant]} ${textColors[variant]} rounded-lg flex items-center justify-center font-black text-sm shadow-lg`}>
      <span className="relative">
        L<span className="text-xs absolute -top-1 -right-2 opacity-70">↗</span>
      </span>
    </div>
  );
}
