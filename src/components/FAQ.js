import React from 'react';
import './MasterComponentsCss.css';

const FAQ = () => {
    return (
        <div className='blogs'>
            <div className="inner-blogs">
                <div className="single-blog">
                    <h2>Question-1: What is Cors ?</h2>
                    <p>CORS is shorthand for Cross-Origin Resource Sharing. It is a mechanism to allow or restrict requested resources on a web server depend on where the HTTP request was initiated. This policy is used to secure a certain web server from access by other website or domain</p>
                </div>
                <div className="single-blog">
                    <h2>Question-2: Why are you using Firebase? What other options do you have to implement Authentication?</h2>
                    <p>Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.Other User Authentication Platforms : STYTCH,Ory, Supabase,Okta,PingIdentity,Keycloak, Frontegg,Authress,Auth0,Firebase,Amazon Cognito,OneLogin</p>
                </div>
                <div className="single-blog">
                    <h2>Question-3: How does the private route work?</h2>
                    <p>The react private route component renders child components children if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
                </div>
                <div className="single-blog">
                    <h2>Question-4: what is node js and how does it work?</h2>
                    <p>Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.</p>
                </div>
            </div>
        </div>
    );
};

export default FAQ;