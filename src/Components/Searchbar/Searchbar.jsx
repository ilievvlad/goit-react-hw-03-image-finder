import { Component } from "react";

import { Button, ButtonLabel, Form, Header, Input } from "./Searchbar.styled";

export class Searchbar extends Component {
	state = {
		search: ''
	}

	handleChange = e => {
		this.setState({
			search: e.target.value
		})
	}

	render() {
		return (
			<Header>
				<Form onSubmit={this.handleChange}>
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