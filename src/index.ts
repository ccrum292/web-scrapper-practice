import axios from "axios";
import cheerio from "cheerio";
const url = 'https://www.premierleague.com/stats/top/players/goals?se=-1&cl=-1&iso=-1&po=-1?se=-1';
const AxiosInstance = axios.create();

AxiosInstance.get(url)
  .then(data => {
    const $ = cheerio.load(data.data);
    const statsTable = $('.statsTableContainer > tr');
    console.log(statsTable);
  })
  .catch(err => {
    console.log(err)
  });