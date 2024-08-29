import React, { useState } from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #ff9966, #ff5e62);
`;

const Content = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 400px;
  width: 100%;
`;

const Title = styled.h1`
  color: #ff5e62;
  font-size: 24px;
  margin-bottom: 20px;
  font-family: "Arial", sans-serif;
`;

const Input = styled.input`
  padding: 12px;
  width: 100%;
  border: 2px solid #ff5e62;
  border-radius: 8px;
  font-size: 16px;
  margin-bottom: 20px;
  outline: none;

  &:focus {
    border-color: #ff9966;
  }
`;

const Button = styled.button`
  background-color: #ff5e62;
  color: white;
  padding: 12px 20px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  margin-bottom: 20px;

  &:hover {
    background-color: #ff9966;
  }
`;

const Response = styled.div`
  margin-top: 20px;
  padding: 20px;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  color: #333;
  font-size: 18px;
`;

const MeaningFinder = () => {
  const [name, setName] = useState("");
  const [responseData, setResponseData] = useState(null);

  const handleFetch = async () => {
    if (!name) {
      toast.error("Please enter a name.");
      return;
    }

    try {
      const response = await fetch(`https://api.agify.io/?name=${name}`);
      const data = await response.json();
      console.log(data);
      setResponseData(data);
      toast.success(`Data fetched successfully for ${name}`);
    } catch (error) {
      toast.error("Failed to fetch data. Please try again.");
    }
  };

  return (
    <Container>
      <Content>
        <Title>Meaning Finder</Title>
        <Input
          type="text"
          placeholder="Enter a name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button onClick={handleFetch}>Find Meaning</Button>
        {responseData && (
          <Response>
            <p>
              <strong>Name:</strong> {responseData.name}
            </p>
            <p>
              <strong>Predicted Age:</strong> {responseData.age}
            </p>
            <p>
              <strong>Count:</strong> {responseData.count}
            </p>
          </Response>
        )}
      </Content>
      <ToastContainer />
    </Container>
  );
};

export default MeaningFinder;
