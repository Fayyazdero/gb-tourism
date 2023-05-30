import React from "react";
import { Button } from "../global/Button";
import { Input, SubscribeWrapper, Title } from "./style";

export const Subscribe = ({ className }) => {
  return (
    <SubscribeWrapper className={`${className} mb-4`}>
      <Title>Subscribe to Our New Stories</Title>
      <Input className="px-3" placeholder="Email Address..." />
      <Button className="primary w-100 mt-3 black">submit</Button>
    </SubscribeWrapper>
  );
};
