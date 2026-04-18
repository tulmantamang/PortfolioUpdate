import React from 'react';

type ButtonVariant = 'primary' | 'ghost';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  as?: 'button' | 'a';
  href?: string;
};

export default function Button({
  children,
  variant = 'primary',
  className = '',
  as: Tag = 'button',
  href,
  ...rest
}: ButtonProps) {
  const base = variant === 'primary' ? 'btn-primary' : 'btn-ghost';
  const classes = `${base} ${className}`.trim();

  if (Tag === 'a' && href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
