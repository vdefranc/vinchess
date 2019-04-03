import React from 'react';

export default function getPieceSvg(type, color) {
  return pieceMap[type](color);
}

const baseSvgProps = {
  xmlns:"http://www.w3.org/2000/svg",
  version:"1.1",
  width:"45",
  height:"45",
}

const pieceMap = {
  pawn: (color) => {
    const fill = color === 'b'? '#000' : '#fff'

    return (
      <svg {...baseSvgProps} >
        <path
          d="M 22,9 C 19.79,9 18,10.79 18,13 C 18,13.89 18.29,14.71 18.78,15.38 C 16.83,16.5 15.5,18.59 15.5,21 C 15.5,23.03 16.44,24.84 17.91,26.03 C 14.91,27.09 10.5,31.58 10.5,39.5 L 33.5,39.5 C 33.5,31.58 29.09,27.09 26.09,26.03 C 27.56,24.84 28.5,23.03 28.5,21 C 28.5,18.59 27.17,16.5 25.22,15.38 C 25.71,14.71 26,13.89 26,13 C 26,10.79 24.21,9 22,9 z "
          style={{
            opacity: '1',
            fill,
            fillOpacity: '1',
            fillRule: 'nonzero',
            stroke: '#000000',
            strokeWidth: '1.5',
            strokeLinecap: 'round',
            strokeLinejoin: 'miter',
            strokeMiterlimit: '4',
            strokeDasharray: 'none',
            strokeOpacity: '1'
          }}
        />
      </svg>
    )
  },
  rook: (color) => {
    return <svg {...baseSvgProps} >
      {rooks[color]}
    </svg>
  }
}


const rooks = {
  w: (
    <g
      style={{
        opacity: '1',
        fill: '#ffffff',
        fillOpacity: '1',
        fillRule: 'evenodd',
        stroke: '#000000',
        strokeWidth: '1.5',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeMiterlimit: '4',
        strokeDasharray: 'none',
        strokeOpacity: '1'
      }}
    >
      <path
        d="M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 z "
        style={{
          strokeLinecap: 'butt'
        }}
      />
      <path
        d="M 12,36 L 12,32 L 33,32 L 33,36 L 12,36 z "
        style={{
          strokeLinecap: 'butt'
        }}
      />
      <path
        d="M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14"
        style={{
          strokeLinecap: 'butt'
        }}
      />
      <path d="M 34,14 L 31,17 L 14,17 L 11,14" />
      <path
        d="M 31,17 L 31,29.5 L 14,29.5 L 14,17"
        style={{
          strokeLinecap: 'butt',
          strokeLinejoin: 'miter'
        }}
      />
      <path d="M 31,29.5 L 32.5,32 L 12.5,32 L 14,29.5" />
      <path
        d="M 11,14 L 34,14"
        style={{
          fill: 'none',
          stroke: '#000000',
          strokeLinejoin: 'miter'
        }}
      />
    </g>
  ),
  b: (
    <g
      style={{
        opacity: '1',
        fill: '000000',
        fillOpacity: '1',
        fillRule: 'evenodd',
        stroke: '#000000',
        strokeWidth: '1.5',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeMiterlimit: '4',
        strokeDasharray: 'none',
        strokeOpacity: '1'
      }}
    >
      <path
        d="M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 z "
        style={{
          strokeLinecap: 'butt'
        }}
      />
      <path
        d="M 12.5,32 L 14,29.5 L 31,29.5 L 32.5,32 L 12.5,32 z "
        style={{
          strokeLinecap: 'butt'
        }}
      />
      <path
        d="M 12,36 L 12,32 L 33,32 L 33,36 L 12,36 z "
        style={{
          strokeLinecap: 'butt'
        }}
      />
      <path
        d="M 14,29.5 L 14,16.5 L 31,16.5 L 31,29.5 L 14,29.5 z "
        style={{
          strokeLinecap: 'butt',
          strokeLinejoin: 'miter'
        }}
      />
      <path
        d="M 14,16.5 L 11,14 L 34,14 L 31,16.5 L 14,16.5 z "
        style={{
          strokeLinecap: 'butt'
        }}
      />
      <path
        d="M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14 L 11,14 z "
        style={{
          strokeLinecap: 'butt'
        }}
      />
      <path
        d="M 12,35.5 L 33,35.5 L 33,35.5"
        style={{
          fill: 'none',
          stroke: '#ffffff',
          strokeWidth: '1',
          strokeLinejoin: 'miter'
        }}
      />
      <path
        d="M 13,31.5 L 32,31.5"
        style={{
          fill: 'none',
          stroke: '#ffffff',
          strokeWidth: '1',
          strokeLinejoin: 'miter'
        }}
      />
      <path
        d="M 14,29.5 L 31,29.5"
        style={{
          fill: 'none',
          stroke: '#ffffff',
          strokeWidth: '1',
          strokeLinejoin: 'miter'
        }}
      />
      <path
        d="M 14,16.5 L 31,16.5"
        style={{
          fill: 'none',
          stroke: '#ffffff',
          strokeWidth: '1',
          strokeLinejoin: 'miter'
        }}
      />
      <path
        d="M 11,14 L 34,14"
        style={{
          fill: 'none',
          stroke: '#ffffff',
          strokeWidth: '1',
          strokeLinejoin: 'miter'
        }}
      />
    </g>
  )
}
