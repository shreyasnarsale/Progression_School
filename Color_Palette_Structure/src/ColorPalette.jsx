import React from 'react';
import colorData from './colors.json';
import './ColorPalette.css';

const ColorPalette = () => {
  const shadeLabels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

  return (
    <div className="palette-display-full">
      {Object.entries(colorData).map(([colorName, shades]) => (
        <div key={colorName} className="color-row">
          <div className="color-header">
            <span className="color-name-main">{colorName.charAt(0).toUpperCase() + colorName.slice(1)}</span>
            <span className="color-variable-name">colors.{colorName}</span>
          </div>
          
          <div className="shades-grid-full">
            {shades.map((hex, index) => (
              <div key={index} className="shade-block">
                <div 
                  className="swatch-full" 
                  style={{ backgroundColor: hex }}
                ></div>
                <div className="shade-label-row">
                  <span className="shade-num">{shadeLabels[index]}</span>
                  <span className="shade-hex-code">{hex.toUpperCase()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ColorPalette;