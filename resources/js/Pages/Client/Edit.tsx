import React from "react";
import { PageProps } from '@/types';

interface EditProps extends PageProps {
  name: string;
}

const Edit: React.FC<EditProps> = (props: EditProps) => {
  return (
    <div dir="rtl" className="h-screen flex ">
        {props.name}
    </div>
  );
};

export default Edit;
