import React from 'react'
import { Stack } from "@mui/material"
import { Link as LinkRouter } from 'react-router-dom'
import Logo from "../assets/images/Logo.png"
import "./Navbar.css"
import { Link } from "react-scroll"

const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '122px', xs: '40px'}, mt: { sm: '32px', xs: '20px'}, justifyContent: 'none'}} px="20px">
      <LinkRouter to="/">
        <img className='img-nav' src={Logo} alt={Logo}  />
      </LinkRouter>

      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">

        <LinkRouter className='navigation-a link' to="/" smooth="true">Home</LinkRouter>
        <Link className="navigation-a" to="exercises" smooth="true">Exercises</Link>
      </Stack>

    </Stack>
  )
}

export default Navbar