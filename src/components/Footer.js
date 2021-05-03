import React from 'react';

function Footer(props) {
    return (
        // <footer className="bg-lime h-1/6">
        //     <div className="flex flex-col justify-center items-center">
        //         <div className="">
        //             <p></p>
        //         </div>
        //         <div className="">
        //             <p className="">@ 2021 Toxicology</p>
        //         </div>
        //     </div>
        // </footer>
        <footer className="footer footer-default bg-lime">
            <nav className="main-footer">
                <div className="container">
                    <div className="grid grid-cols-3 gap-4 row">
                        <div className="">
                            <h3>Главная</h3>
                        </div>
                        <div className="">
                            <h3>Главная</h3>
                        </div>
                        <div className="">
                            <h3>Главная</h3>
                        </div>
                    </div>
                </div>
            </nav>
            <nav class="row-small">
                <div className="container">
                    <div className="row">
                        <div className="col-start-7">
                            <ul>
                                <li>df</li>
                                <li>gf</li>
                            </ul>
                        </div>
                        <div className="col-start-5">
                            <p className="copyright pull-right">@ dfgdfgdfg</p>
                        </div>
                    </div>
                </div>
            </nav>
        </footer>
    )}

export default Footer;