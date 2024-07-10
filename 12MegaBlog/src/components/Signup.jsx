import React, { useState } from 'react'
import authService from '../appwrite/auth'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../store/authSlice'
import { Button, Input, Logo } from './index'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

function Signup() {
  const navigate = useNavigate()
  cost[error, setError] = useState(false)
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()

  const create = async (data) => {
    setError('')
    try {
      const userData = await authService.createAccount(data)
      if (userData) {
        const userData = await authService.getCurrentUser()
        if (userData) dispatch(login(userData))
        navigate('/')
      }
    } catch (error) {
      setError(error.message)
    }
  }
  return (
    <div className='flex items-center justify-center'>
      <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <span className="inline-block w-full max-w-[100px]">
          <Logo width="100%" />
        </span>
      </div>
      <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
      <p className="mt-2 text-center text-base text-black/60">
        Already have an account?&nbsp;
        <Link
          to="/login"
          className="font-medium text-primary transition-all duration-200 hover:underline"
        >
          Sign In
        </Link>
      </p>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

      <form onSubmit={handleSubmit(create)}>
        <div className='space-y-5'>
          <Input
            label="Name"
            type="text"
            placeholder='Enter your name'
            {...register('name', { required: true })}

          />
          <Input
            label="Email: "
            placeholder="Enter your email"
            type="email"
            {...register("email", {
              required: true,
              validate: {
                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                  "Email address must be a valid address",
              }
            })}
          />
          <Input
          label='password'
          type='password'
          placeholder='Enter your password'
          {...register('password',{
            required:true,
          })}
          />
          <Button 
          type='submit'
          className='w-full'
          >Create Account</Button>

        </div>
      </form>

    </div>
  )
}

export default Signup
