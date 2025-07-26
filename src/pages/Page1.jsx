import { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { useSelector, useDispatch } from "react-redux";
import { startDraw, setWinner } from "../redux/slices/participantsSlice.jsx";
import LuckyDrawGrid from "../components/LuckyDrawGrid.jsx";

function Page1({ winnerCount = 1, prizeName = "PRIZE" }) {
  const dispatch = useDispatch();
  const { eligibleParticipants, currentDraw } = useSelector(
    (state) => state.participants
  );

  const [rollingNames, setRollingNames] = useState(Array(winnerCount));
  const [isRolling, setIsRolling] = useState(false);
  const [finalWinners, setFinalWinners] = useState([]);

  // Function to get different random participants for rolling
  const getRandomParticipants = () => {
    if (eligibleParticipants.length < winnerCount) {
      const available = [...eligibleParticipants];
      while (available.length < winnerCount) {
        available.push(...eligibleParticipants.slice(0, winnerCount - available.length));
      }
      return available.slice(0, winnerCount).map((p) => p.name);
    }

    // Get different random participants
    const shuffled = [...eligibleParticipants].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, winnerCount).map((p) => p.name);
  };

  // Rolling animation effect
  useEffect(() => {
    let interval;
    if (isRolling) {
      interval = setInterval(() => {
        setRollingNames(getRandomParticipants());
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isRolling, eligibleParticipants, winnerCount]);

  const handleDraw = () => {
    if (eligibleParticipants.length < winnerCount) {
      alert(
        `Not enough participants! Need at least ${winnerCount}, but only ${eligibleParticipants.length} available.`
      );
      return;
    }

    // Start the draw
    dispatch(startDraw({ drawId: Date.now() }));
    setIsRolling(true);
    setFinalWinners([]);

    // Rolling phase - show random names for 3 seconds
    setTimeout(() => {
      // Slow down the rolling
      const slowInterval = setInterval(() => {
        setRollingNames(getRandomParticipants());
      }, 300); // Slower rolling

      // Stop rolling and select different winners after 2 more seconds
      setTimeout(() => {
        clearInterval(slowInterval);
        setIsRolling(false);

        // Select different winners
        const shuffled = [...eligibleParticipants].sort(
          () => 0.5 - Math.random()
        );
        const winners = shuffled.slice(0, winnerCount);

        // Show winner names in the divs
        const winnerNames = winners.map((winner) => winner.name);
        setRollingNames(winnerNames);
        setFinalWinners(winners);

        // Update Redux state for each winner
        winners.forEach((winner) => {
          dispatch(setWinner(winner));
        });
      }, 2000);
    }, 1000);
  };

  return (
    <div className="flex flex-column flex-1 h-full py-4">
      {/* Enhanced Item/prizes section */}
      <div className="flex justify-content-center mt-6 mb-2">
        <div className="flex flex-column align-items-center">
          <div
            className="p-6 border-round-xl"
            style={{
              background:
                "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)",
              boxShadow:
                "0 8px 32px rgba(255, 215, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              className="text-5xl font-bold text-center relative z-1"
              style={{
                background: "linear-gradient(45deg, #ffd700, #ffed4e, #ffd700)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textShadow: "0 0 30px rgba(255, 215, 0, 0.5)",
                letterSpacing: "0.15em",
                fontWeight: "900",
                filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
              }}
            >
              {prizeName}
            </div>

            <div
              className="my-3"
              style={{
                height: "2px",
                background:
                  "linear-gradient(90deg, transparent, #ffd700, transparent)",
                borderRadius: "1px",
              }}
            />

            <div
              className="text-xl text-center font-semibold"
              style={{
                color: "#ffed4e",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                fontWeight: "600",
              }}
            >
              {winnerCount} LUCKY WINNER{winnerCount > 1 ? 'S' : ''}
            </div>

            {/* Subtle glow effect */}
            <div
              className="absolute inset-0 border-round-xl"
              style={{
                boxShadow: "inset 0 0 20px rgba(255, 215, 0, 0.1)",
                pointerEvents: "none",
              }}
            />
          </div>
        </div>
      </div>

      {/* Lucky Draw Grid */}
      <div className="flex justify-content-center mt-8">
        <LuckyDrawGrid names={rollingNames} cardCount={rollingNames.length} />
      </div>

      {/* Draw button */}
      {finalWinners.length === 0 && (
        <div className="flex justify-content-center mt-auto mb-8">
          <Button
            label={isRolling ? "Drawing..." : "Draw"}
            className="py-3"
            style={{ width: "12rem" }}
            onClick={handleDraw}
            disabled={isRolling || eligibleParticipants.length < winnerCount}
          />
        </div>
      )}

      {/* Show winners count */}
      {finalWinners.length > 0 && (
        <div className="flex justify-content-center">
          <div className="bg-green-100 border-green-500 border-2 border-round p-3 text-center">
            <div className="font-bold text-lg text-green-800">
              🎉 Congratulations! 🎉
            </div>
            <div className="text-sm">
              Please collect your prize on the stage now!
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Page1;
