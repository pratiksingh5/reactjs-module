import React from 'react'

const AuthLayout = (Component) => {
  return function InnerComponent() {
    return (
        <div className='bg-white w-full h-screen flex justify-center items-center'>
            <Component/>
        </div>
    )
  }
}

export default AuthLayout


