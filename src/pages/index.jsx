import React from "react";
import { Helmet } from "react-helmet";
const Main = () => {
    return ( 
        <main className="hero">
            <Helmet>
            <meta property="og:site_name" content="Jardarr | Elder Edda"></meta>
            <meta property="og:title" content="Старшая Эдда" />
            <meta property="og:description" content="Памятник древнескандинавской поэзии" />
            <meta property="og:image" content="./../img/og-logo.jpg" />
            <meta property="og:type" content="website" />
            </Helmet>
            <div className="hero_text hero_background">
                <span
                >Hearing I ask <br />
                    from the holy races, From Heimdall's sons, <br />
                    both high and low; Thou wilt, Valfather, <br />
                    that well I relate Old tales I remember <br />
                    of men long ago.
                </span>
            <h1>&copy; Elder Edda</h1>
            </div>
        </main>
     );
}
 
export default Main;