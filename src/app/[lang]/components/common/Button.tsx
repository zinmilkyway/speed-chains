import { ICArrow } from '../icon/ICArrow'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  className?: string
  hasIcon?: boolean
}

const Button: React.FC<ButtonProps> = ({ children, onClick, type = 'button', className = '', hasIcon = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-[7px] font-semibold leading-8 text-sm tracking-[-0.6px] 
        text-textLight bg-gray36 rounded-3xl border-primary hover:opacity-80 
        transition ${className} flex items-center justify-between gap-10`}
    >
      {children}
      {hasIcon && <ICArrow />}
    </button>
  )
}

export default Button
