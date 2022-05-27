import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {

    static defaultProps = {
        country: "in",
        category: "entertainment"
    }

    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string
    }

    articles = []

    constructor() {
        super()
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1
        }
    }
    async NewsUpdate() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b063b81b251e46279f337b896f84b440&page=${this.state.page}`
        this.setState({ loading: true })
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
        console.log("NewsUpdate was fired");
    }
    async componentDidMount() {
        this.NewsUpdate()
        console.log("componentDidMount was fired");
    }

    // handlePrevClick = async () => {
    //     this.setState({ page: this.state.page - 1 });
    //     this.updateNews();
    //     console.log("handlePrevClick was fired");
    // }

    // handleNextClick = async () => {
    //     this.setState({ page: this.state.page + 1 });
    //     this.updateNews();
    //     console.log("handleNextClick was fired");
    // }

     fetchMoreData = async () => {
        this.setState({page: this.state.page + 1})
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page + 1}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false,
        })
        console.log('fetchMoreData');
    };
    render() {

            return (
                <div className="flex flex-col">
                <InfiniteScroll dataLength={this.state.articles.length} next={this.fetchMoreData} hasMore={this.state.articles.length !== this.state.totalResults} loader={ <Spinner />}>
                    <div className="flex flex-row flex-wrap justify-center ">
                        {this.state.articles.map((element) => {
                            return <NewsItem key={element.title} title={element.title} description={element.description} imageUrl={element.urlToImage} articleUrl={element.url} author={element.author} source={element.source.name} date={element.publishedAt} />
                        })}
                    </div>
                    {/* <div className='container flex justify-between my-3 '>
                    <button disabled={this.state.page <= 1} className="btn btn-outline btn-accent mx-[5%]" onClick={this.handlePrevClick} >&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-outline btn-accent" onClick={this.handleNextClick} >Next &rarr;</button>
                </div> */}
                </InfiniteScroll>
            </div>
        )
    
    }
}

export default News
