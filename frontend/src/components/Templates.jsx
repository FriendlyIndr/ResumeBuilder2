import React from 'react'

const Templates = () => {
  const templates = [
    { name: "Sales" },
    { name: "Electrical Engineering" },
    { name: "Computer Science" },
  ]

  return (
    <div>
      <div>
        <h1 className='text-lg mt-6'>Choose a template</h1>

        <div className='grid grid-cols-3 gap-4'>
          {templates.map((template, index) => (
            <div
              key={index}
              className='bg-slate-200 rounded-lg p-2'
            >
              <img />
              {template.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Templates