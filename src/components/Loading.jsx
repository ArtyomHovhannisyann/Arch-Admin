import { CircularProgress, Modal } from "@material-ui/core";
import React from "react";
import { useState } from "react";

export default function Loading() {
  const [showModal, setShowModal] = useState(true);
  return (
    <div>
      <Modal open={showModal} style = {{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <CircularProgress style = {{width:"100px",height:"100px"}}/>
      </Modal>
    </div>
  );
}
