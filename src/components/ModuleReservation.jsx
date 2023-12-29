import { useEffect } from 'react';

export const ModuleReservation = () => {
    useEffect(() => {
        (function(t,h,e,l,i,s,R,E,S,A){
            t[i]={},t[i][s]=t[i][s]||function(){
                if(1===arguments.length){return t[i].a[arguments[0]]||null}
                else{t[i].a=t[i].a||[]; t[i].a[arguments[0]] = arguments[1];}
            },
                R=h.createElement(e),E=h.getElementsByTagName(e)[0];
            R.async=1;R.src=l;E.parentNode.insertBefore(R,E)
        })(window,document,"script","https://thelisresa.webcamp.fr/ilib/v4/?categories&favorites&onenight&searchengine&simpleblock","thelisresa","ilib");
        window.thelisresa.ilib('camping', 'devesset');
        window.thelisresa.ilib('language', 'fr');
    }, []);

    return (
        <div className="row">
            <div className="thelis-resa">
                <thr-search-engine></thr-search-engine>
            </div>
        </div>
    );
};
