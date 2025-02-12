import { SvgIcon, Box, SvgIconTypeMap } from '@mui/material';
import React from 'react';

const FlutterIcon = ({ width = 60, height = 60, ...props }: { width?: number; height?: number } & any) => {
  return (
    <Box
      component="svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 89.65 111.105"
      width={width}
      height={height}
      {...props}
    >
      <g fillRule="evenodd">
        <path fill="#02539a" d="m56.226 111.105-30.06-29.868 16.616-16.906 46.867 46.774Z" />
        <g>
          <path fill="rgba(69,209,253,0.85)" d="m25.795 81.26 29.8-29.8h33.5L42.736 97.818Z" />
          <path fill="#45d1fd" d="m0 55.268 16.918 16.907L89.093 0H55.419Z" />
        </g>
      </g>
    </Box>
  );
};

export default FlutterIcon;