//CountryStateCity API: https://docs.cou    ntrystatecity.in/api/introduction
//API key: 4017a5d0f21700538866e87a7cf7a2d040cbb70ff201e00e6abf682bfa16f8fa

const response = await fetch('https://api.countrystatecity.in/v1/countries', {
    headers: { 'X-CSCAPI-KEY': '4017a5d0f21700538866e87a7cf7a2d040cbb70ff201e00e6abf682bfa16f8fa' }
});

const countries = await response.json();

const idPais1 = 50
const idPais2 = 233

countries.forEach(country => {
    if ((country.id == idPais1) || (country.id == idPais2)) {
        console.log(`Id: ${country.id}\nNombre: ${country.name}\nCapital: ${country.capital}\n`)

    }
})

