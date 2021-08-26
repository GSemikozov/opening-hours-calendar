const prod = {
    url: {
        API_URL: "https://opening-hours-calendar-api.netlify.app/api/db.json",
    },
};

const dev = {
    url: {
        API_URL: "http://localhost:3001/days",
    },
};

export const config = process.env.NODE_ENV === "development" ? dev : prod;
