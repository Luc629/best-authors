import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { type FC } from "react";

interface DeleteModalProps {
  show: boolean;
  onHide: () => void;
  onConfirm: () => void;
  bestAuthor: BestAuthor | null;
}

const DeleteModal: FC<DeleteModalProps> = ({
  show,
  onHide,
  onConfirm,
  bestAuthor,
}) => {
 
  const handleConfirm = () => {
    onConfirm();
    onHide();
  }; {
  
  
    return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        {bestAuthor ? (
          <p>
            Do you want to delete {" "} from the list?
            <strong>
              {bestAuthor} 
            </strong>
            </p>
        ) : (
          <p>
            Are you sure?
          </p>
        )}
         
        </Modal.Body>
        

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}
}
export default DeleteModal;