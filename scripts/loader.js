function loaderAnimation() {
    window.onload = () => {
            gsap.to('.loader', {
                y: '-100%',
                duration:0.5,
            })
    }
}

loaderAnimation()

