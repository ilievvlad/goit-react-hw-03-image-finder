import { Image, Item } from "./ImageGalleryItem.styled";

import img from "img/man.jpg";

export const ImageGalleryItem = () => {

	return (
		<Item>
			<Image src={img} alt="Man" />
		</Item>
	);
};