/**
 * As per API Documentation : https://www.cnb.cz/en/faq/Format-of-the-foreign-exchange-market-rates/
 * Country|Currency|Amount|Code|Rate
 * Amount is not always 1: including it
 */

export default interface IExchangeRate {
  country: string,
  currency: string,
  amount: number,
  code: string,
  rate: number,
}
  