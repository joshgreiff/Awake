import react, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import logo from '../../assets/logo/awake.svg';

// useEffect(() => {
//     document.title = capitalizeFirstLetter(currentCategory.name);
// }, [currentCategory]);

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        contactSelected,
        currentCategory,
        setContactSelected,
      } = props;
return (
    <section>
        <header>
            <div>
                <img src={logo}></img>
            </div>
        </header>
        <nav>
            <ul className="flex-row">
            <li className="mx-2">
            <a data-testid="home" href="#home" onClick={() => setContactSelected(false)}>
              Home
            </a>
          </li>
            </ul>
        </nav>
    </section>
    )
}

export default Nav;