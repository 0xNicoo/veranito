'use client';
import { useState } from 'react';
import "../galeria.css";

export const GaleriaContent = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Función para extraer solo el nombre del archivo
  const getFileName = (src) => {
    return src.split('/').pop();
  };

  return (
    <div className="p-4">
      {/* Grid de fotos estilo Windows 98 */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="win98-photo-container cursor-pointer"
            onClick={() => handleImageClick(image)}
          >
            <div className="win98-photo-frame">
              <div className="win98-photo-placeholder">
                <img 
                  src={image.src} 
                  alt={image.descripcion}
                  className="win98-photo-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <div className="win98-photo-fallback" style={{ display: 'none' }}>
                  <div className="win98-photo-icon">📷</div>
                  <div className="win98-photo-text"><strong>{getFileName(image.src)}</strong></div>
                </div>
                <div className="win98-photo-text">{getFileName(image.src)}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal para mostrar la foto agrandada */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={closeModal}>
          <div className="win98-modal" onClick={(e) => e.stopPropagation()}>
            <div className="win98-modal-title-bar">
              <span>Foto - {getFileName(selectedImage.src)}</span>
              <button 
                className="win98-close-button"
                onClick={closeModal}
              >
                ✕
              </button>
            </div>
            <div className="win98-modal-content">
              <div className="win98-large-photo">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.descripcion}
                  className="win98-large-photo-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <div className="win98-large-photo-fallback" style={{ display: 'none' }}>
                  <div className="win98-large-photo-icon">📷</div>
                  <div className="win98-large-photo-title">{getFileName(selectedImage.src)}</div>
                </div>
                <div className="win98-large-photo-details">
                  <p><strong>Descripción:</strong> {selectedImage.descripcion}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}; 