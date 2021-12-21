import React, { useState } from 'react';

import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const PasswordInput = React.forwardRef(({...restProps}, ref) => {
  
  const [showPassword, setShowPassword] = useState(false)
  const toggleShowPassword = () => setShowPassword(prevState => !prevState);

  return (
    <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              type={showPassword ? 'text' : 'password'}
              color='primary'
              id='password'
              autoComplete='current-password'
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" color='primary'onClick={toggleShowPassword}
                  >
                  <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                >
                  {showPassword ? <VisibilityIcon color='primary'/> : <VisibilityOffIcon color='primary'/>}
                  </IconButton>
                </InputAdornment>
                )
              }}
              ref={ref}
              {...restProps}
            />
  )
})

export default PasswordInput
