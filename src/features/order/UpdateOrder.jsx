import React from 'react'
import { useFetcher } from 'react-router-dom'
import { updateOrder } from '../../services/apiRestaurant';

function UpdateOrder({order}) {
    const fetcher = useFetcher();
   
  return (
    <fetcher.Form method='PATCH' className='text-right'>

   <button className='btn' >
        Make priority
       </button>
    </fetcher.Form>
  )
}

export default UpdateOrder;

export async function action ({request, params}) {
    console.log('update');
    const data = {priority : true}
    await updateOrder(params.orderId , data)
    return null
}