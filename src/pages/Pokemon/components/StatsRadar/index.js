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
      margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
      curve="linearClosed"
      borderWidth={0}
      borderColor={{ from: 'color' }}
      gridLevels={3}
      gridShape="linear"
      gridLabelOffset={24}
      enableDots={true}
      dotSize={3}
      dotColor={{ theme: 'background' }}
      dotBorderWidth={3}
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
      theme={
        {
          axis: {
            ticks: {
              text: {
                fontSize: '14px',
                fontWeight: 'bold',
              }
            },
          },
          dots: {
            text: {
              fontSize: 14
            }
          }
        }
      }
    />
  )
}

StatsRadar.propTypes = {
  data: PropTypes.array.isRequired,
  keys: PropTypes.array.isRequired,
}

export default StatsRadar
