// QRCodeReader.tsx (updated version)
import React, { useEffect, useRef, useState } from "react";
import { BrowserMultiFormatReader } from "@zxing/library";

type VerificationStatus =
    | { state: 'scanning' }
    | { state: 'loading', code: string }
    | { state: 'valid', code: string }
    | { state: 'invalid', code: string }
    | { state: 'error', code?: string };

const QRCodeReader: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [verificationStatus, setVerificationStatus] = useState<VerificationStatus>(
      { state: 'scanning' }
  );

  // Update the verifyCode function
  const verifyCode = async (rawData: string) => {
    try {
      // Extract the code from URL if scanned data is a URL
      const code = extractCodeFromScannedData(rawData);
      setVerificationStatus({ state: 'loading', code });

      const response = await fetch(`http://localhost:3001/api/verify/${encodeURIComponent(code)}`);

      if (!response.ok) throw new Error('Verification failed');
      const { valid } = await response.json();

      setVerificationStatus(valid ?
          { state: 'valid', code } :
          { state: 'invalid', code }
      );
    } catch (error) {
      setVerificationStatus({ state: 'error', code: rawData });
    }
  };

// Add this helper function
  const extractCodeFromScannedData = (data: string): string => {
    // If data is a URL, extract the last path segment
    if (data.startsWith('http')) {
      const url = new URL(data);
      const pathSegments = url.pathname.split('/');
      return pathSegments[pathSegments.length - 1] || data;
    }
    return data;
  };

  useEffect(() => {
    if (verificationStatus.state !== 'scanning') return;

    const codeReader = new BrowserMultiFormatReader();
    let active = true;

    const initScanner = async () => {
      try {
        const devices = await codeReader.getVideoInputDevices();
        if (!active) return;

        if (devices.length > 0) {
          codeReader.decodeFromVideoDevice(
              devices[0].deviceId,
              videoRef.current!,
              (result, error) => {
                if (result) {
                  codeReader.reset();
                  verifyCode(result.getText());
                }
              }
          );
        }
      } catch (error) {
        if (active) setVerificationStatus({ state: 'error' });
      }
    };

    initScanner();
    return () => {
      active = false;
      codeReader.reset();
    };
  }, [verificationStatus.state]);

  const resetScanner = () => setVerificationStatus({ state: 'scanning' });

  return (
      <div className="flex flex-col items-center p-4 space-y-4">
        <h1 className="text-2xl font-bold">QR Code Verifier</h1>

        {verificationStatus.state === 'scanning' ? (
            <video ref={videoRef} className="w-64 h-64 border-2 rounded-lg" />
        ) : (
            <div className="p-4 border-2 rounded-lg w-64 h-64 flex flex-col items-center justify-center">
              {verificationStatus.state === 'loading' && (
                  <div className="animate-pulse">
                    <div className="text-4xl">🔍</div>
                    <p className="mt-2">Verifying...</p>
                  </div>
              )}

              {verificationStatus.state === 'valid' && (
                  <div className="text-green-600 text-center">
                    <div className="text-4xl">✅</div>
                    <p className="mt-2 font-medium">Valid Code</p>
                    <p className="text-sm opacity-75">{verificationStatus.code}</p>
                  </div>
              )}

              {verificationStatus.state === 'invalid' && (
                  <div className="text-red-600 text-center">
                    <div className="text-4xl">❌</div>
                    <p className="mt-2 font-medium">Invalid Code</p>
                    <p className="text-sm opacity-75">{verificationStatus.code}</p>
                  </div>
              )}

              {verificationStatus.state === 'error' && (
                  <div className="text-yellow-600 text-center">
                    <div className="text-4xl">⚠️</div>
                    <p className="mt-2 font-medium">Verification Error</p>
                  </div>
              )}
            </div>
        )}

        {verificationStatus.state !== 'scanning' && (
            <button
                onClick={resetScanner}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Scan Again
            </button>
        )}
      </div>
  );
};

export default QRCodeReader;