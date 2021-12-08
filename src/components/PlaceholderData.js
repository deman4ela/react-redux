import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

function PlaceholderData() {
   
    const { placeholderDataSuccess, placeholderDataError }  = useSelector((state) => state)

    return (
        <div>
          { placeholderDataSuccess.length ? placeholderDataSuccess.map((data) => {
            return (
              <div>
                <p>
                  <span> {data.id} </span>
                  <p> {data.title} </p>
                  <p> {data.body} </p>
                </p>   
              </div>
            );
          }
          ) :
            null
          }
        </div>
      )
}
export default PlaceholderData;