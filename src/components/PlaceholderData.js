import React from 'react'
import { useSelector } from 'react-redux'
import { Button, Card, Elevation } from "@blueprintjs/core"
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

function PlaceholderData() {
   
    const { placeholderDataSuccess }  = useSelector((state) => state)

    return (
        <div>
          { placeholderDataSuccess.length ? placeholderDataSuccess.map((data) => {
            return (
              <Card interactive={true} elevation={Elevation.FOUR}>
                <div key={data.id}>
                  <p>
                    <span> {data.id} </span>
                    <p> {data.title} </p>
                  </p>   
                </div>
                <Link to={`/posts/${data.id}`}>
                <Button> More details </Button>
                </Link>
              </Card>
            );
          }
          ) :
            null
          }
        </div>
      )
}
export default PlaceholderData;