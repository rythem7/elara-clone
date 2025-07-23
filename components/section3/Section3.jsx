import Image from "next/image";
import img from "@/assets/images/city.jpg";
import CardText from "@/ui/CardText";

function Section3() {
	return (
		<div className="h-screen snap-start w-screen relative flex items-end justify-center p-20 overflow-hidden">
			<div className="w-400 h-auto absolute left-0 bottom-0 object-cover ">
				<Image src={img} alt="Image" className="w-full h-full" />
			</div>
			<CardText
				themeType="dark"
				title={"Elara Club: The Pinnacle of Luxury"}
				text="Elara is more than jewelry—it's a way of life. As a Elara
					Club member, indulge in handpicked experiences, luxury
					getaways, and privileged access to our finest collections
					and services. Offering bespoke stays at our signature
					hotels, private events, and personalized services beyond
					compare."
				titleClass={"font-medium text-2xl leading-[1.25rem]"}
				btnLabel="Discover"
			/>
		</div>
	);
}

export default Section3;
