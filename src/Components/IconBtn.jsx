import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowToLeft from "../Icons/arrowToLeft.svg"

export default function IconBtn() {
  return (
      <IconButton aria-label="fingerprint" color="primary">
        <img src={ArrowToLeft} alt="" sx={{m:"10px"}} />
      </IconButton>
  );
}