import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <nav>
                <div className="div-link">
                    <Link to="/" className="navlink">
                        Ana Sayfa
                    </Link>
                    <Link to="/raporlar" className="navlink">
                        Raporlar
                    </Link>
                    <Link to="/ayarlar" className="navlink">
                        Ayarlar
                    </Link>
                </div>
            </nav>
        </header>
    );
}
