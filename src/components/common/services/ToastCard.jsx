import React from 'react'

const ToastCard = ({img, title}) => {
  return (
    <div className='w-[250px] flex rounded-xl justify-evenly pt-4 pb-2 bg-[#f7f7f7]'>
        <div className='w-[20%]'><img src={img}/></div>
        <div className=' w-[80%] text-xl pl-6 font-semibold'>{title}</div>
    </div>
  )
}

export default ToastCard