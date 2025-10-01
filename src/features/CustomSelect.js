import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function CustomSelect({
  placeholder,
  options,
  onChange,
  value,
  height,
  borderRadius,
  width,
}) {
  const handleChange = (event) => {
    onChange(event.target.value); // send selected value to parent
  };

  return (
    <Box sx={{ minWidth: { width }, height: 30 }}>
      <FormControl
        fullWidth
        sx={{ background: "#fff", borderRadius: { borderRadius } }}
      >
        <Select
          value={value ?? ""}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          sx={{ borderRadius: { borderRadius }, height: { height } }}
          MenuProps={{
            disableScrollLock: true,
            PaperProps: {
              sx: {
                background: "#fff",
                width: 200,
                maxHeight: 200,
              },
            },
          }}
        >
          <MenuItem disabled value="">
            <em>{placeholder}</em>
          </MenuItem>
          {options.map((option, index) => (
            <MenuItem
              key={index}
              value={option}
              sx={{
                "&.Mui-selected": {
                  backgroundColor: "#d1e7ff",
                },
                "&.Mui-selected:hover": {
                  backgroundColor: "#bcdfff",
                },
                "&:hover": {
                  backgroundColor: "#fff",
                },
              }}
            >
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
