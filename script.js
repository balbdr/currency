const fromAmountElement =document.querySelector('.amount');
const convertedAmountElement =document.querySelector('.convertedAmount');
const fromCurrencyElement =document.querySelector('.fromCurrency');
const toCurrencyElement =document.querySelector('.toCurrency');
const resultElement =document.querySelector('.result');
const converterContainer =document.querySelector('.converter-container');


const countries = [
   
   {code: "USD", name : "United States Dollar"},
  {code:   "AED", name: "United Arab Emirates Dirham"},
  {code:   "ARS", name: "Argentine Peso"},
  {code:  "AFN", name: "Afghan Afghani"},
  {code:  "AMD", name: "Armenian Dram"},
  {code:  "AUD", name: "Australian Dollar"},
  {code:  "AZN", name: "Azerbaijani Manat"},
  {code:  "ALL", name: " Albanian Lek"},
  {code:  "AOA", name: " Angolan kwanza"},
  {code:  "BAM", name: "Bosnia-Herzegovina Convertible Mark"},
  {code:  "BBD", name: "Barbadian Dollar"},
  {code:  "BSD", name: " Bahamian Dollar"}, 
    {code:  "BDT", name: "Bangladeshi Taka"},
  {code:   " BTN", name: " Bhutan Ngultrum "}, 
    {code:  "BGN", name: "Bulgarian Lev"}, 
      {code:  "BHD", name: "Bahraini Dinar"},
   {code:  "BND", name: "Brunei Dollar"},
   {code:  "BRL", name: "Brazilian Real"},
   {code:  "BZD", name: "Belize Dollar"},
  {code:  "BOB", name: "Bolivian Boliviano"},
    {code: "BYN", name: "Belarusian Ruble"},
   {code:  "CAD", name: "Canadian Dollar"},
   {code:  "CHF", name: "Swiss Franc"},
   {code:  "CLP", name: "Chilean Peso"},
   {code:  "CNY", name: "Chinese Yuan"},
   {code:  "COP", name: "Colombian Peso"},
  {code:  "CZK", name: "Czech Koruna"},
   {code:  "CUP", name: "Cuban Peso"},
  {code:  "CDF", name: "Congolese Franc"},
  {code:  "CRC", name: "Costa Rica Colon"},
   {code:  "DKK", name: "Danish Krone"},
  {code:  "DOP", name: "Dominican Peso"},
  {code: "DZD", name: "Algerian Dinar"},
   {code:  "EUR", name: "Euro"},
    {code: "EGP", name: "Egyptian Pound"},
    {code: "ETB", name: "Ethiopion Birr"},
    {code: "ERN", name: "Eritrean nakfa"},
    {code: "FJD", name: "Fiji Dollar"},
   {code:  "GBP", name: "British Pound Sterling"},
   {code:  "GEL", name: "Georgian Lari"},
  {code: "GHS", name: "Ghanaian Cedi"},
    {code: "GMD", name: "Gambian Dalasi"},
    {code: "GTQ", name: " Guatemala Quetzal"},
    {code: "GYD", name: "Guyana Dollar"},
   {code: "HUF", name: "Hungarian Forint"},
   {code:  "HKD", name: "Hong Kong Dollar"},
   {code:  "HRK", name: "Croatian Kuna"},
   {code:  "HTG", name: "Haitian Gourde"},
  {code:  "HNL", name: "Honduras Lempira"},
  {code: "INR", name: "Indian Rupee"},
  {code: "IRR", name: "Iran Rial"},
  {code: "IQD", name: "Iraqi Dinar"},
    {code: "ISK", name: "Icelandic Krona"},
   {code:  "ILS", name: "Israeli New Shekel"},
  {code:   "IDR", name: "Indonesian Rupiah"},
   {code:  "JMD", name: "Jamaican Dollar"},
   {code:  "JOD", name: "Jordanian Dinar"},
   {code:  "JPY", name: "Japanese Yen"},
   {code:  "KES", name: "Kenyan Shilling"},
   {code:  "KHR", name: "Cambodian Riel"},
   {code:  "KRW", name: "South Korean Won"},
   {code:  "KWD", name: "Kuwaiti Dinar"},
   {code:  "KZT", name: "Kazakhstani Tenge"},
  {code:  "KGS", name: "Kyrgyzstan Som"},
   {code:  "LAK", name: "Lao Kip"},
   {code:  "LBP", name: "Lebanese Pound"},
   {code:  "LKR", name: "Sri Lankan Rupee"},
   {code:  "MAD", name: "Moroccan Dirham"},
   {code:  "MDL", name: "Moldovan Leu"},
   {code:  "MKD", name: "Macedonian Denar"},
   {code:  "MMK", name: "Myanmar Kyat"},
   {code:  "MUR", name: "Mauritian Rupee"},
  {code:  "MRO", name: "Mauritania Ougulya"},
   {code:  "MVR", name: "Maldivian Rufiyaa"},
   {code:  "MXN", name: "Mexican Peso"},
   {code:  "MYR", name: "Malaysian Ringgit"},
    {code: "MNT", name: "Mongolian Tugrik"},
  {code:  "MWK", name: "Malawi Kwacha"},
  {code:  "MOP", name: "Macau Pataca"},
  {code:  "MGA", name: "Malagasy Ariary"},
  {code:  "MZN", name: "Mozambican Metical"},
   {code:  "NAD", name: "Namibian Dollar"},
   {code:  "NGN", name: "Nigerian Naira"},
   {code:  "NOK", name: "Norwegian Krone"},
   {code:  "NPR", name: "Nepalese Rupee"},
  {code:  "NIO", name: "Nicaragua Cordoba"},
  {code:  "KPW", name: "North Korean Won"},
   {code:  "NZD", name: "New Zealand Dollar"},
   {code:  "OMR", name: "Omani Rial"},
   {code:  "PEN", name: "Peruvian Sol"},
   {code:  "PHP", name: "Philippine Peso"},
   {code:  "PLN", name: "Polish Zloty"},
    {code: "PKR", name: "Pakistani Rupee"},
  {code:  "PGK", name: "Papua New Guinea Kina"},
  {code:  "PYG", name: "Paraguayan Guarani"},
  {code:  "QAR", name: "Qatari Riyal"},
    {code: "RUB", name: "Russian Ruble"},
    {code: "RWF", name: "Rwanda Franc"},
   {code:  "RON", name: "Romanian Leu"},
   {code:  "RSD", name: "Serbian Dinar"},
   {code:  "SAR", name: "Saudi Riyal"},
  {code:  "SDG", name: "Sudanese Pound"},
    {code: "SGD", name: "Singapore Dollar"},
   {code:  "SCR", name: "Seychellois Rupee"},
   {code:  "SEK", name: "Swedish Krona"},
   {code:  "SYP", name: "Syrian Pound"},
  {code:  "SOS", name: "Somali Shilling"},
  {code:  "SBD", name: "Soloman island Dollar"},
  {code:  "SLL", name: "Sierra Leone leone"},
  {code:  "SZL", name: "Swaziland Lilageni"},
  {code:  "SRD", name: "Surinamese Dollar"},
    {code: "THB", name: "Thai Baht"},
    {code: "TWD", name: "Taiwan Dollar"},
  {code: "TND", name: "Tunisian Dinar"},
    {code: "TJS", name: "Tajikistani somoni"},
    {code: "TMT", name: "Turkmenistan manat"},
   {code:  "TRY", name: "Turkish Lira"},
   {code:  "TTD", name: "Trinidad and Tobago Dollar"},
   {code:  "TZS", name: "Tanzanian Shilling"},
   {code:  "UAH", name: "Ukrainian Hryvnia"},
   {code:  "UGX", name: "Ugandan Shilling"},
   {code:  "UZS", name: "Uzbekistani Som"},
  {code:  "UYU", name: "Uruguayan New peso"},
   {code:  "VND", name: "Vietnamese Dong"},
  {code:  "VUV", name: " Vanuatu Vatu"},
   {code:  "XOF", name: "West African CFA Franc"},
    {code: "XAF", name: "Central African CFA Franc"},
   {code:  "YER", name: "Yemeni Rial"},
    {code: "ZAR", name: "South African Rand"},
  {code:  "ZMW", name: "Zambian Kwacha"},
  
  ];
