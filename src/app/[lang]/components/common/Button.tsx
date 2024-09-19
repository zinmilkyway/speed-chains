import { ICArrow } from './icon/ICArrow'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  className?: string
  hasIcon?: boolean
  bg?: string
  borderGradient?: string
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  className = '',
  bg = 'linear-gradient(88.97deg, rgba(255, 255, 255, 0.02) -24.48%, rgba(255, 206, 115, 0.137998) 6.85%, rgba(255, 206, 115, 0.2) 51.91%, rgba(255, 206, 115, 0.0956863) 123.99%, rgba(255, 255, 255, 0.002) 169.83%), #363030',
  hasIcon = false,
  borderGradient = '#FCF27E'
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        background: `${bg}`,
        color: '#FCF27E',
        border: '1px solid',
        borderImageSource: `${borderGradient}`
      }}
      className={`min-w-[120px] ${className} flex items-center
        ${hasIcon ? 'justify-between' : 'justify-center'} 
        lg:h-[48px] h-10 text-sm font-semibold lg:py-4 py-1 px-3 rounded-3xl border border-solid border-[#FCF27E]`}
    >
      {children}
      {hasIcon && <ICArrow />}
    </button>
  )
}

export default Button
