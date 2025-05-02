import { NavLink } from 'react-router-dom';

type Props = {
	className?: string;
};

export const Navigation: React.FC<Props> = ({ className }) => {
	return (
		<div className={`${className} flex justify-between`}>
			<div>
				<NavLink to="/">
					<img
						alt="logo"
						src="../../../favicon.ico"
						className="h-[3rem]"
					/>
				</NavLink>
			</div>

			<ul className="flex gap-2">
				<li>
					<NavLink to="/tjänster">Tjänster</NavLink>
				</li>
				<li>
					<NavLink to="/om-oss">Om oss</NavLink>
				</li>
			</ul>
		</div>
	);
};
