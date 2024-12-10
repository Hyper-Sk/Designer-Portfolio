function workOverview(){
   let list = document.querySelector('.work-overview .list')
    let grid = document.querySelector('.work-overview .grid')
    let area = document.querySelector('.work-overview .overview-footer')


    list.addEventListener('click', ()=> {
        list.classList.add('active')
        grid.classList.remove('active')

        gsap.to('.work-overview .gridview', {
            display: 'none',
            opacity:0
        })
        gsap.to('.work-overview .listview', {
            display: 'block',
            opacity: 1,
            duration:1
        })
    })
    grid.addEventListener('click', ()=> {
        grid.classList.add('active')
        list.classList.remove('active')

        gsap.to('.work-overview .gridview', {
            display: 'block',
            opacity: 1,
            duration:1
        })
        gsap.to('.work-overview .listview', {
            display: 'none',
            opacity:0
        })
    })
    
    
}

workOverview()