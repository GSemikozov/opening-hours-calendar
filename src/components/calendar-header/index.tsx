import React from "react";

export const CalendarHeader = () => (
    <div>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
        >
            <path
                fill-rule="evenodd"
                d="M12 3c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zM1 12C1 5.9 5.9 1 12 1s11 4.9 11 11-4.9 11-11 11S1 18.1 1 12z"
                clip-rule="evenodd"
            />
            <path d="M13 6.5c0-.6-.4-1-1-1s-1 .4-1 1v6c0 .4.2.7.6.9l4 2c.5.2 1.1 0 1.3-.4.2-.5 0-1.1-.4-1.3L13 11.9V6.5z" />
        </svg>
        <h1>Opening hours</h1>
    </div>
);
