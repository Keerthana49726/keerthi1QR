import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const QRCodeGenerator = () => {
  const [url, setUrl] = useState('');

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <input 
        type="text"
        placeholder="Enter URL"
        value={url}
        onChange={handleChange}
        style={{ padding: '10px', marginBottom: '20px', width: '300px' }}
      />
      <QRCode value={url} size={256} />
      <button
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          cursor: 'pointer',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px'
        }}
        onClick={() => {
          const canvas = document.querySelector('canvas');
          const pngUrl = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
          const downloadLink = document.createElement('a');
          downloadLink.href = pngUrl;
          downloadLink.download = 'qrcode.png';
          document.body.appendChild(downloadLink);
          downloadLink.click();
          document.body.removeChild(downloadLink);
        }}
      >
        Download
      </button>
    </div>
  );
};

export default QRCodeGenerator;
