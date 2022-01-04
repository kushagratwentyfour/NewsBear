import { Component } from 'react';
import { NewsItem } from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";




export default class News extends Component {
    static defaultProps = {
        country: "in",
        pageSize: 8,
        category: "general"

    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string

    }
    constructor(props) {
        super(props)
        console.log("Hello qqq")
        this.state = {
            articles: [],
            other: this.v,
            page: 1,
            loading: true,
            TotalResults:0
        }
        document.title = `${this.Capitalize(this.props.category)}`

    }
    Capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    async updaate() {
       this.props.setProgress(0);
        this.setState({
            loading: true
        })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7a2cab49e4804ea2978e1a1e99a65b5a&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        let resp = await fetch(url)
        let parsersp = await resp.json()
        // console.log(parsersp)
        this.setState({
            articles: parsersp.articles,
            // page: this.state.page + 1,
            TotalResults: parsersp.totalResults,
            loading: false
        })
        this.props.setProgress(100);

    }
    async componentDidMount() {
        console.log("Hey Bro")
        // this.setState({
        //     loading: true
        // })
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7a2cab49e4804ea2978e1a1e99a65b5a&page=${this.state.page}&pageSize=${this.props.pageSize}`
        // let resp = await fetch(url)
        // let parsersp = await resp.json()
        // // console.log(parsersp)
        // console.log(parsersp)
        // this.setState({
        //     articles: parsersp.articles,
        //     TotalResults: parsersp.totalResults,
        //     loading: false
        // })
        this.updaate()

    }
    // HandleNext = async () => {
    //     if (!(this.state.page + 1 > Math.ceil(this.state.TotalResults / 20))) {
    //         this.setState({
    //             page: this.state.page + 1,
    //         })
    //         this.updaate()
    //     }
    // }
    // HandlePrev = async () => {
    //     this.setState({
    //         page: this.state.page - 1,
    //     })
    //     this.updaate()
    // }
    fetchMoreData = async () => {
       this.setState({page:this.state.page+1})
       let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7a2cab49e4804ea2978e1a1e99a65b5a&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
       let resp = await fetch(url)
       let parsersp = await resp.json()
       // console.log(parsersp)
       this.setState({
           articles: this.state.articles.concat(parsersp.articles),
           // page: this.state.page + 1,
           TotalResults: parsersp.totalResults,
       })
      };

    render() {
        return (
            <>

                <div className="container" style={{ backgroundColor: 'white', marginTop: "5%" }}>
                    <div className="text-center" style={{ marginBottom: "5%" }}> <h1>NewsBear- {this.Capitalize(this.props.category)} Headings</h1></div>
                    {this.state.loading && <Spinner />}
                <InfiniteScroll
                            dataLength={this.state.articles.length}
                            next={this.fetchMoreData}
                            hasMore={this.state.articles.length!== this.state.TotalResults}
                            loader={<Spinner/>}
                        >
                    <div className="row">
                        
                            {!this.state.loading && this.state.articles.map((element) => {

                                return <div className="col-md-4" key={element ? element.url : ""}>

                                    <NewsItem title={element.title ? element.title.slice(0, 20) : ""} description={element.description ? element.description.slice(0, 50) : ""} urlImage={element.urlToImage ? element.urlToImage : "https://i.ytimg.com/vi/jhgt9WAx0II/hqdefault.jpg"} url={element.url ? element.url : ""} author={element.author} date={element.publishedAt} source={element.source.name} />

                                </div>
                            })}
                    </div>
                        </InfiniteScroll>

                </div>
                {/* <div className=" container d-flex justify-content-between">

                    <button type="button" disabled={this.state.page <= 1} className="btn btn-secondary my-2" onClick={this.HandlePrev}>&larr;Prev</button>
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.TotalResults / 20)} className="btn btn-secondary my-2" onClick={this.HandleNext}>Next&rarr;</button>

                </div> */}
            </>
        )

    }


}