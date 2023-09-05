/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, _options) => {
        config.module.rules.push({
            test: /\.(graphql|gql)/,
            exclude: /node_modules/,
            loader: "graphql-tag/loader"
        });

        return config;
    },
}

module.exports = nextConfig
