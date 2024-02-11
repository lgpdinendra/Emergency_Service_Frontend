import { BeakerIcon} from '@heroicons/react/24/solid'

const Header = () => {
    let Links = [
        {name: 'Home',link:'/'},
        {name: 'Register',link:'/Register'},
        {name: 'About',link:'/'}
        ]

    return (
        <div className="shadow-md w-full fixed top-0 left-0">
            <div className="md:px-10 py-4 px-7 md:flex justify-between items-center bg-white ">
                {/*logo*/}
                <div  className='flex text-2xl cursor-pointer items-center gap-1'>
                    <BeakerIcon className='w-7 h-7 text-purple-600'/>
                   <span className='font-bold'>SafeGuard</span> 
                </div>

                <ul className='md:flex pl-9 '>
                    {
                        Links.map(link => (
                            <li className='font-semibold my-7 md:my-0 md:ml-8' key={link.name}>
                                <a href={link.link}>{link.name}</a>
                            </li>
                        ))
                    }
                    <button className='w-20 btn bg-purple-800 text-white py-1 px-3 md:ml-8 rounded-2xl md:static '>
                        <a href="/PublicUserLogin">Login</a>
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;