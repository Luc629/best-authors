import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import type { NewBestAuthor } from '../../../types';
import { useState, type FC } from 'react';
import { Form } from 'react-bootstrap';

interface NewBestAuthorModalProps {
  show: boolean;
  onHide: () => void;
  onSubmit: (carData: NewBestAuthor) => void;
}

const NewBestAuthorModal: FC<NewBestAuthorModalProps> = ({ show, onHide, onSubmit }) => {
  
  const [formData, setFormData] = useState<NewBestAuthor>({
    name: "",
    description: "",
    imageURL: "",
    favorite: false,
  });

const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    
    setFormData({
      name: "",
    description: "",
    imageURL: "",
    favorite: false,
    });
  };
  const handleClose = () => {
  
    setFormData({
      name: "",
      description: "",
      imageURL: "",
      favorite: false,
    });
    onHide();
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Add New Best Author</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter name(e.g., Jane Austen)"
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
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Add BestAuthor
        </Button>
      </Modal.Footer>
    </Modal>
  );
};


export default NewBestAuthorModal;