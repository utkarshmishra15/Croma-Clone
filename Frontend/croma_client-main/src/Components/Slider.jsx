import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Slider = () => {
	const responsive = {

		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 1
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 1
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1
		}
	}
	return (
		<div>
			<Carousel
				responsive={responsive}
				showDots={true}
				infinite={true}
				autoPlay={true}
				autoPlaySpeed={3000}
			>
				<div><img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1743226154/Croma%20Assets/CMS/LP%20Page%20Banners/2025/Sanity/HP/March/29032025/HP_Rotating_PS_29March2025_m4iwrt.jpg" alt="slider1" /></div>
				<div><img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1743226153/Croma%20Assets/CMS/LP%20Page%20Banners/2025/Sanity/HP/March/29032025/HP_Rotating_WP_29March2025_elzi0s.jpg" alt="slider1" /></div>
				<div><img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1743226153/Croma%20Assets/CMS/LP%20Page%20Banners/2025/Sanity/HP/March/29032025/HP_Rotating_SW_29March2025_tcphzw.jpg" alt="slider1" /></div>
				<div><img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1743226153/Croma%20Assets/CMS/LP%20Page%20Banners/2025/Sanity/HP/March/29032025/HP_Rotating_HD_29March2025_sjb5np.jpg" alt="slider1" /></div>
				<div><img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1742567340/Croma%20Assets/CMS/LP%20Page%20Banners/2025/HP%20Rotating%20Banners/March/20032025/HP_Rotating_apple_21March2025_bedrsr.jpg" alt="slider1" /></div>
				<div><img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1742890005/Croma%20Assets/CMS/LP%20Page%20Banners/2025/campaigns/Ugadi/HP%20Rotating/HP_Rotating_Ugadi_24March2025_cptlim.jpg" alt="slider1" /></div>
			</Carousel>
		</div>
	)
}

export default Slider