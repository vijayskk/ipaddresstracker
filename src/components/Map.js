import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import ReactMapGL ,{Marker} from 'react-map-gl'
import { DetailsContext } from '../contexts/DetailsContext'
import { ViewPortContext } from '../contexts/ViewPortContext'

function Map() {
    const [,setdetails] = useContext(DetailsContext)
    const [viewport,setviewport ] = useContext(ViewPortContext)


    return (
        <div className="w-full h-screen">
                <ReactMapGL mapStyle={"mapbox://styles/vijayskk/ckpqo11wo24jk17o3fqjdt5h3"} {...viewport} mapboxApiAccessToken={"pk.eyJ1IjoidmlqYXlza2siLCJhIjoiY2twcWcxY283MzRmajJxbXdsa3FwODg3NiJ9.Uqv_gS4gAaCjXtMaaZ0jBg"}>
                <Marker latitude={viewport.latitude} longitude={viewport.longitude}>
                    <img className="" src="icon-location.svg" alt="" />
                </Marker>
                </ReactMapGL>
        </div>
    )
}

export default Map
