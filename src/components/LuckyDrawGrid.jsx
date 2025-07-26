function LuckyDrawGrid({ names = [], cardCount = 7 }) {
  // Fill arrays to match cardCount
  const displayNames = Array(cardCount)
    .fill("? ? ?")
    .map((defaultName, index) => names[index] || defaultName);

  return (
    <div className={`justify-content-center grid flex align-items-center m-0 flex-1`} style={{
      paddingRight:"10%",
      paddingLeft:"10%"
    }}>
      {displayNames.map((name, index) => (
        <div className="col-3 flex justify-content-center h-7rem" key={index}>
          <div
            className={`flex flex-1 justify-content-center align-items-center border-round-xl font-bold relative overflow-hidden`}
            style={{
              background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)',
              border: '2px solid #ffd700',
              boxShadow: '0 8px 32px rgba(255, 215, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              transition: "all 0.3s ease-in-out",
              fontSize: name.length > 20 ? "1rem" : "1.2rem",
              position: 'relative'
            }}
          >
            {/* Subtle glow effect */}
            <div 
              className="absolute inset-0 border-round-xl"
              style={{
                boxShadow: 'inset 0 0 20px rgba(255, 215, 0, 0.1)',
                pointerEvents: 'none'
              }}
            />
            
            {/* Name text with enhanced styling */}
            <div 
              className="flex text-center relative z-1"
              style={{
                background: 'linear-gradient(45deg, #ffd700, #ffed4e, #ffd700)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 20px rgba(255, 215, 0, 0.3)',
                fontWeight: '900'
              }}
            >
              {name}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LuckyDrawGrid;
