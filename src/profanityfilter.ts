import swearWords from "../resources/SwearWords.json"

export default function filterProfanity(input: string): string {
    let endsWithSpecialChar = false
    let specialChar = null
    if(input.endsWith("!") || input.endsWith("?") || input.endsWith(".")){
        endsWithSpecialChar = true
        specialChar = input.substring(input.length-1, input.length)
        input = input.substring(0, input.length - 1);
    }

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
    let output = ""

    inputWords.forEach(function (word) {
        if (swearWords.includes(word.toLowerCase())) {
            output += " "
            for (let i = 0; i < word.length; i++){
                output += "\\*"
            }
        } else {
            output += " " + word
        }
    })

    if(endsWithSpecialChar){
        output += specialChar
    }

    return output;
}