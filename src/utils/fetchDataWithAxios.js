import axios from "axios";

const api = axios.create({
    baseURL: "https://exercisedb.p.rapidapi.com/exercises",
    headers: {
      'X-RapidAPI-Key': "96b4352a85msh1708769ce118b02p1d29b7jsnc74040b3db23",
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
})

export default async function fetchData(url) {
    console.log("Fetching...")
    const response = await api.get(url)

    const { data } = response 

    return data
}
