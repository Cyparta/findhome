import { api } from "../api/api";

export const buildingApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getBuilding: builder.query({
            query: () => ({
                url: "/building",
                method: "GET",
            }),
        }),
    }),
});

export const { useGetBuildingQuery } = buildingApi;