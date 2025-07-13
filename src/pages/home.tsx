import { Hero } from '../components/hero';
import { Heading } from '../components/heading';
import { ImageService } from '../components/image-service';

export const Home = () => {
	return (
		<>
			<Hero
				imageAlt="Manlig bilmekaniker med svart T-shirt och svarta handskar jobbar framför en öppen motorhuv på en bil"
				imageSrc="hero"
			/>

			<section className="text-page-layout text-body-section-layout">
				<Heading tag="h2">
					Service och bilreparation i toppklass
				</Heading>
				<p>
					Välkommen till RPM Bilservice – din pålitliga bilverkstad i
					Malmö. Vi erbjuder professionell bilservice och underhåll
					för alla bilmärken och modeller. Våra certifierade
					bilmekaniker arbetar noggrant med allt från oljebyten,
					filterbyten, kontroll av bromsar, fjädring och mer. Vi
					följer tillverkarens rekommendationer för att säkerställa
					att din bil behåller både prestanda och säkerhet. Boka din
					bilservice hos oss redan idag!
				</p>
			</section>

			<section>
				<ImageService
					imageSrc="workshop"
					alt="En vy över en bilverkstad med svagt gula väggar, en bilramp, några maskiner och en trappa upp till andra våningen. I förgrunden syns en orange vägkon med reflexer."
					className="w-screen object-cover max-h-[80vh]"
					sizes="100vw"
				/>
			</section>

			<section className="text-page-layout text-body-section-layout">
				<Heading tag="h2">
					Din kompletta bilverkstad – vi löser det mesta
				</Heading>
				<p>
					RPM Bilservice är mer än bara en vanlig verkstad – vi
					erbjuder heltäckande bilreparationer och felsökning med
					modern utrustning. Oavsett om det gäller kamremsbyte,
					kopplingsbyte, avgassystem, fjädring eller byte av motor,
					har vi kunskapen och erfarenheten att utföra arbetet
					effektivt och korrekt. Hos oss får du snabb hjälp, tydliga
					kostnadsförslag och ett arbete du kan lita på.
				</p>
			</section>
		</>
	);
};
