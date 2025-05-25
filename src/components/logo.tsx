import { FC } from 'react';
import { NavLink } from 'react-router-dom';

type Props = {
	classes?: string;
};

const Logo: FC<Props> = ({ classes }) => {
	return (
		<div>
			<NavLink to="/">
				<img
					alt="logo"
					src="../../../favicon.ico"
					className={classes}
				/>
			</NavLink>
		</div>
	);
};

export default Logo;
