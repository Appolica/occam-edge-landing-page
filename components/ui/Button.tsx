import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: 'md' | 'lg';
  variant?: 'default' | 'outline';
}

const Button: React.FC<ButtonProps> = ({ children, size = 'md', variant = 'default', ...props }) => {
  const sizeClasses = size === 'lg' ? 'py-3 px-8 text-base' : 'py-1.5 px-5 text-sm';
  
  const variantClasses = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    outline: 'border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary',
  };

  return (
    <button
      className={`inline-flex items-center justify-center font-semibold rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background transition-all duration-300 ${sizeClasses} ${variantClasses[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;