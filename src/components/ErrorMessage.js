import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

function ErrorMessage() {
    const { placeholderDataError } = useSelector((state) => state)
    if (placeholderDataError) {
        return (
          <div>
           Unfortunately, the error occurred. Please try again later.
          </div>);
      }
      return (
        <div />
      );
}
export default ErrorMessage;