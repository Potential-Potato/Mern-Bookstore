import React, { useState } from 'react'
import axios from 'axios'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import { useNavigate, useParams } from 'react-router-dom'
import { useSnackbar } from 'notistack'
import { baseURL } from '../main';

const DeleteBook = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { id } = useParams()
  const { enqueueSnackbar } = useSnackbar()

  const baseURL = import.meta.env.VITE_REACT_APP_API_BASE_URL || 'http://localhost:5555';

  const handleDeleteBook = () => {
    setLoading(true)
    axios.delete(`${baseURL}/books/${id}`)
    .then(() => {
      setLoading(false)
      enqueueSnackbar('Book Deleted Successfuly', {variant: 'success'})
      navigate('/')
    })
    .catch((err) => {
      setLoading(false)
      console.log(err)
      enqueueSnackbar('Error', {variant: 'error'})
      alert('An error has occured, please check console')
    })
  }

  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3x1 my-4'>Delete Book</h1>
      {loading ? <Spinner/> : ''}
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-x1 w-[600] p-8 mx-auto'>
        <h3 className='text-2x1'>Are you sure you want to delete this book?</h3>
        <button className='p-4 bg-red-400 text-white m-8 w-full' onClick={handleDeleteBook}>
          Yes, Delete It
        </button>
      </div>
    </div>  
  )
}

export default DeleteBook