import { Heading } from '../../components/heading';
import Logo from '../../components/logo';

type Props = {
	className?: string;
};

export const Footer: React.FC<Props> = ({ className }) => {
	return (
		<div
			id="footer"
			className={
				className +
				' bg-primary flex flex-col justify-center items-center'
			}
		>
			<div className="h-1 w-full bg-accentColor-strong"></div>

			<Logo classes="h-[4rem] md:h-[5rem] my-12 md:my-16" />

			<section className="text-page-layout flex flex-col md:flex-row justify-center items-start gap-10 md:gap-64 mb-10 md:mb-32">
				<section className="flex flex-col gap-1">
					<Heading tag="h3">Kontakt</Heading>
					<p>RPM Bilservice</p>
					<p>
						<a
							href="mailto:alshaman1983@gmail.com"
							className="link"
						>
							alshaman1983@gmail.com
						</a>
					</p>
					<p>
						<a href="tel:+46736834088">tel: +46 73 683 40 88</a>
					</p>
				</section>

				<section className="flex flex-col gap-1">
					<Heading tag="h3">Adress</Heading>
					<p>Junivägen 1</p>
					<p>26310 Malmö</p>
					<p>
						<a href="#">Hitta hit (google maps)</a>
					</p>
				</section>
			</section>
		</div>
	);
};
