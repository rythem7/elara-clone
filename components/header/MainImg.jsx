import Image from "next/image";
import one from "@/assets/images/1.jpg";
import two from "@/assets/images/2.jpg";
import three from "@/assets/images/3.jpg";
import four from "@/assets/images/4.jpg";
import five from "@/assets/images/5.jpg";

function MainImg({ className = "" }) {
	return (
		<Image
			src={one}
			alt="hero"
			className={`object-cover w-full h-full rounded-box ${className}`}
		/>
	);
}

export default MainImg;
