import { useState } from "react";
import axios from "axios";
import { apiKey } from "../config/config"

const useSearch = () => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [nextPage, setNextPage] = useState<string | null>(null);
    const [prevPage, setPrevPage] = useState<string | null>(null);


    const search = (str: string, page?: string) => {
        setLoading(true);
        let url = `https://www.googleapis.com/youtube/v3/search?q=${str}&categoryId=24&key=${apiKey}&part=snippet&order=viewCount`
        if (page) {
            url = `${url}&pageToken=${page}`
        }
        axios.get(url)
            .then((res: any) => {
                console.log("res", res)
                setData(res.data)
                setNextPage(res.data.nextPageToken)
                setPrevPage(res.data.prevPageToken)
            })
            .catch((err: any) => {
                console.log("err", err)
                setData(null)
                setNextPage(null)
                setPrevPage(null)
            })
    }

    return { data, loading, search, nextPage, prevPage }
}

export default useSearch;