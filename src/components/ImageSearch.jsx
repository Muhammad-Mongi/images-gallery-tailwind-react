import React, { useState } from 'react'

export const ImageSearch = ({ searchText }) => {

    const [text, setText] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        searchText(text);
    }
    return (
        <div className='max-w-sm overflow-hidden my-10 mx-auto rounded'>
            <form onSubmit={onSubmit} action="" className='w-full max-w-sm'>
                <div className="flex items-center border-teal-500 py-2 border-b-2">
                    <input
                        onChange={e => setText(e.target.value)}
                        type="text"
                        placeholder='Search Image Term....'
                        className="appearence-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" />

                    <button
                        type="submit"
                        className='flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounder'>
                        Search
                    </button>
                </div>
            </form>

        </div>
    )
}
