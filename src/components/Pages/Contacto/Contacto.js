
const Contacto = () => {

    let text='Somos Pichulina Bakery y Café'
    let text1='Encontranos en Arenales 1237, CABA.'
    let text2='Lunes a Viernes de 9hs a 19hs'
    let text3='Sábados de 9hs a 15hs'
    let text4='Tel: 11 - 4875 - 6659'

    return (
       <>
            <p className='aboutMe-p'>{text}</p>
            <p className='aboutMe-p'>{text1}</p>
            <p className='aboutMe-p'>{text2}</p>
            <p className='aboutMe-p'>{text3}</p>
            <p className='aboutMe-p'>{text4}</p>
       </>
    )
}

export default Contacto;