import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description,imageUrl, author ,articleUrl} = this.props
        return (
                <div className="lg:p-4 md:w-1/3 flex justify-center my-2">
                        <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg"><img className="w-full" src={imageUrl} alt="hello jsx" />
                            <div className="px-6 pt-4 "><span className="tracking-widest text-xs title-font font-medium text-slate-300 mb-1">{author}..</span>
                                <div className="title-font text-lg font-medium text-gray-200 mb-3">{title}...</div>
                                <p className="text-gray-400 text-base">{description}...</p>
                            </div>
                            <div className="px-6 pt-4 mb-2"><a href={articleUrl}><span
                                className="inline-block bg-purple-800 rounded-full px-3 py-2  text-sm font-semibold text-white mr-2 mb-2 hover:bg-purple-600 cursor-pointer">Read Now</span></a></div>
                        </div>
                    </div>
        )
    }
}

export default NewsItem
