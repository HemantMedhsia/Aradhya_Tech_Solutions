import React, { useEffect } from "react";
import axios from "axios";

const Test = () => {
    const options = {
        method: "GET",
        url: "https://captcha-generator.p.rapidapi.com/",
        params: {
            noise_number: "10",
            fontname: "sora",
        },
        headers: { 
            "x-rapidapi-key":
                "f47e3fc38amsh220f2599bb4fe5dp19bfc0jsn086b3e70d08e",
            "x-rapidapi-host": "captcha-generator.p.rapidapi.com",
        },
    };

    useEffect(() => {
        async function testing() {
            try {
                const response = await axios.request(options);
                console.log(response.data.image_url);
                console.log(response.data.solution);
            } catch (error) {
                console.error(error);
            }
        }
        testing();  
    }, []);

    return <div>test</div>;
};

export default Test;
