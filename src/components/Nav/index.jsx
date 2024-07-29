import { Link } from 'react-router-dom'
import "./nav.css"

const menus = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'Teachers',
        href: '/teachers'
    },
    {
        label: 'Holidays',
        href: '/holidays'
    },
    {
        label: 'Contact us',
        href: '/contact-us'
    }
]

const Nav = ()=>{
    return (
        <nav 
        className='sticky top-0 left-0 z-50'
        style={{
            display: 'flex',
            background: 'white',
            justifyContent: 'space-between',
            padding: '8px 48px',
            boxShadow: '0 8px 8px 0 rgba(0,0,0,0.1)'
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8
            }}>
                <img src="https://upload.wikimedia.org/wikipedia/en/4/42/GLA_University_logo.png" width="60" />
                <h1 className='text-2xl font-semibold'>GLA University</h1>
            </div>

            <ul style={{
                listStyle: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 32
            }}>
                {
                    menus.map(function(menu, index) {
                        return (
                            <li key={index}>
                                <Link to={menu.href} style={{
                                    textDecoration: 'none',
                                    color: '#323232',
                                    fontSize: 17
                                }}>{menu.label}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default Nav