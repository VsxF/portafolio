const axios = require("axios");

interface Root {
    data: {
        search_results: IItem[]
    }
}

export interface IItem {
    asin: string,
    title: string
    image: string
    price: Price
    rating: number
    qnt?: number
}

interface Price {
    symbol: string
    currency: string
    value: number
    raw: string
    name?: string
  }

axios.defaults.baseURL= "https://api.rainforestapi.com";

class Api {
    getItems = async (lang: string): Promise<IItem[]> => {
        return await axios.get('/request', {
            params: {
                api_key: "demo",
                amazon_domain: "amazon." + (lang === 'en' ? "com" : "es"),
                type: "search",
                search_term: "memory cards"
            }
          })
        .then((res: Root) => res.data.search_results as IItem[])
    }
}

let aux = new Api();
export default aux;