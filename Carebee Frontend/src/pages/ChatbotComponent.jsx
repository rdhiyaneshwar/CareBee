import React, { useState } from 'react';
import ChatBot from 'react-simple-chatbot';

const CustomChatbot = () => {
  const [userInput, setUserInput] = useState('');

  const steps = [
    {
      id: '1',
      message: 'Hello there! ',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Do you want to explore our elderly care services?',
      trigger: '4',
    },
    {
      id: '4',
      user: true,
      trigger: '5',
    },
    {
      id: '5',
      message:
        'There are multiple services that we provide some of them are diet for elderly people,sanitation and cleanliness awareness, etc',
      trigger: '6',
    },
    {
      id: '6',
      user: true,
      trigger: '7',
    },
    {
      id: '7',
      message:
        'For more queries you can send us email from our contact us and we will reply as early as possible',
      trigger: '8',
    },
    {
      id: '8',
      user: true,
      trigger: '9',
    },
    {
      id: '9',
      message:
        'Thank you ',
      end:true,
    },
    
  ];

  return (
    <div className="custom-chatbot-container">
      <ChatBot
        steps={steps}
        width="300px"
        height="350px"
        floating
        enableSmoothScroll
        botDelay={100}
        userDelay={500}
        placeholder="Come let's chat.."
        handleInput={(input) => setUserInput(input)}
      />
    </div>
  );
};

export default CustomChatbot;
