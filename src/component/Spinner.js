import { Component } from "react";
import load from "./1474.gif"

export default class Spinner extends Component {
    render() {

        return (

            <div className="text-center">

                <img src={load} alt="loading.." />
            </div>

        )

    }


}