import React from 'react'
import { FilterWrapper } from './style'

export const GlobalFilter = ({filter, setFilter, className}) => {
  return (
      <FilterWrapper className={className}>
          <input value={filter || ''} placeholder="Search here..." onChange={e => setFilter(e.target.value)} />
      </FilterWrapper>
  )
}
