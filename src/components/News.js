import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

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
      let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=b063b81b251e46279f337b896f84b440"
      let data = await fetch(url)
      let parsedData = await data.json()
      this.setState({ articles: parsedData.articles })
      
    }
    handleNextClick = async ()=>{
        console.log("Next");
        if (this.state.page + 1 )
    }
    
    render() {
        return (
                // <div className="flex justify-center align-middle flex-wrap mx-auto my-52">
                //     <div className="lg:columns-3 lg:max-w-[90%] mx-auto md:columns-2 sm:columns-2  ">
                // {this.state.articles.map((element) => {
                //     return <NewsItem key={element.url} title={element.title.slice(0, 48)} description={element.description.slice(0, 88)} imageUrl={element.urlToImage} articleUrl={element.url} author={element.author.slice(0, 15)} />
                //  })} 
                //         </div>
                // </div>   

            <div className="flex flex-col">
                    <div className="flex flex-row flex-wrap justify-center ">
                    {this.state.articles.map((element) => {
                    return <NewsItem key={element.url} title={element.title} description={element.description} imageUrl={element.urlToImage} articleUrl={element.url} author={element.author} />
                 })} 
                    </div>
                    <div className='container flex justify-between my-3'>
                    <button disabled={this.state.page<=1} className="btn btn-outline btn-accent mx-10" onClick={handlePrevClick} >&larr; Previous</button>
                    <button className="btn btn-outline btn-accent" onClick={handleNextClick} >Next &rarr;</button>
                    </div>
            </div>
        )
    }
}

export default News
