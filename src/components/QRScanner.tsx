import React, { useEffect, useRef, useState } from "react";
import { BrowserMultiFormatReader } from "@zxing/library";

const QRCodeReader: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [scanResult, setScanResult] = useState<string | null>(null);

  useEffect(() => {
    const codeReader = new BrowserMultiFormatReader();

    // Get available video input devices
    codeReader.getVideoInputDevices().then((videoDevices) => {
      if (videoDevices.length > 0) {
        const deviceId = videoDevices[0].deviceId; // Use the first camera
        codeReader
          .decodeFromVideoDevice(deviceId, videoRef.current!, (result, err) => {
            if (result) {
              setScanResult(result.getText());
              codeReader.reset();
            }
          })
          .catch((err) => console.error(err));
      }
    });

    return () => codeReader.reset();
  }, []);

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-xl font-bold">QR Code Scanner</h1>
      {scanResult ? (
        <div className="mt-4 p-3 border rounded bg-green-100 text-green-800">
          Scanned Code: {scanResult}
        </div>
      ) : (
        <video ref={videoRef} className="mt-4 w-128 h-128 border"></video>
      )}
    </div>
  );
};

export default QRCodeReader;