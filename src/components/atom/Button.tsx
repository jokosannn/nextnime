import React from 'react'

type ButtonProps = {
  variant: 'primary' | 'secondary'
  children: React.ReactNode
} & Omit<React.ComponentProps<'button'>, 'children'>

const Button = ({ variant, children, ...rest }: ButtonProps) => {
  return (
    <button className={`${variant}`} {...rest}>
      {children}
    </button>
  )
}

export default Button
