import { Component } from "react";
import PropTypes from 'prop-types';

import { Button, ButtonLabel, Form, Header, Input } from "./Searchbar.styled";

export class Searchbar extends Component {
	static propTypes = {
		getInputValue: PropTypes.func.isRequired
	};

	state = {
		search: ''
	}

	handleChange = e => {
		this.setState({
			search: e.target.value
		})
	};

	handleSearch = e => {
		e.preventDefault();
		this.props.getInputValue(this.state.search);
		this.setState({ search: '' });
	};

	render() {
		return (
			<Header>
				<Form onSubmit={this.handleSearch}>
					<Button type="submit">
						<ButtonLabel>Search</ButtonLabel>
					</Button>
					<Input
						type="text"
						autocomplete="off"
						autoFocus
						placeholder="Search images and photos"
						onChange={this.handleChange}
						value={this.state.search}
					/>
				</Form>
			</Header >
		);
	}
};