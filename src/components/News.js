import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

export class News extends Component {

    static defaultProps = {
        country: "us",
        pageSize: 9,
        category: "entertainment"
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
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
    
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b063b81b251e46279f337b896f84b440&page=1`
        this.setState({loading: true})
            let data = await fetch(url)
            let parsedData = await data.json()
            this.setState({ 
                articles: parsedData.articles, 
                loading: false
            })
            console.log(parsedData.articles)
    }

    handleNextClick = async ()=>{
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)){

        }

        else{
            window.scrollTo(0, 0)
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b063b81b251e46279f337b896f84b440&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
            this.setState({loading: true})
            let data = await fetch(url)
            let parsedData = await data.json()
            this.setState({ 
                page: this.state.page + 1,
                articles: parsedData.articles, 
                loading: false
            })

        }
    }

    handlePrevClick = async ()=>{
        console.log("Previous");
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b063b81b251e46279f337b896f84b440&page=${this.state.page - 1}&pageSize=${this.props.pageSize   }`
            this.setState({loading: true})
            let data = await fetch(url)
            let parsedData = await data.json()
            this.setState({ 
                page: this.state.page - 1,
                articles: parsedData.articles,
                loading: false
            })
    }
    
    render() {
        return (
            <div className="flex flex-col">
                <div className='mx-auto'>
                {this.state.loading && <Spinner/>}
                </div>
                    <div className="flex flex-row flex-wrap justify-center ">
                    {this.state.articles.map((element) => {
                        return <NewsItem key={element.url} title={element.title} description={element.description} imageUrl={element.urlToImage} articleUrl={element.url} author={element.author} />
                    })} 
                    </div>
                    <div className='container flex justify-between my-3 sm:'>
                    <button disabled={this.state.page<=1} className="btn btn-outline btn-accent mx-[5%]" onClick={this.handlePrevClick} >&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-outline btn-accent" onClick={this.handleNextClick} >Next &rarr;</button>
                    </div>
                    
            </div>
        )
    }
}

export default News
