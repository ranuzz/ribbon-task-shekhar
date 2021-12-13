import { RATE_LINE_COLUMNS, SKIP_LINES_RESPONSE } from "../config/constants";
import IExchangeRate from "../model/exchangerate.type";

function getExchangeRate(rate_row: string[]): IExchangeRate {
    const rate: IExchangeRate = {
        country: rate_row[0],
        currency: rate_row[1],
        code: rate_row[3],
        rate: parseFloat(rate_row[4])
    };

    return rate;
}

const serverResponseToExchangeRates = function (response: string): IExchangeRate[] {

    /**
     * Sample Input
     *  10 Dec 2021 #238
        Country|Currency|Amount|Code|Rate
        Australia|dollar|1|AUD|16.088
        Brazil|real|1|BRL|4.032
        Bulgaria|lev|1|BGN|12.968
        Canada|dollar|1|CAD|17.688
        China|renminbi|1|CNY|3.532
        ....
     */

    let rates: IExchangeRate[] = [];

    if (!response) {
        return rates;
    }

    let lines: string[] = response.split('\n');
    if (lines.length <= SKIP_LINES_RESPONSE) {
        return rates;
    }
    // skip first two lines of the response
    lines.splice(0, SKIP_LINES_RESPONSE);
    lines.forEach(rateinfo => {
        let rate_row: string[] = rateinfo.split('|');

        // make sure every entry has exactly five columns
        if (rate_row.length === RATE_LINE_COLUMNS) {
            rates.push(getExchangeRate(rate_row));
        }
    })
    return rates;
}

export default serverResponseToExchangeRates;
