// import useScrollNav from "../../hooks/useScrollNav";
import "./navbar.scss";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { menu } from "../../data";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  // const isNavbarVisible = useScrollNav();
  // style={{ top: isNavbarVisible ? "0" : "-71px" }}

  return (
    <nav className='navbar'>
      <input type='checkbox' id='check' />
      <div className='menu'>
        <div className='menuLogo'>
          <label htmlFor='check'>
            <MenuRoundedIcon className='ham-menu ' />
          </label>
          <div className='logo'>
            <img src='logo.svg' alt='' />
            <span>A S H.</span>
          </div>
        </div>
        {menu.map(item => (
          <div className='item' key={item.id}>
            <span className='title'>{item.title}</span>
            {item.listItems.map(i => (
              <Link
                key={i.id}
                className={`listItem ${
                  location.pathname === i.url ? "active" : ""
                } `}
                to={i.url}
              >
                <img src={i.icon} alt='' />
                <span className='listItemTitle'>{i.title}</span>
              </Link>
            ))}
          </div>
        ))}
        <span className='brand'>A S H.</span>
      </div>
      <div className='logo'>
        <label htmlFor='check'>
          <MenuRoundedIcon className='ham-menu ' />
        </label>
        <img src='logo.svg' alt='' />
        <span>A S H.</span>
      </div>
      <div className='icons'>
        <img src='search.svg' alt='' className='icon' />
        <img src='app.svg' alt='' className='icon' />
        <img src='expand.svg' alt='' className='icon' />
        <div className='notifications'>
          <img src='notifications.svg' alt='' />
          <span>9+</span>
        </div>
        <div className='user'>
          <img
            src='https://scontent.fcai20-6.fna.fbcdn.net/v/t1.15752-9/462584361_858703773107903_3450241608497402108_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=9f807c&_nc_ohc=CatYI-iQZpsQ7kNvgEF-TMn&_nc_zt=23&_nc_ht=scontent.fcai20-6.fna&_nc_gid=ArA5-jqS-5paMaiqvgSC952&oh=03_Q7cD1QFaV1i_TXdAwSBDT_UmDJWFQPx2TjRUcOCS08XHlFMB6A&oe=673F52DA'
            alt=''
          />
          {/* <span>Mahmoud</span> */}
        </div>
        {/* <img src='/settings.svg' alt='' className='icon' /> */}
      </div>
    </nav>
  );
};

export default Navbar;
