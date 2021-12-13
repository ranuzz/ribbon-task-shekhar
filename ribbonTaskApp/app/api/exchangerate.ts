import serverResponseToExchangeRates from "../util/parser";
import IExchangeRate from "../model/exchangerate.type";
import { GET_EXCHANGE_RATE_URL } from "../config/constants";

const getExchangeRates = async function (): Promise<IExchangeRate[]> {
    const response = await fetch(GET_EXCHANGE_RATE_URL);
    if (!response.ok) {
        throw new Error("Error while fetching exchange data");
    }
    const raw_data = await response.text();
    return serverResponseToExchangeRates(raw_data);
}

export default getExchangeRates;