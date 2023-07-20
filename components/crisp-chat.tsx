"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("c75822b2-e0d0-4dee-a80c-b6f8e7950685");
  }, []);

  return null;
};
