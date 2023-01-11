import { Component } from 'react';
import PropTypes from 'prop-types';

import { List } from "./ImageGallery.styled";
import { ImageGalleryItem } from "Components/ImageGalleryItem/ImageGalleryItem";
import { Loader } from 'Components/Loader/Loader';
import { Button } from 'Components/Button/Button';

import getImages from 'Services/imgApi';

export class ImageGallery extends Component {
	static propTypes = {
		onClick: PropTypes.func.isRequired,
		inputValue: PropTypes.string.isRequired
	};

	state = {
		images: [],
		status: 'idle'
	};

	componentDidUpdate(prevProps, _) {
		if (prevProps.inputValue !== this.props.inputValue) {
			this.fetchLoad();
		}
		if (prevProps.page !== this.props.page && this.props.page > 1) {
			this.fetchLoadMore();
		}
	}

	fetchLoad = () => {
		const { inputValue, page } = this.props;

		getImages(inputValue, page)
			.then(response => {
				this.setState({
					images: response.hits,
					status: 'resolve'
				});
			})
			.catch(error => this.setState({ status: 'rejected' }));
	};

	fetchLoadMore = () => {
		const { inputValue, page } = this.props;

		getImages(inputValue, page)
			.then(response => {
				this.setState(prevState => ({
					images: [...prevState.images, ...response.hits],
					status: 'resolve'
				}));
			})
			.catch(error => this.setState({ status: 'rejected' }));
	};

	render() {
		const { images, status } = this.state;

		if (status === 'pending') {
			return <Loader />;
		}

		if (status === 'resolve') {
			return (
				<>
					<List>
						{images.map(({ id, largeImageURL, tags }) => (
							<ImageGalleryItem
								key={id}
								url={largeImageURL}
								tags={tags}
								onClick={this.props.onClick}
							/>
						))}
					</List >
					{this.state.images.length !== 0 ? (
						<Button onClick={this.props.loadMoreBtn} />
					) : (
						alert('No results')
					)}
				</>
			);
		}
	};
}