import React, { Component } from 'react';
import "./About.css";
import IMG_0456 from "../assets/IMG_0456.JPG";
  
export default class About extends Component {
  render() {
    return (
      <div>
         <div>
            <div className="split left">
              <div className="centered">
                <img 
                  className="profile_image"
                  src={IMG_0456}
                  alt="Profile Pic"
                ></img>
              </div>
            </div>
            <div className="split right">
              <div className="centered">
                <div className="name_title">Omer Hortig</div>
                <div className="brief_description">
                  Omer is a rising Junior at New York University studying Computer Science and Economics. He is excited to be a part of IBM Accelerate!
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}