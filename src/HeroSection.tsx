// src/HeroSection.tsx
import React from 'react'
import './HeroSection.css'

interface HeroSectionProps {
  /** Background image URL */
  imageUrl: string
  /** The image you want centered (e.g. your logo or photo) */
  centerImageUrl: string
  /** Text or JSX to show in the box to the right of the image */
  sideText: React.ReactNode
  /** Opacity of the black gradient overlay (0–1) */
  overlayOpacity?: number
  /** Brightness multiplier for the background image (0–1); lower = darker */
  imageBrightness?: number
}

const HeroSection: React.FC<HeroSectionProps> = ({
  imageUrl,
  centerImageUrl,
  sideText,
  overlayOpacity = 0.8,   // gradient darkness
  imageBrightness = 0.7,  // image brightness
}) => {
  // Debug: print the image URL being used
  console.log("centerImageUrl:", centerImageUrl);


  return (
    <>
      {/* Full-screen hero with CSS background + gradient + brightness filter */}
      <div
        className="hero-wrapper position-relative w-100"
        style={{
          height: 'calc(100vh - 56px)',
          overflow: 'hidden',
          /* apply gradient & image together */
          backgroundColor: '#000',         // solid black fallback
            background: `linear-gradient(rgba(0,0,0,${overlayOpacity}), rgba(0,0,0,${overlayOpacity})), url(${imageUrl}) center/cover no-repeat`,
          /* darken the raw image */
          filter: `brightness(${imageBrightness})`,
        }}
      >
        {/* Centered content block */}
        <div
          className="position-absolute top-50 start-50 translate-middle w-100"
          style={{
            maxWidth: '90%',
            zIndex: 2,
            height: '250px',
          }}
        >
          <div className="container h-100">
            <div
              className="row g-0 align-items-stretch justify-content-center"
              style={{ height: '100%' }}
            >
              {/* Center image */}
              <div className="col-auto h-100 d-flex align-items-center px-0">
                <img
                  src={centerImageUrl}
                  alt="Center"
                  style={{
                    maxHeight: '100%',
                    width: 'auto',
                    objectFit: 'contain',
                  }}
                />
              </div>
              {/* Side text box */}
              <div className="col-auto h-100 d-flex px-0">
                <div className="p-4 bg-dark text-white d-flex flex-column justify-content-center text-center" style={{ width: '500px' }}>
                  {sideText}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection
