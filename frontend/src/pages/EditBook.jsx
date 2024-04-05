import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useSnackbar } from 'notistack'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import { baseURL } from '../main';

const EditBook = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [publishYear, setPublishYear] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { id } = useParams()
  const { enqueueSnackbar } = useSnackbar()

  useEffect(() => {
    setLoading(true)
    axios.get(`${baseURL}/books/${id}`)
    .then((res) => {
      setAuthor(res.data.author)
      setPublishYear(res.data.publishYear)
      setTitle(res.data.title)
      setLoading(false)
    })
    .catch((err) => {
      setLoading(false)
      console.log(err)
      alert('An error has occured, please check console')
    })
  }, [])

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear
    }
    setLoading(true)
    axios.put(`${baseURL}/books/${id}`, data)
    .then(() => {
      setLoading(false)
      enqueueSnackbar('Book Updated Successfuly', {variant: 'success'})
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
      <h1 className='text-3x1 my-4'>Edit Book</h1>
      {loading ? <Spinner/> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-x1 w-[600px] p-4 mx-auto'>
        <div className='my-4'> 
          <label className='text-x1 mr-4 text-gray-500'>Title</label>
          <input
            type='text'
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>  
        <div className='my-4'> 
          <label className='text-x1 mr-4 text-gray-500'>Author</label>
          <input
            type='text'
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>  
        <div className='my-4'> 
          <label className='text-x1 mr-4 text-gray-500'>Publish Year</label>
          <input
            type='text'
            value={publishYear}
            onChange={(event) => setPublishYear(event.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>  
        <button className='p-2 bg-sky-300 m-8' onClick={handleEditBook}>
          Save
        </button>
      </div>
    </div>
  )
}

export default EditBook