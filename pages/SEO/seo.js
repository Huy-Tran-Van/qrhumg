import React from "react";
import Head from "next/head";
import moment from "moment"

function SEO({ title, urlKey, image, content, keyword, timeStart, timeStop, area, type }) {

    return (
        <Head>
            <>
                <title>{title} | humgqr </title>
                <meta property="og:title" content={title} />
                <meta property="og:url" content={urlKey} />
                <meta property="og:image" content={image} />
                <meta property="og:description"
                    content={`Thời gian đăng ký: ${moment(timeStart).format("DD/MM/YYYY")} đến ${moment(timeStop).format("DD/MM/YYYY")}. Khu vực quảng cáo: ${area}. Loại xe: ${type}. ${content}`} />
                <meta property="og:image:width" content="640" />
                <meta property="og:image:height" content="480" />
                <meta property="og:image:height" content="480" />
                <meta name="keywords" content={keyword ?? ''} />
                <meta httpEquiv="content-language" content="vi" />
                <meta name="robots" content="noodp,index,follow" />
                <meta name="revisit-after" content="1 days" />
                <meta name="author" content="Drivadz" />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@hiep32128738" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={content} />
                <meta name="twitter:image" content={image} />

            </>
        </Head>
    );
}

export default SEO;
