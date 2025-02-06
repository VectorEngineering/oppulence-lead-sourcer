"use client";

import { Copy } from "lucide-react";
import type React from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";

type CopyButtonProps = {
  text: string;
};

const CopyButton: React.FC<CopyButtonProps> = ({ text }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard");
  };

  return (
    <Button
      className="absolute right-2 top-2"
      size="icon"
      variant="secondary"
      onClick={handleCopy}
    >
      <span className="sr-only">Copy</span>
      <Copy size="16" />
    </Button>
  );
};

export default CopyButton;
