import React, { useState } from "react";

export const ballCount = balls => {
  if (balls >= 2) {
  }
};

function Dashboard() {
  const [strikes, fouls, balls, hits] = useState(0);
  return (
    <div>
      <button className="strikes" onClick="">
        Strike
      </button>
      <button className="fouls" onClick="">
        Foul
      </button>
      <button className="balls" onClick="">
        Ball
      </button>
      <button className="hits" onClick="">
        Hit
      </button>
    </div>
  );
}

export default Dashboard;
