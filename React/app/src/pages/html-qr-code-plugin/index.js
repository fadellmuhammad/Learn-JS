import React, { useState, useEffect } from 'react'
import { Html5Qrcode } from 'html5-qrcode'

const QRcode = () => {
  const qrcodeRegionId = "html5qr-code-full-region";
  const [camera, setCamera] = useState('')

  useEffect(() => {
    // This method will trigger user permissions
    Html5Qrcode.getCameras().then(devices => {
      /**
       * devices would be an array of objects of type:
       *  
       * { id: "id", label: "label" }
       *  
       *  */
      if (devices && devices.length) {
        // var cameraId = devices[0].id;
        console.log(devices);
        setCamera(devices[1].id)
        // .. use this to start scanning.
      }
    }).catch(err => {
      // handle err
      console.log(err);
    });
  }, [])

  useEffect(() => {
    const createConfig = () => {
      const config = {
        fps: 10,
        qrbox: 250,
        aspectRatio: 1,
      };
      return config
    }

    const onScanSuccess = () => {
      console.log("success");
    }

    const onScanFailure = () => {
      console.log("failure");
    }

    const config = createConfig();
    const html5QrcodeScanner = new Html5Qrcode(qrcodeRegionId);
    if (camera === '') {
      return
    }
    html5QrcodeScanner.start(camera, config, onScanSuccess, onScanFailure);

    return () => {
      html5QrcodeScanner.clear().catch(error => {
        console.error("Failed to clear html5QrcodeScanner. ", error);
      })
    }

  }, [camera])

  return (
    <div id={qrcodeRegionId} />
  )
}

export default QRcode