import * as React from "react";
import {
  Box,
  MenuItem,
  FormControl,
  Select,
  Chip,
  OutlinedInput,
} from "@mui/material";
import { useEffect, useState } from "react";

export default function CustomMultiSelect({
  placeholder = "Select...",
  options = [],
  value = [],
  onChange,
  width,
  height,
  borderRadius,
}) {
  const [searchText, setSearchText] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);

  // 🔹 Filter options dynamically
  useEffect(() => {
    if (searchText.trim() === "") {
      setFilteredOptions(options);
    } else {
      const filtered = options.filter((option) =>
        option.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredOptions(filtered);
    }
  }, [searchText, options]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    onChange(typeof value === "string" ? value.split(",") : value);
  };

  const handleDelete = (valToDelete) => {
    onChange(value.filter((v) => v !== valToDelete));
  };

  return (
    <Box sx={{ width: width, maxWidth: 250, borderRadius: {borderRadius} }}>
      <FormControl
        fullWidth
        sx={{
          background: "#fff",
        }}
      >
        <Select
          multiple
          displayEmpty
          value={value}
          onChange={handleChange}
          input={<OutlinedInput />}
          style={{ borderRadius: borderRadius}}
          renderValue={(selected) => {
            if (selected.length === 0) return <em>{placeholder}</em>;

            const maxVisible = 2;
            const visible = selected.slice(0, maxVisible);
            const hiddenCount = selected.length - maxVisible;

            return (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  flexWrap: "nowrap",
                  overflow: "hidden",
                  maxWidth: "100%",
                }}
              >
                {visible.map((val) => (
                  <Chip
                    key={val}
                    label={
                      val.length > 8 ? val.substring(0, 8) + "…" : val
                    }
                    size="small"
                    onMouseDown={(e) => e.stopPropagation()}
                    onDelete={(e) => {
                      e.stopPropagation();
                      handleDelete(val);
                    }}
                    sx={{
                      maxWidth: "100%",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                    }}
                  />
                ))}
                {hiddenCount > 0 && (
                  <Chip
                    label={`+${hiddenCount} more`}
                    size="small"
                    sx={{
                      backgroundColor: "#eee",
                      fontWeight: 500,
                      cursor: "default",
                    }}
                    onMouseDown={(e) => e.stopPropagation()}
                  />
                )}
              </Box>
            );
          }}
          sx={{
            borderRadius: 2,
            height,
            ".MuiSelect-select": {
              display: "flex",
              alignItems: "center",
              gap: "0.25rem",
              overflow: "hidden",
              textOverflow: "ellipsis",
            },
          }}
          MenuProps={{
            disableScrollLock: true,
            PaperProps: {
              sx: { maxHeight: 250 },
            },
          }}
        >
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))
          ) : (
            <MenuItem disabled>No options found</MenuItem>
          )}
        </Select>
      </FormControl>
    </Box>
  );
}
