import clientsite from './assests/styling/clientsite.css'
import AddContactNoModal from '../contact/AddContactNoModal'
import { useState } from 'react'



export default function Contact() {
    const [show, setShow] = useState(false);



    var date = new Date();

    console.log(date.getDate())

    console.log(date.getMonth() + 1)

    console.log(date.getFullYear())
    return (
        <div className='contact-container'>
            < hr />
            <h3><b>Contact Us</b></h3>
            <h5 className='contact-email-header'>our email: <a href={`mailto: technoodleri@gmail.com?subject=Contact Me - ${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}&body=First Name:%20 %0D%0ALast Name:%20 %0D%0APhone Number:%20`} >technoodleri@gmail.com</a> </h5>
            <p className='contact-email-header'> or</p>
            <AddContactNoModal show={show} setShow={setShow} />
        </div >
    )
}