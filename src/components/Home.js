import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getNews } from '../actions';

const PageTitle = styled.p`
  color: rgba(0, 0, 0, 0.54);
	font-size: 1.5em;
	font-weight: bold;
	margin-top: 0;
`

const GridWrapper = styled.div`
	display: grid;
	
	@media only screen and (min-width: 768px) {
		grid-template-columns: 1fr 1fr;
	}

	@media only screen and (min-width: 1024px) {
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}
`

const LinkWrapper = styled.a`
	position: relative;
	color: #FFF;
`;

const Image = styled.img`
	width: 100%;
	max-width: 100%;
`;

const Text = styled.p`
	position: absolute;
	bottom: 0;
	left: 0;
	margin-left: 5%;
	font-size: 1.2em
	font-weight: bold;

	@media only screen and (min-width: 1024px) {
		font-size: 1em
	}
`

const LocalDate = styled.span`
  font-size: 0.8em;
	color: #888;
`

class Home extends React.Component {
	componentDidMount() {
		this.props.getNews()
	}

	renderNews() {
		if (this.props.newsData.newsData === null) return;

		var news = (this.props.newsData.newsData).slice(31, this.length);
		return news;
	}

	renderLocalDate(date) {
		var localDate = new Date(date);
		return localDate.toDateString();
	}

	render() {
		console.log(this.renderNews())
		return (
			<Fragment>
				<PageTitle>Lastest News</PageTitle>
				<GridWrapper>
					{ this.renderNews() === undefined ? null :
						this.renderNews().map(singleNews => {
							return (
								<LinkWrapper key={singleNews.title} href={singleNews.url}>
									<Image src={singleNews.thumbnail} />
									<Text>
										{singleNews.title}
										<br />
										<LocalDate>{this.renderLocalDate(singleNews.publishedAt)}</LocalDate>
									</Text>
								</LinkWrapper>
							)
						})
					}
				</GridWrapper>
			</Fragment>
		)
	}
}

const mapStateToProps = state => {
	return { newsData: state.newsData }
}

export default connect(
	mapStateToProps,
	{ getNews }
)(Home)