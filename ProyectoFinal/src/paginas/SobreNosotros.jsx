import React from 'react'
import './SobreNosotros.css'

function SobreNosotros() {
    return (
        <>
            <div className="fondo-nosaltres">
                <h1 className="titulo-nosotros">Sobre Nosaltres</h1>
            </div>
            <div className="fondo-nosaltres-total">
                <div className="caja-contingut-nosaltres">
                    <img className="img-nosaltres" src="https://dl.dropboxusercontent.com/s/k33sc8pq1tosnn3/fest.jpeg?dl=0" alt="" />
                    <div className="caja-texto-nosaltres">
                        <p className="text-nosaltres">Des de la nostra pàgina, ens dediquem a la venda de tickets per a una gran varietat d'esdeveniments.
                            Ja siguin concerts, espectacles de teatre, esdeveniments esportius o festivals, estem aquí
                            per ajudar-te a obtenir els millors seients i gaudir de les experiències més emocionants.
                            <br></br>
                            <br></br>
                            Amb anys d'experiència en el sector, ens hem convertit en un referent en la indústria de la venda de tickets.
                            Treballem amb proveïdors autoritzats i confiables per garantir que cada compra sigui segura i satisfactòria.
                            Vetllem perquè tinguis accés als millors esdeveniments i a les millors localitats.
                            <br></br>
                            <br></br>
                            El nostre lloc web és fàcil d'utilitzar i està dissenyat per proporcionar-te una experiència de compra senzilla i àgil. 
                            Pots buscar esdeveniments per categoria, ubicació o data, i obtenir informació detallada sobre cada esdeveniment, incloent preus, 
                            horaris i llistes d'artistes o participants.
                            <br></br>
                            <br></br>
                            A més de la venda de tickets, també oferim serveis addicionals com ara la reventa de tickets, canvis de localitats o cancel·lacions.
                            Entenem que les circumstàncies poden canviar i estem aquí per ajudar-te a gestionar els teus plans.
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SobreNosotros