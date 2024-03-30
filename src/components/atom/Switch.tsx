'use client'
import React, { useState } from 'react'

const Switch = ({ dataSwitch, onTabChange }: { dataSwitch: string[]; onTabChange: Function }) => {
  const [swap, setSwap] = useState(0)
  const handleSwap = (item: string, index: number) => {
    setSwap(index)
    onTabChange(item)
  }

  return (
    <div className="w-44 h-10 px-[2.5px] bg-slate-200 flex items-center justify-between rounded-full overflow-hidden">
      {dataSwitch.map((item, index) => (
        <div
          key={index}
          className={`switch ${swap === index ? 'bg-white' : ''} transition-all duration-400`}
          onClick={() => handleSwap(item, index)}
        >
          <span className="text-sm">{item}</span>
        </div>
      ))}
    </div>
  )
}

export default Switch