//showing countries  from array to select tag
countries.forEach(country => {
    const option1 = document.createElement('option');
    const option2 = document.createElement('option');

    option1.value = option2.value = country.code;

   option1.textContent = option2.textContent =  `${country.code} (${country.name})`;


    fromCurrencyElement.appendChild(option1);
    toCurrencyElement.appendChild(option2);
//setting defult value USD to INR
fromCurrencyElement.value = 'USD';
toCurrencyElement.value = 'NPR';   
    
    
});
//get exchange rate using API
const getExchangeRate =async() => {
    const  amount = parseFloat(fromAmountElement.value);
    const fromCurrency = fromCurrencyElement.value;
    const toCurrency = toCurrencyElement.value;
   // resultElement.textContent = "Faching  Exchangr Rate...";

    try{
    //fetching data from API
    const  response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
    const data = await response.json();

    const exchangeRate = data.rates[toCurrency];
    const convertedAmount = (amount * exchangeRate).toFixed(2);

    if(typeof conversionRate !== 'undefined'){
        resultElement.textContent = "Error: Unable to fetch exchange rate for" ;
        convertedAmountElement.value = "";
    }
    else{
        convertedAmountElement.value = convertedAmount;
        resultElement.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;

    }
    
    

   
}catch (error){
    converterContainer.innerHTML = `<h2 class="error">Error: ${error.message}</h2>`;
}
}
    
    


//faching  exchange rate when user input amount
fromAmountElement.addEventListener('input', getExchangeRate);
fromCurrencyElement.addEventListener('change', getExchangeRate);
toCurrencyElement.addEventListener('change', getExchangeRate);
window.addEventListener('load', getExchangeRate);
