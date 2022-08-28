import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { weatherWindyCloudy } from 'react-icons-kit/typicons/weatherWindyCloudy';

export const Navbar = () => {
    return (
        <nav>
            <Link to='forecast' className='link'><Icon icon={weatherWindyCloudy} size={30}></Icon></Link>
            <Link to='favorites' className='link'>Favorites</Link>
        </nav>
    )
};