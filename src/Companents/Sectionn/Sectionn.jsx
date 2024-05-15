import React from 'react'
import style from '../Sectionn/Sectionn.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';


const Sectionn = () => {
    return (
        <div className={style.container}>
            <div className={style.sctn}>
                <div className={style.text}>

                    <div className={style.textone}>
                        <FontAwesomeIcon className={style.abc} icon={faTruck} />
                        <div>
                            <h5>FREE SHIPPING</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                        </div>
                    </div>

                    <div className={style.textone}>
                        <FontAwesomeIcon className={style.abc} icon={faArrowRotateLeft} />
                        <div>
                            <h5>FREE RETURNS</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                        </div>
                    </div>
                    <div className={style.textone}>
                        <FontAwesomeIcon className={style.abc} icon={faQuestion} />
                        <div>
                            <h5>FREE RETURNS</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Sectionn
