import React from "react";

const Group = ({ group }) => {
    return (
        <div className="border-2 rounded-md bg-pink-200 w-1/2">
            <h3>{group.name}</h3>
            <div>
                <p>Инфо: {group.info}</p>
            </div>
        </div>
    );
}

export default Group