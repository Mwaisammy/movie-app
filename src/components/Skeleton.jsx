import React from 'react'
import Skeleton, { SkeletonTheme }  from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function SkeletonLoader() {
  return (
    <div className=''>
        <SkeletonTheme baseColor='#1c1c1c' highlightColor='#313131'>
          {[...Array(1)].map((_, index) =>(

        <Skeleton  key={index} inline={true} className='h-[120px] w-[220px] rounded-[3px] space-x-2 mb-14 scrollbar-hide'/>
          ))}

        </SkeletonTheme>
    </div>
  )
}

export default SkeletonLoader;