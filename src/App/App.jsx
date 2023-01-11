import { ImageGallery } from "Components/ImageGallery/ImageGallery";
import { Searchbar } from "Components/Searchbar/Searchbar"

export const App = () => {
	return (
		<div className="wrapper">
			<Searchbar />
			<ImageGallery />
		</div>
	);
};
