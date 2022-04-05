import React from 'react'

import classes from './styles.scss'

type Props = JSX.IntrinsicElements['div']

const Spinner: React.FC<Props> = ({ className, ...rest }) => {
  return (
    <div {...rest} className={[classes.spinner, className].join(' ')}>
      <div />
      <div />
      <div />
      <div />
    </div>
  )
}

export default Spinner
