import { render, fireEvent, screen, useState } from "@testing-library/react";
import TimePicker from "./TimePicker";
// import { useState } from "react";

test("Pick a time", () => {
  const defaultValue = '11:00 AM';
  const sectionLabel = 'TIME *';
  const maxValue = '10:00 PM';
  const duration = 30;
  const timeToTest = `${defaultValue.replace('00', String(duration))}`
  const fieldName = 'time';
  // render the App component
  let time = defaultValue;
  const handleChange = (e) => {
    time = e.target.value;
  }
  render(
    <TimePicker
    selectedValue={time}
    range={[defaultValue, maxValue]}
    onChange={handleChange}
    durationMinutes={duration}
    fieldName={fieldName}
    sectionLabel={sectionLabel}
    />
);

  // save the heading in a variable
  const heading = screen.getByTestId(sectionLabel + "-label");

//   // save the button in a variable
  const btn = screen.getByTestId("button-" + timeToTest);

//   // click the btn
  fireEvent.click(btn);
  expect(time).toEqual(timeToTest);

  // test assumption
  expect(heading).toHaveTextContent(sectionLabel);
});
