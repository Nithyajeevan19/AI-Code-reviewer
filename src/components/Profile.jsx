import React from 'react'
import { useState } from 'react'
export default function Profile() {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')

  return (
    <div>
      <div className='border-gray-900 m-4 shadow-lg'>
            <div>
                <h1>Name</h1>
                <div className='w-70 rounded-sm shadow-sm'>
                    <p>{name}</p>
                </div>
            </div>
            <div>
                <h1>Email</h1>
                <div className='w-70 rounded-sm shadow-sm'>
                    <p>{email}</p>
                </div>
            </div>
      </div>
    </div>
  )
}
