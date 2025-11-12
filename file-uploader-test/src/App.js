import React from 'react';
import FileUploader from 'file-uploader-js';
import './App.css';

function App() {
  const uploadedCsv = (file) => {
    // Check the data type received from the uploader
    if (file.data) {
      const blob = new File([file.data], file.filename, { type: 'application/pdf' });
      console.log('📦 File size:', blob.size);

      // Test
      const fileURL = URL.createObjectURL(blob);
      window.open(fileURL);
    } else {
      console.error('No data received from file uploader.');
    }
  };

  return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">File-uploader-js Component</h1>
        </header>

        <div style={{ margin: '20px' }}>
          <h2>Example 1: Multiple File Types (Array)</h2>
          <FileUploader
            isBinary={true}
            title="Upload media or documents"
            uploadedFileCallback={(file) => {
              console.log('File uploaded:', file);
            }}
            accept={[".mp3", ".mp4", ".pdf", ".png", ".jpg"]}
            maxFileSizeMB={5}
            customLimitTextCSS={{
              fontFamily: 'arial',
              color: '#b00e05',
              fontSize: '14px'
            }}
          />
        </div>

        <div style={{ margin: '20px' }}>
          <h2>Example 2: Custom Icon Button</h2>
          <FileUploader
            accept={[".png", ".jpg", ".jpeg"]}
            uploadedFileCallback={(file) => console.log(file)}
            renderInput={({ onChange, accept }) => (
              <div>
                <button 
                  onClick={() => document.getElementById("iconUpload").click()}
                  style={{ 
                    padding: "12px 24px", 
                    background: "#007bff", 
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontSize: "16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                  }}
                >
                  📁 Choose Image
                </button>
                <input
                  id="iconUpload"
                  type="file"
                  accept={accept}
                  onChange={onChange}
                  style={{ display: "none" }}
                />
              </div>
            )}
          />
        </div>

        <div style={{ margin: '20px' }}>
          <h2>Example 3: Custom Styled Upload Area</h2>
          <FileUploader
            accept={[".pdf", ".docx"]}
            maxFileSizeMB={2}
            uploadedFileCallback={(file) => console.log(file)}
            renderInput={({ onChange, accept }) => (
              <div 
                onClick={() => document.getElementById("dragUpload").click()}
                style={{ 
                  border: "2px dashed #ccc",
                  borderRadius: "10px",
                  padding: "40px",
                  textAlign: "center",
                  cursor: "pointer",
                  background: "#f9f9f9",
                  transition: "all 0.3s"
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = "#e9e9e9"}
                onMouseLeave={(e) => e.currentTarget.style.background = "#f9f9f9"}
              >
                <div style={{ fontSize: "48px", marginBottom: "10px" }}>📄</div>
                <div style={{ fontSize: "16px", color: "#666" }}>
                  Click to upload documents
                </div>
                <div style={{ fontSize: "12px", color: "#999", marginTop: "5px" }}>
                  PDF or DOCX files only
                </div>
                <input
                  id="dragUpload"
                  type="file"
                  accept={accept}
                  onChange={onChange}
                  style={{ display: "none" }}
                />
              </div>
            )}
            renderLoader={() => <div style={{ color: "#007bff" }}>⏳ Uploading...</div>}
            renderLimitText={(max) => <p style={{ color: "red" }}>File too large! Max {max}MB.</p>}
          />
        </div>

      </div>
  );
}

export default App;
