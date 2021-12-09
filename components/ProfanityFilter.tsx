import React from "react";

import data from "../resources/SwearWords.json"

export default function ProfanityFilter(
    props: {
        messageText: string,
        filterActive: boolean,
    }
)

{

    function filterText(input: string) : string{
        // don't forget to remove leetspeak
        input = input.replaceAll("1", "i")
        input = input.replaceAll("!", "i")
        input = input.replaceAll("3", "e")
        input = input.replaceAll("4", "a")
        input = input.replaceAll("@", "a")
        input = input.replaceAll("5", "s")
        input = input.replaceAll("7", "t")
        input = input.replaceAll("0", "o")
        input = input.replaceAll("9", "g")
        input = input.replaceAll("$", "s")

        const inputWords = input.split(" ")
        const swearWords = data
        var output = ""

        inputWords.forEach(function (word){
            if(swearWords.includes(word.toLowerCase())){
                output += " *****"
            }else{
                output += " " + word
            }
        })

        return output;
    }


    if(props.filterActive) {
        return (
            <div>
                <span>{filterText(props.messageText)}</span>
            </div>
        )
    }else{
        return (
            <div>
                <span>{props.messageText}</span>
            </div>
        )
    }
}




