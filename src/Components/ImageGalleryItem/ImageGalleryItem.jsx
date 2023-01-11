import PropTypes from 'prop-types';
import { Image, Item } from "./ImageGalleryItem.styled";

export const ImageGalleryItem = ({ url, tags, onClick }) => {

	return (
		<Item>
			<Image src={url} alt={tags} onClick={() => onClick(url)} />
		</Item>
	);
};

ImageGalleryItem.propTypes = {
	url: PropTypes.string.isRequired,
	tags: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
};