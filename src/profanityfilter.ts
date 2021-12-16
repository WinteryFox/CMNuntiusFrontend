import swearWords from "../resources/SwearWords.json"

function removeLeetspeak(input: string): string {
    let output = input.replaceAll("1", "i")
        .replaceAll("!", "i")
        .replaceAll("3", "e")
        .replaceAll("4", "a")
        .replaceAll("@", "a")
        .replaceAll("5", "s")
        .replaceAll("7", "t")
        .replaceAll("0", "o")
        .replaceAll("9", "g")
        .replaceAll("$", "s")

    if (output.endsWith("!") || output.endsWith("?") || output.endsWith("."))
        output.substring(0, input.length - 1)

    return output
}

export default function filterProfanity(input: string, escape: boolean): string {
    return input.split(" ")
        .map((value) => {
            const trimmed = removeLeetspeak(value.toLowerCase()).trim()
            if (swearWords.includes(trimmed)) {
                console.log("yes")
                if (escape) {
                    return "\\*".repeat(value.length)
                } else {
                    return "*".repeat(value.length)
                }
            } else {
                return value
            }
        })
        .join(" ")
}