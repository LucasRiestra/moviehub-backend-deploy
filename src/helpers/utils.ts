import { DATA_SOURCE, mongoClient, postgresClient } from "../db/client";


export const getClient = () => {
    if (DATA_SOURCE === 'postgres') {
        return postgresClient
    } else {
        return mongoClient
    }
}

export const convertToType = (id: string) => {
    if (DATA_SOURCE === "postgres") {
        return Number(id);
    } else {
        return id;
    }
}