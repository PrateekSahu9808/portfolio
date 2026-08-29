import { useEffect, useRef, useState } from 'react';
import { IconCheck, IconCopy } from './Icons';
import styles from './CopyButton.module.css';

type CopyButtonProps = {
  value: string;
  label: string;
};

async function writeClipboard(value: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const input = document.createElement('textarea');
  input.value = value;
  input.setAttribute('readonly', '');
  input.style.position = 'fixed';
  input.style.left = '-9999px';
  document.body.appendChild(input);
  input.select();
  document.execCommand('copy');
  document.body.removeChild(input);
}

export function CopyButton({ value, label }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleCopy = async () => {
    try {
      await writeClipboard(value);
      setCopied(true);
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      className={`${styles.button} ${copied ? styles.copied : ''}`}
      onClick={handleCopy}
      aria-label={copied ? `${label} copied` : label}
    >
      {copied ? <IconCheck /> : <IconCopy />}
      <span className="visually-hidden" aria-live="polite">
        {copied ? `${label.replace(/^Copy /i, '')} copied to clipboard.` : ''}
      </span>
    </button>
  );
}
