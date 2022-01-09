import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './IotRender.css'

function IotRender() {
  const backendUrl = 'http://localhost:1488/'
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch(`${backendUrl}api/v1/iot/socket/clients/get-all`)
      response = await response.json()
      setData(response)
      console.log(response)
    }

    fetchMyAPI()
  }, [])

  return (
    <div className='iot-render-deviceContainer'>
        {
          data.map((item) => {
            return (
              <Link to={`/iot/${item.socketId}`}>
                <div className='iot-render-device'>
                  <h3>Name: {item.iot.verbose.name}</h3>
                  <div className='sub-container'>
                    <p>Description: {item.iot.verbose.description}</p>
                  </div>    
                  <div className='sub-container'>
                    <p>Device version: {item.iot.verbose.clientVersion}</p>
                    <p>Manifest version: {item.manifestVersion}</p>
                  </div>
                  <div className='iot-sub-container iot-col'>
                    <p>State:</p>
                    <p className='iot-padd'>Current: {item.iot.state.stateCurrent}</p>
                    <p className='iot-padd'>Available: {JSON.stringify(item.iot.state.stateAvailable)}</p>
                  </div>
                  <div className='iot-sub-container iot-col'>
                    <p>Ids:</p>
                    <p className='iot-padd'>socket.io: {item.socketId}</p>
                    <p className='iot-padd'>mongo: {item._id}</p>
                  </div>
                  <div className='sub-container'>
                    <p>Sensor: {item.iot.sensor}</p>
                  </div>
                </div>
              </Link>
            );
          })
        }
    </div>
  )
}

export default IotRender