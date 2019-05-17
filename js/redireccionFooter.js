const social=[
    $twitter = document.getElementById("twitter"),
    $github = document.getElementById("github"),
    $facebook = document.getElementById("facebook"),
    $instagram = document.getElementById("instagram"),
    $linkedin = document.getElementById("linkedin"),
    $mail = document.getElementById("mail")
]
for (let index = 0; index < social.length; index++) {
    social[index].addEventListener("click",()=>{
        window.location.href=returnSocialMedia(social[index].id)
    })
}
function returnSocialMedia(media){
    switch (media) {
        case "twitter":
            return "https://twitter.com/Roodrii14"
            break;
        case "github":
            return "https://twitter.com/Roodrii14"
            break;
        case "facebook":
            return "https://twitter.com/Roodrii14"
            break;
        case "instagram":
            return "https://twitter.com/Roodrii14"
            break;
        case "linkedin":
            return "https://twitter.com/Roodrii14"
            break;
        case "mail":
            return "https://twitter.com/Roodrii14"
            break;
    }
}
