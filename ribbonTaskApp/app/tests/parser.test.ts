import 'react-native';

import serverResponseToExchangeRates from "../util/parser";

it('renders correctly', () => {
    const testString = `10 Dec 2021 #238
Country|Currency|Amount|Code|Rate
Australia|dollar|1|AUD|16.088
Brazil|real|1|BRL|4.032
Bulgaria|lev|1|BGN|12.968
Canada|dollar|1|CAD|17.688
China|renminbi|1|CNY|3.532
Croatia|kuna|1|HRK|3.371
Denmark|krone|1|DKK|3.411
EMU|euro|1|EUR|25.365
Hongkong|dollar|1|HKD|2.885
Hungary|forint|100|HUF|6.938
Iceland|krona|100|ISK|17.162
IMF|SDR|1|XDR|31.450
India|rupee|100|INR|29.730
Indonesia|rupiah|1000|IDR|1.565
Israel|new shekel|1|ILS|7.261
Japan|yen|100|JPY|19.784
Malaysia|ringgit|1|MYR|5.341
Mexico|peso|1|MXN|1.074
New Zealand|dollar|1|NZD|15.248
Norway|krone|1|NOK|2.502
Philippines|peso|100|PHP|44.705
Poland|zloty|1|PLN|5.498
Romania|leu|1|RON|5.125
Russia|rouble|100|RUB|30.629
Singapore|dollar|1|SGD|16.474
South Africa|rand|1|ZAR|1.406
South Korea|won|100|KRW|1.905
Sweden|krona|1|SEK|2.475
Switzerland|franc|1|CHF|24.333
Thailand|baht|100|THB|66.848
Turkey|lira|1|TRY|1.616
United Kingdom|pound|1|GBP|29.715
USA|dollar|1|USD|22.500`;
    
    console.log(serverResponseToExchangeRates(testString));
});

// npm test app\tests\parser.test.ts