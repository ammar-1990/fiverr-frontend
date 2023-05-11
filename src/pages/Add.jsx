import React from 'react'

const Add = () => {
  return (
    <div>
      <div className='max-w-[1200px] mx-auto p-4'>
        <h1 className='text-gray-400 text-3xl py-8'>Add New Gig</h1>

        <div className='flex gap-2 flex-wrap'>

          <section className='min-w-[350px] flex-1  p-3 flex flex-col gap-4'>
<label htmlFor='title' className='text-gray-500' >Title</label>
<input className='w-full bg-transparent border rounded-lg p-3 outline-none' type='text' id='title' placeholder='e.g. I will do some thing I am really good at' />
<label htmlFor='cats' className='text-gray-500 mt-8'>Category</label>
<select id='cats' name='categories' className='w-full p-3 border rounded-lg outline-none cursor-pointer'>
  <option value={'design'}>Design</option>
  <option value={'web'}>Web Development</option>
  <option value={'animation'}>Animation</option>
  <option value={'music'}>Music</option>
</select>
<label className='text-gray-500' >Cover Image</label>
<input type='file' />
<label className='text-gray-500' >Upload Images</label>
<input type='file' multiple />
<label className='text-gray-500' >Description</label>
<textarea placeholder='Brief description to introduce your sevices to customers' rows={16} cols={30}  className='resize-none w-full outline-none border rounded-lg p-3' ></textarea>
<button className='py-3 text-white font-semibold bg-green-400 rounded-md'>Create</button>
          </section>

          <section className='min-w-[350px] flex-1  p-3 flex flex-col gap-4'>
          <label className='text-gray-500' >Service Title</label>
          <input className='w-full bg-transparent border rounded-lg p-3 outline-none' type='text' placeholder='e.g. one-page web design' />
          <label className='text-gray-500' >Short Description</label>
          <textarea placeholder='Short description of your service' className='resize-none w-full outline-none border rounded-lg p-3' ></textarea>
          <label className='text-gray-500' >Delivery Time(e.g. 3 days)</label>
          <input className='w-full bg-transparent border rounded-lg p-3 outline-none' type='number' min={1} />
          <label className='text-gray-500' >Revision Number</label>
          <input className='w-full bg-transparent border rounded-lg p-3 outline-none' type='number' min={1} />
          <label className='text-gray-500' >Add Features</label>
          <input className='w-full bg-transparent border rounded-lg p-3 outline-none' type='text' placeholder='e.g. page design' />
          <input className='w-full bg-transparent border rounded-lg p-3 outline-none' type='text' placeholder='e.g. one-file uploading' />
          <input className='w-full bg-transparent border rounded-lg p-3 outline-none' type='text' placeholder='e.g. setting up a domain' />
          <input className='w-full bg-transparent border rounded-lg p-3 outline-none' type='text' placeholder='e.g. hosting' />
          <label className='text-gray-500' >Price</label>
          <input className='w-full bg-transparent border rounded-lg p-3 outline-none' type='number' min={1} />
          </section>

        </div>
      </div>
    </div>
  )
}

export default Add