
import React, { useState } from 'react';
import { Box, Button, Typography, CircularProgress, Alert, Container } from '@mui/material';
import { useBulkUserUpload } from '../../../Hooks/useBulkUserUpload';
import { toast } from 'react-hot-toast';

export const BulkUserUpload = () => {
  const { bulkUserUpload, response, loading, error } = useBulkUserUpload();
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState(null);

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setDragActive(false);

    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      const droppedFile = event.dataTransfer.files[0];
      validateFile(droppedFile);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = () => {
    setDragActive(false);
  };

  const handleFileInputChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const selectedFile = event.target.files[0];
      validateFile(selectedFile);
    }
  };

  const validateFile = (file) => {
    const allowedExtensions = ['xlsx']; // Allowed file extension
    const fileExtension = file.name.split('.').pop().toLowerCase();

    if (!allowedExtensions.includes(fileExtension)) {
      toast.error('Invalid file type. Please upload a xlsx file or use the sample file.');
      setFile(null);
    } else {
      setFile(file);
    }
  };

  const handleUpload = async () => {
    if (file) {
      await bulkUserUpload(file);
    } else {
      toast.error('Please select or drop a valid file to upload.');
    }
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        p: 3,
        my: 5,
        background: "white",
        borderRadius: "24px",
        padding: "34px",
        marginTop: "0px",
      }}
    >
      <Typography variant="h5" align="center" gutterBottom>
        Users Upload
      </Typography>

      <div
        className={`drop-box ${dragActive ? 'drag-active' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        style={{
          border: '2px dashed #ccc',
          borderRadius: '8px',
          padding: '20px',
          textAlign: 'center',
          backgroundColor: dragActive ? '#f8f9fa' : '#ffffff',
        }}
      >
        {file ? (
          <p>
            File ready to upload: <strong>{file.name}</strong>
          </p>
        ) : (
          <p>
            Drag and drop a file here, or{' '}
            <label
              htmlFor="file-upload"
              style={{ color: '#007bff', cursor: 'pointer' }}
            >
              browse
            </label>{' '}
            to upload
          </p>
        )}
        <input
          id="file-upload"
          type="file"
          style={{ display: 'none' }}
          onChange={handleFileInputChange}
        />
      </div>

      <div className="text-center mt-3">
        <Button
          variant="contained"
          color="primary"
          onClick={handleUpload}
          disabled={loading}
          fullWidth
        >
          {loading ? (
            <>
              <CircularProgress size={24} sx={{ mr: 1 }} />
              Uploading...
            </>
          ) : (
            'Upload File'
          )}
        </Button>
      </div>

      {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
      {response && (
        <Alert severity="success" sx={{ mt: 2 }}>
           <div>
            Upload successful
            <br />
            {`${response.createdUsers} users created`}
            <br />
            {`${response.existingUsers} users already existed.`}
            </div>
        </Alert>
      )}
    </Container>
  );
};

export default BulkUserUpload;
