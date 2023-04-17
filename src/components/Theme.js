import React, {children} from 'react'

const Theme = ({children}) => {
  return (
    <html data-theme="night">
    {children}
    </html>
    )
}


export default Theme 