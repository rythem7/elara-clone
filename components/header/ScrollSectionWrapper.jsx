"use client";

export default function ScrollSectionWrapper({ children, sectionRef }) {
	return (
		<section ref={sectionRef} className="h-[400vh] mt-[-4rem] relative">
			<div className="sticky top-0 h-screen w-screen text-nowrap overflow-hidden">
				{children}
			</div>
		</section>
	);
}
