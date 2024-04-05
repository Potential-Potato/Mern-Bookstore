import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

const BookModal = ({ item, onClose }) => {
  return (
    <div className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center' onClick={onClose}>
        <div onClick={(event) => event.stopPropagation()} className='w-[600px] max-w-full h-[400px] bg-white rounded-x1 p-4 flex flex-col relative'>
            <BsInfoCircle className='absolute right-6 top-6 text-3x1 text-red-600 cursor-pointer' onClick={onClose}/>
            <h2 className='w-fit px-4 py-1 bg-red-300 rounded-lg'>
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
            <p className='mt-4'>Anything You Want To do?</p>
            <p className='my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sit quia expedita magni incidunt fuga possimus, minima, pariatur assumenda dolor laudantium voluptatibus nesciunt praesentium id, explicabo accusamus quos aut distinctio?</p>
        </div>
    </div>
  )
}

export default BookModal