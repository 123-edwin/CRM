import { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { configurarEmisor } from '@s/billServices';

export function FileUploadButton() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);

    if (files.length > 2) {
      alert('Solo puedes subir un máximo de 2 archivos.');
      event.target.value = null; // Limpiar selección
      return;
    }

    setSelectedFiles(files);
    setResult(null);
    setError(null);
  };

  // Utilidad para leer archivo como base64
  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result.split(',')[1]);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleUpload = async () => {
    if (selectedFiles.length !== 2) {
      setError('Debes seleccionar exactamente 2 archivos: certificado y llave.');
      return;
    }
    setLoading(true);
    setResult(null);
    setError(null);
    try {
      // Asume que el usuario sube primero el certificado y luego la llave
      const certificadoBase64 = await fileToBase64(selectedFiles[0]);
      const llaveBase64 = await fileToBase64(selectedFiles[1]);
      const response = await configurarEmisor({ certificado: certificadoBase64, llave: llaveBase64 });
      setResult(response);
    } catch (err) {
      setError(err.message || 'Error inesperado');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Button
        variant="contained"
        component="label"
        disabled={loading}
      >
        Subir certificados
        <input
          type="file"
          hidden
          multiple
          onChange={handleFileChange}
        />
      </Button>

      {selectedFiles.length > 0 && (
        <div style={{ marginTop: 10 }}>
          <Typography variant="body1">Archivos seleccionados:</Typography>
          <ul>
            {selectedFiles.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
          <Button variant="outlined" color="primary" onClick={handleUpload} disabled={loading}>
            {loading ? 'Enviando...' : 'Enviar al backend'}
          </Button>
        </div>
      )}

      {result && (
        <Typography color="success.main" sx={{ mt: 2 }}>
          ¡Emisor configurado correctamente!
        </Typography>
      )}
      {error && (
        <Typography color="error" sx={{ mt: 2 }}>
          {error}
        </Typography>
      )}
    </div>
  );
}

export default FileUploadButton;
