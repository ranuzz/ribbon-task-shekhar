/**
 * As per API Documentation : https://www.cnb.cz/en/faq/Format-of-the-foreign-exchange-market-rates/
 * Country|Currency|Amount|Code|Rate
 * not keeping amount as it is always 1
 */

export default interface IExchangeRate {
  country: string,
  currency: string,
  code: string,
  rate: number,
}
  