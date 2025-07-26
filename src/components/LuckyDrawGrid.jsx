function LuckyDrawGrid({ names = [], cardCount = 7 }) {
  // Fill arrays to match cardCount
  const displayNames = Array(cardCount)
    .fill("LUCKY WINNERS")
    .map((defaultName, index) => names[index] || defaultName);

  return (
    <div className={`justify-content-center grid flex align-items-center m-0 flex-1`} style={{
      paddingRight:"20%",
      paddingLeft:"20%"
    }}>
      {displayNames.map((name, index) => (
        <div className="col-3 flex justify-content-center h-7rem" key={index}>
          <div
            className={`flex flex-1 justify-content-center align-items-center border-3 border-round font-bold text-900 bg-white`}
            style={{
              transition: "all 0.1s ease-in-out",
              fontSize: name.length > 20 ? "0.7rem" : "0.9rem",
            }}
          >
            <div className="flex text-center">{name}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LuckyDrawGrid;
