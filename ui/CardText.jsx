"use client";

import React from "react";
import BtnBrdrlessUline from "@/ui/BtnBrdrlessUline";

function CardText({
	text,
	title,
	themeType = "light",
	btnLabel = "Browse collection",
	titleClass = "font-bold text-sm text-[#B6B09F]",
	textClass = "text-xs",
	width = "max-w-[20rem]",
	btnTextClass = "text-sm",
}) {
	const textThemeClass = themeType === "dark" ? "text-white" : "text-black";

	return (
		<div
			className={`flex flex-col ${width} gap-2 mb-1 z-10 ${textThemeClass}`}
		>
			<p className={titleClass}>{title}</p>
			<p className={textClass}>{text}</p>
			<BtnBrdrlessUline
				label={btnLabel}
				themeType={themeType}
				textClass={btnTextClass}
			/>
		</div>
	);
}

export default CardText;
