// import './src/index.css'
import { Link } from "react-router-dom";

function Header(){
  return(
    <header>
        <nav>
        <div className='m-2'>
          <h1 className=" text-3xl font-bold inline-block">Yquan</h1>
        </div>
        <ul className='flex justify-end'>
          <Link className='mr-4 flex hover:bg-sky-700 pr-10 pl-10 rounded-2xl' to='/'>Home</Link>
          <Link className='mr-4 flex hover:bg-sky-700 pr-10 pl-10 rounded-2xl' to='/products'>Product</Link>
          <Link className='mr-4 flex hover:bg-sky-700 pr-10 pl-10 rounded-2xl' to='/about'>About</Link>
          <Link className='mr-4 flex hover:bg-sky-700 pr-10 pl-10 rounded-2xl' to='/services'>Services</Link>
          <Link className='mr-4 flex hover:bg-sky-700 pr-10 pl-10 rounded-2xl' to='/cart'>Cart</Link>       
            
        </ul>
        </nav>
      </header>
  );
}

export default Header