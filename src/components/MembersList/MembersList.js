import React from "react";
import "./MembersList.css";
const MembersList = ({ list }) => {
  return (
    <div className="members">
      {list && list.length > 0 ? (
        <ul>
          {list.map((member, index) => (
            <li key={index}>
              <div className="list-item__body">
                <div className="list-item__name">{member.Name}</div>
                <div className="list-item__address">{member.address}</div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="message">No Members yet</div>
      )}
    </div>
  );
};

export default MembersList;
