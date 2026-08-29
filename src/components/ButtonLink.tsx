import type { ReactNode } from 'react';

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  download?: string;
  external?: boolean;
};

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  download,
  external,
}: ButtonLinkProps) {
  const className = `btn btn--${variant}`;

  if (external) {
    return (
      <a className={className} href={href} target="_blank" rel="noopener noreferrer">
        {children}
        <span className="visually-hidden"> (opens in a new tab)</span>
      </a>
    );
  }

  return (
    <a className={className} href={href} download={download}>
      {children}
    </a>
  );
}
