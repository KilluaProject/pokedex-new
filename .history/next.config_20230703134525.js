/** @type {import('next').NextConfig} */
const nextConfig = {

    images:{
        remotePatterns: [
            {
                protocol: "https",
                hostname: "pokeapi.co"
            }
        ]
    }
}

module.exports = nextConfig
