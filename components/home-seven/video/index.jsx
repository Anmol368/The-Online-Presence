"use client";
import Image from "next/image";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import PlayBtnImg from "../../../public/images/v7/play-btn.png";
import ShapeImg from "../../../public/images/v7/shape.png";
import VideoBg from "../../../public/images/v7/video-bg.png";
function Video() {
	const [isOpen, setOpen] = useState(false);

	return (
		<div className="section aximo-section-padding6">
			<div className="container">
				<div className="aximo-section-title center bricolage-font">
					<h2>Nurturing a robust brand identity</h2>
				</div>
				<div className="aximo-video-wrap2">
					<Image src={VideoBg} alt="video bg" sizes="100vw" />
					<ModalVideo
						channel="youtube"
						youtube={{ autoplay: 0 }}
						isOpen={isOpen}
						videoId="7e90gBu4pas"
						onClose={() => setOpen(false)}
					/>
					<button className="aximo-video-popupv7 video-init" onClick={() => setOpen(true)}>
						<Image src={PlayBtnImg} alt="PlayBtnImg" />
						<div className="waves waves7 wave-1"></div>
						<div className="waves waves7 wave-2"></div>
						<div className="waves waves7 wave-3"></div>
					</button>

					<div className="aximo-video-shapev7">
						<Image src={ShapeImg} alt="Shape " />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Video;
