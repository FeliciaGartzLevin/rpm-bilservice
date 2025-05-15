import { SecondaryHero } from '../components/secondary-hero';

export const About: React.FC = () => {
	return (
		<>
			<SecondaryHero
				imageSrc="mechanic"
				alt="En manlig bilmekaniker med grå tröja står med ryggen mot kameran och mekar under en bil som är upphissad i en röd billift."
			/>
			<section className="text-page-layout">
				<div>
					Hej! Det är jag som äger RPM bilservice. Jag är syrisk
					medborgare och kom till Sverige för ungefär tio år sedan.
					Jag arbetade i mitt hemland inom bilbranschen i flera år.
					När kriget bröt ut bestämde jag mig för att flytta till det
					här landet. Först tänkte jag på att studera, och sedan på
					mitt yrke. Jag började på en svensk skola och lärde mig
					språket, för språket är nyckeln 🔑 till landet och den rätta
					vägen för att nå sina mål. Jag gick in i
					bilreparationsbranschen. Först började jag på Lernia och tog
					ett certifikat i lastbilsreparation. Jag arbetade på
					Mercedes i Malmö. Efter en kort tid bestämde jag mig för att
					gå över till personbilar. Jag började på skolan
					Eriksakademin i Arlöv, studerade i nästan två år och tog ett
					mekanikercertifikat. Sedan arbetade jag en period på
					VolksWagen, och efter det jobbade jag på flera olika
					ställen. Många människor följde med mig till de platser där
					jag arbetade. Efter det bestämde jag mig för att starta mitt
					eget företag, kämpa och uppfylla min dröm. Nu har jag mitt
					lilla projekt i utkanten av Malmö – en bilverkstad för alla
					typer av bilar 🚗 både gamla och nya. Jag älskar utveckling
					och nya saker. Jag gillar att upptäcka saker som är svåra
					att laga, och jag älskar att hjälpa människor så mycket jag
					kan.
				</div>
			</section>
		</>
	);
};
