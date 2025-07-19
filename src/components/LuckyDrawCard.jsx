import { useState } from "react";
import { Button } from "primereact/button";

function LuckyDrawCard({ title = "Lucky Draw", onDraw }) {
  const [isRolling, setIsRolling] = useState(false);
  const [winner, setWinner] = useState("");

  const handleDraw = () => {
    setIsRolling(true);
    setWinner("");

    // Simulate rolling animation
    setTimeout(() => {
      const winners = [
        "John Doe",
        "Jane Smith",
        "Mike Johnson",
        "Sarah Wilson",
        "Alex Brown",
      ];
      const randomWinner = winners[Math.floor(Math.random() * winners.length)];
      setWinner(randomWinner);
      setIsRolling(false);
    }, 2000);
  };

  return (
    <div className="flex flex-column align-items-center p-4">
      {/* Title */}
      <h1
        className="text-6xl font-bold text-yellow-400 mb-4 text-center"
        style={{
          textShadow: "3px 3px 0px #ff6b35, 6px 6px 0px rgba(0,0,0,0.3)",
          WebkitTextStroke: "2px #ff6b35",
        }}
      >
        {title}
      </h1>

      {/* Display Box */}
      <div className="relative mb-4">
        <div
          className="bg-white border-round-3xl p-6 text-center"
          style={{
            width: "500px",
            height: "120px",
            border: "8px solid #ffd700",
            background: "linear-gradient(45deg, #f0f0f0, #ffffff)",
            boxShadow:
              "inset 0 0 20px rgba(255,215,0,0.3), 0 8px 16px rgba(0,0,0,0.2)",
            position: "relative",
          }}
        >
          {/* Decorative dots around border */}
          <div
            className="absolute"
            style={{
              top: "-4px",
              left: "-4px",
              right: "-4px",
              bottom: "-4px",
              background: `
                radial-gradient(circle at 20px 20px, #fff 8px, transparent 8px),
                radial-gradient(circle at 60px 20px, #fff 8px, transparent 8px),
                radial-gradient(circle at 100px 20px, #fff 8px, transparent 8px),
                radial-gradient(circle at 140px 20px, #fff 8px, transparent 8px),
                radial-gradient(circle at 180px 20px, #fff 8px, transparent 8px),
                radial-gradient(circle at 220px 20px, #fff 8px, transparent 8px),
                radial-gradient(circle at 260px 20px, #fff 8px, transparent 8px),
                radial-gradient(circle at 300px 20px, #fff 8px, transparent 8px),
                radial-gradient(circle at 340px 20px, #fff 8px, transparent 8px),
                radial-gradient(circle at 380px 20px, #fff 8px, transparent 8px),
                radial-gradient(circle at 420px 20px, #fff 8px, transparent 8px),
                radial-gradient(circle at 460px 20px, #fff 8px, transparent 8px),
                radial-gradient(circle at 500px 20px, #fff 8px, transparent 8px)
              `,
              borderRadius: "3rem",
              zIndex: -1,
            }}
          ></div>

          <div className="flex align-items-center justify-content-center h-full">
            <span className="text-4xl font-bold text-gray-800">
              {isRolling ? "🎲 Rolling..." : winner || "Ready to Draw!"}
            </span>
          </div>
        </div>
      </div>

      {/* Draw Button */}
      <Button
        label="Draw"
        onClick={handleDraw}
        disabled={isRolling}
        className="p-button-lg border-round-3xl font-bold text-2xl"
        style={{
          background: "linear-gradient(45deg, #ffd700, #ffed4a)",
          border: "4px solid #ff6b35",
          color: "#ff6b35",
          padding: "1rem 3rem",
          boxShadow: "0 6px 0 #cc5a2b, 0 8px 16px rgba(0,0,0,0.3)",
          transform: isRolling ? "translateY(6px)" : "translateY(0)",
          boxShadow: isRolling
            ? "0 0 0 #cc5a2b, 0 2px 8px rgba(0,0,0,0.3)"
            : "0 6px 0 #cc5a2b, 0 8px 16px rgba(0,0,0,0.3)",
        }}
      />
    </div>
  );
}

export default LuckyDrawCard;
