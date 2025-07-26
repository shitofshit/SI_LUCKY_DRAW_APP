
function LuckyDrawGrid({
  names = [],
  cardCount = 7,
}) {
  // Fill arrays to match cardCount
  const displayNames = Array(cardCount)
    .fill("LUCKY DRAW")
    .map((defaultName, index) => names[index] || defaultName);

  return (
    <div
      className={`flex justify-content-center grid gap-6`}
    >
      {displayNames.map((name, index) => (
        <div
          key={index}
          className={`flex col-3 justify-content-center align-items-center border-3 border-round font-bold text-900`}
          style={{
            transition: "all 0.1s ease-in-out",
            fontSize: name.length > 20 ? "0.7rem" : "0.9rem",
          }}
        >
          <div className="flex text-center">{name}</div>
        </div>
      ))}
    </div>
  );
}

export default LuckyDrawGrid;
