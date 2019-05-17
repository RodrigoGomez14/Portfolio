let $menuIcon = document.getElementById("menuIcon")
let $menu = document.getElementById("menu")
let $button1 = document.getElementById("button1")
let $button2 = document.getElementById("button2")
let $button3 = document.getElementById("button3")
let $button4 = document.getElementById("button4")
$menuIcon.addEventListener("click", () => {
    if ($button1.classList.contains("active")) {
        $button4.classList.remove("active")
        setTimeout(() => {
            $button3.classList.remove("active")
        }, 100);
        setTimeout(() => {
            $button2.classList.remove("active")
        }, 110);
        setTimeout(() => {
            $button1.classList.remove("active")
        }, 120);
    }
    else {
        $button1.classList.add("active")
        setTimeout(() => {
            $button2.classList.add("active")
        }, 100);
        setTimeout(() => {
            $button3.classList.add("active")
        }, 110);
        setTimeout(() => {
            $button4.classList.add("active")
        }, 120);
    }

})