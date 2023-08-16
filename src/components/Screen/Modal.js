import React, { useState } from "react";
import "./Modal.css";
const ParentModal = () => {
  const [isParentOpen, setIsParentOpen] = useState(false);
  const [isChildOpen, setIsChildOpen] = useState(false);

  const openParentModal = () => {
    setIsParentOpen(true);
  };

  const closeParentModal = () => {
    setIsParentOpen(false);
  };

  const openChildModal = () => {
    setIsChildOpen(true);
  };

  const closeChildModal = () => {
    setIsChildOpen(false);
  };

  return (
    <div className="parent-modal">
      <h2>Parent Modal</h2>
      <button onClick={openParentModal}>Open Parent Modal</button>
      {isParentOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-btn" onClick={closeParentModal}>
              ×
            </span>
            <h3>Parent Modal Content</h3>
            <p>
              {" "}
              In this example, we have a ParentModal component that contains a
              button to open the parent modal. When the button is clicked, the
              state isParentOpen is set to true, and the parent modal is
              rendered. Inside the parent modal, there is another button to open
              the child modal. Clicking on this button will set the state
              isChildOpen to true, and the child modal will be rendered on top
              of the parent modal. Each modal is enclosed in a with the class
              "modal-overlay". You can style the modals and the close button
              using CSS according to your requirements. Remember to define
              appropriate CSS rules to position the modals correctly and handle
              the overlay and z-index to ensure the child modal appears on top
              of the parent modal.
            </p>
            <button onClick={openChildModal}>Open Child Modal</button>
          </div>
        </div>
      )}
      {isChildOpen && (
        <div className="modal-overlay ">
          <div className="modal-content  child-modal">
            <span className="close-btn" onClick={closeChildModal}>
              ×
            </span>
            <h3>Child Modal Content</h3>
            <p>
              You can add this CSS code to your project's stylesheets or inline
              it within the React component using the style prop. Note that the
              CSS code provided is a basic styling example. You can customize it
              further based on your design requirements to achieve the desired
              look and feel for your modals.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ParentModal;
