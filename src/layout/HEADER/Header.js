import { styled } from '@mui/material'
import React from 'react'

import headerimg from '../../assets/images/header_phone.jpeg'

const Header = () => {
   return <HeaderStyle>hello</HeaderStyle>
}

export default Header

const HeaderStyle = styled('header')(() => ({
   backgroundImage: `url(${headerimg})`,
   width: '1440px',
   height: '400px',
   backgroundRepeat: 'no-repeat',
   backgroundSize: 'cover',
}))
