const prod = {
    url: {
        API_URL: "https://opening-hours-calendar.netlify.app/db.json",
    },
};

const dev = {
    url: {
        API_URL: "http://localhost:3001",
    },
};

export const config = process.env.NODE_ENV === "development" ? dev : prod;
