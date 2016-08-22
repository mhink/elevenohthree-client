import React from 'react'

import {
  ScaledPolyline, 
  ScaledText 
} from 'components/ScaledSvg'

const XAxis = ({padding: pad}) => (
  <g>
    <ScaledPolyline points={[pad+0.025, 1-pad, 1-pad-0.025, 1-pad]} />
  </g>
)

const YAxis = ({padding: pad, dmin, dmax, numDivisions: n}) => {
  const rLength = (1 - 2 * pad)

  const dSpan = (dmax - dmin) / n
  const rSpan = rLength / n

  const labels = []

  for(let i=0, d = dmax, r = pad; d >= dmin; d -= dSpan, r += rSpan, i++) {
    labels.push(
      <ScaledText key={i*2} x={pad} y={r} textAnchor="end" alignmentBaseline="central">
        {+d.toFixed(2)}%
      </ScaledText>
    )
    labels.push(
      <ScaledPolyline key={i*2 + 1}
                      points={[pad+0.025, r, 1-pad-0.025, r]}
                      stroke="white" 
                      strokeWidth={2} />
    )
  }
  return <g>{labels}</g>
}

export { XAxis, YAxis }
