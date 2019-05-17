const social = [
    $github = document.getElementById("github"),
    $linkedin = document.getElementById("linkedin"),
    $mail = document.getElementById("mail")
]
for (let index = 0; index < social.length; index++) {
    social[index].addEventListener("click", () => {
        window.location.href = returnSocialMedia(social[index].id)
    })
}
function returnSocialMedia(media) {
    switch (media) {
        case "github":
            return "https://github.com/RodrigoGomez14"
            break;
        case "linkedin":
            return "https://twitter.com/Roodrii14"
            break;
        case "mail":
            return "https://twitter.com/Roodrii14"
            break;
    }
}
