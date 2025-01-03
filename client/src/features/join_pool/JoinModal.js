import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const JoinModal = ({open, toggle, pool, joinPool}) => {

    const agreeClicked = () => {
        toggle()
        joinPool();
    };
    return (
        <div>
          <Modal isOpen={open} toggle={toggle} >
            <ModalHeader toggle={toggle}>Join: <b>{pool.name}</b></ModalHeader>
            <ModalBody>
              By clicking "Agree and Join", I agree to the terms and conditions.
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={agreeClicked}>
                Agree and Join
              </Button>{' '}
              <Button color="danger" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      );
}

export default JoinModal
