import React from "react";
import Label from "@/components/atoms/Label";
import Input from "@/components/atoms/Input";
import Select from "@/components/atoms/Select";

const FormField = ({ 
  label, 
  type = "text", 
  error, 
  children, 
  ...props 
}) => {
  return (
    <div className="space-y-2">
      {label && <Label>{label}</Label>}
      {type === "select" ? (
        <Select {...props}>
          {children}
        </Select>
      ) : (
        <Input type={type} {...props} />
      )}
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default FormField;