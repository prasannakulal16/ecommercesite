import React, { useState } from "react";
import { Checkbox } from "antd";
import { checkboxData } from "../../constants/index";

//color checkbox
export default function ColorCheckboxes({ checkboxesDataprop }) {
  const [colorCheckboxesData, setColorCheckboxData] = useState([
    { id: 1, checked: true, color: "Red" },
    { id: 2, checked: true, color: "Black" },
    { id: 3, checked: true, color: "Blue" },
  ]);

  const handleChangeChecked = (id) => {
    const checkboxStateList = colorCheckboxesData;
    const changeCheckedCheckbox = checkboxStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setColorCheckboxData(changeCheckedCheckbox);
    checkboxesDataprop(changeCheckedCheckbox);
  };

  const renderCheckboxList = () =>
    colorCheckboxesData?.map((value, index) => (
      <React.Fragment key={index}>
        <Checkbox
          onChange={() => handleChangeChecked(value.id)}
          checked={value.checked}
          type="checkbox"
          style={{ display: "flex", padding: "5px 0" }}
        >
          <span className="block">{value.color}</span>
        </Checkbox>
      </React.Fragment>
    ));

  return (
    <>
      <div>{renderCheckboxList()}</div>
    </>
  );
}

// gender checkbox
export function GenderCheckboxes({ GenderDataprop }) {
  const [genderCheckboxesData, setGenderColorCheckboxData] = useState([
    { id: 1, checked: true, gender: "men" },
    { id: 2, checked: true, gender: "women" },
  ]);

  const handlegenderChangeChecked = (id) => {
    const checkboxStateList = genderCheckboxesData;
    const changeGenderCheckbox = checkboxStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setGenderColorCheckboxData(changeGenderCheckbox);
    GenderDataprop(changeGenderCheckbox);
  };

  const rendergenderCheckboxList = () =>
    genderCheckboxesData?.map((value, index) => (
      <React.Fragment key={index}>
        <Checkbox
          onChange={() => handlegenderChangeChecked(value.id)}
          checked={value.checked}
          type="checkbox"
          style={{ display: "flex", padding: "5px 0" }}
        >
          <span className="block">{value.gender}</span>
        </Checkbox>
      </React.Fragment>
    ));
  return (
    <>
      <div>{rendergenderCheckboxList()}</div>
    </>
  );
}

//Type checkbox
export function TypeCheckboxes({ TypeDataprop }) {
  const [typeCheckboxesData, setTypeCheckboxData] = useState([
    { id: 1, checked: true, type: "polo" },
    { id: 2, checked: true, type: "hoodie" },
    { id: 3, checked: true, type: "basic" },
  ]);

  const handleTypeChangeChecked = (id) => {
    const checkboxStateList = typeCheckboxesData;
    const changeTypecheckbox = checkboxStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setTypeCheckboxData(changeTypecheckbox);
    TypeDataprop(changeTypecheckbox);
  };

  const rendertypeCheckboxList = () =>
  typeCheckboxesData?.map((value, index) => (
      <React.Fragment key={index}>
        <Checkbox
          onChange={() => handleTypeChangeChecked(value.id)}
          checked={value.checked}
          type="checkbox"
          style={{ display: "flex", padding: "5px 0" }}
        >
          <span className="block">{value.type}</span>
        </Checkbox>
      </React.Fragment>
    ));
  return (
    <>
      <div>{rendertypeCheckboxList()}</div>
    </>
  );
}

//Price checkbox
