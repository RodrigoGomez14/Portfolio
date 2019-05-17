
(async function load() {
    const $proyectList = document.querySelector('.studies .proyect-list')

    async function getData(url) {
        const response = await fetch(url)
        const data = await response.json()
        return data.userData
    }
    function implementTemplate(htmlString) {
        const html = document.implementation.createHTMLDocument()
        html.body.innerHTML += htmlString
        return html.body.children[0]
    }
    function createCareerTemplate(diploma) {
        return `
        <a class="diploma" href="https://www.platzi.com/${diploma.diploma_link}">
            <img src="${diploma.golden_achievement}" alt="">
            <p>${diploma.title}</p>
            <span></span>
        </a>
    `
    }
    function createTitleTemplate(diploma) {
        return `
        <a class="diploma" href="https://www.platzi.com/${diploma.diploma_link}">
            <img src="${diploma.badge}" alt="">
            <p>${diploma.title}</p>
            <span></span>
        </a>
    `
    }

    const perfilPlatzi = await getData('https://platzi-user-api.jecsham.com/api/v1/getUserSummary/@roodrii14')
    console.log(perfilPlatzi)
    for (let index = 0; index < perfilPlatzi.careers.length; index++) {
        $proyectList.append(implementTemplate(createCareerTemplate(perfilPlatzi.careers[index])))
    }
    for (let index = 0; index < perfilPlatzi.courses.length; index++) {
        $proyectList.append(implementTemplate(createTitleTemplate(perfilPlatzi.courses[index])))
    }

})()