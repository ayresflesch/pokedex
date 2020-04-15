import React from 'react'
import PropTypes from "prop-types"
import { ResponsiveRadar } from '@nivo/radar'

const StatsRadar = ({ data, keys }) => {
  return (
    <ResponsiveRadar
      data={data}
      keys={keys}
      indexBy="name"
      maxValue="auto"
      margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
      curve="linearClosed"
      borderWidth={2}
      borderColor={{ from: 'color' }}
      gridLevels={5}
      gridShape="linear"
      gridLabelOffset={24}
      enableDots={true}
      dotSize={4}
      dotColor={{ theme: 'background' }}
      dotBorderWidth={2}
      dotBorderColor={{ from: 'color' }}
      enableDotLabel={true}
      dotLabel="value"
      dotLabelYOffset={-12}
      colors={{ scheme: 'category10' }}
      fillOpacity={0.25}
      blendMode="multiply"
      animate={true}
      motionStiffness={90}
      motionDamping={15}
      isInteractive={false}
    />
  )
}

StatsRadar.propTypes = {
  data: PropTypes.array.isRequired,
  keys: PropTypes.array.isRequired,
}

export default StatsRadar
