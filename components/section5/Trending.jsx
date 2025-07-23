import React from "react";
import CardText from "@/ui/CardText";
import Image from "next/image";
import one from "@/assets/images/1.jpg";
import two from "@/assets/images/2.jpg";
import three from "@/assets/images/3.jpg";
import four from "@/assets/images/4.jpg";
import five from "@/assets/images/5.jpg";

function Section5() {
	return (
		<div className="max-h-[65vh] snap-start max-w-[17rem]">
			<CardText
				themeType="light"
				title={"Trending"}
				text="Discover what everyone's loving right now — our most popular pieces, handpicked based on what's trending with Elara customers this season."
				titleClass={"font-bold text-2xl"}
				textClass="text-xs"
				width="w-[17rem]"
			/>

			<div className="carousel carousel-center h-[16rem] bg-transparent max-w-lg space-x-2 py-1 pb-[1.25rem] mt-1 mb-5">
				<div className="carousel-item relative">
					<Image src={one} alt="Image" className="w-[10rem]" />
					<p className="absolute bottom-[-1.25rem] left-0 text-xs text-black z-20">
						Emarald hand bag
					</p>
				</div>
				<div className="carousel-item relative">
					<Image src={two} alt="Image" className="w-[10rem]" />
					<p className="absolute bottom-[-1.25rem] left-0 text-xs text-black z-20">
						Emarald hand bag
					</p>
				</div>
				<div className="carousel-item">
					<Image src={three} alt="Image" className="w-[10rem]" />
				</div>
				<div className="carousel-item">
					<Image src={four} alt="Image" className="w-[10rem]" />
				</div>
				<div className="carousel-item">
					<Image src={five} alt="Image" className="w-[10rem]" />
				</div>
				{/* <div className="carousel-item">
					<img src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp" />
				</div>
				<div className="carousel-item">
					<img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp" />
				</div>
				<div className="carousel-item">
					<img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" />
				</div>
				<div className="carousel-item">
					<img
						src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
						className="rounded-box"
					/>
				</div> */}
			</div>
		</div>
	);
}

export default Section5;
