import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BsInfoCircle} from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react'
import BookModal from './BookModal'
const BookSingleCard = ({item}) => {
const [showModal, setShowModal] = useState(false)


  return (
    <div className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl'>
          <h2 className='absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg'>
            {item.publishYear}
          </h2>
          <h4 className='my-2 text-gray-500'>
            {item._id}
          </h4>
          <div className='flex justify-start items-center gap-x-2'>
            <PiBookOpenTextLight className='text-red-300 text-2xl' />
            <h2 className='my-1'>{item.title}</h2>
          </div>
          <div className='flex justify-startitems-center gap-x-2'>
            <BsInfoCircle className='text-red-300 text-2xl' />
            <h2 className='my-1'>{item.author}</h2>
          </div>
          <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>
            <BsInfoCircle 
                className='text-3x1 text-blue-800 hover:text-black cursor-pointer'
                onClick={() => setShowModal(true)}
                />
            <Link to={`/books/details/${item._id}`}>
              <BsInfoCircle className='text-2xl text-green-800 hover:text-black' />
            </Link>
            <Link to={`/books/edit/${item._id}`}>
              <BsInfoCircle className='text-2xl text-yellow-800 hover:text-black' />
            </Link>
            <Link to={`/books/delete/${item._id}`}>
              <MdOutlineDelete className='text-2xl text-red-800 hover:text-black' />
            </Link>
          </div>
          {
            showModal && (
                <BookModal item={item} onClose={() => setShowModal(false)} />
            )
          }
        </div>
  )
}

export default BookSingleCard