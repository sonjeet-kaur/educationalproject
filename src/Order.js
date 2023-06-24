import { Label } from "@fluentui/react";
import React, { useState } from "react";
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
function Order() {
  const [adressdata, setAdressData] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const navigate = useNavigate();

  function reset() {
    setAdressData("");
    setPhoneNumber("");
  }

  const SubmitData = async (val, email) => {
    var passData = "";
    if (val === 'phone') {
      passData = `&sendTo=${email}&check=phone`
    }

    let data = await axios.post('http://localhost:3002/posts', {
     
    address: adressdata,
    phoneNumber: phoneNumber,
    });

    if (data.ok == true) {
      reset();
      toast("Submitted Successfully!");
      setTimeout(() => {
        navigate("/home");
      }, 5000);
    }
  }

  return (
    <>
      <div className="form-maindiv">
        <Form onSubmit={SubmitData} className="form toastClass">
          <Label className="field-label">Enter Address</Label>
          <Form.Control className="inputfield" type="text" placeholder="Enter Address" onChange={(e) => setAdressData(e.target.value)} value={adressdata}>
          </Form.Control>
          <Label className="field-label">Enter Number</Label>
          <Form.Control className="inputfield" type="number" placeholder="Enter Number" onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber}>
          </Form.Control>
          <div className="btn-div" >
            <Button className="submit-btn" onClick={() => SubmitData('phone', phoneNumber)}>Submit</Button>
          </div>
        </Form>
      </div>
    </>
  )
}
export default Order;