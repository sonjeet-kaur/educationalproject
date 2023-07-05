import { Label } from "@fluentui/react";
import React, { useState } from "react";
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from 'styled-components';
import avatar from "./Images/chatbot-avatar.jpeg";
function Order() {
  const [adressdata, setAdressData] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  // const navigate = useNavigate();

  // function reset() {
  //   setAdressData("");
  //   setPhoneNumber("");
  // }

  // const SubmitData = async (val, email) => {
  //   var passData = "";
  //   if (val === 'phone') {
  //     passData = `&sendTo=${email}&check=phone`
  //   }

  //   let data = await axios.post('http://localhost:3002/posts', {

  //     address: adressdata,
  //     phoneNumber: phoneNumber,
  //   });

  //   if (data.ok == true) {
  //     reset();
  //     toast("Submitted Successfully!");
  //     setTimeout(() => {
  //       navigate("/home");
  //     }, 5000);
  //   }
  // }

  const config = {
    // botAvatar: "avatar",
    floating: true,
  };

  const theme = {
    
    background: "#0b2b23",
    headerBgColor: '#031a29',
    headerFontSize: '20px',
    botBubbleColor: '#02172a',
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: '#0a2c25',
    userFontColor: 'white',
    
  };

  const steps = [
    {
      id: "0",
      message: "Hey User",
      trigger: '1',
    },
    {
      id: "1",
      message: "Please write your question",
      trigger: '2'
    },
    {
      id: "2",
      user: true,
      trigger: '3',
    }, {
      id: "3",
      message: " hi {previousValue}, how can I help you?",
      trigger: "4",
    
    },
      {
        id: '4',
        options: [

            {value: 1, label: <a href="https://www.geeksforgeeks.org/html">View Courses</a>  } ,
            // { value: 2, label: 'Read Articles' },

        ],
        end: true

    }, 
    // {
    //   id:'5',
    //   message: "You selected View Courses" ,
    //   end: true,
    //   trigger: ({ value, steps }) => {
    //     window.location.href = "https://www.geeksforgeeks.org/html";
    //   }
    // },
    // {
    //   id: "6",
    //   message: "You selected Read Articles",
    //   end: true,
    //   trigger: ({ value, steps }) => {
    //     window.location.href = "https://www.geeksforgeeks.org/css";
    //   }


    // }
  ]

  //  const handleEnd = ({ steps, values }) => {
  //   console.log(steps); 
  // };

  return (
    <>

      <div>
      <ThemeProvider theme={theme}>
      <ChatBot
          headerTitle="ChatBot"
          steps={steps}
          //  handleEnd={handleEnd}
          {...config}
        />
      </ThemeProvider>
      </div>


      {/* <div className="form-maindiv">
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
      </div> */}
    </>
  )
}
export default Order;
