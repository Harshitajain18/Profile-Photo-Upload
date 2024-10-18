import React, {useRef} from "react";
import './DialogBox01.css'

function DialogBox01() {
  const dialogElement = useRef();
  let dialogBoxId = document.getElementById("dialogBox");

  function showDialog() {
    console.log(dialogElement.current);
    
    dialogElement.current.showModal();
  }

  function closeDialog() {
    dialogElement.current.close();
  }

  return (
    <div>
      <dialog ref={dialogElement} id="dialogBox">
        <header>
          <h2 className="header">Confirmation</h2>
          <button onClick={closeDialog} id="closeDialogHeader">
            &#x2716
          </button>
        </header>

        <section>
          <p>Are you sure you want to delete your account?</p>
        </section>

        <footer>
          <button onClick={closeDialog} id="closeDialogFooter">
            Close dialog
          </button>
          <button id="deleteButton">Yes, delete it</button>
        </footer>
      </dialog>
      <section>
        <button onClick={showDialog} id="openDialogBox">
          Open dialog box
        </button>
      </section>
    </div>
  );
}

export default DialogBox01;
