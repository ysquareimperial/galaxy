import React from "react";
import { GoHistory } from "react-icons/go";
import { MdOutlineChatBubbleOutline } from "react-icons/md";
function Sidebar() {
  const history = [
    { id: 1, name: "Coming coming soon...?" },
    // { id: 2, name: "Coming coming soon...?" },
    // { id: 3, name: "Coming coming soon...?" },
  ];
  return (
    <div className="sidebar_div">
      <div style={{ marginTop: 80 }}>
        <p className="history d-flex align-items-center m-0 gap-2">
          <GoHistory />
          History
        </p>
      </div>
      <div className="mt-3">
        {history.map((h, i) => (
          <p
            className="history_item d-flex align-items-center gap-2 p-2"
            key={i}
          >
            <MdOutlineChatBubbleOutline />
            {h.name}
          </p>
          // <p className="fdfd">{h.name}</p>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
