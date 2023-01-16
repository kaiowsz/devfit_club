

export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': "96b4352a85msh1708769ce118b02p1d29b7jsnc74040b3db23",
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': "96b4352a85msh1708769ce118b02p1d29b7jsnc74040b3db23",
  }
};

export default async function fetchDataYT(url, options) {
    console.log("Fetching...")
    const response = await fetch(url, options)
    const data = await response.json()

    return data
}