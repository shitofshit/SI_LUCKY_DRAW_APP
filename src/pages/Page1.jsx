import { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { useSelector, useDispatch } from "react-redux";
import { startDraw, setWinner } from "../redux/slices/participantsSlice.jsx";
import LuckyDrawGrid from "../components/LuckyDrawGrid.jsx";

function Page1() {
  const dispatch = useDispatch();
  const { eligibleParticipants, currentDraw } = useSelector(
    (state) => state.participants
  );

  const [rollingNames, setRollingNames] = useState(Array(7).fill("LUCKY DRAW"));
  const [isRolling, setIsRolling] = useState(false);
  const [finalWinners, setFinalWinners] = useState([]);

  // Function to get 7 different random participants for rolling
  const getRandomParticipants = () => {
    if (eligibleParticipants.length < 7) {
      const available = [...eligibleParticipants];
      while (available.length < 7) {
        available.push(...eligibleParticipants.slice(0, 7 - available.length));
      }
      return available.slice(0, 7).map((p) => p.name);
    }

    // Get 7 different random articipants
    const shuffled = [...eligibleParticipants].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 7).map((p) => p.name);
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
  }, [isRolling, eligibleParticipants]);

  const handleDraw = () => {
    if (eligibleParticipants.length < 7) {
      alert(
        `Not enough participants! Need at least 7, but only ${eligibleParticipants.length} available.`
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

      // Stop rolling and select 7 different winners after 2 more seconds
      setTimeout(() => {
        clearInterval(slowInterval);
        setIsRolling(false);

        // Select 7 different winners
        const shuffled = [...eligibleParticipants].sort(
          () => 0.5 - Math.random()
        );
        const winners = shuffled.slice(0, 7);

        // Show winner names in the divs
        const winnerNames = winners.map((winner) => winner.name);
        setRollingNames(winnerNames);
        setFinalWinners(winners);

        // Update Redux state for each winner
        winners.forEach((winner) => {
          dispatch(setWinner(winner));
        });
      }, 2000);
    }, 3000);
  };

  return (
    <div className="flex flex-column flex-1 h-full py-4">
      {/* Item/prizes */}
      <div className="flex justify-content-center mb-6">
        <div className="flex flex-column align-items-center p-4">
          <div
            className="text-4xl font-bold text-yellow-300 text-center"
            style={{
              textShadow: "3px 3px 0px #b8860b, 6px 6px 0px rgba(0,0,0,0.3)",
              WebkitTextStroke: "2px #ffd700",
              letterSpacing: "0.1em",
            }}
          >
            LV BAG
          </div>
          <div
            className="text-lg text-yellow-400 mt-2"
            style={{ letterSpacing: "0.2em" }}
          >
            7 LUCKY WINNERS
          </div>
        </div>
      </div>

      {/* Lucky Draw Grid */}
      <div className="flex flex-1 justify-content-center align-items-start">
        <LuckyDrawGrid names={rollingNames} cardCount={rollingNames.length} />
      </div>

      {/* Draw button */}
      {finalWinners.length === 0 && (
        <div className="flex justify-content-center">
          <Button
            label={isRolling ? "Drawing..." : "Draw"}
            className="py-3"
            style={{ width: "12rem" }}
            onClick={handleDraw}
            disabled={isRolling || eligibleParticipants.length < 7}
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
