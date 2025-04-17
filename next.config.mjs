import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {

    images:{
        dangerouslyAllowSVG: true,
        unoptimized: true,
        remotePatterns:[
            {
                protocol: 'https',
                hostname:'*'
            }
        ]
    },
    experimental: {
        ppr:"incremental",
    },
    devIndicators: {
        appIsrStatus: true,
        buildActivity: true,
        buildActivityPosition: 'bottom-right',
    }
};

export default nextConfig;
