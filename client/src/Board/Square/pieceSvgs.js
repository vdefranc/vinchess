import React from 'react';
//Chess pieces originally by User:Cburnett in a sprite image for use in computer applications.

export default {
  wQ: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="45"
      height="45"
    >
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
          d="M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z"
          transform="translate(-1,-1)"
        />
        <path
          d="M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z"
          transform="translate(15.5,-5.5)"
        />
        <path
          d="M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z"
          transform="translate(32,-1)"
        />
        <path
          d="M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z"
          transform="translate(7,-4.5)"
        />
        <path
          d="M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z"
          transform="translate(24,-4)"
        />
        <path
          d="M 9,26 C 17.5,24.5 30,24.5 36,26 L 38,14 L 31,25 L 31,11 L 25.5,24.5 L 22.5,9.5 L 19.5,24.5 L 14,10.5 L 14,25 L 7,14 L 9,26 z "
          style={{
            strokeLinecap: 'butt'
          }}
        />
        <path
          d="M 9,26 C 9,28 10.5,28 11.5,30 C 12.5,31.5 12.5,31 12,33.5 C 10.5,34.5 10.5,36 10.5,36 C 9,37.5 11,38.5 11,38.5 C 17.5,39.5 27.5,39.5 34,38.5 C 34,38.5 35.5,37.5 34,36 C 34,36 34.5,34.5 33,33.5 C 32.5,31 32.5,31.5 33.5,30 C 34.5,28 36,28 36,26 C 27.5,24.5 17.5,24.5 9,26 z "
          style={{
            strokeLinecap: 'butt'
          }}
        />
        <path d="M 11.5,30 C 15,29 30,29 33.5,30" style={{ fill: 'none' }} />
        <path
          d="M 12,33.5 C 18,32.5 27,32.5 33,33.5"
          style={{ fill: 'none' }}
        />
      </g>
    </svg>
  ),
  wK: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="45"
      height="45"
    >
      <g
        style={{
          fill: 'none',
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
          d="M 22.5,11.63 L 22.5,6"
          style={{
            fill: 'none',
            stroke: '#000000',
            strokeLinejoin: 'miter'
          }}
        />
        <path
          d="M 20,8 L 25,8"
          style={{
            fill: 'none',
            stroke: '#000000',
            strokeLinejoin: 'miter'
          }}
        />
        <path
          d="M 22.5,25 C 22.5,25 27,17.5 25.5,14.5 C 25.5,14.5 24.5,12 22.5,12 C 20.5,12 19.5,14.5 19.5,14.5 C 18,17.5 22.5,25 22.5,25"
          style={{
            fill: '#ffffff',
            stroke: '#000000',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter'
          }}
        />
        <path
          d="M 11.5,37 C 17,40.5 27,40.5 32.5,37 L 32.5,30 C 32.5,30 41.5,25.5 38.5,19.5 C 34.5,13 25,16 22.5,23.5 L 22.5,27 L 22.5,23.5 C 19,16 9.5,13 6.5,19.5 C 3.5,25.5 11.5,29.5 11.5,29.5 L 11.5,37 z "
          style={{
            fill: '#ffffff',
            stroke: '#000000'
          }}
        />
        <path
          d="M 11.5,30 C 17,27 27,27 32.5,30"
          style={{
            fill: 'none',
            stroke: '#000000'
          }}
        />
        <path
          d="M 11.5,33.5 C 17,30.5 27,30.5 32.5,33.5"
          style={{
            fill: 'none',
            stroke: '#000000'
          }}
        />
        <path
          d="M 11.5,37 C 17,34 27,34 32.5,37"
          style={{
            fill: 'none',
            stroke: '#000000'
          }}
        />
      </g>
    </svg>
  ),
  bQ: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="45"
      height="45"
    >
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
        <g
          style={{
            fill: '#000000',
            stroke: 'none'
          }}
        >
          <circle cx="6" cy="12" r="2.75" />
          <circle cx="14" cy="9" r="2.75" />
          <circle cx="22.5" cy="8" r="2.75" />
          <circle cx="31" cy="9" r="2.75" />
          <circle cx="39" cy="12" r="2.75" />
        </g>
        <path
          d="M 9,26 C 17.5,24.5 30,24.5 36,26 L 38.5,13.5 L 31,25 L 30.7,10.9 L 25.5,24.5 L 22.5,10 L 19.5,24.5 L 14.3,10.9 L 14,25 L 6.5,13.5 L 9,26 z"
          style={{
            strokeLinecap: 'butt',
            stroke: '#000000'
          }}
        />
        <path
          d="M 9,26 C 9,28 10.5,28 11.5,30 C 12.5,31.5 12.5,31 12,33.5 C 10.5,34.5 10.5,36 10.5,36 C 9,37.5 11,38.5 11,38.5 C 17.5,39.5 27.5,39.5 34,38.5 C 34,38.5 35.5,37.5 34,36 C 34,36 34.5,34.5 33,33.5 C 32.5,31 32.5,31.5 33.5,30 C 34.5,28 36,28 36,26 C 27.5,24.5 17.5,24.5 9,26 z"
          style={{
            strokeLinecap: 'butt'
          }}
        />
        <path
          d="M 11,38.5 A 35,35 1 0 0 34,38.5"
          style={{
            fill: 'none',
            stroke: '#000000',
            strokeLinecap: 'butt'
          }}
        />
        <path
          d="M 11,29 A 35,35 1 0 1 34,29"
          style={{
            fill: 'none',
            stroke: '#ffffff'
          }}
        />
        <path
          d="M 12.5,31.5 L 32.5,31.5"
          style={{
            fill: 'none',
            stroke: '#ffffff'
          }}
        />
        <path
          d="M 11.5,34.5 A 35,35 1 0 0 33.5,34.5"
          style={{
            fill: 'none',
            stroke: '#ffffff'
          }}
        />
        <path
          d="M 10.5,37.5 A 35,35 1 0 0 34.5,37.5"
          style={{
            fill: 'none',
            stroke: '#ffffff'
          }}
        />
      </g>
    </svg>
  ),
  bK: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="45"
      height="45"
    >
      <g
        style={{
          fill: 'none',
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
          d="M 22.5,11.63 L 22.5,6"
          style={{
            fill: 'none',
            stroke: '#000000',
            strokeLinejoin: 'miter'
          }}
          id="path6570"
        />
        <path
          d="M 22.5,25 C 22.5,25 27,17.5 25.5,14.5 C 25.5,14.5 24.5,12 22.5,12 C 20.5,12 19.5,14.5 19.5,14.5 C 18,17.5 22.5,25 22.5,25"
          style={{
            fill: '#000000',
            fillOpacity: '1',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter'
          }}
        />
        <path
          d="M 11.5,37 C 17,40.5 27,40.5 32.5,37 L 32.5,30 C 32.5,30 41.5,25.5 38.5,19.5 C 34.5,13 25,16 22.5,23.5 L 22.5,27 L 22.5,23.5 C 19,16 9.5,13 6.5,19.5 C 3.5,25.5 11.5,29.5 11.5,29.5 L 11.5,37 z "
          style={{
            fill: '#000000',
            stroke: '#000000'
          }}
        />
        <path
          d="M 20,8 L 25,8"
          style={{
            fill: 'none',
            stroke: '#000000',
            strokeLinejoin: 'miter'
          }}
        />
        <path
          d="M 32,29.5 C 32,29.5 40.5,25.5 38.03,19.85 C 34.15,14 25,18 22.5,24.5 L 22.51,26.6 L 22.5,24.5 C 20,18 9.906,14 6.997,19.85 C 4.5,25.5 11.85,28.85 11.85,28.85"
          style={{
            fill: 'none',
            stroke: '#ffffff'
          }}
        />
        <path
          d="M 11.5,30 C 17,27 27,27 32.5,30 M 11.5,33.5 C 17,30.5 27,30.5 32.5,33.5 M 11.5,37 C 17,34 27,34 32.5,37"
          style={{
            fill: 'none',
            stroke: '#ffffff'
          }}
        />
      </g>
    </svg>
  )
};
