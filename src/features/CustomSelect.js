import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import OutlinedInput from "@mui/material/OutlinedInput";

export default function CustomSelect({
  placeholder,
  options,
  onChange,
  value,
  height,
  borderRadius,
  width,
  multiple = false, // support multi-select
}) {
  const handleChange = (event) => {
    onChange(event.target.value); // send selected value(s) to parent
  };

  return (
    <Box
      sx={{ minWidth: { width }, height: 30, borderRadius: { borderRadius } }}
    >
      <FormControl
        fullWidth
        sx={{ background: "#fff", borderRadius: { borderRadius } }}
      >
        <Select
          multiple={multiple}
          value={value ?? (multiple ? [] : "")}
          onChange={handleChange}
          displayEmpty
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (!selected || selected.length === 0) {
              return <em>{placeholder}</em>;
            }
            if (multiple) {
              return (
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 0.5,
                    maxHeight: 80, // max height for chips container
                    overflowY: "auto", // scroll if overflow
                    paddingRight: 1,
                   
                  }}
                >
                  {selected.map((val, index) => (
                    <Chip key={index} label={val} size="small" />
                  ))}
                </Box>
              );
            }
            return selected;
          }}
          sx={{ height: height }}
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
                "&.Mui-selected": { backgroundColor: "#8ABEB9" },
                "&.Mui-selected:hover": { backgroundColor: "#bcdfff" },
                "&:hover": { backgroundColor: "#fff" },
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
