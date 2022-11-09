import React from "react";
import '../authentication/authentication.scss'

export default function AuthenticationParent({children}) {
  return (
    <div>
      <img src="/images/Group1.png" alt="ellipse" className="ellipse" />
      <img src="/images/arrows.png" alt="ellipse" className="arrows" />
      <img src="/images/Subtract.png" alt="ellipse" className="subtract" />
     <div> {children}</div>
    </div>
  );
}
