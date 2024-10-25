import { defineEventHandler, H3Event } from "h3";

export default defineEventHandler(async (event: H3Event) => {
  const response = await fetch('https://royaloceanyachts.com/api/yachts?buy=true&page=1', {
    headers: {
      'CORS': 'Access-Control-Allow-Origin',
      mode: 'cors'
    }
  });

  const data = await response.json();
  
  return data;
});