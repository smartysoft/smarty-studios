const Input = () => {
  return (
    <input
      type="text"
      placeholder="Bir şeyler yazın..."
      style={{
        width: "100%",
        maxWidth: "350px",
        padding: "14px 22px",
        fontSize: "1.1rem",
        border: "none",
        borderRadius: "30px",
        background: "linear-gradient(90deg, #ffecd2 0%, #fcb69f 100%)",
        color: "#333",
        boxShadow: "0 4px 16px rgba(252,182,159,0.18)",
        outline: "none",
        transition: "box-shadow 0.2s, background 0.2s",
        fontWeight: "500",
        margin: "10px 0",
      }}
      onFocus={(e) =>
        (e.currentTarget.style.boxShadow = "0 6px 24px rgba(252,182,159,0.28)")
      }
      onBlur={(e) =>
        (e.currentTarget.style.boxShadow = "0 4px 16px rgba(252,182,159,0.18)")
      }
    />
  );
};

export default Input;
