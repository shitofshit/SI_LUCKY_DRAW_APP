import { Button } from "primereact/button";

function Page1() {
  return (
    <div className="flex flex-column flex-1 border-1 h-full justify-content-center py-4">
      {/* Item/prizes */}
      <div className="flex justify-content-center text-2xl font-medium">
        LV BAG
      </div>

      {/* //Lucky Draw Card Here */}
      <div className="flex flex-1 justify-content-center align-items-center grid">
        <div className="flex col-4 justify-content-center align-items-center">
          LUCKY DRAW 1
        </div>
        <div className="flex col-4 justify-content-center align-items-center">
          LUCKY DRAW 1
        </div>
        <div className="flex col-4 justify-content-center align-items-center">
          LUCKY DRAW 1
        </div>
        <div className="flex col-4 justify-content-center align-items-center">
          LUCKY DRAW 1
        </div>
        <div className="flex col-4 justify-content-center align-items-center">
          LUCKY DRAW 1
        </div>
        <div className="flex col-4 justify-content-center align-items-center">
          LUCKY DRAW 1
        </div>
        <div className="flex col-4 justify-content-center align-items-center">
          LUCKY DRAW 1
        </div>
      </div>

      {/* Draw button */}
      <div className="flex justify-content-center ">
        <Button label="Draw" className="py-2" style={{ width: "10rem" }} />
      </div>
    </div>
  );
}

export default Page1;
