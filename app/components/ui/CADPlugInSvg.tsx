import React from 'react';

const CadPluginIllustration: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="300"
    height="200"
    viewBox="0 0 300 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    {...props}
  >
    {/* Background */}
    <rect width="300" height="200" rx="12" className="fill-gray-50" />

    {/* CAD Cube */}
    <g stroke="#3b82f6" strokeWidth="2">
      <polygon points="100,60 150,30 200,60 150,90" fill="none" />
      <polygon points="100,60 100,110 150,140 150,90" fill="none" />
      <polygon points="200,60 200,110 150,140 150,90" fill="none" />
    </g>

    {/* Plugin Gear */}
    <g transform="translate(210,120)">
      <circle cx="0" cy="0" r="12" fill="#facc15" />
      <path
        d="M-12,0 L-18,0 M12,0 L18,0 M0,-12 L0,-18 M0,12 L0,18
           M-8.5,-8.5 L-12,-12 M8.5,-8.5 L12,-12 M-8.5,8.5 L-12,12 M8.5,8.5 L12,12"
        stroke="#f59e0b"
        strokeWidth="1.5"
      />
      <circle cx="0" cy="0" r="4" fill="#f59e0b" />
    </g>

    {/* Simulation Curves */}
    <path
      d="M30,170 Q70,130 110,170 T190,170 T270,170"
      stroke="#10b981"
      strokeWidth="2"
      fill="none"
      strokeDasharray="5,4"
    />
    <path
      d="M30,180 Q70,140 110,180 T190,180 T270,180"
      stroke="#06b6d4"
      strokeWidth="1.5"
      fill="none"
      strokeDasharray="2,3"
    />
  </svg>
);

export default CadPluginIllustration;
