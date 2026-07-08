import React from 'react'
import Park_Cards from './Park_Cards'

function Park_List({parks}) {

    if(parks.length === 0){
        return <p className="text-center text-gray-500 mt-10">
        No parks found.
      </p>
    }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          
          {
            parks.map((park)=>(
                
                <Park_Cards key={(park.id)} park={park}/>
            ))
          }

        </div>
  )
}

export default Park_List
