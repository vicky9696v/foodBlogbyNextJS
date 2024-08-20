import logo from "@/assets/logo.png";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./navlink-module";
import classes from "./main-header.module.css";


export default function MainHeader() {

    return(
        <header className={classes.header}>
        <Link href="/" className={classes.logo}>
        <Image src={logo} className={classes.logo} alt="food logo" priority />
        Yummy Food
        </Link>
       <nav className={classes.nav}>
        <ul>
            <li>
                <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
                <NavLink href="/community" >Foody Community</NavLink>
            </li>
        </ul>
       </nav>

        </header>
    )
}