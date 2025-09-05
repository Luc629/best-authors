import { useEffect, useState, type FC } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import type { bestAuthor } from '../../../types';

interface EditBestAuthorModalProps {
  show: boolean;
  onHide: () => void;
  onSubmit: (bestAuthorData: bestAuthor) => void;
  bestAuthor: bestAuthor | null;
}

const EditBestAuthorModal: FC<EditBestAuthorModalProps> = ({
  show,
  onHide,
  onSubmit,
  bestAuthor,
}) =>
  {
  // State for form data
  const [formData, setFormData] = useState<bestAuthor>({
    id: "",
    name: "",
    description: "",
    imageURL: "",
    favorite: false,
    // updatedAt: new Date().toISOString(),
    });

  useEffect(() => {
    if (bestAuthor) {
      setFormData(bestAuthor);
    }
  }, [bestAuthor]);

    const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
   
    const updatedBestAuthor = {
      ...formData,
      updatedAt: new Date().toISOString(),
    };
    onSubmit(updatedBestAuthor);
  };

  const handleClose = () => {
    onHide();
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Edit Best Author</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              onChange={handleInputChange}
              placeholder="Enter name (e.g., Jane Austen)"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Enter author description"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="url"
              name="imageUrl"
              value={formData.imageURL}
              onChange={handleInputChange}
              placeholder="Enter image URL"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              name="favorite"
              checked={formData.favorite}
              onChange={handleInputChange}
              label="Mark as favorite"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Update BestAuthor
        </Button>
      </Modal.Footer>
    </Modal>
  );
};




// function StaticExample() {
//   return (
//     <div
//       className="modal show"
//       style={{ display: 'block', position: 'initial' }}
//     >
//       <Modal.Dialog>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal title</Modal.Title>
//         </Modal.Header>

//         <Modal.Body>
//           <p>Modal body text goes here.</p>
//         </Modal.Body>

//         <Modal.Footer>
//           <Button variant="secondary">Close</Button>
//           <Button variant="primary">Save changes</Button>
//         </Modal.Footer>
//       </Modal.Dialog>
//     </div>
//   );
// }

export default EditBestAuthorModal;