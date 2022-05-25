import React from "react";
import { FrownTwoTone } from "@ant-design/icons";
import 'antd/dist/antd.min.css';
export default function Notfound() {
  return (
    <div className="flex flex-col items-center font-bold text-2xl mt-52">
      <div>
        <FrownTwoTone style={{'font-size':"100px"}}/>
      </div>
      <h1 className="text-5xl mt-5">404 </h1>
      <h3 className=""> Page Not found</h3>
    </div>
  );
}
