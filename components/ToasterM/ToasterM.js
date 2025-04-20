"use client"
import React from 'react'

import toast, { Toaster } from 'react-hot-toast';


const notify = () => toast.success('Here is your toast.');

const ToasterM = () => {
  return (
    <div>
      <button onClick={notify}>Make me a toast</button>
      <Toaster />
    </div>
  )
}

export default ToasterM