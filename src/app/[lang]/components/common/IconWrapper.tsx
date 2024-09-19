import React from 'react'

interface IconWrapperProps {
  icon: React.ReactNode
  backgroundClass?: string
  logoClass?: string
}

const IconWrapper: React.FC<IconWrapperProps> = ({ icon, backgroundClass = 'w-14 h-14', logoClass = 'w-6 h-6' }) => {
  return (
    <div className={`flex items-center justify-center ${backgroundClass} bg-gray-600 rounded-full`}>
      <div className={`flex items-center justify-center ${logoClass}`}>{icon}</div>
    </div>
  )
}

export default IconWrapper
