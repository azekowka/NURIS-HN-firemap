import React, { useState, useRef, useEffect } from "react";
import { GoogleMap, Polygon, useLoadScript } from "@react-google-maps/api";
import "./style.css";

const Directions = (props) => {

  return (
  <div className="arrow-container">
  <div style={{ position: 'relative', width: '100%', height: '100%', margin: '0 auto' }}>
  <h1 style={{position: 'absolute', fontSize: '18px', 
    top: '0%',
    left: '44%',
    }}>{props.directions[0]}</h1>
  <h1 style={{position: 'absolute', fontSize: '18px', 
    top: '40%',
    right: '5%',
    }}>{props.directions[1]}</h1>
  <h1 style={{position: 'absolute', fontSize: '18px', 
    bottom: '0%',
    left: '46%',
    }}>{props.directions[2]}</h1>
  <h1 style={{position: 'absolute', fontSize: '18px', 
    left: '6%',
    top: '39%',
    }}>{props.directions[3]}</h1>
  <div
    className="arrow-wrapper"
    style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'rotate(0deg)', // Up
      transformOrigin: 'bottom center',
    }}
  >
    <div
      className="arrow"
      style={{
        height: `${props.directions[0] * 50}px`, // Length based on speed
        width: '4px',
        backgroundColor: '#000',
      }}
    ></div>
    <div
        className="arrowhead"
        style={{
          position: 'absolute',
          bottom: `${props.directions[0] * 50}px`,
          left: '-6px',
          width: '0',
          height: '0',
          borderLeft: '8px solid transparent',
          borderRight: '8px solid transparent',
          transform: 'rotate(180deg)', // Left
          borderTop: '12px solid #000', // Color of the arrowhead
        }}></div>
  </div>

  {/* Arrow pointing right */}
  <div
    className="arrow-wrapper"
    style={{
      position: 'absolute',
      top: '49%',
      left: '50%',
      transform: 'rotate(90deg)', // Right
      transformOrigin: 'bottom center',
    }}
  >
    <div
      className="arrow"
      style={{
        height: `${props.directions[1] * 50}px`, // Length based on speed
        width: '4px',
        backgroundColor: '#000',
      }}
    ></div>
    <div
        className="arrowhead"
        style={{
          position: 'absolute',
          bottom: `${props.directions[1] * 50}px`,
          left: '-6px',
          width: '0',
          height: '0',
          borderLeft: '8px solid transparent',
          borderRight: '8px solid transparent',
          transform: 'rotate(180deg)', // Left
          borderTop: '12px solid #000', // Color of the arrowhead
        }}></div>
  </div>

  {/* Arrow pointing down */}
  <div
    className="arrow-wrapper"
    style={{
      position: 'absolute',
      top: '50%',
      right: '49%',
      transform: 'rotate(180deg)', // Down
      transformOrigin: 'bottom center',
    }}
  >
    <div
      className="arrow"
      style={{
        height: `${props.directions[2] * 50}px`, // Length based on speed
        width: '4px',
        backgroundColor: '#000',
      }}
    ></div>
    <div
        className="arrowhead"
        style={{
          position: 'absolute',
          bottom: `${props.directions[2] * 50}px`,
          left: '-6px',
          width: '0',
          height: '0',
          borderLeft: '8px solid transparent',
          borderRight: '8px solid transparent',
          transform: 'rotate(180deg)', // Left
          borderTop: '12px solid #000', // Color of the arrowhead
        }}
        ></div>
  </div>

  {/* Arrow pointing left */}
  <div
    className="arrow-wrapper"
    style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'rotate(270deg)', // Left
      transformOrigin: 'bottom center',
    }}
  >
    <div
      className="arrow"
      style={{
        height: `${props.directions[3] * 50}px`, // Length based on speed
        width: '4px',
        backgroundColor: '#000',
      }}
    ></div>
          <div
        className="arrowhead"
        style={{
          position: 'absolute',
          bottom: `${props.directions[3] * 50 - 1}px`,
          left: '-6px',
          width: '0',
          height: '0',
          borderLeft: '8px solid transparent',
          borderRight: '8px solid transparent',
          transform: 'rotate(180deg)', // Left
          borderTop: '12px solid #000', // Color of the arrowhead
        }}
      ></div>
  </div>
</div></div>
  );
};

export default Directions;
