
(async function load() {
    const $proyectList = document.querySelector('.proyect-list')

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
        <div class="col-6 col-sm-4 col-lg-3 form-group text-center">
            <a class="diploma" href="https://www.platzi.com/${diploma.diploma_link}">
                <img src="${diploma.golden_achievement}" alt="">
                <p class="diploma-title">${diploma.title}</p>
                <span></span>
            </a>
        </div>
    `
    }
    function createTitleTemplate(diploma) {
        return `
        <div class="col-6 col-sm-4 col-lg-3 form-group text-center">
            <a class="diploma" href="https://www.platzi.com/${diploma.diploma_link}">
                <img src="${diploma.badge}" alt="">
                <p class="diploma-title">${diploma.title}</p>
                <span></span>
            </a>
        </div>
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