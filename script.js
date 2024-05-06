const list = document.querySelector('ul')
const colorsWithOpacity = ['hsl(0, 100%, 67%, 0.1)', 'hsl(39, 100%, 56%, 0.1)', 'hsl(166, 100%, 37%, 0.1)', 'hsl(234, 85%, 45%, 0.1)']
const colors = ['hsl(0, 100%, 67%)', 'hsl(39, 100%, 56%)', 'hsl(166, 100%, 37%)', 'hsl(234, 85%, 45%)']

fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        data.forEach((result, index) => {
            const li = document.createElement('li')
            li.style.backgroundColor = colorsWithOpacity[index % colors.length]
            li.style.color = colors[index % colors.length]
            li.classList.add("liStyle")
            li.innerHTML = `
            <img class="imgList" src=${result.icon} alt=${result.category}/>${result.category}<p class="scoreSummary"><span>${result.score}</span> / 100</p>
            `
            list.appendChild(li)
        })
    })
    .catch(error => console.error('Erreur lors de la récupération', error))

