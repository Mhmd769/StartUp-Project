import React from 'react'
import Ping from './Ping'
import { client } from '@/sanity/lib/client'
import { STARTUP_VIWES_QUERY } from '@/sanity/lib/queries';
import { EyeIcon } from 'lucide-react';

const View = async ({id}:{id:string}) => {

    const {views: totalViews}=await client.withConfig({useCdn:false}).fetch(STARTUP_VIWES_QUERY, {id});


    //TODO : update the number of views

  return (
    <div className='view-container'>
        <div className='absolute -top-2 -right-2'>
            <Ping/>
        </div>
        <p className='view-text'>
            <span className='font-black flex gap-2'><EyeIcon/>{totalViews}</span>
        </p>
    </div>
  )
}

export default View