import setUp from '../../assets/setaUp.png';
import './style.css'

export default function SetUpPage(){
    return (
        <section className='setup'>
            <a href="#home">
            <img src={setUp} alt='Seta rolagem'/>
            </a>
        </section>
    )
}