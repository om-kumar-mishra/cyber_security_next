import React from 'react';
import { useRecoilState } from 'recoil'
import { collapsedState } from '../../utils/recoil-atoms'
import Link from '../../utils/ActiveLink';
import TopHeader from './TopHeader';

const Navbar = () => {
    const [collapsed, setCollapsed] = useRecoilState(collapsedState);

    const toggleNavbar = () => {
        setCollapsed(!collapsed);
    }

    React.useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 80) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
    })

    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <>
            <header className="header-area fixed-top">
                {/* TopHeader */}
                <TopHeader />

                <div className="nav-area">
                    <div id="navbar" className="navbar-area">
                        <div className="main-nav">
                            <div className="container-fluid">
                                <nav className="navbar navbar-expand-md navbar-light">
                                    <Link href="/">
                                        <a onClick={() => setCollapsed(true)} className="navbar-brand">
                                            <img src="/img/cyber-logo.png" alt="logo" style={{ height: '75px' }} />
                                        </a>
                                    </Link>

                                    <button
                                        onClick={toggleNavbar}
                                        className={classTwo}
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#navbarSupportedContent"
                                        aria-controls="navbarSupportedContent"
                                        aria-expanded="false"
                                        aria-label="Toggle navigation"
                                    >
                                        <span className="icon-bar top-bar"></span>
                                        <span className="icon-bar middle-bar"></span>
                                        <span className="icon-bar bottom-bar"></span>
                                    </button>

                                    <div className={classOne} id="navbarSupportedContent">
                                        <ul className="navbar-nav ml-auto">
                                            <li className="nav-item">
                                                <Link href="/" activeClassName="active">
                                                    <a onClick={() => setCollapsed(true)} className="nav-link">
                                                        Home
                                                    </a>
                                                </Link>

                                            </li>

                                            <li className="nav-item">
                                                <Link href="/about" activeClassName="active">
                                                    <a onClick={() => setCollapsed(true)} className="nav-link">About Us</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/service-list" activeClassName="active">
                                                    <a onClick={() => setCollapsed(true)} className="nav-link">Service</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/industries" activeClassName="active">
                                                    <a onClick={() => setCollapsed(true)} className="nav-link">Industries</a>
                                                </Link>
                                            </li>

                                            {/* <li className="nav-item">
                                                <Link href="/why-we" activeClassName="active">
                                                    <a onClick={() => setCollapsed(true)} className="nav-link">Why We</a>
                                                </Link>
                                            </li> */}

                                            {/* <li className="nav-item">
                                                <Link href="/pricing" activeClassName="active">
                                                    <a onClick={() => setCollapsed(true)} className="nav-link">Plans</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/affiliation" activeClassName="active">
                                                    <a onClick={() => setCollapsed(true)} className="nav-link">Affiliation</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/blog-list" activeClassName="active">
                                                    <a onClick={() => setCollapsed(true)} className="nav-link">Blogs</a>
                                                </Link>

                                            </li> */}

                                            <li className="nav-item">
                                                <Link href="/contact" activeClassName="active">
                                                    <a onClick={() => setCollapsed(true)} className="nav-link">Contact Us</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="others-option">
                                        <div className="get-quote">
                                            <Link  href={{ pathname: '/contact', query: { getintouch:"getintouch"} }}>
                                                <a className="default-btn">
                                                    Get In Touch
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Navbar;
