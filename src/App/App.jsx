import { Component } from "react";

import { ImageGallery } from "Components/ImageGallery/ImageGallery";
import { Searchbar } from "Components/Searchbar/Searchbar"
import { Modal } from "Components/Modal/Modal";

export class App extends Component {
	state = {
		inputValue: '',
		modalImg: '',
		showModal: false,
		page: 1
	}

	getInputValue = value => {
		this.setState({ inputValue: value, page: 1 });
	}

	toggleModal = () => {
		this.setState(({ showModal }) => ({ showModal: !showModal }));
	}

	getLargeImg = url => {
		this.toggleModal();
		this.setState({ modalImg: url });
	}

	loadMoreBtn = () => {
		this.setState(prevState => ({
			page: prevState.page + 1
		}));
	};

	render() {
		const { inputValue, modalImg, showModal, page } = this.state;

		return (
			<div className="wrapper" >
				<Searchbar getInputValue={this.getInputValue} />
				<ImageGallery
					inputValue={inputValue}
					onClick={this.getLargeImg}
					loadMoreBtn={this.loadMoreBtn}
					page={page}
				/>
				{showModal && <Modal url={modalImg} onClose={this.toggleModal} />}
			</div>
		);
	}
};
