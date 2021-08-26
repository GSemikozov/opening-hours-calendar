import axios, { AxiosResponse } from "axios";

import { getData } from "./";
import { CalendarDataResponse, TimeAvailabilityEnum } from "../types";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("fetchData()", () => {
    test("should return data", async () => {
        const expectedData: CalendarDataResponse = {
            monday: [],
            tuesday: [
                { type: TimeAvailabilityEnum.open, "value": 36000 },
                { type: TimeAvailabilityEnum.close, "value": 64800 }
            ],
            wednesday: [],
            thursday: [
                { type: TimeAvailabilityEnum.open, "value": 36000 },
                { type: TimeAvailabilityEnum.close, "value": 64800 }
            ],
            friday: [{ "type": TimeAvailabilityEnum.open, "value": 36000 }],
            saturday: [
                { type: TimeAvailabilityEnum.close, "value": 3600 },
                { type: TimeAvailabilityEnum.open, "value": 36000 }
            ],
            sunday: [
                { type: TimeAvailabilityEnum.close, "value": 3600 },
                { type: TimeAvailabilityEnum.open, "value": 43200 },
                { type: TimeAvailabilityEnum.close, "value": 75600 }
            ]
        };

        const mockedResponse: AxiosResponse = {
            data: expectedData,
            status: 200,
            statusText: "OK",
            headers: {},
            config: {},
        };

        mockedAxios.get.mockResolvedValueOnce(mockedResponse);
        expect(axios.get).not.toHaveBeenCalled();
        const data = await getData().then((resp) => resp.data);
        expect(axios.get).toHaveBeenCalled();
        expect(data).toEqual(expectedData);
    });
});
