import { Link, useLocation } from "react-router-dom";
import "./sideNav.scss";
import { menu } from "../../data";

const MiniMenu = () => {
  const location = useLocation();
  return (
    <div className='sideNav'>
      {menu.map(item => (
        <div className='item' key={item.id}>
          {/* <span className='title'>{item.title}</span> */}
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
    </div>
  );
};

export default MiniMenu;
