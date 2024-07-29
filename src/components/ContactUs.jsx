import { useState } from 'react'
import Swal from 'sweetalert2'
import Nav from './Nav'
import Footer from './Footer'
const ContactUs = ()=>{
    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const contactUs = (e)=>{
        e.preventDefault();
        console.log(fullname, email, message)
        Swal.fire({
            icon: 'success',
            title: 'Congrats!',
            text: 'Thank You , We will try to reachh to you soon'
        })
    }
    return (
        <div>
            <Nav />
            <div style={{
                display: 'flex',
                padding: 64,
                gap: 24
            }}>
                <img 
                    src="./images/contact-us.svg" 
                    width="50%"
                />
                <div style={{
                    width: '50%'
                }}>
                    <form onSubmit={contactUs} style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 24
                    }}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 8
                        }}>
                            <label style={{
                                fontSize: 18,
                                fontWeight: 500
                            }}>Fullname</label>
                            <input 
                                onChange={(e)=>setFullname(e.target.value)}
                                required
                                type="text"
                                placeholder='Enter name here'
                                style={{
                                    border: '1px solid #ccc',
                                    borderRadius: 4,
                                    padding: 14
                                }}
                            />
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 8
                        }}>
                            <label style={{
                                fontSize: 18,
                                fontWeight: 500
                            }}>Email</label>
                            <input 
                                onChange={(e)=>setEmail(e.target.value)}
                                required
                                type="email"
                                placeholder='example@mail.com'
                                style={{
                                    border: '1px solid #ccc',
                                    borderRadius: 4,
                                    padding: 14
                                }}
                            />
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 8
                        }}>
                            <label style={{
                                fontSize: 18,
                                fontWeight: 500
                            }}>Message</label>
                            <textarea 
                                onChange={(e)=>setMessage(e.target.value)}
                                required
                                type="text"
                                placeholder='Write your query or message here'
                                rows={4}
                                style={{
                                    border: '1px solid #ccc',
                                    borderRadius: 4,
                                    padding: 14
                                }}
                            />
                        </div>
                        <button style={{
                            border: 'none',
                            width: 'fit-content',
                            padding: '14px 32px',
                            borderRadius: 4,
                            background: '#6C63FF',
                            color: 'white',
                            fontWeight: 600
                        }}>SUBMIT</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default ContactUs

