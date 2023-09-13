import { FC } from "react";
import { Box, Modal } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 640,
  boxShadow: 24,
  height: 360,
};

interface ModalVideoProps {
  openModalWindow: boolean;
  onClose: () => void;
  videoId: string;
}

const ModalVideo: FC<ModalVideoProps> = ({
  openModalWindow,
  onClose,
  videoId,
}) => {
  return (
    <Modal
      open={openModalWindow}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <iframe
          width={640}
          height={360}
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </Box>
    </Modal>
  );
};

export default ModalVideo;
