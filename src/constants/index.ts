const prod = {
    url: {
        API_URL: "https://opening-hours-calendar.netlify.app",
    },
};

const dev = {
    url: {
        API_URL: "https://opening-hours-calendar.netlify.app",
    },
};

export const config = process.env.NODE_ENV === "development" ? dev : prod;
