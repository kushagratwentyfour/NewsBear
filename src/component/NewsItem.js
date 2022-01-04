import { Component } from "react";



export class NewsItem extends Component {

    render() {
        let { title, description,urlImage,url,author,date,source} = this.props;

        return (
            <>
                <div className="card my-2" >
                    <img src={urlImage?urlImage:"https://thehill.com/sites/default/files/article_images/hongkong_election_121921_ap_kin_cheung.jpeg"} className="card-img-top" alt="..." />
                    <div className="card-body" >
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">updated by {author?author:"Unknown"} at {date?new Date(date).toGMTString():""} <span className
                        ="badge bg-secondary">{source}</span></small></p>
                        <span className="position-absolute top-0   translate-middle badge rounded-pill bg-danger" style={{left:"82%",zIndex:"20%"}}>Latest</span>
                        <a href={url} className="btn btn-dark">Read More..</a>
                    </div>
                </div>

            </>

        )

    }
}