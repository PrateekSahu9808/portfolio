type IconProps = {
  size?: number;
  className?: string;
};

export function IconDragon({ size = 64, className }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M52 8c-2 0-4 1-5.5 2.5L44 13c-1-1-2.5-1.5-4-1.5-2 0-3.8 1-5 2.5l-3 4c-1.5-1-3.3-1.5-5-1.5-3 0-5.7 1.5-7.3 4L16 27l-4-1c-1.5 0-3 .5-4 1.5L4 31c-1 1-1.5 2.5-1 4 .5 1.5 1.8 2.5 3.3 2.8L10 38l2 4 3 2-1 6c-.3 1.5.2 3 1.3 4 1 1 2.5 1.5 4 1.2l6-1.5 4 2c1 .5 2 .7 3 .7 1.5 0 3-.5 4.2-1.5l5-4c1.5-1.2 2.5-3 2.8-5l.5-3 3 1c1 .3 2 .2 3-.2l4-2c1.5-.8 2.5-2.3 2.5-4v-4c0-2-1-3.8-2.5-5L52 20V8zM18 36c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
    </svg>
  );
}

export function IconSword({ size = 24, className }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14.5 17.5 3 6V3h3l11.5 11.5" />
      <path d="m13 19 6-6" />
      <path d="m16 16 4 4" />
      <path d="m19 21 2-2" />
      <path d="M14.5 17.5 20 12l-2-2" />
      <path d="M6 3l8.5 8.5" />
    </svg>
  );
}

export function IconThrone({ size = 48, className }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M24 4l-2 8h-6l-4-6-2 1 3 7h-3l-4-4-1.5 1.5L8 16H6l-2 4h4l2 6H8l-2 4h6l1 10h4l1-10h12l1 10h4l1-10h6l-2-4h-2l2-6h4l-2-4h-2l3.5-4.5L42 10l-4 4h-3l3-7-2-1-4 6h-6l-2-8zm-6 16h12l-2 6H20l-2-6z" />
    </svg>
  );
}

export function IconWolf({ size = 48, className }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M14 6l-4 8-6 2 4 6-2 8 6 4v6l4 2 2-4h12l2 4 4-2v-6l6-4-2-8 4-6-6-2-4-8-5 4h-6l-4-4h-1zm4 12c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm12 0c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-8 8l-3 4h6l-3-4z" />
    </svg>
  );
}

export function IconRaven({ size = 32, className }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M26 6c-1.5 0-3 .8-4 2l-2 3c-2-1-4.5-1-6.5.3L10 14l-4-1c-1 .2-2 .7-2.5 1.5L2 17c-.5.8-.5 1.8 0 2.5.5.8 1.3 1.2 2.2 1.3l3 .2 1.5 3 2.3 1.5-.8 4c-.2 1 .1 2 .8 2.6.7.7 1.7 1 2.6.8l4-1 3 1.5c1.5.6 3.2.2 4.3-1l2.5-3c.8-1 1.2-2.2 1-3.5l-.3-2 2 .5c.7.2 1.5 0 2-.4l2.5-1.5c1-.6 1.5-1.7 1.5-2.8v-3c0-1.5-.7-2.8-1.8-3.7L28 10V6h-2zM12 20c-.8 0-1.5-.7-1.5-1.5S11.2 17 12 17s1.5.7 1.5 1.5S12.8 20 12 20z" />
    </svg>
  );
}

export function IconIceCrystal({ size = 24, className }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M12 2v20M2 12h20" />
      <path d="m4.93 4.93 14.14 14.14M19.07 4.93 4.93 19.07" />
      <path d="M12 2l-2 3 2 1 2-1-2-3zM12 22l-2-3 2-1 2 1-2 3z" />
      <path d="M2 12l3-2 1 2-1 2-3-2zM22 12l-3-2-1 2 1 2 3-2z" />
    </svg>
  );
}
