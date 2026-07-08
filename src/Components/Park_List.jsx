import React from 'react'
import Park_Cards from './Park_Cards'

function Park_List() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          
          <Park_Cards/>

        </div>
  )
}

export default Park_List
