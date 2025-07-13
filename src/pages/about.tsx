import { Heading } from '../components/heading';
import { SecondaryHero } from '../components/secondary-hero';

export const About: React.FC = () => {
	return (
		<>
			<SecondaryHero
				imageSrc="mechanic"
				alt="En manlig bilmekaniker med grå tröja står med ryggen mot kameran och mekar under en bil som är upphissad i en röd billift."
			/>
			<section className="text-page-layout">
				<Heading tag="h2">
					Professionell bilservice med rötter i branschen
				</Heading>
				Välkommen till RPM Bilservice – en engagerad och kunnig
				bilverkstad i utkanten av Malmö. Här möts du av en passion för
				bilar, kvalitet i varje detalj och ett tydligt mål: att erbjuda
				pålitlig bilservice och bilreparationer för alla typer av
				fordon, både nya och äldre modeller. Intresset för fordon
				började tidigt och utvecklades snabbt till ett yrke. Med rätt
				utbildning och erfarenhet från flera välrenommerade verkstäder –
				bland annat inom både lastbilar och personbilar – växte
				kunskapen och kompetensen inom allt från enklare servicearbeten
				till mer avancerad felsökning och motorreparationer. Efter många
				år i branschen föddes drömmen om att driva något eget – en
				bilverkstad där kunden alltid står i centrum och där inget
				uppdrag är för litet eller för svårt. Idag är RPM Bilservice
				resultatet av den visionen: en modern, flexibel och
				lösningsorienterad verkstad där varje bil får den omsorg den
				förtjänar. Här brinner vi för problemlösning, för att hitta
				orsaken bakom svåra fel – och framför allt för att hjälpa
				människor på vägen.
			</section>
		</>
	);
};
