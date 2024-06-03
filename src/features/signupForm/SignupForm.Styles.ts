import { FieldError } from "react-hook-form";

export const useSignupFormStyles = () => ({
  getMainContStyles: {
    display: "flex",
    alignItems: "center",
    rowGap: "1.5rem",
    width: "38.875rem",
    background: "#FFF",
    borderRadius: "1.25rem",
    padding: "3.59375rem 5rem",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  },

  getFormStyles: {
    display: "flex",
    width: "100%",
  },

  stackOneStyles: { display: "flex", rowGap: "0.5rem", width: "100%" },

  inputLabelStyles: {
    fontSize: "0.875rem",
    fontWeight: 400,
    lineHeight: "1.225rem",
    textAlign: "left",
  },

  getPasswordFieldStyles: {
    "&.MuiInputBase-root": {
      background: "whitesmoke",
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "22.4px",
      textAlign: "left",
      borderRadius: "0.625rem",
      "& fieldset": {
        border: "none",
      },
      "&:hover fieldset": {
        border: "none",
      },
      "&.MuiInputBase-root.Mui-focused fieldset": {
        border: "1px solid",
      },
    },
    "& .MuiFormLabel-root": {
      fontSize: "1rem",
    },
  },

  getCommonButtonCustomStyles: {
    width: "100%",
    background: "blue",
    color: "#FFF",
    textTransform: "capitalize",
    letterSpacing: "0.05rem",
    "&:hover": {
      color: "#FFF",
      background: "blue",
    },
    "&:focus": {
      outline: "none",
      color: "#FFF",
      background: "blue",
    },
  },

  getLinkContStyles: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "@media screen and (max-width: 599px)": {
      marginBottom: "2rem",
    },
    rowGap: "0.5rem",
  },

  getActionTextOneStyles: {
    fontWeight: 400,
    fontSize: "0.875rem",
    lineHeight: "1.225rem",
    textDecoration: "underline",
  },

  getLinkStyles: {
    fontWeight: 400,
    fontSize: "0.875rem",
    lineHeight: "1.225rem",
  },

  getErrorTextStyles: (isError?: FieldError) => {
    return {
      color: isError ? "red" : "green",
      fontSize: "0.8rem",
    };
  },

  getButtonContStyles: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
});
