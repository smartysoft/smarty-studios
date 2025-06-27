const Button = () => {
  return (
    <button
      style={{
        background: "linear-gradient(90deg, #ff8a00 0%, #e52e71 100%)",
        color: "#fff",
        border: "none",
        borderRadius: "30px",
        padding: "12px 32px",
        fontSize: "1.1rem",
        fontWeight: "bold",
        boxShadow: "0 4px 16px rgba(229,46,113,0.15)",
        cursor: "pointer",
        transition: "transform 0.15s, box-shadow 0.15s",
        outline: "none",
      }}
    >
      RemoteButton4
    </button>
  );
};

export default Button;
