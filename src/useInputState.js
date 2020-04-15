import { useState } from "react";

export default (initialValue) => {
  const [value, setValue] = useState(initialValue);

  // separating the state and component so they aren't bound so close together cleaner code.
  return {
    value,
    onChange: (event) => {
      localStorage.setItem("myValueInLocalStorage", event.target.value);
      setValue(event.target.value);
    },
    reset: () => setValue(""),
  };
};
