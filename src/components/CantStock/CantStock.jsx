import React from 'react'

export function CantStock ({ stock = 0 }) {
  return (
    <h3>{stock= 0 ? 'No hay stock' : ' En stock'}</h3>
  )
}

export  default CantStock