import React from "react";
import notFound from './img.png';
import s from './styles.module.css';
import { Link } from 'react-router-dom';

 const NotFound = ( {children, title, buttonText = "GO BACK", buttonAction} ) => {
	return (
		<>
		<div className={s.btnA}>
			{buttonAction
					? <a href="#" className="btn" onClick={buttonAction}>{buttonText}</a>
					: <Link to="/" className="btn" >{buttonText}</Link>
				}
		</div>
		
			<div className={s.notFound}>
				<img src={notFound} className={s.image} aria-hidden="true" alt="" />
				<h1 className={s.title}>{title}I AM SORRY</h1>
				{children && children}
				
			</div>
			
        </>
	);
}
export default NotFound;