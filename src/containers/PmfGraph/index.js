import React, { Component, PropTypes } from 'react'
import { pick, flow, range } from 'lodash'
import { connect } from 'react-redux'
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory'

import {
} from './styles.css'

const PmfGraph = (props) => {
  const {distribution} = props

  const barUnitWidth = (0.75 / 256)
  const barUnitHeight = (0.8 / 0.05)

  return (
    <VictoryChart>
      <VictoryAxis tickValues={[0, 63, 127, 191, 255]}/>
      <VictoryAxis dependentAxis />
      <VictoryBar 
        style={{data: {
          width: 1
        }}}
        data={distribution} />
    </VictoryChart>
  )
}

PmfGraph.propTypes = {
}

function mapStateToProps(state) {
  const {boxMuellerDemo} = state
  const {distribution} = boxMuellerDemo

  return {distribution}
}

export default flow(
  connect(mapStateToProps)
)(PmfGraph)

// OLD IMPLEMENTATION- Only stashing this here because I didn't
// get it committed before I found a better library. :P
// return (
//   <ScaledSvg className={pmfGraph} width={960} height={480}>
//     { distribution.map(({x,y}) => {
//       const cx = barUnitWidth  * x + 0.125
//       const cy = barUnitHeight * y
//       return <ScaledPolyline 
//                 key={x} 
//                 points={[cx, 0.9, cx, (0.9-cy)]}
//                 stroke="black" 
//                 strokeWidth={1} />
//     })}
//     <YAxis padding={0.1} dmin={0} dmax={0.5} numDivisions={4} />
//     <XAxis padding={0.1}/>
//   </ScaledSvg>
// )
