import { Table, Button, Row, Col } from "reactstrap";
import JoinModal from "./JoinModal";
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { useState } from 'react';



const PoolInfo = () => {
    const pool = {
        name: "My First Pool",
        week: 1,
        deadline: "09/18/2025",
        contestants: 22,
        max_contestants: 100,
        entry: "$5",
        week: 1
    }
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const joinPool = () => {
        console.log('Joining pool')
    }
  return (
    <>
    <Table size="md">
        <tbody>
            <tr>
                <th scope="row">
                    Name
                </th>
                <td>
                    {pool.name}
                </td>
            </tr>
            <tr>
                <th scope="row">
                    Week
                </th>
                <td>
                    {pool.week}
                </td>
            </tr>
            <tr>
                <th scope="row">
                    Deadline
                </th>
                <td>
                    {pool.deadline}
                </td>
            </tr>
            <tr>
                <th scope="row">
                    Current Contestants
                </th>
                <td>
                    {pool.contestants}
                    
                </td>
            </tr>
            <tr>
                <th scope="row">
                    Max Contestants
                </th>
                <td>
                    {pool.max_contestants}
                </td>
            </tr>
            <tr>
                <th scope="row">
                    Entry
                </th>
                <td>
                    {pool.entry}
                </td>
            </tr>
            <tr>
                <th scope="row">
                    Length
                </th>
                <td>
                    {pool.week}
                </td>
            </tr>
        </tbody>
    </Table>
    <Row>
        <Col>
            <Button  color="primary" onClick={toggle}>Join Pool</Button>
        </Col>
    </Row>
    <JoinModal open={modal} toggle={toggle} pool={pool} joinPool={joinPool} />
    </>
  )
}

export default PoolInfo
