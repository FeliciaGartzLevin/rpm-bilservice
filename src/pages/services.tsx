import React from 'react';
import { SecondaryHero } from '../components/secondary-hero';
import { Heading } from '../components/heading';
import { ImageService } from '../components/image-service';
import { InfoBullet } from '../components/info-bullet';

export const Services: React.FC = () => {
	const infoBulletTag = 'h4';
	return (
		<>
			<SecondaryHero imageSrc="car" alt="En röd bil med öppen motorhuv" />

			<section className="text-page-layout text-body-section-layout">
				<Heading tag="h2">Våra vanligaste tjänster</Heading>
				<p>
					RPM Bilservice erbjuder ett brett utbud av professionella
					tjänster inom bilservice, bilreparationer och
					fordonsunderhåll. Vi arbetar med alla bilmärken och
					bilmodeller – både nya och äldre fordon.
				</p>

				<Heading tag="h3" classes="mt-3">
					Våra vanligaste tjänster:
				</Heading>

				<section>
					<InfoBullet
						tag={infoBulletTag}
						title="Bilservice"
						content="Regelbunden bilservice enligt tillverkarens rekommendationer för att förlänga bilens livslängd och minska risken för kostsamma fel."
					/>
					<InfoBullet
						tag={infoBulletTag}
						title="Kamremsbyte & kamkedja"
						content="Vi byter kamrem och kamkedja med noggrannhet och rätt verktyg – en viktig del för att undvika motorskador."
					/>
					<InfoBullet
						tag={infoBulletTag}
						title="Bromsar"
						content="Service, kontroll och byte av bromsbelägg, bromsskivor och bromsok. Vi säkerställer att bilen har full bromsverkan."
					/>
					<InfoBullet
						tag={infoBulletTag}
						title="Fjädring & stötdämpare"
						content="Reparation och byte av stötdämpare, fjädrar, länkarmsbussningar och andra delar av hjulupphängningen."
					/>
					<InfoBullet
						tag={infoBulletTag}
						title="Avgassystem"
						content="Vi byter eller lagar ljuddämpare, katalysator, flexrör och andra delar av bilens avgassystem."
					/>
					<InfoBullet
						tag={infoBulletTag}
						title="Koppling"
						content="Vi utför kopplingsbyten och reparationer vid svår växling eller slirande koppling."
					/>
					<InfoBullet
						tag={infoBulletTag}
						title="Motorreparationer & motorbyte"
						content="Allt från enklare motorjobb till kompletta motorbyten. Vi felsöker och åtgärdar även svårfunna motorproblem."
					/>
				</section>
			</section>

			<section>
				<ImageService
					imageSrc="workshop"
					alt="En modern bilverkstad med svagt gula väggar, bilramp, diagnosutrustning och en synlig trappa till övre plan. I förgrunden syns en reflexförsedd orange vägkon – en aktiv verkstadsmiljö redo för service och reparation."
					className="w-screen object-cover max-h-[80vh]"
					sizes="100vw"
				/>
			</section>

			<section className="text-page-layout text-body-section-layout">
				<Heading tag="h2">Andra vanliga arbeten vi utför:</Heading>
				<ul className="my-8 list-disc ps-10">
					<li>AC-service (luftkonditionering & klimatanläggning)</li>
					<li>Däckbyte, balansering och däckförvaring</li>
					<li>Hjulinställning / fyrhjulsinställning</li>
					<li>Diagnos & felsökning med modern diagnosutrustning</li>
					<li>Batteribyte och laddsystemkontroll</li>
					<li>Byte av hjullager och drivknutar</li>
					<li>Byte av vindruta och lagning av stenskott</li>
					<li>Belysning och reparation av elsystem</li>
					<li>Styrsystem (servopump, styrleder, styrstag)</li>
					<li>Bränslesystem & insprutningskomponenter</li>
					<li>Rostskyddsbehandling och enklare svetsarbeten</li>
				</ul>

				<p>
					Behöver du hjälp med något annat? Vi tar gärna emot
					specialförfrågningar och erbjuder alltid personlig
					rådgivning. RPM Bilservice är en erfaren bilverkstad i Malmö
					– flexibel, noggrann och utrustad för både små och stora
					uppdrag.
				</p>
				<p className="mt-2">
					📞 <a href="#Kontakt">Kontakta oss</a> idag för tidsbokning
					eller kostnadsförslag.
				</p>
			</section>
		</>
	);
};
