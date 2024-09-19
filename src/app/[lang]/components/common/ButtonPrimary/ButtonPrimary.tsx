import classNames from 'classnames'
import { FC, PropsWithChildren } from 'react'
import './styles.css'

interface Props extends PropsWithChildren {
  className?: string
  contentClassName?: string
  black?: boolean
}

export const ButtonPrimary: FC<Props> = ({ children, className, contentClassName, black }) => {
  return (
    <div className={classNames('ButtonPrimary__container', className)}>
      <div className={`${black ? 'ButtonPrimary__border ButtonPrimary__border--black' : 'ButtonPrimary__border'}`} />
      <div className={`${black ? 'ButtonPrimary__inner ButtonPrimary__inner--black' : 'ButtonPrimary__inner'}`}>
        <div className={classNames('ButtonPrimary__content', contentClassName)}>{children}</div>
      </div>
    </div>
  )
}
